# Tape delay explained

> How tape delay works: head distance over tape speed, feedback and generations, why the repeats darken, slapback timings, and how to use it on a send.

Source: https://gazillionindustries.com/tape-delay-explained/  
Published 2026-09-20, updated 2026-09-20. By Gazillion Industries, who make TRIPLE OG.

---

The vocal says one word and the room says it back four times, each one darker than the last, until the last repeat is a rumor of a consonant. Nothing in a plugin list does that by accident.

A tape delay records the signal onto moving tape and plays it back a moment later from a second head further along. The delay time is the distance between the record head and the playback head divided by the tape speed, so moving the head or changing the speed changes the time, and changing it while the tape is moving bends the pitch. Feedback sends the playback back to the record head, so every repeat is a new generation of tape: darker, noisier and slightly out of tune.

## The short version

- **Mechanism**: record head, moving tape, playback head further along

- **Time**: head distance divided by tape speed

- **Feedback**: playback routed back to record: each repeat is another generation

- **Character**: top end lost, noise and distortion gained, pitch wobbles

- **Speed change**: pitch bends while the time moves, unlike a digital delay

- **Slapback**: one repeat at 60–140 ms, no feedback

- **Repeat level**: feedback *g* costs 20 log10(*g*) dB per repeat

- **Loop level**: a sustained input settles at 1/(1−*g*) times its own level

- **Self-oscillation**: loop gain at or above unity: the echo becomes the source

- **Tape loop**: the strip of tape inside the machine, spliced end to end, passing the heads forever

## The arithmetic, in inches and milliseconds

Delay time is a division problem and nothing else. Time in seconds equals the head gap in inches divided by the tape speed in inches per second. One inch of head spacing at 7.5 ips is 1 ÷ 7.5, which is 133.3 ms. Halve the speed to 3.75 ips and the same inch becomes 266.7 ms. Drop to cassette speed, 1.875 ips, and it is 533.3 ms. Take it up to 15 ips and it collapses to 66.7 ms, which is slapback territory from the same piece of hardware.

Run it backward when you want a specific time. A dotted eighth at 90 BPM is 500 ms, so a machine with a fixed 1-inch head gap has to run at 1 ÷ 0.5, which is 2 ips, to land on it. Keep the speed at 7.5 ips instead and you need 7.5 × 0.5, which is 3.75 inches between the heads. That is the whole design problem of an echo machine in one line, and it is why the old boxes have a speed knob and several playback heads rather than a number entry field.

Tempo math is the same division. A quarter note in milliseconds is 60,000 divided by the tempo; a dotted eighth is three quarters of that; a sixteenth is a quarter of it.

- **80 BPM**: quarter 750 ms · dotted eighth 562.5 ms · eighth 375 ms · sixteenth 187.5 ms

- **90 BPM**: quarter 666.7 ms · dotted eighth 500 ms · eighth 333.3 ms · sixteenth 166.7 ms

- **140 BPM**: quarter 428.6 ms · dotted eighth 321.4 ms · eighth 214.3 ms · sixteenth 107.1 ms

- **170 BPM**: quarter 352.9 ms · dotted eighth 264.7 ms · eighth 176.5 ms · sixteenth 88.2 ms

Two of those numbers are worth noticing. A sixteenth at 170 BPM is 88.2 ms, which is inside the slapback window, so a drill or footwork tempo gets a rhythmic delay and a doubling effect from the same setting. And a sixteenth at 140 BPM is 107.1 ms, close enough to a hundred that people set it there by hand and never notice they are 7 ms early by the fourth bar.

## Why the repeats fall apart

Each pass through the machine is a full trip through a tape chain: a record amplifier, magnetic tape with a limited high-frequency response, a playback head, and a transport that is never perfectly steady. So repeat two has less top than repeat one, more hiss, a little saturation, and a pitch that drifts by fractions of a semitone. Stack six of those and the tail dissolves into a dark smear that no amount of low-pass filtering on a clean digital delay imitates, because the filtering is only one of the four things happening.

Put numbers on the darkening and it stops being a vibe. Say one trip through the machine costs 3 dB at 8 kHz, which is a mild figure for a slow tape. Repeat one has made that trip once and sits 3 dB down at 8 kHz; repeat six has made it six times and sits 18 dB down. Layer the feedback attenuation on top at, say, half gain, and repeat six is 36 dB below the dry broadband and 54 dB below it at 8 kHz. Against repeat one, that is 30 dB of level gone and 45 dB of top gone. The tail does not just get quieter. It tilts, 15 dB worth, across five passes you never touched.

Noise runs the other way, which is the part people forget. Every pass adds a fresh, uncorrelated bed of [tape hiss](https://gazillionindustries.com/tape-hiss/) to a signal that is getting quieter, so the tail's signal-to-noise collapses from both ends at once. By the time the repeats are 30 dB down, the hiss is most of what is left. On a busy mix that is inaudible. On a solo vocal in a quiet intro it is the sound.

Push the feedback past unity and the loop gains more than it loses. That is self-oscillation: a howl that builds until something clips, and an instrument in its own right if you ride it.

## Feedback, in numbers

Feedback is one multiplication applied over and over. If the fraction sent back is *g*, each repeat is 20 log10(*g*) decibels below the one before it: *g* = 0.5 gives −6.0 dB a repeat, 0.6 gives −4.4, 0.7 gives −3.1, 0.8 gives −1.9 and 0.9 gives −0.9. Divide 60 by those and you get how many repeats it takes to fall 60 dB: about 10, 14, 19, 31 and 66.

Multiply by the delay time and the abstraction turns into bars. At 500 ms spacing, half feedback decays to −60 dB in 5.0 seconds, seven tenths takes 9.7 seconds, and eight tenths takes 15.5 seconds. At 90 BPM a bar is 2.67 seconds, so those three settings are a two-bar tail, a four-bar tail, and a tail that is still going when the chorus lands. Two clicks on a knob, ten seconds of difference. This is the single most common reason a mix sounds washed and nobody can find the reverb responsible.

There is a second effect of feedback that almost nothing warns you about. A sustained sound into a feedback loop does not decay at all while it is sustaining; it accumulates. The steady level is 1/(1 − *g*) times the input, so *g* = 0.5 settles at twice the input, which is +6 dB; 0.8 settles at five times, which is +14 dB; 0.9 settles at ten times, which is +20 dB. Send a held pad or an organ chord to a delay at 0.8 feedback and the return climbs 14 dB above where the first repeat told you it would sit. Check your [headroom](https://gazillionindustries.com/headroom-in-mixing/) on the return, not on the send.

Tape shapes the runaway case in a way a clean loop does not. The loop is not flat, because each pass loses top, so loop gain is highest in the midrange and low mids and that is where the oscillation establishes itself. It comes up as a dark, unstable tone rather than a whistle, it drifts in pitch because the transport drifts, and it stops climbing when the tape saturates instead of when the converter runs out. That built-in ceiling is the reason people perform runaway feedback on tape and merely damage things with it on a digital delay.

## The pitch bend, and how to compute it

Moving the delay time while audio is in the loop is a speed change, and speed changes pitch. The ratio is exact: if the delay time is growing at a rate of *d* seconds per second, the output plays at 1 − *d* times normal speed while the move lasts, and the pitch shift in cents is 1200 × log2(1 − *d*).

Work one. Sweep the delay from 300 ms to 500 ms over two seconds. The time grows by 0.2 s in 2 s, so *d* = 0.1, the speed ratio is 0.9, and the repeats fall 1200 × log2(0.9), which is 182 cents: nearly two semitones down, held for as long as the move takes. Reverse the same sweep, 500 back to 300 in two seconds, and the ratio is 1.1 and the repeats rise 165 cents. A gentler one: 400 to 420 ms over four seconds gives *d* = 0.005, a ratio of 0.995, and a drop of 8.7 cents, which reads as the machine sagging rather than as a pitch effect.

Two things follow from that formula. Faster moves bend further, so the same start and end points sound completely different at half the automation length. And the bend only exists during the move: park the time anywhere and the pitch returns to normal on the next repeat, which is why the effect is a gesture rather than a setting. The full account of speed and pitch is in [varispeed](https://gazillionindustries.com/what-is-varispeed/), and [tape speed](https://gazillionindustries.com/tape-speed/) covers what the same change does to tone.

## How to use tape delay in a mix

- Put it on a send rather than the track, so the dry signal stays untouched.

- Set the time by ear against the tempo: a dotted eighth for movement, a quarter for space.

- Set feedback for two to four audible repeats, then take one off.

- High-pass the delay return around 200 to 300 Hz so the repeats do not crowd the low end.

- Duck the return against the dry vocal so the repeats land in the gaps, not on the words.

- Automate the feedback up on the last word of a line, and back down before the next one.

- For the pitch bend, move the delay time while the repeats are sounding.

- Low-pass the return around 4 to 6 kHz as well, so the repeats sit behind the source rather than beside it.

- Check the return in mono before you commit, because a stereo delay with two different times will move the image.

- Solo the return once, with the dry muted, and listen for hiss and rumble you are about to print.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is a cassette transport rather than a delay, which makes it a good place to send a delay return: the repeats come back with tape on them instead of arriving clean.

## Hear it

A repeat is one more trip through the tape. Here is a loop with nothing on it, then the same loop after a single pass through a worn deck. Every extra repeat in a feedback loop applies that same change again.

- **Dry** — no processing — speed holds at 1.000 — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Age 35, hiss 45, drive 30, wow 40** — one generation — speed 0.951 to 1.059 — https://gazillionindustries.com/tripleog/tog-aged.m4a

The same eleven seconds each time, rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. No other processing, no master bus, no edits.

## Slapback, and the other old trick

A single repeat between about 60 and 140 ms with no feedback is slapback, and it is the sound of fifties rock and roll vocals: close enough to read as one voice, far enough to double it. Shorter than about 40 ms and it stops being a repeat and starts being a comb filter, thinning the source instead of thickening it. Longer than 150 ms and the ear hears two separate events.

The comb is computable, which makes the 40 ms boundary less arbitrary than it sounds. Mix a delayed copy with the dry and you get nulls at odd multiples of 1/(2*t*): at 1 ms the first null is at 500 Hz and they repeat every 1 kHz, which is audible as a hollow, phasey tone. At 5 ms the first null is at 100 Hz and the spacing is 200 Hz, still coarse enough to hear as a filter. At 40 ms the nulls sit 25 Hz apart, which is finer than the ear resolves as separate notches, so the same mathematics reads as thickness rather than as damage. See [phase cancellation](https://gazillionindustries.com/phase-cancellation/) for the general case and [mono compatibility](https://gazillionindustries.com/mono-compatibility/) for what it does when somebody plays your record on one speaker.

Above the comb and below about 30 ms there is a band where the ear fuses the repeat with the source into one event and uses the earlier arrival to locate it. That is the mechanism behind every short-delay widening trick, and it is also the trap: the two are one sound in stereo and two sounds in mono, so a chorus that feels enormous on headphones can go hollow on a phone. Slapback proper sits above that window on purpose.

The other trick is running a whole bus through a delay with the mix at a few percent, so nothing reads as an echo and everything gets slightly wider and less steady. Drums take this better than you would expect, especially if the repeats are dark.

## The tape loop inside the machine

An echo machine does not use a reel. It uses a loop: a strip of tape spliced end to end, running past an erase head, a record head and one or more playback heads, forever. Loop length divided by speed gives the cycle time. Twenty-five inches of tape at 7.5 ips comes around every 3.3 seconds; the same loop at cassette speed takes 13.3 seconds. That cycle is the budget for everything the machine can do, and it is why long echo boxes are physically large.

The erase head is the part that makes it a delay rather than an accumulator. It wipes each inch of tape clean a moment before that inch reaches the record head, so what you hear is the material recorded one head gap ago and nothing older. Switch the erase off and the loop stops forgetting: every revolution lays a new take on top of what is already there, decaying only as fast as the tape and the record amplifier lose it. That is sound-on-sound, and it is a different instrument from delay even though it is the same machine with one circuit disabled. If you want to build one for real, [how to make a tape loop](https://gazillionindustries.com/how-to-make-a-tape-loop/) is the physical procedure.

Multiple playback heads turn one loop into a pattern. Put heads at 1, 2 and 3.5 inches along from the record head and at 7.5 ips you have taps at 133, 267 and 467 ms available together, and taking the feedback from one of them while listening to all three gives rhythms that no single delay time produces. The boxes built around that idea get their own page: [the tape echo units](https://gazillionindustries.com/space-echo/).

You can also build the loop out of the room. Thread tape from one machine's record head to a second machine's playback head standing across the floor, feed the second machine's output back to the first, and the distance between them is the delay: ten feet is 120 inches, so at 7.5 ips that is 16 seconds. It is the crudest possible signal path and it produced a decade of music, for the same reason that [a concrete room under a building](https://gazillionindustries.com/capitol-echo-chambers/) did. The thing doing the work was the size of a building.

## Where tape delay sits in a chain

On a send, the order inside the return decides most of the sound. High-pass before the delay and the low end never enters the loop, so it cannot compound; high-pass after the delay and the loop still builds bass internally and you are only hiding it at the output. Put the filter first. The same logic applies to saturation: before the delay it prints once, after the delay it works on the sum of every repeat at once and gets louder as the tail builds.

Delay into reverb gives each repeat its own tail, which is enormous and blurs fast. Reverb into delay repeats the tail itself, which is bigger still and almost always too much on a vocal. Vocal chains mostly want delay and reverb in parallel on separate sends, so you can balance them against each other rather than against the multiplication of the two. There is more on the full chain in [how to mix vocals](https://gazillionindustries.com/how-to-mix-vocals/).

The ducking deserves a real setting rather than a gesture. Put a compressor on the delay return, key it from the dry vocal, and set it for 4 to 6 dB of gain reduction while words are happening, with a release around 150 to 250 ms so the return recovers between syllables rather than between lines. Too fast and the repeats chatter in time with the consonants; too slow and the delay only comes back at the end of a phrase. [Sidechain compression](https://gazillionindustries.com/sidechain-compression/) covers the routing in every major DAW.

A tape stage after the delay, rather than inside it, is the cheap version of the whole effect: one pass of tape darkens and destabilizes every repeat at once. One generation instead of six, so it is less dramatic and much easier to control. [Tape and tube saturation](https://gazillionindustries.com/tape-vs-tube-saturation/) sound different in that slot, and the tape one is the one that also brings the pitch movement.

## Failure modes and what they sound like

- **Creeping feedback:** the return is louder in the last chorus than the first, with no automation written. Loop gain is just over unity and the song is long enough for it to show. Pull the feedback down 5% and print again.

- **Low-end pileup:** a woofy rumble that grows under the vocal and vanishes when you mute the send. Bass survives every pass better than top does, so the loop accumulates it. High-pass inside the loop at 200 to 300 Hz.

- **Metallic ringing:** short delay plus high feedback resonates at multiples of 1/*t*. At 10 ms the peaks sit every 100 Hz; at 3 ms every 333 Hz, which is a clear pitch. If your short delay is singing a note, that is the note.

- **Consonant mush:** the repeat of one word lands on the front of the next. Fix it with ducking, or move the time to a subdivision that falls in the gap rather than on the beat.

- **Tempo drift:** a delay set by ear to a tempo the track does not hold, so the repeats are early by bar four. Do the 60,000-divided-by-tempo arithmetic instead of trusting a knob.

- **Image pull:** two slightly different times left and right, plus feedback, and the vocal drifts off center as the tail builds. Check in mono.

- **Detune beating:** a sustained note against its own slightly flat repeat produces a slow throb at the difference frequency. Musical on a voice, broken on a sub.

- **Hiss you printed on purpose:** six generations of noise under a quiet intro, which sounded great in solo and sounds like a bad upload on a phone. (Solo the return before you bounce, not after somebody tells you.)

## Set one up and verify it

You can confirm every claim on this page in about twenty minutes with one vocal and one delay. Use a short, dry phrase rather than a full take; music hides all of this.

- Make a send to a new return track and put the delay on it, wet 100%.

- Set the delay time to 60,000 divided by your tempo, multiplied by 0.75.

- Set feedback to 50% and count the audible repeats. You should get roughly ten before they vanish.

- Raise feedback to 80% and count again. The tail should get about three times longer.

- Hold a sustained note into it at 80% and watch the return meter climb by about 14 dB.

- Put a spectrum analyzer on the return and compare repeat one against the tail for high-frequency loss.

- Automate the delay time from 300 to 500 ms over two seconds and check the drop with a tuner.

- Sum the master to mono and listen for the return moving or thinning.

The DAWs differ in one place that matters: what happens when the delay time changes. Ableton Live's Delay device makes you choose between Repitch, Fade and Jump, and only Repitch behaves like tape. Logic Pro ships a Tape Delay with the character built in, and its Sample Delay will give you exact millisecond values for step two. FL Studio's Fruity Delay 2 and Fruity Delay Bank cover the tempo-locked and the multi-tap cases respectively. Per-DAW setups for the tape side are written out in [Ableton Live](https://gazillionindustries.com/tape-plugins-for-ableton-live/), [Logic Pro](https://gazillionindustries.com/tape-plugins-for-logic-pro/) and [FL Studio](https://gazillionindustries.com/tape-plugins-for-fl-studio/).

## Where it costs you

Repeats are level, and level on a vocal send eats the same space the vocal needs. Long feedback tails wash into the next bar and blur transitions, which is why the automation above matters more than the settings. Tape delay also detunes: the pitch instability that makes it musical on a voice can make a synth line sound broken, and on anything with a tuned sustain you will hear the beating between the dry note and the repeat.

It costs headroom where you were not looking, because the expensive moment is the one you did not audition: feedback set on a short phrase, then a held note in the bridge. It costs low end, since the loop keeps bass better than it keeps anything else. And it costs decisions later, as a printed tail cannot be shortened. Keep the send live as long as you can, and see [gain staging](https://gazillionindustries.com/gain-staging/) for how the levels feeding it change what comes back.

The last cost is taste. Echo is the easiest effect in the building to overuse, because every setting is more interesting than dry in solo and none of them are in context. Print the mix, leave the room, play it on a phone. Two repeats will sound like three.

## Questions people ask

### Is analog delay the same as tape delay?

No. Analog delay usually means a bucket-brigade chip passing the signal along a chain of capacitors, which darkens and compresses the repeats without tape's pitch instability. Tape delay uses actual moving tape, so it adds wow, flutter and saturation that a chip does not.

### What is the best tape delay setting for vocals?

A dotted eighth or a quarter note with two or three repeats, high-passed around 250 Hz, ducked under the dry vocal, on a send. Start there and change one thing at a time.

### Why do tape delay repeats get darker?

Each repeat is another pass through the tape chain, and tape's high-frequency response is limited, so every generation loses top end while gaining noise and distortion.

### What causes the pitch bend when you change the delay time?

Changing the time means changing the tape speed or the head position while audio is already on the tape, so the material plays back faster or slower than it was recorded, and pitch moves with speed. See [varispeed](https://gazillionindustries.com/what-is-varispeed/).

### What is a tape loop?

A strip of tape spliced end to end so it runs past the heads continuously. In an echo machine the loop is the storage medium, and its length divided by the tape speed gives the cycle time: 25 inches at 7.5 inches per second comes around every 3.3 seconds. In music-making more broadly, a tape loop is a phrase spliced into a circle so it repeats without an edit.

### How do you set a tape delay to the tempo?

Divide 60,000 by the tempo for a quarter note in milliseconds, then multiply by 0.75 for a dotted eighth, 0.5 for an eighth or 0.25 for a sixteenth. At 90 BPM a quarter is 666.7 ms and a dotted eighth is 500 ms. On a real machine you set the tape speed instead: head gap in inches divided by the time you want, in seconds.

### How many repeats should a delay have?

Two to four audible repeats covers most vocal work. If you want the arithmetic, feedback *g* drops each repeat by 20 log10(*g*) dB, so half feedback is 6 dB a repeat and reaches inaudibility in about ten. Anything above 0.8 is a tail rather than a set of repeats, and needs automating rather than setting.

### Why does my delay get louder instead of dying away?

Because a sustained input into a feedback loop accumulates rather than decays. The steady level is 1/(1−*g*) times the input: at 0.8 feedback that is five times, or +14 dB. A short phrase will not show it and a held note will. If it keeps climbing with no input at all, the loop gain is at or above unity and the delay is self-oscillating.

### Should delay go before or after reverb?

On separate parallel sends, most of the time, so you can balance them independently. Delay into reverb gives every repeat its own tail and washes quickly. Reverb into delay repeats the tail itself and is usually too much on a vocal, though it is a good effect on one held word at the end of a section.

### What is the difference between tape delay and tape echo?

Nothing technical. "Tape echo" is the older term and usually points at the hardware boxes with a tape loop and several playback heads; "tape delay" is the general effect and what the plugin category is called. Both mean record head, moving tape, playback head further along.

### Can you make a tape delay with two tape machines?

Yes, and the delay is the distance between them divided by the speed. Thread tape from the first machine's record head to the second machine's playback head, ten feet apart, and at 7.5 ips that is 120 divided by 7.5, which is 16 seconds. Route the second machine's output back into the first to get feedback.

### Why does short delay make things sound hollow?

Comb filtering. A delayed copy summed with the dry cancels at odd multiples of half the inverse delay time, so a 1 ms delay nulls at 500 Hz and every kilohertz above it. The notches get closer together as the delay lengthens, and by about 40 ms they are 25 Hz apart and read as thickness instead.

### Does tape delay work on drums?

Yes, in two ways. A dark eighth-note repeat on a snare send is a standard move and the reason a lot of drums sound like a room. And running a drum bus through a delay at a few percent wet adds width and instability without reading as echo at all. Keep it high-passed so the kick does not enter the loop.

### How do I stop delay repeats from muddying the mix?

High-pass the return at 200 to 300 Hz inside the loop rather than after it, low-pass it around 4 to 6 kHz, duck it against the dry source by 4 to 6 dB, and cut a repeat off the feedback. Mud in a delay is almost always low end compounding across generations, because bass survives each pass better than top end does.

## What TRIPLE OG does

TRIPLE OG is a cassette transport: six controls for what the medium is and what it is doing, and one for your hand. **TONE** is the playback system's brightness, where 50 is a musically neutral cassette rather than a bypass. **HISS** is a continuous broadband bed, shaped and partly decorrelated across the channels. **AGE** is in years, nought to sixty. **DRIVE** is soft asymmetric saturation, oversampled, and the level stays flat inside half a decibel from one end of the knob to the other. **WOW FLUT** is continuous, bounded instability built from several motions at once.

On a delay return it does the job described three sections up: one generation of tape across the whole set of repeats, rather than six generations inside the loop. Set the delay clean, send it here, and the repeats arrive with the top pulled back, a noise bed under them and a pitch that will not hold still. The transport controls are the part you play rather than set. **SLAM** stops the tape and brings it back in sync, **SCRUB** runs the head backward and springs home when you let go, and **CATCH** makes it drag and then sprint to make up the time. Used on a tail rather than a source, all three read as the echo itself losing its footing.

Four repeats, each one further from the word than the last. The room is still answering.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
