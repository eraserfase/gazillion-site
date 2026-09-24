# Why your mix sounds harsh after mastering

> A harsh master is usually the mix made louder. Five causes in the order they are usually the real one, a test for each, and why level-matching decides it.

Source: https://gazillionindustries.com/why-is-my-mix-harsh/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The mix sounded right at midnight. The master came back louder, and now something in the upper mids sits on your forehead.

A master that sounds harsh is usually the same mix with its problems made louder. In the order they turn out to be the real cause: a limiter pushed hard enough to turn transients into square edges, a wide boost in the 2-5 kHz region where hearing is most sensitive, several saturation stages stacked so odd harmonics pile up, aliasing from a plugin running without oversampling, and judging the master at a higher monitoring level than the reference. Work down that list in order, level-matching every comparison. Whatever still sounds harsh at matched loudness is the thing to fix.

## The short version

- **Limiter**: transients squaring off; take 2 dB off its input and listen again

- **2-5 kHz**: a wide boost where hearing is sharpest; cut a decibel and see what you miss

- **Stacked saturation**: four stages each adding harmonics; bypass them from the master down

- **Aliasing**: harmonics folding back as tuneless hash; render at a higher sample rate

- **Monitoring**: the master auditioned louder than the mix; keep one listening level

- **Always**: level-match before any comparison, or the louder file wins

## Level-match first, or everything below is guesswork

A master is louder than the mix it came from, and the louder of two files wins almost every quick comparison, even when the difference is too small to name. Fuller, wider, clearer: those words get used for a change in level far more often than for a change in sound, and harshness works the same way in reverse. Until both files play at the same loudness you cannot tell whether the master added something or only revealed it.

The method is dull and takes four minutes. Bounce the mix and the master, put both in an empty session, drop a gain utility on the louder one, and trim until the two read the same on a loudness meter over the same section. Then switch between them a few bars at a time, listening to one thing per pass: cymbals, then consonants, then the snare top. Anything that survives the switch is real. Anything that evaporates was loudness doing its usual trick.

The same rule applies inside the chain: every stage that adds level needs a matching trim before you judge it, which is the practical argument for [gain staging](https://gazillionindustries.com/gain-staging/).

## Is the limiter doing it?

Start here, because this is the answer most of the time. A limiter lowers gain when the signal crosses its threshold. Ask it for a decibel here and there and it stays invisible. Ask it for several decibels on every transient and two things happen at once. The front of each hit gets shortened, so the kick and the snare lose the part that reads as impact. And the gain movement gets fast enough to behave like distortion, since gain that changes within a cycle is a change in waveform shape. Push far enough and the loudest peaks approach a flat edge, the shape with the strongest high harmonics of any, landing right across the region your ears care most about.

**The test.** Take 2 dB off the limiter's input, or raise its threshold by the same amount, then turn your monitor up to match. You have given away 2 dB of loudness. If the harshness drops out of the picture entirely, the limiter was making it, and no EQ move further up the chain is going to fix that. If the harshness is still there, unchanged and level-matched, the limiter was only showing it to you.

**The second test.** Watch the gain reduction meter through a busy section. If it returns to zero between hits, the limiter is catching peaks. If it never returns, it has become a compressor holding the mix down, and the harshness is everything quiet being pulled up under the loud parts.

The usual fix is to give the limiter less to do rather than to swap it. A clipper ahead of it takes the fastest spikes off, trading a little steady distortion for a lot of gain movement. The mechanism is in [soft clipping explained](https://gazillionindustries.com/soft-clipping-explained/).

## Is there a wide boost between 2 and 5 kHz?

Human hearing is most sensitive roughly from 2 kHz to 5 kHz, partly because the ear canal resonates in that range and adds its own boost before the sound reaches anything that measures it. Consonants live there. So does the crack of a snare, the pick on a guitar, and the part of a distorted synth that makes it sound present rather than distant.

A broad boost there, from a presence shelf, an exciter, a wide bell labeled clarity, or a mastering curve copied off a video, sounds like detail for eight seconds and like fatigue over three minutes. Mastering sharpens it: limiting raises the average level of everything under the peaks, so a band boosted in the mix spends more of the track near the top of its range.

**The test.** Put a bell at about 3.5 kHz with a moderate width, pull it down a decibel or two, and level-match. If the track sounds calmer and nothing you needed went missing, the boost was not earning its place. Then find its owner: sweep a narrow boost through the region and listen for which element jumps first. Treat that element on its own channel, rather than making the whole master pay for it.

## How many things in your chain are distorting?

Count them honestly. A tape-style plugin on the drum bus. A saturator on the mix bus. Something called glue that also adds grit. A clipper. A limiter. Five stages, each adding harmonics to a signal that already carries the harmonics the stage before it added.

The arithmetic is unkind. Distortion applied to a distorted signal does not only add more of the same; it generates sum and difference tones between everything already present, and those land wherever they land. Stages producing odd harmonics stack audibly, because odd harmonics reinforce rather than blend, and a chain of them walks the waveform toward the same square-edged shape the limiter was making on its own.

**The test.** Bypass from the master downward, level-matching each time, and note what each stage is responsible for. Most chains have one stage doing real work and two more added on a different day for a reason nobody wrote down. The principle is the one in [gain staging](https://gazillionindustries.com/gain-staging/): drive one stage on purpose, rather than five a little bit by accident.

## Could it be aliasing?

Distortion creates harmonics above the frequency it started from. A session can represent frequencies only up to half its sample rate, and harmonics landing above that ceiling do not vanish. They fold back down into the audible range at frequencies with no relationship to the music, which sounds thin, metallic and slightly out of tune, right at the top where you are already listening hard.

This is why the same saturator can sound solid on a bass and brittle on a full mix. A source with no high frequency content has few harmonics high enough to fold. A mix with cymbals has plenty.

**The test.** Aliasing changes with sample rate; honest harmonics do not. Render a section at your normal rate, render it again with the session higher, level-match, and listen to the hats. If the higher-rate version is cleaner up top, something in the chain is aliasing and the oversampling switch on that plugin is the fix. Full mechanism in [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/).

## Are you listening louder than you were?

Your ears do not have one frequency response. They have a family of them, one per listening level. Play anything louder and the low end and the top come forward relative to the middle, and the band that was already most sensitive gets more so. A master auditioned louder than the mix is being judged by a different set of ears.

The habit that fixes it costs nothing. Pick one monitoring level for decisions and mark it on the controller. Check the master there, then quiet, then once loud and briefly. A master that sounds fine quiet and harsh loud points at the 2-5 kHz region or the limiter, since both grow with level. One that sounds harsh even at a whisper has something worse further back.

## Where harshness actually lives

Once the diagnosis points at the mix, the source is usually one of five things, each with its own address.

- **Sibilance.** Vocal esses, roughly 5 kHz to 9 kHz. Compression and limiting both raise it, so a vocal that sat fine in the mix can spit after mastering.

- **Snare crack.** Around 3 kHz to 4 kHz, sitting in the most sensitive band and repeating twice a bar for the whole song.

- **Cymbal wash.** High frequency content has the sharpest peaks relative to its energy, so hats and rides distort first under anything catching peaks.

- **Distorted mids.** Guitars and aggressive synths push a lot of energy through 2 kHz to 4 kHz, and two of them push twice as much.

- **The room.** A small untreated room flatters the top end, which produces mixes too bright to survive anywhere else.

## A running order for the diagnosis

- Level-match the master against the mix. Confirm the harshness is real.

- Take 2 dB off the limiter, match again, and listen.

- Cut a decibel broadly around 3.5 kHz, match again, and listen.

- Bypass each distortion stage from the master down, one at a time.

- Render at a higher sample rate and compare the top end.

- Check the whole thing at one fixed monitoring level, and again quietly.

- Fix whatever you found on the channel that owns it, then master again.

Most sessions stop at step two or three. The later steps exist for the nights when the obvious answer turns out to be wrong.

## Questions people ask

### Why does my master sound harsher than my mix?

Mastering makes the mix louder, and loudness exposes whatever was already sitting in the 2-5 kHz region, while the limiter that created the loudness adds high harmonics of its own by shortening transients. Level-match the two files and switch. What remains is the master's doing; what disappears was level.

### How do I level match a master to a mix?

Bounce both, put them in one session, drop a gain plugin on the louder one, and trim until both read the same integrated loudness over the same section. Then compare in short passes. Without that trim the louder file wins, whatever it actually sounds like.

### What frequency is harshness?

Most often 2 kHz to 5 kHz, where hearing is most sensitive and where snare crack, consonants and distorted mids live. Sibilance sits higher, around 5 kHz to 9 kHz. Tuneless metallic harshness at the very top is usually aliasing rather than EQ.

### Is it the limiter or the EQ?

Test the limiter first, because it is more often the cause. Take 2 dB off its input, turn the monitor up by the same amount and listen. A large improvement for a small change in loudness points at the limiter. No change points at the mix, and at the 2-5 kHz region in particular.

### Does clipping before the limiter reduce harshness?

Often, yes. A clipper takes the fastest peaks off instantly, so the limiter has less gain movement to perform. Go gently, use oversampling if the clipper offers it, and level-match while you set it.

### Does oversampling fix harshness?

It fixes one kind: the tuneless metallic edge at the very top that comes from harmonics folding back down. It does nothing about a limiter working too hard or a wide presence boost, so run the other tests before assuming it is the answer.

### Should I master quieter?

Usually a little, yes. Streaming services turn loud masters down on playback, so the last couple of decibels of limiting often buy nothing and cost transients. Make a quieter version, level-match the two, and pick the one you prefer when neither has the advantage.

## Stock plugins that do this

- **FL Studio**: Fruity Parametric EQ 2, Fruity Balance to match level

- **Ableton Live**: EQ Eight, Utility for the trim

- **Logic Pro**: Channel EQ, Gain, Loudness Meter

## What BEEFY does about it

BEEFY is our saturation and loudness plugin, and the part that matters here is that it is one stage rather than three. **SOFT CLIP** opens switched on and rounds the peaks instead of holding a ceiling over them, so a limiter further down has less to do and less reason to lunge. **BEEF** adds the weight people go hunting for with a stack of separate boxes, which is the stack that makes the harshness.

Level-match it against bypass while you set it, the same as everything else on this page. [BEEFY](https://gazillionindustries.com/beefy.html) is $19.

The demo on the [BEEFY page](https://gazillionindustries.com/beefy.html) is 28 seconds.

Same mix, same master, the monitor back where it was at midnight. The loud version stops winning arguments once both files play at the same level.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
