#!/usr/bin/env python3
"""Notify IndexNow only after exact committed pages are visible in production.

The production origin, not a former hosting provider's build status, decides
readiness. This works with GitHub Pages and the approved future static host.
No timeout fallback sends stale pages. Candidate hosts can never be targets.
"""
import hashlib
import json
import os
from pathlib import PurePosixPath
import re
import subprocess
import time
from urllib import error, parse, request
import xml.etree.ElementTree as ET

HOST = 'gazillionindustries.com'
ORIGIN = 'https://' + HOST
KEY = 'cb94b8640633c2f4af2f60ee2eb171ba'
CF_BEACON_TOKEN = '37a6dbcfe7b54c24b8f2c39c21f1dcca'
CF_BEACON = re.compile(
    rb'<script type="module" src="https://static\.cloudflareinsights\.com/beacon\.min\.js/[A-Za-z0-9]+" '
    rb'integrity="sha512-[A-Za-z0-9+/=]+" data-cf-beacon=\'(\{[^<>\r\n]+\})\' '
    rb'crossorigin="anonymous"></script>\n')


def publication_matches(actual, expected):
    if actual == expected:
        return True
    # Existing Cloudflare Web Analytics injects this one edge-owned beacon into
    # browser-like responses. Preserve it in production; tolerate only the
    # verified site's exact provider/attribute contract immediately before body.
    matches = list(CF_BEACON.finditer(actual))
    if len(matches) != 1:
        return False
    match = matches[0]
    if not actual[match.end():].startswith(b'</body>'):
        return False
    try:
        config = json.loads(match[1])
    except (ValueError, UnicodeDecodeError):
        return False
    if (set(config) != {'version', 'token', 'r', 'spa'} or
            config.get('version') != '2024.11.0' or
            config.get('token') != CF_BEACON_TOKEN or
            config.get('r') != 1 or config.get('spa') != 2):
        return False
    return actual[:match.start()] + actual[match.end():] == expected


def git(*args):
    return subprocess.check_output(['git', *args])


def locs(xml):
    root = ET.fromstring(xml)
    return {node.text.strip() for node in root.findall('{*}url/{*}loc') if node.text}


def url_for(path):
    if path == 'index.html':
        return ORIGIN + '/'
    if path.endswith('/index.html'):
        return ORIGIN + '/' + path[:-len('index.html')]
    return ORIGIN + '/' + path


def source_path(url):
    value = parse.urlsplit(url)
    if value.scheme != 'https' or value.netloc != HOST or value.query or value.fragment:
        raise ValueError('Only canonical production URLs may be submitted')
    path = parse.unquote(value.path)
    if not path.startswith('/') or '..' in PurePosixPath(path).parts or '\\' in path:
        raise ValueError('Unsafe canonical path')
    return path.lstrip('/') + ('index.html' if path.endswith('/') else '')


def targets(current, before='', all_urls=False):
    if not re.fullmatch(r'[0-9a-f]{40}', current):
        raise ValueError('Exact current commit SHA required')
    now = locs(git('show', current + ':sitemap.xml'))
    was = set()
    if all_urls or not before or set(before) == {'0'}:
        urls = now | {ORIGIN + '/llms.txt'}
    else:
        if not re.fullmatch(r'[0-9a-f]{40}', before):
            raise ValueError('Invalid before commit SHA')
        was = locs(git('show', before + ':sitemap.xml'))
        changed = {url_for(path) for path in git('diff', '--name-only', before, current).decode().splitlines()}
        urls = {url for url in changed if url in now or url == ORIGIN + '/llms.txt'} | (now - was) | (was - now)
    result = {}
    for url in sorted(urls):
        path = source_path(url)
        # A page removed from the sitemap may still intentionally be public;
        # wait for its new committed bytes when it remains, or a real 404/410.
        exists = subprocess.run(['git', 'cat-file', '-e', current + ':' + path],
                                stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0
        if not exists and url in now:
            raise ValueError('Sitemap page has no committed source: ' + path)
        result[url] = git('show', current + ':' + path) if exists else None
    return result


def live_matches(url, expected):
    source_path(url)  # Validate before every network request.
    try:
        req = request.Request(url, headers={'Cache-Control': 'no-cache', 'User-Agent': 'Gazillion-IndexNow-Readiness/1.0'})
        with request.urlopen(req, timeout=15) as response:
            if response.status != 200 or response.geturl() != url or expected is None:
                return False
            return publication_matches(response.read(), expected)
    except error.HTTPError as exc:
        return expected is None and exc.code in (404, 410)
    except (error.URLError, TimeoutError, OSError):
        return False


def wait_for_production(expected, attempts=60, delay=15):
    remaining = dict(expected)
    for attempt in range(attempts):
        remaining = {url: body for url, body in remaining.items() if not live_matches(url, body)}
        if not remaining:
            return
        print(f'Waiting for committed production content: {len(remaining)} URLs; attempt {attempt + 1}/{attempts}', flush=True)
        if attempt + 1 < attempts:
            time.sleep(delay)
    raise RuntimeError('Production publication not confirmed; IndexNow was not notified')


def notify(urls):
    for url in urls:
        source_path(url)
    payload = {'host': HOST, 'key': KEY, 'keyLocation': ORIGIN + '/' + KEY + '.txt', 'urlList': sorted(urls)}
    req = request.Request('https://api.indexnow.org/indexnow', data=json.dumps(payload).encode(), method='POST',
                          headers={'Content-Type': 'application/json; charset=utf-8'})
    with request.urlopen(req, timeout=60) as response:
        if response.status not in (200, 202):
            raise RuntimeError('IndexNow refused: HTTP ' + str(response.status))
        print(f'IndexNow HTTP {response.status} for {len(urls)} verified production URLs')


def main():
    expected = targets(os.environ['GITHUB_SHA'], os.environ.get('BEFORE', ''), os.environ.get('ALL') == 'true')
    if not expected:
        print('No sitemap pages changed; nothing to send.')
        return
    wait_for_production(expected)
    notify(list(expected))


if __name__ == '__main__':
    main()
