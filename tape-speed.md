# Tape speed

> What tape speed does: why faster tape means more top end and less hiss, the standard speeds from cassette to 30 ips, and why 15 and 30 both have fans.

Source: https://gazillionindustries.com/tape-speed/  
Published 2026-09-20, updated 2026-09-20. By Gazillion Industries, who make TRIPLE OG.

---

Two engineers can spend an hour arguing about a number that describes how fast a ribbon of plastic goes past a magnet. They are both right, which is the annoying part.

Tape speed is how fast the tape passes the heads, measured in inches per second. Faster tape gives better high-frequency response, a lower noise floor and less pitch instability, because the same second of audio is spread over more physical tape. Slower tape costs you top end and raises hiss, and it uses less tape. Standard cassettes run at 1 7/8 ips; reel-to-reel machines usually offer 7 1/2, 15 or 30 ips, and the choice between the last two is a matter of taste rather than quality.

## The short version

- **Cassette**: 1 7/8 ips (4.76 cm/s)

- **Reel**: 3 3/4, 7 1/2, 15 and 30 ips

- **Faster**: more top end, less hiss, steadier pitch, more tape used

- **Slower**: darker, noisier, more wow and flutter, cheaper to run

- **15 vs 30**: 15 has more low-end bump, 30 is tighter and cleaner

- **Changing it**: speed and pitch move together, always

- **The ladder**: 30, 15, 7 1/2, 3 3/4, 1 7/8 — each rung is half the last, so each step is exactly an octave

- **In cm/s**: 76.2, 38.1, 19.05, 9.525, 4.7625

- **Pitch from speed**: semitones = 12 × log2(new speed ÷ old speed)

- **One percent off**: 17.2 cents, about a sixth of a semitone

## Why faster is cleaner

Magnetic tape stores audio as patterns of magnetization along its length, so a high frequency at a slow speed has to fit into a very short stretch of tape. Past a certain point the head can no longer resolve the pattern and the top end simply stops. Double the speed and every wavelength gets twice as long, so the top extends and the signal sits further above the tape's own noise.

The same logic explains wow and flutter. Speed variations are a percentage of the speed, and the faster the tape is moving, the less a given mechanical wobble matters to the pitch. A cassette at 1 7/8 ips is the most unstable format in common use, which is precisely why it sounds like something rather than nothing. [Wow and flutter](https://gazillionindustries.com/wow-and-flutter/) covers what that instability is made of.

## Wavelength is the number underneath the speed

All of it comes out of one division. The length of tape a tone occupies is the speed divided by the frequency, and the units get unfriendly fast. At 15 ips the tape moves 38.1 cm every second, so a 10 kHz tone is written as a magnetic pattern 38.1 ÷ 10,000 = 0.00381 cm long. That is 38.1 microns. At 15 kHz it is 25.4 microns.

Run the same tones at cassette speed and the numbers collapse. 4.7625 ÷ 10,000 gives 4.76 microns at 10 kHz, and 3.18 microns at 15 kHz — eight times shorter, because 15 divided by 1 7/8 is 8. Nothing else in the signal path changes that figure. Bias helps the oxide accept the pattern, the electronics can lift what comes back, but the pattern is the size the speed makes it.

This is why a dirty head ruins a cassette and barely troubles a reel machine. Separation between tape and head costs high frequencies at a rate fixed by the ratio of the gap to the wavelength: the field falls off exponentially with separation, which in decibels works out at 20 ÷ ln(10) × 2π = 54.6 dB for every whole wavelength of gap. Put half a micron of shed oxide between the tape and the head. At 15 ips a 10 kHz tone loses 54.6 × 0.5 ÷ 38.1 = 0.7 dB, which nobody on earth hears. At 1 7/8 ips the same speck costs 54.6 × 0.5 ÷ 4.76 = 5.7 dB, and that you hear from the next room as a blanket over the record.

## Why slow tape hisses more

Tape noise is granular in the literal sense. The coating is a field of magnetic particles, and hiss is the sound of a finite number of them going past the gap. On that model the signal adds coherently while the noise adds as power, so doubling the speed doubles the particles read per second and improves the ratio by 10 × log10(2) = 3.01 dB. Climb the whole ladder from 1 7/8 to 30 ips and that is four doublings: 4 × 3.01 = 12 dB of noise floor, bought with sixteen times the tape.

Twelve decibels is the distance between hiss you notice on a quiet intro and hiss you notice on everything. [Tape hiss](https://gazillionindustries.com/tape-hiss/) covers what the noise is made of and where it sits.

## Where the low end goes when the speed changes

Fifteen has a reputation for low end that thirty does not, and the reason is geometry rather than taste. A playback head's low-frequency response is not flat: the finite size of the head structure sets up a broad lift whose position is fixed by wavelength. Pin the wavelength and the frequency travels with the speed.

Say a machine's lift lands at 50 Hz at 15 ips. Run at 30 and the same wavelength goes past in half the time, so it moves to 50 × 30 ÷ 15 = 100 Hz. Drop to cassette speed and it falls to 50 × 1.875 ÷ 15 = 6.25 Hz, under the program and under almost every speaker. One head geometry, three outcomes: a kick lift at 15, a low-mid thickening at 30, nothing at all on a cassette. Fifteen is not warmer in the abstract. Its lift happens to sit where kick drums live.

## What producers actually choose

- **30 ips:** the cleanest and tightest, with the least low-frequency unevenness and the highest cost in tape.

- **15 ips:** the common choice for music, partly because of a rise in the low frequencies from the head that many engineers like on drums and bass.

- **7 1/2 ips:** noticeably darker, used for demos and for effect.

- **3 3/4 ips:** the domestic reel speed, and the rate a four-track cassette machine reaches by running the shell at double the standard.

- **1 7/8 ips:** cassette, and the sound most people mean when they say tape.

Those numbers are a binary ladder, each rung half the one above, so every adjacent pair is exactly an octave apart. Record on one rung, play on the next, and the material returns an octave up or down: perfectly in tune with itself and in tune with nothing else in the room. That accident of engineering is why speed tricks on tape were so easy to reach and so hard to make subtle.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is a cassette transport rather than a studio machine: TONE is the playback system's brightness, where 50 is a musically neutral cassette rather than a bypass.

## Changing speed on purpose

Record at one speed and play back at another and everything moves together: a tape recorded at 7 1/2 and played at 15 comes back an octave up and half as long. That is varispeed, and it was a production tool long before it was a plugin, used to fix a singer's key, to make a drum kit sound larger by recording it fast and playing it slow, and to put a vocal somewhere no human throat goes. [What is varispeed](https://gazillionindustries.com/what-is-varispeed/) has the math, and [time stretching](https://gazillionindustries.com/time-stretching-explained/) covers the modern alternative where the pitch stays put.

## Speed to semitones, with the arithmetic

A speed ratio converts to pitch with one line. Semitones = 12 × log2(r), where r is the new speed divided by the old, and the duration scales by 1 ÷ r. Every varispeed decision you will ever make falls out of those two statements.

- **×2.000**: +12.00 semitones, half as long

- **×1.500**: +7.02 semitones, two cents wide of an equal-tempered fifth, two thirds as long

- **×1.250**: +3.86 semitones, four fifths as long

- **×1.0595**: +1.00 semitone exactly — the twelfth root of two

- **×1.010**: +17.2 cents, and 1 percent shorter

- **×0.800**: −3.86 semitones, a quarter longer

- **×0.750**: −4.98 semitones, a third longer

- **×0.500**: −12.00 semitones, twice as long

Two of those are worth keeping in your head. A semitone up needs the tape 5.95 percent fast, because the twelfth root of two is 1.05946. And a 1 percent error is 17.2 cents: small enough to survive on its own, large enough to turn a doubled part into a chorus the moment it sits next to the original.

A worked case. A synchronous motor takes its speed from the mains frequency, so a machine set up on a 50 Hz supply and run on a 60 Hz supply turns 20 percent fast, which is 12 × log2(1.2) = 3.16 semitones. The tape comes back a minor third sharp and rock steady while it does it. That is the tell: a speed error and a speed instability are different faults and they sound nothing alike.

A speed ratio you can hear rather than read. The same phrase three times: held at rate 1.000, then run slow, then run fast, with the rate and the shift printed on each. Pitch and length move together, which is the whole definition.

- **Dry** — rate 1.0000, no shift — https://gazillionindustries.com/skruu/skruu-dry.m4a

- **Slowed** — rate 0.9275, −7.25%, −1.30 semitones — https://gazillionindustries.com/skruu/skruu-down.m4a

- **Sped up** — rate 1.0779, +7.79%, +1.30 semitones — https://gazillionindustries.com/skruu/skruu-up.m4a

Rendered offline through [SKRUU](https://gazillionindustries.com/skruu.html), our varispeed plugin, at the rates shown. Check it yourself: 12 × log2(0.9275) = −1.30, and 12 × log2(1.0779) = +1.30.

## How to hear tape speed in your own session

No machine required. You need a loop, a stretch mode that resamples instead of stretching, and about ten minutes.

- Bounce eight bars of a drum loop at 90 bpm to a stereo file.

- Import the file onto a new track.

- Set its stretch mode to the one that resamples; in Ableton Live that is Repitch.

- Set the session tempo to 45 bpm and play the loop.

- Set the session tempo to 180 bpm and play it again.

- Mix a quiet bed of noise under the source file, filtered to an octave around 8 kHz.

- Bounce that version and repeat steps 4 and 5.

Step six is the one that teaches. At 45 bpm the noise you centered on 8 kHz arrives at 4 kHz, parked on the band the ear guards most closely, and the loop sounds filthier than that much noise had any right to make it. At 180 bpm the same bed climbs to 16 kHz and leaves the building. Every speed decision is a noise decision first.

Hosts differ in one way worth knowing. A warp or elastic mode holds the pitch while the tempo moves, which is the opposite of tape; a resample mode ties them together, which is tape. A loop that changes tempo without changing key is not speed at all, it is [pitch and tempo pulled apart](https://gazillionindustries.com/how-to-change-pitch-without-changing-tempo/), and the artifacts are nothing alike. [Varispeed in every DAW](https://gazillionindustries.com/varispeed-in-every-daw/) has the mode names per host, and [varispeed in Ableton Live](https://gazillionindustries.com/varispeed-in-ableton-live/) goes deeper into one of them.

## Speed faults, and what each one sounds like

- **Steady speed error:** the whole tape in the wrong key, rock solid, no movement, and only catchable against a tuned instrument. At 3 percent that is 51 cents, half the way to the next note.

- **Slow drift:** the key wanders over minutes as a reel unloads and the tension changes. Inaudible inside one pass, obvious when you line the top of the take up against the bottom of it.

- **Wow:** speed movement under roughly 4 Hz. Sustained notes swim. Pianos and held vocals expose it, drums hide it.

- **Flutter:** speed movement above that, up to a few tens of hertz. It reads as grain and roughness rather than as pitch, and it lands on cymbals and on anything with a long high tail.

- **Scrape flutter:** faster still, from the tape vibrating between guides. It puts sidebands around every partial and reads as a brittle edge nobody can EQ out, because the frequencies causing it are the ones you want to keep.

- **Falling supply:** a portable machine on tired cells records slow, so the tape plays back sharp on a healthy deck. The pitch error walks in one direction across the whole side.

The digital version has a fault of its own. Speed a 44.1 kHz file up by two the wrong way, by throwing away every other sample instead of resampling, and everything above 11,025 Hz folds back down the spectrum. Cymbals turn into a metallic whistle that moves the wrong way when the pitch moves. [Aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/) covers why, and it is the one speed artifact tape cannot produce.

## Where speed sits in a chain

On a machine the speed is the first thing that happens, because it is a property of the medium, and everything downstream inherits it. In a plugin chain you get to choose the position, and the choice matters most for noise, for rooms and for anything with a time constant.

- **Noise:** anything added before the speed change moves with it. Slow by half and the hiss drops an octave into the middle of the mix. Add it after and it stays where you put it. That is the biggest single reason a slowed loop sounds cheaper than its parts.

- **Rooms:** a reverb tail in front of the speed change gets longer and darker with the material, so the room appears to grow. Put the reverb after and the room stays the size it was while the source moves. Both are useful, and [slowed and reverb](https://gazillionindustries.com/how-to-make-slowed-and-reverb/) lives entirely inside that decision.

- **Delays:** on a tape delay the time is head spacing divided by speed, so speed is the delay control. Two inches of gap between record and play heads at 7 1/2 ips is 2 ÷ 7.5 = 0.267 seconds, which is 267 ms, an eighth note at 112 bpm. Run the same machine at 15 ips and the delay halves to 133 ms without anything else moving. [Tape delay](https://gazillionindustries.com/tape-delay-explained/) has the rest of it.

- **Saturation:** drive in front of the speed change has its harmonics drag down with the fundamental. Drive after it generates them at the new pitch, which keeps some top where the ear expects it. On a heavy slow down the second order usually wins.

## Where it costs you

Speed is a budget. Thirty inches per second through a ten and a half inch reel is about fifteen minutes of tape, so a fast session is an expensive one, and that arithmetic decided more records than any engineer's preference. Slow speeds cost fidelity in the direction people now pay for: hiss, limited top, unstable pitch. And the half-speed trick, recording something slow so it comes back bright and short at full speed, also doubles every bit of noise you recorded with it.

The arithmetic is merciless. At 15 ips one minute is 15 × 60 = 900 inches, or 75 feet, so a four-minute take eats 300 feet on every pass, and 600 at 30 ips. Go the other way and the cassette's economy is obvious: 30 minutes a side is 1800 × 1.875 = 3375 inches, which is 281 feet, or 85.7 meters, carrying two sides in opposite directions on one length. That whole C60 would run three minutes forty-five at 15 ips. The format did not choose to sound like that. It chose to fit in a pocket, and the sound is the receipt.

## Questions people ask

### What does tape speed do?

It sets how much physical tape each second of audio occupies. More tape per second means better high-frequency response, less noise and steadier pitch; less tape means a darker, noisier, less stable recording.

### What is the standard tape speed for a cassette?

1 7/8 inches per second, which is 4.76 centimeters per second. Some four-track cassette recorders ran at double that to gain fidelity, at the cost of half the recording time.

### Is 15 or 30 ips better?

Thirty is cleaner and tighter; fifteen has a low-frequency character that many engineers prefer on rhythm sections. Neither is better in general, and plenty of records you admire were cut at both.

### Why does a tape sound lower when it plays slowly?

Pitch and speed are tied together on tape: play back slower than you recorded and every frequency drops in proportion, along with the tempo.

### What is 15 ips in cm/s?

38.1 cm/s, since an inch is 2.54 cm. The rest of the ladder: 30 ips is 76.2 cm/s, 7 1/2 is 19.05, 3 3/4 is 9.525 and 1 7/8 is 4.7625.

### How much does tape speed change the pitch?

By 12 × log2 of the speed ratio, in semitones. Doubling the speed is exactly +12 semitones. A 5.95 percent increase is one semitone. A 1 percent error is 17.2 cents.

### Does changing tape speed change the tempo as well?

Yes, in exactly the same proportion, and there is no way to separate them on tape. A take recorded at 90 bpm at 7 1/2 ips plays at 180 bpm at 15 ips, an octave up. Splitting pitch from tempo is a digital idea and it needs [time stretching](https://gazillionindustries.com/time-stretching-explained/) to do it.

### Why does my cassette play at the wrong speed?

Three usual causes: a stretched or slipping belt, a motor running off spec, or batteries going flat while it records. A 3 percent error is 51 cents, which is audibly out against anything tuned. A drifting error also brings instability with it; a steady error does not.

### How long is the tape inside a C60?

About 281 feet, or 85.7 meters. Thirty minutes a side at 1 7/8 ips is 1800 × 1.875 = 3375 inches, and the same length carries both sides by running in opposite directions across different halves of the width.

### What is half-speed mastering?

Running the source and the cutting lathe at half their normal rates, so the cutter head traces every frequency an octave lower than it really is and the mechanical problems at the top of the band get easier. It costs twice the cutting time and needs an equally slowed replay chain to be worth anything.

### Can a plugin change tape speed?

A plugin can change playback rate, which does the same arithmetic to pitch and duration. What it does not automatically bring is the rest of what a slow machine does: the noise floor, the head losses, the low-frequency lift, the instability. [Tape speed plugins](https://gazillionindustries.com/tape-speed-plugins/) covers the tools, and [how a tape machine works](https://gazillionindustries.com/how-does-a-tape-machine-work/) covers what the speed is acting on.

### Does doubling the speed double the frequency response?

It doubles the frequency of every loss that depends on wavelength, which is most of what limits tape at the top. It does nothing for the ceilings set by the electronics, the head inductance or the monitoring, so the improvement is real and it is not unlimited.

## What TRIPLE OG does

TRIPLE OG is a cassette transport, and the medium it models is the slow one. **TONE** sets the playback system's brightness, **HISS** is a continuous broadband bed shaped and partly decorrelated across the channels, and **AGE** is in years, nought to sixty, taking the whole machine darker, noisier, slightly more saturated and less speed-stable at once. **WOW FLUT** is continuous, bounded instability built from several motions at once, because one sine is a chorus and everybody hears it.

The machine rather than the tape. **SLAM** is a stop you press, **SLAM RETURN** sets how long it takes to fall, and **CATCH** is the drag and the sprint back.

The transport is where speed stops being a setting and becomes something you play. Every control in that row is a speed event with a shape: **SLAM** takes the rate to a stop and returns it in sync, **SCRUB** takes it negative and springs home, and **CATCH** drops it under 1.000 then overshoots to make the time back. A steady rate is what a good machine gives you. A rate with a hand on it is a different offer. For the continuous version, with the ratio held anywhere you like, that is [varispeed](https://gazillionindustries.com/what-is-varispeed/).

Let the two engineers keep arguing. The tape is already moving.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
