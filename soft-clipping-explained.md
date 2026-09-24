# Soft clipping explained

> What a soft clipper does, how it differs from hard clipping and a limiter, and how to use one on 808s, drums and the master without wrecking them.

Source: https://gazillionindustries.com/soft-clipping-explained/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

A lot of loud music gets in through a door with a bouncer on it. Most of the sound walks past untouched. The few peaks that try to shove their way in get turned around, and nobody on the floor notices.

Soft clipping is distortion used on purpose. A soft clipper leaves quieter signal nearly untouched and rounds off anything that pushes past its threshold on a curve, where hard clipping chops it flat. It works instantly, with no attack or release, so it doesn't pump. Lower peaks let you raise the overall level at the same ceiling, and the rounding adds harmonics, which is where the grit and the extra presence come from.

## The short version

- **What**: instant, curved rounding of the loudest peaks

- **Why**: lower peaks, more level, added harmonics

- **vs hard clip**: a curve instead of a flat top, so less harsh

- **vs limiter**: no attack or release; distorts instead of turning down

- **Where**: 808s, kick and snare, the drum bus, ahead of a limiter

- **Watch**: blunt transients, gritty cymbals, aliasing

**SOFT CLIP as the out stage.** BEEF 62, JUICE +2.0. The clipper rounds the peak instead of holding a ceiling over it.

**LIMIT as the out stage.** Identical settings otherwise. The choice is which one catches the peak, and they do not sound the same.

## Hard clipping and soft clipping

Clipping is a shape. Push a signal past what a system can pass and the top of the waveform gets cut off. Hard clipping cuts it flat at the ceiling, which leaves a sharp corner. Sharp corners mean strong high harmonics, and at 0 dBFS on your output they mean the crackle everyone warns you about.

A soft clipper bends the waveform into the ceiling on a curve (a tanh shape is the classic), so the corner is rounded and the added harmonics fall away faster as they climb. Same idea, better manners.

The ugly kind has a famous case. When Metallica's *Death Magnetic* came out in 2008, fans complained in public that the CD sounded distorted and crushed. That is clipping as a problem. Everything below is clipping as a tool.

## Why it makes things louder

Loudness lives in the average. Your ears judge it mostly by average level over time, and a soft clipper lowers the peaks a lot and the average only a little, so the gap between them (the crest factor) shrinks. Shave 3 dB off the peaks and you can raise the whole signal by nearly 3 dB before it touches the same ceiling.

## Why it doesn't pump

A limiter turns the volume down. A clipper reshapes the wave. A limiter lowers gain over time, with attack and release, and when it works hard you can hear that movement as breathing or dulled hits. A soft clipper has no memory: each sample's output depends only on that sample's input, so there is no gain movement to hear. What you get instead is distortion.

One costs movement, the other costs grit. Pick per job, and often use both, with the clipper catching the fastest spikes so the limiter has less to do.

## Where to use a soft clipper

- **808s and bass:** harmonics above the sub, so the note survives small speakers. More in [how to make 808s hit harder](https://gazillionindustries.com/how-to-make-808s-hit-harder/).

- **Kick and snare:** shave the spike and raise the drum. More in [how to make drums hit harder](https://gazillionindustries.com/how-to-make-drums-hit-harder/).

- **The drum bus:** density, with a catch. The kick drives everything playing with it into the curve, so hats get gritty on each downbeat. The saturation side is in [how to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/).

- **The master:** ahead of a limiter, so the limiter works less. Go gently here; everything in the mix pays for it.

## How to set a soft clipper

- Insert it where you want peaks controlled: the 808, the kick, the drum bus.

- Set the output ceiling where the peaks should stop.

- Raise the input until the loudest peaks start to flatten audibly.

- Back off a dB or two.

- Level-match against bypass and listen to transients and cymbals, not just loudness.

Some clippers offer a knee or softness control; softer is smoother and gives up a little level. Input gain still decides more than anything else on the panel.

BEEFY opens with [SOFT CLIP](https://gazillionindustries.com/beefy.html) switched on and does the initial gain staging for you. The demo on the page is 28 seconds.

## What it costs

Every dB comes from somewhere. Push too far and snares lose their snap and kicks go blunt. On a bus, the loudest thing in the mix drags everything else into the curve with it (that's intermodulation), which is why cymbals roughen on kick hits.

There is also aliasing. The harmonics a clipper creates can land above what the sample rate can represent, and they fold back down as harsh, out-of-tune hash. If your clipper offers oversampling, turn it on for anything bright.

## How to hear it before you see it

A meter tells you a clipper is working. It does not tell you whether it is working well, and by the time a plugin shows red the decision has already been made. Three things are audible well before that.

**The transient stops growing.** Push the input and listen to the front of the kick rather than the body. Below the clip point, more input makes the attack louder. Above it, more input makes the body louder while the attack stays where it is. That moment is the clip point, and you can find it by ear in about ten seconds.

**The tail gets closer.** Because the peak stops rising and everything underneath keeps rising, the room and the ring come up relative to the hit. On a drum bus that reads as the kit sounding bigger. Past a certain point it reads as the kit sounding further away, and that is usually the signal to stop.

**Cymbals go first.** High frequency content has the sharpest peaks relative to its energy, so hats and rides distort audibly before a kick does. If a mix is getting harsh as it gets louder, it is almost always the top of the kit meeting the clipper rather than anything wrong with the EQ.

## What actually gets clipped

Clipping is not applied evenly across a mix; it is applied to whatever is tallest at that instant. That means a handful of sources absorb nearly all of it.

Percussive transients are the obvious case: a kick, a snare, a rimshot, anything with a fast attack. Sub bass is the less obvious one, because a low sine wave spends a lot of its cycle near its peak, so once it is clipping it is clipping for a long time rather than for an instant. That is why bass takes on a growl under a clipper while drums merely get shorter, and why a clipper on a full mix frequently changes the bass more than anything else on it.

The practical consequence is that a clipper on the mix bus is a drum-and-bass processor whether or not you intended it to be. If you want the effect without that, clip the drum group and leave the mix bus alone.

## Aliasing, and why the oversampling switch exists

Clipping generates harmonics above the original signal. Some of those land above what the sample rate can carry, and rather than disappearing they fold back down into the audible range at frequencies unrelated to the music. That folding is aliasing, and it is the difference between a clipper that sounds solid and one that sounds brittle.

Oversampling runs the clipping stage at a multiple of the session rate so those harmonics have somewhere to go, then filters and comes back down. It costs processing and it is worth it on anything with real high frequency content. It matters least on a source that has no top end to begin with, which is why a clipper can sound fine on a bass and harsh on a full kit at the same setting. More on the mechanism in [oversampling](https://gazillionindustries.com/oversampling/) and [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/).

## Questions people ask

### Should I put a soft clipper on my master?

You can. A common move is a soft clipper ahead of the limiter to catch the fastest peaks, so the limiter works less. Go gently: on a full mix, a dB or two of clipping shows up on transients and cymbals sooner than it would on a single drum.

### What is the difference between hard clipping and soft clipping?

Hard clipping flattens anything over the ceiling with a sharp corner, which adds strong, harsh high harmonics. Soft clipping bends the peak into the ceiling on a curve, so the distortion is smoother and less of it lands up high.

### Is a soft clipper a limiter?

No. Both control peaks, but a limiter turns the gain down over time with attack and release, while a soft clipper reshapes each sample instantly and adds distortion instead of gain movement. They are often used together.

### How much clipping is too much?

When the attack stops being the loudest part of the hit. Below that you are shortening peaks; above it you are changing what the drum is. On a mix bus, a few decibels of reduction on the loudest hits is a lot, and it sounds like more once the whole arrangement is playing.

### Does clipping damage the audio?

It changes it permanently and on purpose. That is the job. What people mean by damage is usually aliasing, which is avoidable with oversampling, or an over-clipped low end, which is avoidable by clipping the drum group rather than the whole mix.

### Is a soft clipper the same as saturation?

They overlap and are not the same. Saturation shapes the whole signal continuously; a clipper mostly leaves the signal alone until it reaches the ceiling and then acts. That is why a clipper can take peaks off without obviously coloring what is underneath.

## Stock plugins that do this

- **FL Studio**: Fruity Soft Clipper

- **Ableton Live**: Saturator, with soft clip on

## What BEEFY's SOFT CLIP does

BEEFY is our saturation and loudness plugin, and SOFT CLIP is on when it opens. It brings rounded, fuzzy edges to the loudest parts, adds harmonics above the low end, and takes care of the initial gain staging, so you are not hunting for an input level. **BEEF** adds weight, density and loudness on top.

Prefer the peaks held without the fuzz? Switch to **LIMIT**, or turn both buttons off and push it yourself. LIMIT and SOFT CLIP are separate choices, and the input and output clip lights keep an eye on either end.

Nobody hires a bouncer to make the night. The job is making sure nothing ends it early.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
