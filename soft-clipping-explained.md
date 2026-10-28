# Soft clipping explained

> What a soft clipper does, how it differs from hard clipping and a limiter, and how to use one on 808s, drums and the master without wrecking them.

Source: https://gazillionindustries.com/soft-clipping-explained/  
Published 2026-09-13, updated 2026-10-28. By Gazillion Industries, who make BEEFY.

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

The ugly kind has a famous case. When Metallica's *Death Magnetic* came out in 2008, fans complained in public that the CD sounded distorted and crushed, and the version shipped inside a video game turned out to have more dynamic range than the album. That is clipping as a problem. Everything below is clipping as a tool.

## Where the idea came from

Clipping was a fault before it was a technique. Every amplifier has a voltage it cannot exceed, and when a signal asks for more the top of the wave is simply gone. Tube stages went over that edge gradually, and guitar players built decades of music on the result. From the 1980s some solid-state amplifiers carried a soft-clip circuit that began rounding the waveform about 10 dB below full output so an overload never produced a hard corner. The shape producers now dial in on purpose was a safety feature first.

Loudness turned it into a tool. The first digital brick-wall limiter with look-ahead was mass-produced in 1994, and the loudness war that followed was fought mostly with its descendants. Somewhere in there engineers noticed that a limiter working hard sounds like a limiter working hard, and some began letting the fastest peaks clip instead, in the analog gear or in the converters themselves, to keep more of the punch at the same loudness. Ian Shepherd put the trade plainly in 2013: hard digital clipping gives the most apparent loudness and the most distortion, soft clipping is smoother and keeps more punch, and limiting is the cleanest and loses the most. He uses soft clipping and limiting together when he masters.

The dedicated clipper plugin is a younger idea than the practice. Free clippers circulated for years; a $19.99 commercial one arrived in May 2015, and within a decade the question had changed from whether to clip to how hard.

## Why it makes things louder

Loudness lives in the average. Your ears judge it mostly by average level over time, and a soft clipper lowers the peaks a lot and the average only a little, so the gap between them (the crest factor) shrinks. Shave 3 dB off the peaks and you can raise the whole signal by nearly 3 dB before it touches the same ceiling.

## Why it doesn't pump

A limiter turns the volume down. A clipper reshapes the wave. A limiter lowers gain over time, with attack and release, and when it works hard you can hear that movement as breathing or dulled hits. A soft clipper has no memory: each sample's output depends only on that sample's input, so there is no gain movement to hear. What you get instead is distortion.

One costs movement, the other costs grit. Pick per job, and often use both, with the clipper catching the fastest spikes so the limiter has less to do.

## Why it beats a limiter on drums and 808s

Drums are mostly peak. A snare's crack lasts a few milliseconds and carries almost none of the note's energy, yet it sets the peak level for the whole bus. A limiter sees that spike, turns the gain down to catch it, and then has to release, and for the length of that release everything around the snare is quieter than it should be. Set the release fast enough to dodge that and the limiter starts distorting anyway, on the low end, where a slow waveform gets chopped mid-cycle. A clipper has no release. It rounds the crack and leaves the next sample alone.

808s are the opposite problem and the same answer. A sub note spends a lot of its cycle near its peak, so a limiter catching it pumps on every cycle, which reads as the bass going soft. A clipper trims the top of each cycle identically, which is distortion locked to the pitch: harmonics at two, three and four times the fundamental. For a low F at about 44 Hz that puts energy at roughly 87, 131 and 175 Hz. A phone speaker that cannot play 44 Hz can play those, and the ear rebuilds the missing fundamental from them. The limiter kept the sub pure and inaudible. The clipper made it audible and a little dirty. On a phone, dirty wins.

The exception is the master, where the limiter stays. A true-peak limiter is the only thing that guarantees the file never crosses the ceiling after encoding, so it sits last. The clipper's job there is to arrive before it and take the spikes the limiter would otherwise pump on. [Clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) sets both.

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

## How hard to push

The number depends on the source, and the ear decides before the meter does. These are our starting points, with the reason the mechanism gives for each, and the ear overrules them.

- **A single kick or snare:** 3 to 6 dB off the peak is common and often inaudible as distortion, because the clip lands on a few milliseconds of transient and nothing else is sounding in that channel. Past that the attack stops growing and the drum shortens.

- **An 808 or bass:** as far as the harmonics are wanted. This is the one place clipping is a tone decision rather than a level one, and 6 dB or more is normal when the goal is a growl that survives a phone. Listen on the small speaker, not the sub.

- **The drum bus:** 1 to 3 dB on the loudest hits. The kick drags everything else into the curve with it, so the hats and the room pay for every dB here. Clip the kick and snare individually first and the bus needs less.

- **The master:** about 1 dB, sometimes 2, on the tallest peaks only, ahead of a limiter. Any more and the whole arrangement is distorting on the downbeats.

Level-match every comparison. A clipper makes things louder, and louder sounds better for about four seconds, which is exactly long enough to approve a setting you will regret in the car.

## Where in the chain

As late as possible on the source, as early as possible on the master. On a kick or an 808 the clipper goes after EQ and saturation and before anything that adds space, so the reverb is not clipped with the drum. On a drum bus it goes after the bus compressor if there is one: the compressor evens out the hits, the clipper takes what is left of the peaks. On the master it goes before the limiter, with the limiter last and nothing after it. Tape or saturation on the master goes before the clipper. Each stage does less than the one before. That is the whole trick.

BEEFY opens with [SOFT CLIP](https://gazillionindustries.com/beefy.html) switched on and does the initial gain staging for you. The demo on the page is 28 seconds.

## What it costs

Every dB comes from somewhere. Push too far and snares lose their snap and kicks go blunt. On a bus, the loudest thing in the mix drags everything else into the curve with it (that's intermodulation), which is why cymbals roughen on kick hits. There is also aliasing, covered below.

## How to hear it before you see it

A meter tells you a clipper is working, not whether it is working well. Three things are audible before the red light.

**The transient stops growing.** Push the input and listen to the front of the kick rather than the body. Below the clip point, more input makes the attack louder. Above it, the body gets louder while the attack stays where it is. That moment is the clip point, and you can find it by ear in about ten seconds.

**The tail gets closer.** Because the peak stops rising and everything underneath keeps rising, the room and the ring come up relative to the hit. On a drum bus that reads as the kit sounding bigger, then, past a point, further away. That is the signal to stop.

**Cymbals go first.** High frequency content has the sharpest peaks relative to its energy, so hats and rides distort audibly before a kick does. A mix that gets harsh as it gets louder is almost always the top of the kit meeting the clipper.

## What actually gets clipped

Clipping is not applied evenly across a mix; it is applied to whatever is tallest at that instant, so a handful of sources absorb nearly all of it. Percussive transients are the obvious case. Sub bass is the less obvious one, because a low sine spends a long time near its peak, so it clips for a long time rather than an instant, and takes on a growl where a drum merely gets shorter. A clipper on the mix bus is a drum-and-bass processor whether or not you intended it to be. If you want the effect without that, clip the drum group and leave the mix bus alone.

## Aliasing, and why the oversampling switch exists

Clipping generates harmonics above the original signal. Some of those land above what the sample rate can carry, and rather than disappearing they fold back down into the audible range at frequencies unrelated to the music. That folding is aliasing, and it is the difference between a clipper that sounds solid and one that sounds brittle.

Oversampling runs the clipping stage at a multiple of the session rate so those harmonics have somewhere to go, then filters and comes back down. It matters least on a source with no top end to begin with, which is why a clipper can sound fine on a bass and harsh on a full kit at the same setting. More on the mechanism in [oversampling](https://gazillionindustries.com/oversampling/) and [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/).

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

### Why does a soft clipper make 808s louder on a phone?

Because it adds harmonics at whole-number multiples of the note. A phone speaker cannot play a 44 Hz fundamental, but it can play the 87, 131 and 175 Hz harmonics a clipper puts above it, and the ear hears the pitch from those. A limiter keeps the sine pure, and pure means silent on a small speaker.

### Should the clipper go before or after the compressor?

After, on a bus. The compressor evens the hits and the clipper takes the peaks that remain, so the clipper works less and the compressor never sees a clipped waveform. On a single drum with no compressor, the clipper goes after EQ and before any reverb.

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
