# DRUGS — free drum bus compressor for Mac and Windows

> A free drum bus compressor for breaks and the drum bus. Denser drums while the peak level barely moves. One knob, VST3 and AU, Mac and Windows.

Source: https://gazillionindustries.com/drugs.html  
By Gazillion Industries. Nothing here emulates, models or clones any hardware; the plug-ins are tuned by ear.

---


## At a glance

- **Operating systems**: macOS 10.13 or later, Windows 10 or later
- **Version**: 1.0.3
- **Price**: Free

> “Great little freebie! My drums gone CHUNKY!”

Gumroad review

> “real good. i used drugs, and they made things better. beat out my current mastering chain, shit slaps. beefy on drums and this on the master is real shit. just get em.”

> “need this in my ableton master chain”

TVPES Media · Gumroad review

> “GOAT!!!!!!!!!!”

ぶにゃわーくす · Gumroad review

> “ts hittin crazy”

prettyboycanpo · Gumroad review

> “For crafting retro-style drums or Lo-Fi background textures, DRUGS is incredibly efficient at getting the job done. The interface design is stunning, and using it is pure joy.”

> “Increda punchy. Sorry, Ma, Drugs is cool!”

MAKE EVERYTHING BETTER

one knob, impossible sauce.

you already know the sound.run a break through it and turn it up. instant gratification.

> “…it is the quickest win we have had on a drum bus this year.”

streamingcalculator.com · review

> “A compressor with simple controls that adds thickness, density and presence to drums.”

> “It keeps the attack while bringing out the air and room-sound feel behind the drums.”

project of napskint · free-plugin roundup, Japan · 無料プラグイン

> “Getting compression with an attack this fast from a free plugin is pretty welcome.”

makou’s peephole · review, Japan · translated from Japanese

> “This plug-in is a no frills glue compressor. It does a good job.”

@winowilly · bouncing Winovision Vol 1

> “This compressor sounds great.”

@darealdibiase · testing on drum breaks

> “You took the mechanics of it, and didn’t try to add artifacts — there’s enough on the records. The simplicity allows you to use your ears more, instead of wondering if shit is dialed right or not.”

@spewcataclism

> “It has literally made me put a 80$ plugin on the back burner for drugs. It will happily be on my drum busses for now on.”

Prof.Logik

> “Kind of expected a gimmick to be honest but I’m a fan, really like this plugin.”

Ryan D.

> “It builds a distinct compression style for drum kits so quickly, making it a breeze to apply to vintage beat production. For a free plugin, it performs absolutely flawlessly.”

朱尔丹

there will be more of these

free · or name your own price

## What DRUGS is

DRUGS is a bus compressor with one macro control, called DOSE. Turning DOSE up makes a drum bus denser rather than louder — peak level barely moves across the whole range of the knob. It reshapes a break instead of levelling it, and brings the room up underneath the hits.

## The vinyl sim sound

Vinyl sim is shorthand for a particular kind of squash — dense, slightly crushed drums with the room pushed up under the hits, the way a break sounds once it has been through a sampler. DRUGS goes at that sound directly, on the drum bus, with one knob and no setup.

## How it works

- DOSE moves the transfer curve, the knee, the attack and the release together, the way a single hardware macro would.
- There is no threshold and no ratio, because there is no threshold in the model. The gain law is a lookup table, so the local ratio changes continuously with input level.
- Release is adaptive and has no user control. It reacts to the transient in front of it: a hit gets the shorter time, so gain recovers inside the gap where pump is audible, and sustained material gets the longer one, so it holds still rather than breathing.
- Auto-makeup is applied after the gain cell, so setting level cannot disturb the dynamics.
- MIX is dry/wet with zero latency anywhere in the path, so the dry signal stays sample-aligned with the wet one. Parallel compression does not comb-filter at any setting.
- GAIN adds 5 dB after the compressor and before LIMIT, so the bus comes out louder as well as denser. GAIN and LIMIT are both on when DRUGS opens.
- LIMIT is a zero-latency soft ceiling at −0.3 dBFS on the output, with a clip indicator. It attenuates only, and is transparent below about −0.9 dBFS.

## Formats and compatibility

DRUGS installs as an Audio Unit (AU) and a VST plug-in (VST3), plus a standalone application. It runs in Logic Pro, Ableton Live, Reaper, Cubase, Studio One, Bitwig, FL Studio and GarageBand.

macOS 10.13 or later, universal binary for both Apple Silicon and Intel.

Windows 10 or later, 64-bit, as a VST3.

Zero samples of latency on either. No internet connection required after activation.

## Price

Free, or name your own price.

---

All Gazillion plug-ins: https://gazillionindustries.com/  
Articles, as markdown: https://gazillionindustries.com/llms.txt
