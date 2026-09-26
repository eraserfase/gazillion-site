# Monosynth vs polysynth

> What a monosynth is, what changes when a synth plays one note instead of several, and how to hear paraphonic against polyphonic in ten seconds.

Source: https://gazillionindustries.com/monosynth-vs-polysynth/  
Published 2026-09-26, updated 2026-09-26. By Gazillion Industries, who make JOURNEYMAN.

---

You held a four-note voicing and one note came back. The last key your fingers landed on, alone, carrying every bit of weight the patch had. Nothing is broken.

A monosynth plays one note at a time. A polysynth plays several at once, one voice per held note, so a four-note chord runs four copies of the same signal path side by side. Monosynth vs polysynth is a question about voice count and about what that count buys: on one voice every oscillator, filter and envelope in the instrument is aimed at the single note you can hear, and a rule called note priority decides which note that is.

## The short version

- **Monosynth**: one voice, one note at a time, however many oscillators it has

- **Polysynth**: several voices, one per held note, each with its own filter and envelopes

- **Paraphonic**: several pitches sharing one filter and one amplifier envelope

- **Play mono for**: bass, leads, hooks, percussion, risers — anything that is one line

- **Play poly for**: chords, pads, keys parts with voice leading

- **Ours**: [JOURNEYMAN](https://gazillionindustries.com/journeyman.html), $59, one voice, three oscillators, two ladder filters, 200 programs

## What is a monosynth

A monosynth is a synthesizer with one voice. A voice is the whole path a single note travels: oscillators into a mixer, the mixer into a filter, the filter into an amplifier, with envelopes and modulation aimed at the stages along the way. One voice means one of those paths exists. One path, one note.

Oscillator count is a separate question, and it is the one people get wrong in the store. Three oscillators do not give you three notes. They give you one note built from three layers, tuned in unison or spread across octaves, all of them arriving at the same filter and leaving through the same amplifier. One singer with three microphones on them, not three singers.

So when you hold four keys and one note sounds, the instrument has done exactly what it was built to do. It had to choose, and the rule it used is note priority. Low priority keeps the bottom of what you are holding, high priority keeps the top, last priority follows your fingers. Whichever rule is set, three of your four notes are discarded: 75 percent of what you played never reaches the output.

That sounds like a defect until you hear it on a bass part. Play a tenth in your left hand on a polyphonic patch and the bottom of the mix turns to mud, because two low notes an octave and a third apart share harmonics and argue about which fundamental is in charge. Play the same figure on one voice and only the root survives. The root was the part the record wanted.

## Mono vs poly synth: what the voice count changes

Voice count changes five audible things, and only the first one is obvious. Each of them is a reason somebody keeps a one-voice instrument open next to a polysynth rather than replacing one with the other.

- **Chords.** A polysynth gives every held note its own filter and its own pair of envelopes, so a four-note chord has four independent attacks and four independent releases. A monosynth gives you the top, the bottom or the newest note. There is no setting that makes one voice into four.

- **Glide.** Portamento is only unambiguous on a single voice, because there is one pitch and one destination. On a polysynth, gliding from a three-note chord to a four-note chord means the instrument has to decide which old note slides to which new note, and different synths decide differently. One voice removes the decision.

- **Trigger mode.** With one voice, overlapping notes can either restart the envelopes or leave them running. Multi trigger restarts them, so every note gets its own attack. Single trigger leaves them running, so a legato phrase keeps one attack at the front and the notes inside it change pitch without a new transient. On a fast sixteenth-note bassline that switch is the difference between a stutter and a run.

- **Modulation.** One voice means one LFO position and one filter envelope for everything you hear. On a polysynth each voice usually runs its own copy, so four held notes wobble at four different points in the LFO cycle and the chord shimmers. One voice moves as a single object, which is why monophonic modulation reads as deliberate and polyphonic modulation reads as atmosphere.

- **Load.** Sixteen voices running three oscillators each is up to 48 oscillators, plus sixteen filters and thirty-two envelopes. One voice is three oscillators. On a heavy session that difference is the reason the bass patch is the one you never have to freeze.

Hard sync and oscillator FM belong in this list too, quietly. Both generate harmonics far above the fundamental, and both are far easier to keep under control when the instrument only has to do it once. If any of that comes back as a thin metallic ring on the top octave rather than the growl you were after, read [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/) before you blame the patch.

## Paraphonic vs polyphonic, and how to hear the difference in ten seconds

Paraphonic sits between the two and gets sold as if it were the second one. A paraphonic synth lets its oscillators play different pitches at the same time, so you can hold a triad and hear three pitches. Those pitches then share one filter and one amplifier envelope. The chord is real in pitch and shared in articulation.

The test takes ten seconds and no measurement. Set a patch with a slow attack, around 400 ms. Hold one note, let it rise to full, then add a second note without releasing the first. On a polyphonic synth the second note swells in over its own 400 ms while the first one stays up. On a paraphonic synth the second note either appears instantly at the level the first one already reached, or it drags the whole chord back down to zero and starts again. Both of those are the giveaway.

Paraphonic vs polyphonic matters most on release. Lift one finger from a paraphonic triad and the shared envelope is still being held open by the other two, so the note you released may simply stop dead instead of decaying. Lift one finger from a polyphonic triad and that note releases on its own curve while the others hold. If you write parts where notes enter and leave at different times, that is the whole ballgame.

JOURNEYMAN is monophonic. Three oscillators, one pitch at a time, one filter envelope and one volume envelope, which is the architecture the rest of this page is about.

## One voice synth: what the trade actually buys

Everything the instrument owns goes into the note you can hear. That is the entire argument for a one voice synth, and it shows up in three places.

**Thickness.** Three oscillators on one pitch is a stack, not a chord. Tune the second an octave down and the third in unison, then detune the third slightly, and the two unison oscillators beat against each other at the difference between their frequencies. The arithmetic is worth knowing because it changes with register. Two oscillators 7 cents apart at 110 Hz differ by 0.45 Hz, which is one slow swell every 2.24 seconds. The same 7 cents at 220 Hz differs by 0.89 Hz, a swell every 1.12 seconds. Detune that feels like breathing on a bass note feels like chorus an octave up, from the same knob position.

**Filtering.** A polysynth has to build one filter per voice, so sixteen voices means sixteen filters and the design pays for all of them. One voice can afford two filters on the single note, with a control that sets the distance between their cutoff points. Run them as a pair of lowpass filters and you get two rolloffs at different frequencies; split them left and right and the gap between the two becomes stereo width on a mono source. Pole count is the other word on these panels worth learning: one pole in a lowpass is 6 dB per octave by definition, so three poles is a gentler slope than four and lets more of the material above the cutoff through. If cutoff and resonance are still abstractions, start at [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/).

**Reach.** One voice means one destination for every modulation source you own, so the mod wheel, a pedal and a touch surface can all be pointed at the same note without the result turning to soup. This is the part that never shows up in a feature list and is the reason people keep playing these things.

[JOURNEYMAN](https://gazillionindustries.com/journeyman.html) is our monosynth, $59, one voice with three oscillators under it and two ladder filters spaced apart for width. Glide, note priority and single or multi trigger are on the panel, and 200 programs cover basses, leads, keys, pads, percussion and fx. There's a demo on the page.

One voice, laid out left to right in signal order. **SPACING** sets the distance between the two filters, and the **TOUCH SURFACE** moves cutoff on X and spacing on Y.

## Monosynth vs polysynth in an arrangement: where one voice wins

Bass first, because it is the part that cannot be shared. Low frequencies take up physical room in a mix and two of them at once take up more than twice as much attention as either alone. A monophonic bass forces one decision per beat, which is why it sits. When it still goes missing, the problem is usually the fundamental rather than the part, and [how to make bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) covers what a 3-inch driver actually reproduces. The instrument side of the same question is in [best bass synth VST](https://gazillionindustries.com/best-bass-synth-vst/).

Leads next. A hook is one line, and a single voice holds the front of a busy beat because nothing behind it is competing for the same filter. If the lead is thin rather than quiet, thickness beats volume every time — see [how to make a synth sound thicker](https://gazillionindustries.com/how-to-make-a-synth-sound-thicker/), and [best lead synth VST](https://gazillionindustries.com/best-lead-synth-vst/) for what to play it on.

Then percussion and effects, which is the use people forget. A short volume envelope, a fast filter envelope and a noise source in the mixer will produce hats, zaps, claves and toms from an instrument that has no samples in it. Pointing the envelope at the filter rather than at the amplifier gives you the attack shape that [a transient](https://gazillionindustries.com/what-is-a-transient/) is made of. A slow sweep across a bar with a defined ending is the same trick at a different speed; the mechanics are in [how to make a filter sweep](https://gazillionindustries.com/how-to-make-a-filter-sweep/).

Check all of it in the car and on a phone before you commit. A one-voice part with a heavy resonance peak can sound enormous on monitors and disappear on a laptop speaker, because the peak is sitting under everything the small driver can actually move.

## Where a polysynth is the right instrument, and what one voice costs you

If the record is built on held chords, buy voices. Pads that breathe, keys parts with real voice leading, string stacks where each note enters and leaves on its own schedule — none of that can be faked on a single voice, and an article that told you otherwise would be wasting your afternoon. This is the honest cost of the trade, and it is a real one.

Your DAW almost certainly ships a polysynth already, so check that before you spend anything. If it does not, Vital's Basic tier is free and gives you the full synth with all features, 75 presets and 25 wavetables, on Windows 10 and later or macOS 10.15 and later, per the maker's own page on September 26, 2026. It is a polyphonic wavetable instrument, which is a different animal from a one-voice subtractive synth, and that is exactly why it is named here.

The second cost is habit. One voice teaches you to write single lines, and a producer who only writes single lines ends up with arrangements that are all foreground. The fix is arrangement, not gear: let the chord instrument be quiet and wide, and let the one-voice part be narrow and loud.

So what do you actually load? For a bassline, a hook, a lead, a riser or a synthesized percussion hit, load the one-voice instrument, because every part of it is working on the note. For chords, load a polysynth. Most sessions want both, and the two of them together cost less than the argument about which one is better. If the one-voice side is the gap, [best monosynth VST](https://gazillionindustries.com/best-monosynth-vst/) is the longer version of that decision, and [best synth VST under 100](https://gazillionindustries.com/best-synth-vst-under-100/) is the same shortlist sorted by price.

## Set up a one-voice part

- **Play the part with one finger at a time** before you touch a control, so you hear the note priority rather than fight it.

- **Set note priority to last** so the line follows your hands.

- **Choose multi trigger for a part where every note needs its own attack**, and single trigger for a legato line.

- **Turn glide off and write the part.** Add glide afterward, only on the intervals that need it.

- **Tune the second oscillator one octave below the first** and balance the two in the mixer before you open the filter.

- **Detune the third oscillator 5 to 7 cents against the first** and count the seconds between swells.

- **Set the filter cutoff with the rest of the arrangement playing**, never soloed.

- **Set the filter envelope amount first**, then its attack and decay.

- **Match levels to within 0.5 dB before you A-B anything**, because louder wins every unmatched comparison. Method in [gain staging](https://gazillionindustries.com/gain-staging/).

- **Check the part in mono, on a phone speaker and on one earbud** before you print it.

## Questions people ask

### What is a monosynth?

A synthesizer with one voice, meaning one complete signal path, meaning one note at a time. Oscillator count has nothing to do with it: an instrument with three oscillators is still a monosynth if those three oscillators stack into a single note. When you hold more than one key, note priority picks the survivor.

### What is the difference between a monosynth and a polysynth?

Voice count, and the five things that follow from it: chords, glide, trigger behavior, whether modulation moves everything together, and CPU. A polysynth builds a full voice for every held note. A monosynth builds one and spends the whole budget on it. Mono vs poly synth is a question about what the part is, rather than about which instrument is better.

### Is a synth with three oscillators polyphonic?

No. Three oscillators tuned to the same note played through one filter and one amplifier are one voice with three layers. Polyphony is counted in voices, and a voice is the whole chain. This is the single most common misreading of a spec sheet in the plugin store.

### What does paraphonic mean, and how is paraphonic vs polyphonic different?

Paraphonic means the oscillators can hold different pitches while sharing one filter and one amplifier envelope, so you get a chord in pitch with a single articulation. Polyphonic means each note gets its own filter and its own envelopes. The audible test is a slow attack of around 400 ms: add a second note to a held one and watch whether it swells in on its own or arrives already at full.

### Can I just set a polysynth to one voice?

You can set the voice count to 1 on most software synths, and it will play one note at a time. What you get is a limit on polyphony. What a one-voice instrument gives you on top of that is the behavior built around the limit — note priority you can choose, single and multi trigger, glide that has one unambiguous destination, and a panel where the performance controls are the controls. Try the setting first; it costs nothing to find out which of those you miss.

### Is a one voice synth enough on its own?

For bass, leads, hooks, percussion and effects, yes, and those are most of the synth parts in most beats. For held chords and pads, no. Almost every session ends up wanting one of each, so the useful question is which one you are short of today.

### Does monophonic mean the sound is in mono?

No, and the collision of words costs people hours. Monophonic describes how many notes the instrument plays. Mono describes how many audio channels come out of it. A monophonic synth can have a wide stereo output — two filters split left and right will do it from a single note — and that width still has to survive a mono fold-down. See [mono compatibility](https://gazillionindustries.com/mono-compatibility/), and [phase cancellation](https://gazillionindustries.com/phase-cancellation/) for why width sometimes vanishes when the two sides are summed.

### What is the best free way to start?

Open what your DAW already has and set its voice count to 1 for an evening. Our free one is [DRUGS](https://gazillionindustries.com/drugs.html), a one-knob drum bus compressor rather than a synth, so it is the free way to get one of ours into your session and not the free way to get a synth. When the synth bass is written and needs weight against the kick, [BEEFY](https://gazillionindustries.com/beefy.html) at $19 is the saturation stage for it, and [how to mix kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/) covers the fight between the two.

## What JOURNEYMAN does

[JOURNEYMAN](https://gazillionindustries.com/journeyman.html) is our monosynth, $59, for Mac and Windows. One voice, and everything in it is pointed at that voice. Three oscillators, each with **OCTAVE** and **WAVE**, the wave a continuous sweep from triangle through saw and square to pulse, with **1-2 SYNC** and **3-1 FM** between them. A **MIXER** over OSC 1, 2 and 3 with **NOISE** and **EXT IN**. Two ladder filters, left and right, with **CUTOFF**, **SPACING** between them, **RESONANCE** and **KB AMT**, switchable DUAL LP or HP:LP and selectable 3 or 4 pole. A **FILTER ENV** and a **VOLUME ENV**, each ADSR. An **LFO** with **RATE** and **SYNC**, and sample and hold. Two modulation busses, mod wheel and pedal, each with source, shaping, destination and amount. **GLIDE**, note priority, single or multi trigger, bend range, and a **TOUCH SURFACE** that moves cutoff on X and spacing on Y. Two hundred programs across basses, leads, keys, pads, percussion and fx, every one of them wired to the mod wheel and the touch surface. AU, VST3 and standalone on macOS 10.13 or later, VST3 on Windows 10 or later, 64-bit, universal binary. The key arrives with the download, activates once and then works offline.

Play the four-note voicing again. One note comes back, the one you chose, three oscillators thick with both filters open on it. That was always the deal.

---

## About JOURNEYMAN

JOURNEYMAN — a monosynth for Mac and Windows. One voice, three oscillators, two ladder filters, two envelopes, two modulation busses and 200 programs.

https://gazillionindustries.com/journeyman.html
