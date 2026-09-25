# How a tape machine works

> How a tape machine works: the transport, erase, record and playback heads, bias, tape speed, and why saturation, head bump, hiss and wobble give tape its sound.

Source: https://gazillionindustries.com/how-does-a-tape-machine-work/  
Published 2026-09-14, updated 2026-09-14. By Gazillion Industries, who make TRIPLE OG.

---

For most of the twentieth century, if a song was recorded it lived on a strip of rust-coated plastic moving past a magnet at a steady speed. Everything producers now call "tape sound" is what happened to music on that trip.

A tape machine records sound as magnetic patterns on tape. The transport pulls the tape past three heads at a constant speed: an erase head wipes it, a record head turns the audio signal into a magnetic field that magnetizes particles on the tape, and a playback head reads those patterns back as an electrical signal. A high-frequency bias signal makes recording linear. The limits of that process, saturation, noise and speed variation, are what give tape its sound.

## The short version

- **Transport**: reels, capstan and pinch roller set the speed

- **Erase head**: clears the tape before recording

- **Record head**: magnetizes the tape with the signal

- **Bias**: an ultrasonic signal that makes recording linear

- **Playback head**: reads the magnetism back as voltage

- **Speed**: how much tape each second of music gets, which is the resolution

- **Wavelength**: speed divided by frequency: the physical length of a tone on tape

- **Equalization**: a boost on the way down, a matching cut on the way back

- **The sound**: saturation, head bump, hiss, wow and flutter

## The transport

Tape comes off a supply reel, passes the heads, and winds onto a take-up reel. The speed isn't set by the reels, whose diameter keeps changing, but by the capstan, a precisely spinning shaft, with a rubber pinch roller pressing the tape against it. Professional reel machines run at speeds like 15 or 30 inches per second; a cassette runs at 1⅞. Faster tape means more tape per second of music, which means better high end and less noise.

The capstan is the only part of the machine that is allowed to decide how fast the tape moves, and everything else in the transport exists to keep that decision honest. A heavy flywheel on the capstan shaft smooths out the motor's cogging. The supply reel pulls gently backward, the take-up reel pulls gently forward, and that back tension is what presses the tape against the heads. Set the tension wrong and the tape floats a few microns off the gap, which is enough to lose the top end before anything else has gone wrong.

Speed is the resolution of the format, and the arithmetic is unforgiving. 1.875 inches per second is 4.76 cm/s; 15 ips is eight times that, and 30 ips is sixteen times. A C60 running thirty minutes a side uses 3,375 inches of tape, about 85 meters, for half an hour of music. The same half hour at 15 ips needs 27,000 inches, roughly 686 meters. That is the whole reason a reel is the size of a dinner plate and a cassette fits in a shirt pocket, and the whole reason they do not sound alike. [Tape speed](https://gazillionindustries.com/tape-speed/) goes further into the trade.

## Speed, wavelength and where the top end goes

One equation explains most of what speed does. A tone on tape occupies a physical length: wavelength equals speed divided by frequency. At 15 ips, a 15 kHz tone is written 0.001 inch long, which is 25.4 microns. At cassette speed the same tone is 3.175 microns. The music has not changed. The room it is written into has shrunk by a factor of eight.

Now put that next to bass. At cassette speed a 50 Hz tone is 0.0375 inch long, about 0.95 mm, which is three hundred times longer than the 15 kHz tone sitting in the same stripe of oxide. Low frequencies are enormous on tape and high frequencies are microscopic, and every mechanical imperfection in the machine, dirt, tilt, a hair of lift, a worn gap, is roughly the size of the small ones.

That mismatch is why the playback gap has to be narrow. A head cannot resolve a wavelength shorter than its own gap; as the recorded wavelength approaches the gap width the output falls, and when they match it nulls outright. To read 3.175 microns the gap must be smaller than three microns, and in practice a good deal smaller than that. A smear of oxide on the head is measured on the same scale, which is why a dirty machine loses the top first and everything else second.

Short wavelengths also fight themselves while they are being written. Adjacent regions of opposite magnetization sit so close together that they partly cancel, so the tape will accept far less high-frequency level than low-frequency level before it stops responding. Drive a mix hard into tape and it gets denser and duller at the same time, and the duller part is not a tone control. It is the top end refusing to fit.

Noise moves with the same physics. The hiss is random and spread over the surface, so signal grows in proportion to how much tape you give it while noise grows only with the square root: double the speed, or double the track width, and you buy back about 3 dB. A 2-inch reel split into 24 tracks gives each one about 2.1 mm; a cassette's 3.81 mm carries four tracks, under a millimeter apiece. The gap between a studio machine and a cassette deck is mostly that number, twice over.

## The heads

The erase head comes first and clears whatever was there. The record head is a tiny electromagnet with a microscopic gap: the audio signal flowing through it creates a changing magnetic field that leaves a matching pattern on the tape's magnetic particles. The playback head works in reverse, the magnetized tape passing its gap induces a small voltage, which is amplified and equalized back into sound.

The record head has the easier job, because writing a field is cruder than reading the fringe of one. A playback head is a coil wound around a ring of soft magnetic material with a slot cut in it, filled with something non-magnetic. Flux from the tape prefers the ring to the slot, so it detours through the coil, and the coil makes a voltage out of it. Everything you hear has been through that slot, at a scale where a fingerprint is a mountain range.

Head count matters more than it sounds. A two-head machine records and plays with the same head, so you cannot hear what actually landed until you rewind. A three-head machine gives you off-tape monitoring in real time, delayed by the distance between the record and playback heads divided by the speed. At 15 ips each inch of that gap is 66.7 ms; at cassette speed the same inch is 533 ms. Run that delayed signal back to the input on purpose and you have a tape echo, which is the entire mechanism behind [tape delay](https://gazillionindustries.com/tape-delay-explained/) and [the tape echo boxes](https://gazillionindustries.com/space-echo/) built around it.

Multitrack machines add one more trick. Overdubbing onto a three-head machine would put every new part late by that head gap, so the record head is switched to play back the existing tracks while it records the new one. Everything lines up because it is all read from the same physical spot. It is an unglamorous fix and it is the reason layered records exist at all.

## Azimuth, the alignment you hear first

Azimuth is whether the head's gap stands perpendicular to the tape's direction of travel. If it is tilted, one edge of the track reaches the gap slightly before the other, and the two edges read the same tone slightly out of step. When that offset reaches half a wavelength, they cancel. The tone does not get quieter. It disappears.

Run the numbers at cassette speed. Half of a 15 kHz wavelength is about 1.6 microns. Across a track under a millimeter wide, that offset is produced by a tilt of roughly a tenth of a degree. A tenth of a degree, on a screw, and your 15 kHz is gone. This is why a tape recorded on one deck sounds dull on another, why the dullness gets worse toward the top of the spectrum rather than evenly, and why a badly aligned stereo tape also smears in mono, the two channels having been read at different moments. See [phase cancellation](https://gazillionindustries.com/phase-cancellation/) and [mono compatibility](https://gazillionindustries.com/mono-compatibility/) for what that does to a mix.

## Bias, the part nobody sees

Magnetic tape doesn't respond evenly to small signals, so recording the audio alone would sound distorted. Machines add a bias signal, a high-frequency tone far above hearing, mixed with the audio at the record head. It pushes the tape into its most linear range. How much bias is used changes the tone, and aligning it is part of maintaining a machine.

Wrong in either direction has a signature. Under-biased tape is bright and thin and distorts early, with a nervous, gritty edge on quiet material where the particles are not being pushed past their reluctance. Over-biased tape is smooth and clean in the midrange and dark at the top, because the bias current is strong enough to partly erase the shortest wavelengths as it lays them down. Alignment is the point where you have surrendered the least top end you can get away with while keeping distortion where you want it.

Setting it is a tone and a meter, not an opinion. Feed a high-frequency tone at a low level, raise the bias until the playback output peaks, then go past the peak by the margin the machine asks for. Different tape formulations need different amounts, which is the entire job of the Type I, Type II and Type IV switch on a cassette deck: a tape that wants more bias than it gets plays back harsh and distorted, and one that gets more than it wants plays back muffled. Every cassette anybody ever recorded on the wrong setting sounds like one of those two things.

## Record and playback equalization

A playback head does not read magnetism. It reads change. A coil makes voltage out of the rate at which flux through it moves, so doubling the frequency doubles the output: the raw head signal rises at 6 dB per octave across the whole band. Played flat, a correctly recorded tape would be a wall of treble with no bass under it.

So the machine splits the correction. The playback amplifier applies a falling curve that cancels that 6 dB-per-octave rise and then some, and the record amplifier pre-emphasizes the high end on the way down so it lands well above the noise floor. Pulling the top back down on playback pulls the hiss down with it. That single arrangement is worth more signal-to-noise than any other decision in the signal path, and it is also why a tape recorded to one standard and played on a machine set to another sounds tipped up or tipped over rather than merely wrong.

Companded noise reduction stacks a second layer on top: quiet high-frequency material is lifted while recording and pushed back down by the same amount on playback, so the tape's own hiss goes down with it. It works, and it fails loudly. Play an encoded tape without decoding it and the top end is glassy and the quiet passages breathe up and down. Decode a tape that was never encoded and everything soft goes dark. A large share of the cassettes that sound "wrong" in a crate were recorded with one switch set and played back with the other.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) puts a cassette transport in a plugin, VU meters included. There's a demo on the page.

## Why tape sounds like tape

- **Saturation:** push the level and the tape runs out of room gradually, rounding peaks. See [tape vs tube saturation](https://gazillionindustries.com/tape-vs-tube-saturation/).

- **Head bump:** a low-frequency lift whose position depends on speed and head design.

- **High-frequency loss:** worse at slow speeds and at high levels.

- **Noise:** the random magnetic noise of the tape itself. See [tape hiss](https://gazillionindustries.com/tape-hiss/).

- **Speed variation:** tiny wobbles in the transport. See [wow and flutter](https://gazillionindustries.com/wow-and-flutter/).

Every item on that list is a failure to reproduce the input, which is the joke sitting at the center of twenty years of plugin development. None of it was designed in. Engineers spent decades and enormous money reducing all five, and the moment they succeeded, everybody went looking for them again.

Saturation is the one people mean first. As the particles approach full magnetization the tape stops giving you more output for more input, so the tops of loud peaks compress before the body of the sound does. The peaks come down, the average stays, and the crest factor falls, which is heard as loudness that did not cost you a fader move. It also generates harmonics, mostly odd ones when the transfer curve is symmetrical, and the whole business is laid out in [saturation explained](https://gazillionindustries.com/saturation-explained/) and [crest factor](https://gazillionindustries.com/crest-factor/).

Head bump is the odd one out, because it is a geometry artifact rather than a magnetic one. At low frequencies the wavelength on tape becomes comparable to the physical dimensions of the head structure itself, and the response develops a ripple: a lift and a dip in the bottom octaves. Since it is set by wavelength, it moves with speed. Double the tape speed and the bump climbs an octave. Half the affection people have for 30 ips versus 15 ips is an argument about where that bump lands relative to a kick drum.

## A worked example: one loop, three speeds

Print the same two-bar drum loop three times, at 1.875, 15 and 30 inches per second, level matched, and the differences sort themselves into an order you can predict before you hear them.

Noise moves first and most: each doubling of speed buys roughly 3 dB, so the cassette pass sits about 9 dB noisier than the 30 ips pass, and on a quiet loop that is the difference between a texture and a problem. The top end moves next. At 1.875 ips the hats are being written 3 microns long and they come back soft-edged and slightly smeared; at 30 ips they are 50 microns long and they come back as hats. Head bump moves last and least obviously: the bottom-octave lift that sat under the kick at 15 ips has climbed an octave at 30, so the kick loses a little weight and gains a little punch, and people will argue about which one they wanted.

Speed error is its own axis. A transport running 1% fast lifts pitch by 17 cents, which is most of a fifth of a semitone and plainly audible against a synth that is not moving with it. Two decks each off by half a percent in opposite directions give you the same 17 cents between them. Halve the speed deliberately and you get an exact octave down at half tempo, which is the mechanism behind [chopped and screwed](https://gazillionindustries.com/how-to-chop-and-screw/) and everything filed under [varispeed](https://gazillionindustries.com/what-is-varispeed/).

## Where the machine sits in a chain

A tape machine is the last thing before the mix leaves the building, and it is a processor whether you asked for one or not. There is no bypass. Every choice you make about level upstream is also a choice about how much saturation you print, which makes [gain staging](https://gazillionindustries.com/gain-staging/) into tone control and puts the [VU meter](https://gazillionindustries.com/vu-meter/) in charge of the sound rather than merely reporting on it.

The order inside the chain follows from that. Compression before tape lands on the tape as compression; compression after tape is working on material whose peaks have already been rounded off, so it reacts less and grabs later. Reverb before tape gets the hiss and the wobble printed into its tail, which is most of what makes old records sound like one place rather than a dry track with a plugin on it. Anything you want clean stays off the machine entirely, which was the actual working practice, not a purist position. Keep some [headroom](https://gazillionindustries.com/headroom-in-mixing/) for the peaks you still want.

In a DAW the equivalent decision is where the tape processing sits on the bus. On the drum bus it does the peak-rounding job. On the master it does the glue job and the noise job at once, and the hiss from ten instances stacks. One instance late in the chain, hit properly, beats ten instances hit gently, for the same reason one generation of tape beats three.

## Failure modes and what they sound like

- **Dirty heads:** dull first, then intermittent. Oxide builds on the gap, lifting the tape off it. The top goes before anything else, because the top is the smallest thing on the tape.

- **A magnetized head:** raised hiss and a top end that gets slightly worse every single time you play a tape, because the head is partly erasing the shortest wavelengths as they pass. This one destroys masters quietly.

- **Azimuth error:** dull, and hollow when you sum to mono. Dull alone is dirt. Dull plus a mono collapse is alignment.

- **Worn pinch roller:** flutter. Fast, small pitch movement that reads as a roughness on sustained tones rather than as pitch.

- **Print-through:** a ghost of a loud transient audible before it arrives, magnetized into the adjacent layer on the reel. Storing tape tails-out hides it behind the transient instead of in front of it.

- **Binder failure:** squealing, and oxide shedding onto the heads mid-pass. Old stock that has absorbed moisture.

- **Dropouts:** a momentary hole where the tape lost contact or the coating is thin. Brief, full-band, and unrepairable.

- **Over-level:** dense, dull, and with the transients gone flat. Tape does not announce this the way a converter does, which is the trap. (It also sounds excellent right up until it doesn't, which is the other trap.)

## Test it in your own session

You can hear every mechanism above inside an hour, without a machine, using whatever tape processing you already own. Use tones, not music: music hides all of this.

- Render a 30-second sine sweep from 20 Hz to 20 kHz at −12 dBFS.

- Print it through the tape processing at a level that reads around 0 VU.

- Put a spectrum analyzer after it and capture the curve.

- Compare it against the dry sweep. Note the high-frequency roll-off and any low-frequency lift.

- Raise the input by 6 dB and print the sweep again.

- Compare the two printed sweeps. The top end should fall further at the higher level.

- Replace the sweep with a steady 1 kHz tone and look at the harmonics above it.

- Replace that with a steady 440 Hz tone and listen for the pitch to move.

Every major DAW ships the tools for this. Live has Spectrum; Logic Pro has an analyzer built into Channel EQ; FL Studio shows one in Fruity Parametric EQ 2. Any tuner will make step eight visual instead of a judgment call. If you want the per-DAW setup written out, see [tape plugins for Ableton Live](https://gazillionindustries.com/tape-plugins-for-ableton-live/), [for Logic Pro](https://gazillionindustries.com/tape-plugins-for-logic-pro/) and [for FL Studio](https://gazillionindustries.com/tape-plugins-for-fl-studio/). For the real version with a real deck, [how to record to cassette](https://gazillionindustries.com/how-to-record-to-cassette/) is the procedure.

## Where it costs you

A tape machine costs money, floor space and a maintenance schedule. Heads need cleaning before every session, demagnetizing on a calendar, and replacement when the gap wears open. Alignment is a tone, a meter and twenty minutes, and it drifts. Tape stock is consumable and the good stock is finite.

The workflow costs more. There is no undo, no non-destructive punch, and no rearranging a verse after the fact. Every copy is a generation: two equal, uncorrelated hiss beds add to 3 dB more noise than one, and the top end goes with them, which is why a third-generation bounce has a texture of its own. See [four-track recording](https://gazillionindustries.com/four-track-recording/) for what planning around that actually looked like. And the wobble you are paying for is a wobble: everything printed through the machine drifts out of tune with everything that was not.

## Questions people ask

### What are the disadvantages of a tape recorder?

Noise, limited high end at slow speeds, loss of quality with every copy, tape wear, and maintenance: heads need cleaning, demagnetizing and alignment. Editing also means physically cutting or re-recording tape.

### What does bias do on a tape machine?

Bias is a high-frequency signal added during recording that helps the tape respond linearly to the audio. Without it, recordings would be distorted; the amount of bias also affects tone.

### Why does tape sound warm?

Tape rounds off peaks as it saturates, softens the highest frequencies and adds a low-frequency bump, which together reduce harshness and add weight.

### What are the three heads on a tape recorder?

Erase, record and playback, in that order along the tape path. The erase head clears the tape, the record head writes the signal as magnetism, and the playback head reads it back as voltage. Cheaper machines combine record and playback into one head, which means you cannot monitor what landed on the tape until you rewind and play it.

### How fast does tape move in a tape machine?

A cassette runs at 1.875 inches per second, which is 4.76 cm/s. Professional reel machines typically run at 15 or 30 inches per second, eight and sixteen times cassette speed. Faster tape gives each second of music more surface, which means a better top end and less noise, and burns through tape proportionally faster.

### Why does tape lose high frequencies at slow speeds?

Because a tone occupies a physical length on tape equal to speed divided by frequency. At cassette speed a 15 kHz tone is only about 3 microns long, and a playback head cannot resolve a wavelength approaching the width of its own gap. The same tone at 15 ips is 25.4 microns long and reads back easily.

### What is head bump on tape?

A ripple in the low-frequency response, a lift and a dip, caused by the recorded wavelength becoming comparable to the physical size of the playback head structure. Because it depends on wavelength, it moves with speed: double the tape speed and the bump climbs an octave.

### What happens if the bias is set wrong?

Too little bias gives you a bright, thin recording that distorts early. Too much gives you a clean midrange and a dark top, because the bias partly erases the shortest wavelengths as they are written. On a cassette deck this is usually the tape type switch being set to the wrong formulation.

### Does copying a tape make it sound worse?

Yes, and predictably. The copy carries the original's hiss plus its own, and two equal uncorrelated noise beds sum to about 3 dB more than one. Saturation and high-frequency loss accumulate the same way. Three generations in, the quiet passages have a texture that was not in the performance.

### Why do tape heads need cleaning and demagnetizing?

Oxide shed from the tape builds on the gap and lifts the tape off it, costing the top end first. Separately, the heads gradually acquire a permanent magnetic charge from the signal passing through them, and a magnetized head erases a little of the high end from every tape it plays. Cleaning is per session; demagnetizing is on a schedule.

### What is print-through on tape?

A loud passage magnetizing the layer of tape wound against it on the reel, so you hear a faint ghost of a transient before it arrives. It gets worse with time, heat and thin tape. Storing tape tails-out puts the ghost after the loud event instead of before it, where it is largely masked.

### Is a tape machine analog?

Yes. The magnetism on the tape varies continuously in step with the voltage from the microphone, with no sampling and no quantization anywhere in the path. Its limits are physical rather than numerical: particle size, gap width, tape speed and how much magnetization the coating will accept.

### Why did studios stop using tape machines?

Cost, maintenance and editing. Tape stock is consumable, machines need alignment and parts, and a cut is a cut. Digital recording removed the noise floor, the generational loss and the physical edit at once. What it also removed, and what people then spent twenty years buying back, is everything on the list above.

## What TRIPLE OG does

TRIPLE OG is our cassette tape simulation: a cassette transport, with six controls for what the medium is and what it's doing, and two for your hands. **TONE**, **HISS**, **AGE** and **DRIVE** set what the tape is, **WOW FLUT** and **CATCH** set what the transport is doing, and **SCRUB** and **SLAM** let you grab it. The display shows the reels, the tape and the two heads, with a pair of VU meters against a 0 VU reference so you can see how hard you're hitting it.

**AGE** runs in years, nought to sixty, and moves the whole machine at once rather than one parameter at a time. The transport controls are the part you play: **SLAM** stops the tape and brings it back in sync, **SCRUB** runs the head backward and springs home when you let go, and **CATCH** makes the tape drag and then sprint to make up the time. It runs on Mac and Windows as VST3, AU and standalone.

Rust on plastic, a magnet, and a motor that never quite keeps perfect time. That's the whole trick, and people still build studios around it.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
