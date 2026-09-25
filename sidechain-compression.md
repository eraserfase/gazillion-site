# Sidechain compression

> Sidechain compression explained: how to duck the bass under the kick, the settings to use, when a volume envelope is better, and what it hides rather than fixes.

Source: https://gazillionindustries.com/sidechain-compression/  
Published 2026-09-20, updated 2026-09-25. By Gazillion Industries, who make DRUGS.

---

You know the sound before you know the name. The whole track breathing in and out around a kick you can barely hear, the bass ducking out of the way four times a bar like it has been trained.

Sidechain compression is compression triggered by a different signal from the one being compressed. A compressor on the bass listens to the kick and turns the bass down every time the kick hits, so the two stop fighting for the same space. Set it up by routing the trigger track to the compressor's sidechain input, then use a fast attack, a release timed to the tempo, and enough gain reduction to hear the gap: 3 to 6 dB for a mix fix, 10 dB or more when the pumping is the point.

## The short version

- **What**: one track's compressor listens to another track

- **Classic use**: kick triggers the bass, so they take turns

- **Attack**: fast, 0–5 ms, so the duck happens on the hit

- **Release**: timed to the tempo: recover before the next kick

- **Amount**: 3–6 dB to fix a clash, 10 dB+ to hear it pump

- **Alternative**: a volume envelope, if you want the shape exactly

**DOSE 12.** Light work: the reduction line hardly leaves the top. A duck you are meant to hear looks nothing like this.

**DOSE 88.** Same source. The line dives on each hit and takes the whole bar to come back — that recovery is the pump.

## Why it works

Two sounds in the same frequency range at the same moment do not add up to twice as much; they add up to mud, and whichever one you turn up wins at the expense of the other. A kick and a sub bass are the standard example because both live below 120 Hz and both need to be felt rather than heard. Ducking the bass for the length of the kick gives the kick an empty room to arrive in, and the ear fills in the bass note it did not quite hear.

The second reason is rhythmic. A track that dips and recovers in time with the kick has a pulse whether or not you can hear the kick at all, which is why the technique took over dance music once producers noticed it was a groove rather than a repair.

Both reasons have a number under them. Two uncorrelated signals of equal level sum to 3 dB above either one alone, and two that line up in phase sum to 6 dB; neither is twice as loud, and both spend the same headroom. Loudness is an average rather than a reading — Image-Line's manual puts the integration window at 600 to 1000 ms, longer than a whole beat at most tempos. So a bass note that vanishes for 150 ms out of a 469 ms beat does not read as a missing note. It reads as the same note with a hole punched in it, and the hole is where the kick is standing.

## What the sidechain input actually is

Every compressor has two signal paths. The audio path runs through the gain cell and out to the mix. The detector path is a parallel tap that measures level and tells the gain cell how far to move. Normally both are fed from the same place, which is why a compressor turns itself down. A sidechain input breaks that tap and feeds the detector from somewhere else.

Nothing else changes. The trigger is measured, never heard: Ableton states in the Live manual that raising the sidechain Gain does not raise the source's volume in the mix, because the sidechain audio is only a trigger. No summing, no second path to the output, no phase relationship to manage — see [phase cancellation](https://gazillionindustries.com/phase-cancellation/) for what a technique that does add a second path costs you.

Two flavors of the same idea. An **internal** sidechain filters the detector without touching the audio, so the compressor listens to itself but only to part of itself; a de-esser is exactly that, a compressor whose detector hears 5 to 8 kHz and ignores the rest. An **external** sidechain, also called a key input, swaps the detector's source for another track. You often want both at once.

## How deep the duck goes, in one multiplication

Gain reduction is not a taste setting you chase by ear. It falls out of two numbers: how far past the detector's threshold the trigger goes, and what you divide that overshoot by. Reduction = (1 − 1 ÷ R) × overshoot, where R is the compression ratio. A kick pushing the detector 12 dB over, at 4:1, gives (1 − 0.25) × 12 = 9 dB of duck.

- **12 dB over at 2:1**: 6.0 dB of duck

- **12 dB over at 4:1**: 9.0 dB

- **12 dB over at 8:1**: 10.5 dB

- **12 dB over at 10:1**: 10.8 dB

- **12 dB over at 20:1**: 11.4 dB

Past 8:1 the column stops moving, which is why people set a sidechain compressor high and leave it there. Depth comes from the other number instead: drop the threshold 6 dB and the same kick is 18 dB over, so 4:1 now gives 13.5 dB rather than 9. One fader, half again as much movement. And because the overshoot depends on the trigger's own level, the depth of your duck is wired to the kick's fader — which is what a dedicated sidechain gain control is for.

## How to set it up

- Put a compressor on the track you want to duck, usually the bass.

- Set its sidechain or key input to listen to the trigger track, usually the kick.

- Set the ratio to 4:1 and the attack as fast as the compressor allows.

- Lower the threshold until the meter shows the gain reduction you want on every kick.

- Set the release so the bass is fully back before the next kick: at 120 bpm that is under 500 ms, and usually much less.

- Listen to the bass alone: it should dip and return smoothly, not stutter.

- If the trigger is a full drum loop rather than an isolated kick, low-pass the detector around 120 Hz so the hats and the snare stop triggering it.

- Switch on sidechain listen, if the compressor has it, and confirm you are hearing the kick and only the kick before you trust the meter.

- Set the depth with the plugin's own sidechain gain rather than the kick's mix fader, so a later balance move does not change the duck.

- Check the release again at the busiest bar, where a kick lands on an offbeat and the gap is half what you set it for.

If the trigger kick is not in the arrangement, put one on a muted track and use it anyway. That is the standard way of getting a pump with no audible kick.

[DRUGS](https://gazillionindustries.com/drugs.html) is our free one-knob drum bus compressor. It has no sidechain input, so this job belongs to a compressor that does; DRUGS is what goes on the drums afterward.

## Release: the number that decides whether it grooves

Release is a tempo calculation before it is a preference. The gain has to be home before the next trigger, and the gap between triggers is one division: 60000 divided by the tempo gives the quarter note in milliseconds. On four-on-the-floor material that quarter note is the whole budget.

- **90 bpm**: quarter 667 ms

- **100 bpm**: 600 ms

- **120 bpm**: 500 ms

- **128 bpm**: 469 ms

- **140 bpm**: 429 ms

- **174 bpm**: 345 ms

A release time is a time constant rather than a countdown. The gain climbs back along a curve, recovering about 63 percent of the reduction in one release time, 86 percent in two, 95 percent in three, so the useful question is how many of them fit inside the gap. Take 128 bpm and a 10 dB duck — a 469 ms gap — and read off what is left when the next kick lands.

- **100 ms release**: 4.7 time constants · 0.09 dB still down

- **150 ms**: 3.1 · 0.44 dB

- **200 ms**: 2.3 · 0.96 dB

- **250 ms**: 1.9 · 1.53 dB

- **400 ms**: 1.2 · 3.10 dB

- **600 ms**: 0.8 · 4.58 dB

The last two rows are the sound everybody complains about and nobody diagnoses. At 600 ms the bass never gets above 4.58 dB down, so the part you wrote at one level plays back at another, permanently, and the instinct is to turn the bass up — which deepens the duck, because the trigger relationship has not changed. Shorten the release instead. Start at a third of the gap. Under about 100 ms the recovery becomes an audible swell on every beat, which is the classic pump and exactly right when the pump is the arrangement.

## Attack, lookahead, and the duck that arrives late

The attack setting decides whether the hole is open when the kick walks through it. A compressor can only react to a signal that has already arrived, so even at zero milliseconds the detector needs part of a cycle before the gain moves. On a kick with a 50 Hz fundamental one cycle is 1 ÷ 50 = 20 ms, and the first two or three milliseconds of the hit — the click that carries its definition — are through the mix before anything has ducked.

That is what lookahead is for. The plugin delays its own audio path so the detector sees the trigger early. Ableton's Compressor offers three lookahead settings, zero, one and ten milliseconds, and ten milliseconds at 44.1 kHz is 441 samples of added latency. Your DAW compensates on playback and cannot compensate for what you hear while playing a part in, so switch it off for tracking.

Late ducking has a specific sound: the front of the kick thickens, as though a second quieter kick were flammed a few milliseconds behind it. One millisecond of lookahead usually clears it. Slower attacks are a real choice rather than a mistake, though — 10 to 20 ms lets the attack of the bass note through before the duck closes, which keeps a plucked part sounding played. [What is a transient](https://gazillionindustries.com/what-is-a-transient/) covers what you are protecting and how long it lasts.

## When to use a volume envelope instead

A compressor gives you a curve it chooses. An automation lane or a volume-shaping plugin gives you the curve you draw, repeated exactly, with no dependence on how loud the kick happens to be in that bar. For tightly programmed electronic music that control is usually worth more than the compressor's responsiveness. For live playing, where the trigger varies, the compressor is better, because it reacts.

The difference lands in three places. Depth: an envelope's depth is a number you typed, the same in the sparse intro and the loud chorus. Shape: it can hold the bottom flat for 40 ms and return over 160, which no attack-and-release pair can do. Timing: it can start the duck before the beat, with no lookahead and no latency. What it cannot do is respond — it fires on the quarter notes where no kick was played and on the bar where the drummer laid back. The usual answer is both: envelopes on programmed parts, a key input on anything a human played.

## Where the ducker goes in the chain

Last on the channel, after the EQ and the saturation and everything else that changes level. The reason is arithmetic rather than tradition: the depth you set is only the depth that reaches the mix if nothing downstream touches it.

Put a waveshaper after the ducker and the signal feeding it swings 10 dB every beat, so the harmonics it generates come and go at the kick rate. The level duck survives, but you have added a tremolo on the distortion, and on a bass part that reads as a lisp. [How to saturate drums](https://gazillionindustries.com/how-to-saturate-drums/) and [drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) go further into what order costs you.

One exception. If the bass has its own leveling compressor, that one goes before the ducker: its job is to even out the performance, so it should be looking at the performance rather than at a signal with holes in it. Two compressors in series with different jobs is normal; two in series both pulling 8 dB is audible from the hallway.

## Five failure modes, and what each one sounds like

**The bass never comes back.** The part sounds thin and quieter than you wrote it, and turning it up makes it worse. The release is longer than the gap, so the gain is still climbing when the next trigger arrives: at 128 bpm with a 300 ms release, 2.1 dB of a 10 dB duck is permanent. Shorten the release to a third of the quarter note.

**Buzz on the sub.** A low note grows a rasp that is not in the source and the meter twitches too fast to read. A 40 Hz note has a period of 1 ÷ 40 = 25 ms, so a release under 25 ms lets the detector track individual cycles and the gain cell becomes an amplitude modulator running at the note's own frequency. Image-Line's manual warns about it in one line: set the release too low and the sound may become distorted. Keep it above roughly 30 ms.

**The duck arrives late.** The front of the kick thickens and you find yourself adding click with an EQ that was never the problem. Add one millisecond of lookahead, or take the attack to zero.

**The depth drifts.** The duck was right on Tuesday and too deep on Thursday, and the only thing you moved was the kick fader. The trigger's level sets the overshoot, so the compressor is reading your mix decisions. Move the depth onto the plugin's sidechain gain.

**The wrong things are triggering.** The bass dips on hats, or a ghost snare opens a hole in the middle of a note. The detector is hearing the whole drum bus. Low-pass it, which is Ableton's own recommendation for pulling a kick out of a mixed drum track, or build a muted trigger kick and key from that.

## Everything else worth ducking

Kick and bass is the famous pairing and about a third of the use.

**Reverb and delay returns under the dry vocal.** A compressor on the return, keyed from the dry vocal, closes the space while the words are happening and opens it in the gaps. Three to five decibels is plenty, and it buys a long tail with none of the smear — the highest-value use of the technique on a rap vocal. **Pads, synths and a music bed under a voiceover** take the same routing, usually deeper, sometimes with a longer release because the swell is the point; Ableton's manual gives the voiceover version as its textbook case, compressor on the music and keyed from the narration.

**A sample bus under the snare,** when the backbeat is disappearing into a loop: 2 to 4 dB keyed from the snare puts it back without an EQ notch. For a narrower version of all of it, a multiband or dynamic EQ with a key input ducks only the band that clashes, so the bass keeps its 800 Hz growl while its 60 Hz gets out of the way. [Multiband compression](https://gazillionindustries.com/multiband-compression/) is the long version, and on a kick-and-bass problem it is frequently the better tool.

## Sidechain compression in your DAW

The routing has different names everywhere, and two of the differences cause real mistakes.

**Ableton Live.** Unfold the Compressor with the toggle in its title bar and the sidechain section appears in two halves. On the left, the Sidechain button and a source chooser pick any internal routing point as the trigger; a Gain knob sets its level into the detector and a Dry/Wet knob blends the external trigger against the compressor's own input, so 100 percent is a pure external key. On the right is the sidechain EQ, which filters what the detector hears. Two things catch people: the headphones button between the halves is sidechain listen, the fastest way to find out what is actually driving the compressor, and automatic Makeup is unavailable while an external sidechain is engaged. Ableton's own advice for keying off a mixed drum track is to enable the sidechain EQ, choose the low-pass, and tune Frequency and Q until only the kick gets through. More at [drum bus compression in Ableton Live](https://gazillionindustries.com/drum-bus-compression-in-ableton-live/).

**FL Studio.** The routing happens in the Mixer before the plugin knows anything about it, which is why the SIDECHAIN selector looks broken on a fresh project: Image-Line's manual states that sidechain options are unavailable until at least one sidechain track has been set in the Mixer. Select the source track, right-click the Track Send switch on the destination track, and choose "Sidechain to this track" — or "Sidechain to this track only" if you want the trigger muted, which also deselects that track's send to Master. Then right-click the SIDECHAIN selector on Fruity Limiter's COMP tab and pick the mixer track. One extra control matters there: SUSTAIN sets how long the input is averaged, from 0 to 1000 ms, and stops the envelope releasing too early, so it interacts with your release rather than sitting beside it.

**Everywhere else.** Find four things before you touch a dial: whether the plugin exposes a key input at all, whether the host needs a send or a bus created first, whether the detector has its own filter, and whether there is a listen button. Every number in this guide lands in the same place on any compressor that has them.

## How to check the duck in your own session

The gain reduction meter is a summary, and it settles slower than the gain cell moves. Five minutes of file work settles the argument for good.

- Bounce four bars of the soloed bass twice, once with the ducker active and once bypassed.

- Open both in an audio editor and zoom to a single kick position on the ducked file.

- Measure the peak inside the duck and the peak halfway to the next kick; the difference in decibels is your real depth, usually less than the meter claimed.

- Invert one bounce against the other and play what is left.

- Measure integrated loudness on both bounces to see what the technique cost the part.

- Play the full mix on a phone speaker, where the kick's fundamental is missing entirely.

- Check it in mono, because a duck that works in stereo can expose a bass that does not.

Step four is the one worth repeating. That difference signal is the duck on its own: if it has accents that are not in the kick pattern, something else is triggering, and if it is a steady wash with no accents at all, the release is too long. [Crest factor](https://gazillionindustries.com/crest-factor/) before and after puts a single number on the same change. [How to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) covers step six, and [mono compatibility](https://gazillionindustries.com/mono-compatibility/) covers step seven.

## Where it costs you

Heavy sidechaining removes energy from your track four times a bar, and a mix that pumps hard feels exciting for thirty seconds and tiring by the second chorus. It also hides problems rather than fixing them: if the kick and bass are clashing because they occupy the same two octaves, ducking papers over an arrangement decision. Tuning the kick and the bass note to each other, or moving one of them in pitch, often removes the need entirely. See [how to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) for that conversation.

The energy loss is measurable and larger than people expect. Integrate an exponential recovery across one 469 ms beat at 128 bpm and you get the average level the part is really running at, rather than the number on the depth control.

- **3 dB duck, 150 ms release**: 0.85 dB of average level gone

- **6 dB, 150 ms**: 1.59 dB

- **10 dB, 150 ms**: 2.44 dB

- **6 dB, 250 ms**: 2.49 dB

- **10 dB, 250 ms**: 3.95 dB

Two and a half decibels is a lot of low end to give away, and it is why a heavily sidechained mix so often needs the bass written louder than feels right in solo. Budget for it rather than discovering it at the master. [How to make bass fatter](https://gazillionindustries.com/how-to-make-bass-fatter/) is the other half of that trade, and [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/) is where the argument finishes.

## Questions people ask

### What should be sidechained to what?

Usually the bass to the kick. After that: pads and synths to the kick for a pumping feel, reverb returns to the dry vocal so the space opens up between words, and a busy sample bus to the snare if the backbeat is disappearing.

### Why does sidechaining sound so good?

Because it turns a frequency clash into a rhythm. The ear reads the regular dip and recovery as pulse, and it hears both elements clearly instead of hearing one smear over the other.

### How do I set up sidechain compression in my DAW?

Every major DAW does the same thing under different names: put the compressor on the track to be ducked, then select the trigger track as the sidechain, key or external input in the compressor's routing menu. In some hosts you also have to enable a send from the trigger track first.

### How much gain reduction should sidechain compression use?

Three to six decibels if you are solving a low-end clash and do not want it heard. Ten or more if the pump is a deliberate part of the arrangement. Watch the meter return to zero before the next trigger either way.

### What is a sidechain in audio?

The detector path inside a dynamics processor, and the input that feeds it. A compressor measures level on one path and changes gain on another. The sidechain is the measuring path, and giving it its own input is what lets one track control another.

### Why is my sidechain not working?

Four causes cover nearly all of it. The host needs a send or a bus created before the source appears in the plugin's menu. The trigger is routed but muted in a way that kills the key feed. Nothing is crossing the detector yet. Or the compressor is on the trigger track rather than the track you want ducked, which is the most common single mistake and produces no effect at all.

### What attack and release should I use for sidechain compression?

Attack at or near zero for a sustained bass, 10 to 20 ms if the part has its own plucked attack worth keeping. Release at about a third of the gap between triggers: 150 ms at 128 bpm, 200 ms at 100 bpm. Shorten it until the swell disappears, or lengthen it until the swell is the groove, depending on which one you came for.

### What ratio should I use for sidechain compression?

Four to one is the sane default and 8:1 is where the useful range ends. Going from 8:1 to 20:1 on a trigger sitting 12 dB over buys 0.9 dB of extra duck, so depth is better bought by lowering the threshold.

### Should sidechain compression go before or after EQ on the bass?

After, along with everything else that changes level. The detector is listening to the kick, so an EQ ahead of the ducker changes nothing it sees, but an EQ after the ducker changes how deep the duck reads by the time it reaches the mix bus.

### Does sidechain compression cause phase problems?

No. The process is gain applied over time, with nothing summed and no filter in the audio path. Detector filtering shapes what the compressor hears, never what it outputs. Layering two kicks can cause phase problems; ducking one under the other cannot.

### Is sidechain compression the same as ducking?

Ducking is the result, sidechaining is the mechanism. Every ducking effect made with a compressor is sidechain compression. A ducking effect drawn in an automation lane is not, because no detector is involved.

### Should I sidechain the whole mix to the kick?

Only if the pump is the sound of the record. Keying a mix bus compressor from the kick moves the vocal, the hats and the reverb tails together: enormous on a club track, unusable on most other things. If the problem is only the low end, duck the bass, or duck one band with a dynamic EQ.

### Can I sidechain the reverb to the vocal?

Yes, and it is the use most worth learning after the bass. Compressor on the reverb return, keyed from the dry vocal, 3 to 5 dB with a release around 200 ms. The tail gets out of the way of the words and floods back in the gaps, which lets you run a far longer reverb than a static blend would allow.

### Does sidechain compression add latency?

Only if you turn lookahead on. The detector itself is instant. Lookahead delays the audio path to buy the detector a head start — ten milliseconds is 441 samples at 44.1 kHz — and your DAW compensates on playback but cannot compensate for what you hear while playing in.

### Why does my bass sound quieter after sidechaining?

Because it is. A 10 dB duck with a 150 ms release at 128 bpm takes 2.44 dB off the average level of that track. Put it back on the fader, and know that you are paying for the duck twice if the bass and the trigger share a bus.

### Do I need sidechain compression for hip-hop?

Less often than for dance music, and for a different reason. A boom bap kick and an upright bass rarely overlap enough to need it, while an 808 running under the kick for a whole bar almost always does. On that material 2 to 4 dB keyed off the kick with a short release is usually the whole fix. [How to compress drums](https://gazillionindustries.com/how-to-compress-drums/) covers what goes on the kit itself.

### Sidechain compression or EQ for kick and bass?

EQ first, because it is free. Carve the bass where the kick's fundamental sits and you may find the clash was 40 Hz wide and never needed a duck. Reach for the sidechain when the two sounds genuinely need the same space at the same instant, which is what happens when a kick and a sub are tuned to the same note. [Why is my mix muddy](https://gazillionindustries.com/why-is-my-mix-muddy/) has the rest of the low-end argument.

### Should I sidechain in mono or stereo?

Trigger in mono. A stereo detector driving two independent gain cells can duck left and right by different amounts, which wanders the bass image every beat. Most plugins link them by default; if yours has a link switch, leave it linked for this job.

### Is sidechain compression cheating?

Only in the way a fader is cheating: a level move made by a machine on a schedule you set, where the alternative is the same move made by hand. What it cannot do is fix an arrangement where two parts want the same register all song, and reaching for it instead of rewriting the bass line is the version of the question worth taking seriously.

### What is the best free sidechain plugin?

Your DAW's stock compressor, in almost every case. The routing is already built, the detector filter is already there, and a key input is a key input. Spend money on the parts of the chain where the design changes the sound. [What is a compressor](https://gazillionindustries.com/what-is-a-compressor/) is the ground floor if any of the controls above were new.

## What DRUGS does

DRUGS is our free bus compressor for drums, and it does one job. **DOSE** moves the transfer curve, the knee, the attack and the release together, making a drum bus denser rather than louder, with the room brought up underneath the hits. There is no sidechain input and no trigger routing: it listens to what you feed it and nothing else. Put your ducking compressor on the bass, and put this on the drums that are doing the ducking.

One thing to know before it goes on a bus you care about. DOSE at 0 is not a bypass — the knob is a position on a curve, so the bottom of its travel is still working, and the honest comparison against nothing is the plugin's own bypass. Set level with GAIN afterward, match it, and judge it on the quiet bars. [One-knob compressor](https://gazillionindustries.com/one-knob-compressor/) has the wider argument about what a single control can carry, and [drum bus compressor settings](https://gazillionindustries.com/drum-bus-compressor-settings/) has the starting positions.

Four times a bar, everything gets out of the way of a sound you can hardly hear. That is the whole trick.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
