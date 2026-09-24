# How to make 808s hit harder

> Why 808s vanish on phones and laptops, and what makes them hit harder: tuning, the kick, the envelope, saturation, soft clipping and a mono low end.

Source: https://gazillionindustries.com/how-to-make-808s-hit-harder/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The beat that rattled your desk at 2 a.m. is playing out of a phone on the bus, and the 808 is gone. The hats still hiss, the melody still floats, and the note you spent an hour tuning has become a rumor.

An 808 hits harder when small speakers get something to play and the low end stops fighting itself. Tune it to the song, keep it out of the kick's way, give each note a clean start and a real ending, add harmonics with saturation or soft clipping, keep the low end mono, and judge it at matched loudness. Turning it up does almost none of that.

## The short version

- **Tune**: to the key of the track

- **Kick**: give each its own moment

- **Envelope**: a clear start, a tail that ends before the next note

- **Harmonics**: saturation or soft clipping on the 808 channel

- **Low end**: mono, with rumble cleared underneath

- **A/B**: at matched loudness

**BEEF at 96.** Where the plug-in stops being polite. Most settings that sound right in solo are about half this.

## Why 808s disappear on phones

The fundamental is the problem. Tune an 808 to a low F and the note sits near 44 Hz. Most phone and laptop speakers give back very little below a couple hundred hertz (exactly where they quit varies by model), and a clean, sine-like 808 is almost nothing but that one low frequency. Nothing is left for the speaker to play.

Your ear will rebuild a missing low note if you hand it the evidence: the harmonics stacked at whole-number multiples above it, so 87, 131, 175 and 218 Hz for that F. Kanye West put 808s in an album title in 2008, and the drum hasn't needed an introduction since. It still needs harmonics. **The sub is for the car. The harmonics are for everyone else.**

## Tune it first

Every 808 has a pitch, whether you picked it or not. Out of key, it grinds against the chords and the kick, and no plugin downstream can fix a wrong note. Tune the sample to the root of the song, move it with the bassline when the chords change, and check it with a tuner. A phone speaker is the last place to judge pitch, because it barely plays the note.

## The kick and the 808

Two sounds can't own the same 50 Hz. When the kick and the 808 land together their low ends add up: some hits reinforce, some cancel, and which one you get depends on the pitch and phase of each. The punch you wanted comes out soft. Three ways out:

- a short, clicky kick that is gone before the 808 swells

- sidechain the 808 so it ducks a few dB under the kick

- drop the kick where they collide and let the 808's attack be the hit

Each one costs something. Ducking steals sustain, and a shorter kick has less chest. Pick the loss you can live with.

## Shape the envelope

Punch lives in the first few milliseconds. A slow fade-in blurs the start of the note, while a clean attack, or a short pitch drop at the top, gives the ear something to grab. At the other end, a tail that runs into the next note smears the pocket. Set the decay so each note ends before the next one starts, unless the slide is the whole point.

## Saturation adds what small speakers can play

This is the big one. Saturation bends the waveform, and a bent waveform carries harmonics above the fundamental, right in the range a phone can reproduce. Symmetric saturation adds mostly odd harmonics; asymmetric adds even ones too. A little puts weight on a laptop. A lot turns a clean note into a growl.

Put it on the 808 channel itself rather than the master, so the kick and everything else stay out of it. If the sub thins out as you push, split the job: drive a copy, high-pass it, and keep the clean sub underneath. Grit up top, weight down low.

## Soft clipping, and louder without clipping

The clipping everyone warns you about happens at the output: the signal goes over 0 dBFS, the peaks get chopped flat, and it crackles. A soft clipper rounds the loudest peaks on a curve before they get there. It has no attack or release (it reshapes the wave sample by sample), so it doesn't pump. With the peaks lower, the whole 808 can come up at the same ceiling, and the rounding adds harmonics while it works.

- Put the clipper on the 808 channel, after tuning and the envelope.

- Raise the input until you hear the edge or see the clip light.

- Back off a dB or two.

- Match the output to the bypassed level and compare.

How hard you drive it decides the result more than any setting on it. Past the edge, the note goes blunt and anything sharing the channel comes out chewed.

Or put [BEEFY](https://gazillionindustries.com/beefy.html) on the 808: one big knob and a SOFT CLIP button. The demo on the page is 28 seconds.

## Keep the low end mono

Width and sub bass don't share. Stereo wideners and chorus on a sub sound huge in headphones, then parts of the note cancel the moment the mix is summed to mono, which plenty of club systems and small speakers do. Keep everything down low in mono. If you want a wide 808, widen only the driven upper layer and leave the sub alone.

## Clear space underneath

Rumble is rent you pay for nothing. A high-pass around 20–30 Hz removes energy that eats headroom without adding anything most systems can play. Then make room in whatever else lives in the low mids (keys, pads, guitars) so the 808's harmonics aren't elbowing through a crowd.

## Judge it at the same loudness

Louder always wins the first five seconds. Saturation and clipping both raise level, so **match the processed and bypassed 808 before you decide anything.** If it only hit harder because it got louder, the fader was the fix.

## Where the harmonics land, note by note

A sub that is close to a sine has almost nothing above its fundamental, and a phone speaker cannot reproduce the fundamental at all. What survives on a small speaker is the harmonics, so it matters which ones you are adding and where they land. The series is the fundamental times two, three, four and five:

- **E1 — 41.2 Hz**: 2× 82 · 3× 124 · 4× 165 · 5× 206 Hz — first harmonic above 200 Hz is the 5th

- **F1 — 43.6 Hz**: 2× 87 · 3× 131 · 4× 175 · 5× 218 Hz — first harmonic above 200 Hz is the 5th

- **F#1 — 46.2 Hz**: 2× 92 · 3× 139 · 4× 185 · 5× 231 Hz — first harmonic above 200 Hz is the 5th

- **G1 — 49.0 Hz**: 2× 98 · 3× 147 · 4× 196 · 5× 245 Hz — first harmonic above 200 Hz is the 5th

- **A1 — 55.0 Hz**: 2× 110 · 3× 165 · 4× 220 · 5× 275 Hz — first harmonic above 200 Hz is the 4th

- **C2 — 65.4 Hz**: 2× 131 · 3× 196 · 4× 262 · 5× 327 Hz — first harmonic above 200 Hz is the 4th

The last column is the one to read. A small speaker rolls off steeply below roughly 200 Hz, so the first harmonic clearing that line is the lowest thing the listener will actually hear. Write low enough and it is the fourth or fifth, which is why the note choice changes how much saturation the part needs.

## Questions people ask

### Why do my 808s sound weak?

Usually because the note is almost all sub, which phone and laptop speakers barely play, or because it is out of key or colliding with the kick. Tune it, give the kick its own moment, and add harmonics with saturation or soft clipping so small speakers have something to play.

### How do I make my 808s punchy?

Punch lives at the start of the note. Use a clean attack or a short pitch drop at the top, set the decay so each note ends before the next one, and keep the kick from landing on top of it.

### How do I tune an 808?

Find the root note of the song, put a tuner on the 808 channel, and adjust the sample's pitch until the tuner reads that note. Then follow the bassline as the chords move. Check it on headphones or monitors, not a phone.

### Is an 808 just a sine wave?

A clean one is close: a low, mostly pure tone with a quick pitch drop at the start. That purity is why it vanishes on small speakers, and why so many producers distort it.

## Stock plugins that do this

- **FL Studio**: Fruity Soft Clipper

- **Ableton Live**: Saturator, with soft clip on

- **Logic Pro**: ChromaGlow (Logic Pro 11 and later)

## What BEEFY does

BEEFY is our saturation and loudness plugin, and it covers the harmonics and clipping steps above in one window (tuning and the kick are still on you).

**BEEF** is the main event: more weight, density and loudness as you turn it up. **SOFT CLIP** opens switched on. It adds harmonics above the low end so there is more to hear than sub, and takes care of the initial gain staging, so there is no input level to hunt for. **JUICE** sets the level going in, **COOK** moves the tone from rounder toward brighter and more bitten, and **LIMIT** keeps output peaks in check if you would rather have that. The cow on the panel reacts to the audio.

Now play the beat on the phone again. On the bus the 808 still won't shake anything. You can hear it, though, and on that speaker that is as hard as a note gets.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
