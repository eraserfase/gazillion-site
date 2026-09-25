# How to make a tape loop

> How to make a tape loop: splicing tape into a circle, working out the loop length from the tape speed, keeping tension, and the version you can do in a DAW.

Source: https://gazillionindustries.com/how-to-make-a-tape-loop/  
Published 2026-09-20, updated 2026-09-20. By Gazillion Industries, who make TRIPLE OG.

---

A length of tape, spliced end to end, running past a head forever. It is the least sophisticated idea in recorded music and it has produced more genuinely strange records than any synthesizer.

A tape loop is a piece of magnetic tape joined into a circle so the same audio plays over and over. To make one, record the phrase you want, cut the tape where the phrase starts and ends, join the two ends with splicing tape, and run the loop through the machine with a pencil, a bottle or a spare spindle holding the far end so it stays under tension. The length of the loop divided by the tape speed gives you the duration of the cycle.

## The short version

- **What**: tape spliced into a circle, playing endlessly

- **Length**: loop length divided by tape speed equals cycle time

- **Cassette speed**: 1 7/8 inches per second, so 4 seconds needs about 7.5 inches

- **One bar**: at 90 BPM a 4/4 bar is 2.667 seconds, which is exactly 5 inches of cassette tape

- **Join**: splicing tape on the back, cut at an angle, never adhesive tape

- **Tension**: something holding the far end: a pencil, a spindle, a mug

- **Drift**: two loops 11 ms apart take 242 cycles, about 11 minutes, to line up again

- **Aging**: each pass wears the oxide: the loop changes while it plays

## Why anyone still does this

A tape loop is not a sampler with fewer features. The tape is physically passing a head, so every revolution is a new performance: the oxide sheds, the tension varies, the pitch drifts, and the recording is quietly destroying itself while you listen. Two loops of slightly different lengths will drift out of phase with each other and slowly come back, which is the whole mechanism of Steve Reich's "It's Gonna Rain" in 1965. William Basinski's disintegration recordings, made as he digitized old tape loops that were falling apart on the machine, are the same principle taken to its end.

Nothing in a DAW does that on its own, because a file played twice is identical twice. You can imitate the drift, and you have to decide to.

## Loop length is arithmetic, not guesswork

Cycle time is loop length divided by tape speed. Run that division backward and you get the number you actually need at the table: how many inches of tape one bar of your music costs.

At cassette speed, 1 7/8 inches per second, a 4/4 bar at 90 BPM lasts 2.667 seconds and takes exactly 5 inches of tape. At 7.5 inches per second the same bar is 20 inches. At 15 inches per second it is 40 inches, which is three and a third feet of tape going round the room before you have allowed anything for the splice.

- **One bar at 90 BPM**: 2.667 s — 5 in at 1 7/8 ips, 20 in at 7.5 ips, 40 in at 15 ips

- **One bar at 120 BPM**: 2.000 s — 3.75 in, 15 in, 30 in

- **Four seconds**: 7.5 in, 30 in, 60 in

- **Eight seconds**: 15 in, 60 in, 120 in

Faster tape buys top end and charges you in length. The wavelength written onto the oxide is speed divided by frequency, so a 10 kHz tone at 1 7/8 ips occupies 0.00019 inches, about 4.8 microns. The same tone at 15 ips occupies 0.0015 inches, about 38 microns. The head gap is a fixed size, so it is always the short wavelength that gets averaged into nothing. That is the trade in one line: a long loop sounds better and is harder to hold up. [Tape speed](https://gazillionindustries.com/tape-speed/) has the full version.

## What the splice does to the sound

The angled cut is not only about glue area. A diagonal join crosses the head gap gradually, over a distance along the tape equal to the tape's own width, which turns a switch into a short transition.

Do the arithmetic and the difference between machines appears. Cassette tape is 3.81 mm wide and moves at 47.6 mm per second, so a 45 degree join takes 80 milliseconds to travel past a fixed point. Quarter-inch tape at 15 inches per second is 6.35 mm wide moving at 381 mm per second, and the same join passes in 17 milliseconds. The slow machine gives you a soft, long transition. The fast machine gives you a hard, short one you are less likely to notice.

Splicing tape goes on the back, the dull side, and it has to be splicing tape. A 2.667-second loop passes the head 1,350 times an hour, so whatever is on that tape gets applied to the heads, the guides and the pinch roller 1,350 times an hour. Office adhesive leaves a stripe you will be cleaning off for a week, and the drag it causes shows up as pitch movement long before you work out where it is coming from.

The transport half. On a loop, the instability controls do the work a real splice and a real pinch roller would have done for free.

## How to make a tape loop at home

You need a machine you can thread by hand, a splicing block or a very straight edge, a single edge blade, splicing tape and something to hold the far end. A pencil taped to the desk is the traditional answer and it works.

- Record the phrase onto tape, leaving a little room either side.

- Find the start and end points by ear, marking the back of the tape with a pencil.

- Cut both marks at a 45 degree angle with a splicing block, or a very steady hand.

- Butt the two ends together, shiny side down, and join them with splicing tape on the back.

- Trim the splice flush so it does not catch on the heads.

- Thread the loop through the transport and hold the far end out with a pencil or spindle.

- Adjust the tension: too slack and it slips, too tight and the pitch rises.

- Record the output back into your session for as many passes as you can stand.

- Keep the first three passes whatever happens, because the first pass is the brightest one you will ever have.

- Measure the cycle time off the recording, then divide the loop length in inches by it to get the machine's true speed.

Measure the tape, not the distance to the pencil. The path out and back is roughly double the gap, plus whatever the machine's own threading adds, and the error in that estimate is larger than the whole interval you are trying to control. Cut a measured length flat on the desk, join it, and you know what you have.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is a cassette transport: AGE is in years, nought to sixty, and WOW FLUT is continuous, bounded instability built from several motions at once, which is the part a clean loop is missing.

## Doing it in the box

You can get most of the behavior without a splicing block, as long as you accept that you are imitating a mechanism rather than running one.

- Bounce your loop to a file.

- Run it through tape-style processing and record the output as a new file.

- Repeat that four or five times, so each generation loses top end and gains noise.

- Detune each generation by a few cents, and vary the loop length by a few milliseconds.

- Layer two versions of different lengths so they drift against each other.

Generation loss adds up in a way you can predict. Each bounce lays down another noise floor, and uncorrelated noise sums at 10 log10 of the number of layers: two generations is 3 dB of extra noise, four is 6 dB, five is 7 dB. The signal did not get louder, so that is 7 dB of signal-to-noise gone by the fifth pass. Top end compounds the same way. If one generation costs you 2 dB at 10 kHz, five cost you 10 dB, and 10 dB at 10 kHz is the difference between a loop that sits in a mix and a loop that is the mix.

The drift is the part people leave out. Two loops of exactly the same length stacked on top of each other is a thicker loop; two loops eleven milliseconds apart is a piece of music that changes for the next ten minutes. See [wow and flutter](https://gazillionindustries.com/wow-and-flutter/) for the instability, and [tape speed](https://gazillionindustries.com/tape-speed/) for what the transport speed costs you in top end.

## Two loops, and the arithmetic of drift

The interval between two loops is the whole composition, and it is smaller than most people guess. If the loops differ in length by d seconds, the second slips d further behind on every revolution, and the number of revolutions before they line up again is the loop period divided by d.

Take a 2.667-second loop against one 11 milliseconds longer. 2.667 divided by 0.011 is 242 cycles, and 242 cycles at 2.667 seconds each is 646 seconds: just under eleven minutes in which no bar is the same as the one before it. Halve the interval to 5 milliseconds and the journey takes 533 cycles, close to 24 minutes. Open it out to 40 milliseconds and the whole thing is over in three, which stops reading as drift and starts reading as a mistake.

- **3 ms apart**: 889 cycles — about 40 minutes — 144 samples at 48 kHz

- **5 ms apart**: 533 cycles — about 24 minutes — 240 samples

- **11 ms apart**: 242 cycles — about 11 minutes — 528 samples

- **20 ms apart**: 133 cycles — about 6 minutes — 960 samples

- **40 ms apart**: 67 cycles — about 3 minutes — 1,920 samples

On tape, 11 milliseconds at cassette speed is 0.021 inches, one forty-eighth of an inch. Nobody cuts to that tolerance with a blade on a kitchen table, and that is the honest reason tape drift sounds the way it does. You do not choose the interval. You find out what you got. In a DAW you can type 528 samples and get precisely the drift you asked for, and then spend the rest of the afternoon making it sound like you did not.

The difference is audible in one bar. Here is a loop with the speed held perfectly steady, then the same loop with the transport allowed to wander, then the same loop through a worn deck.

- **Dry** — no processing — speed holds at 1.000 — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Wow and flutter 65** — speed moves between 0.941 and 1.071 — https://gazillionindustries.com/tripleog/tog-wowflutter.m4a

- **Age 35, hiss 45, drive 30, wow 40** — a worn deck — speed 0.951 to 1.059 — https://gazillionindustries.com/tripleog/tog-aged.m4a

The same eleven seconds each time, rendered offline through [TRIPLE OG](https://gazillionindustries.com/tripleog.html) at the settings shown. No other processing, no master bus, no edits. A speed of 0.941 is 105 cents flat and 1.071 is 119 cents sharp, so the second file travels 224 cents, a little over two semitones, top to bottom.

## Where the loop length lives in each DAW

Every DAW will loop a file. They differ on whether the loop is allowed to have its own length, which is the only question that matters here.

- **Ableton Live:** an audio clip's Loop switch only comes alive with Warp on, so a clip running at its own rate cannot loop in Session view. Lay the copies out in Arrangement instead, or warp in Re-Pitch, which moves pitch with length the way a transport does.

- **Logic Pro:** turn Flex off on the track, set the region length numerically in the inspector, then loop the region. Switch the display to samples and you can offset the second copy by an exact figure instead of by eye.

- **FL Studio:** the playlist is the honest tool. Paste the clip along the timeline and nudge each copy; the Resample stretch mode is the one that ties pitch to length.

- **Reaper:** item playback rate with the preserve-pitch option unchecked gives you the tape relationship directly, and the item length follows.

- **Bitwig:** the Raw stretch mode plays the file at its own rate, which is what you want before you start offsetting copies.

In all five, the move is the same underneath: two copies, one a specified number of samples longer, both left alone for ten minutes. Anything that quantizes the clip to the grid is undoing the reason you are here.

## Where a loop sits in a chain

A loop is a source, so nearly everything goes after it. The order that matters is speed first, tone second, noise last.

Put the varispeed ahead of the tape tone and the drift moves the music. Put it after and it moves the hiss too, which announces a plugin rather than a machine. Keep the noise bed at the end of the tape chain so nothing downstream is reacting to a floor that was never in the recording, and check what a limiter does to that floor before you commit: a hiss bed that is inaudible on its own becomes a breathing pad once something is pulling 6 dB out of the master.

After the tape stage it is an ordinary source with an unusual history. It takes the same [chain order](https://gazillionindustries.com/drum-bus-chain-order/) and the same [gain staging](https://gazillionindustries.com/gain-staging/) as anything else you record. If you are chopping the loop into a beat rather than letting it run, [how to flip a sample](https://gazillionindustries.com/how-to-flip-a-sample/) picks it up from there, and [varispeed](https://gazillionindustries.com/what-is-varispeed/) covers the pitch-and-speed relationship in full.

## Failure modes and what each one sounds like

- **Splice tick:** a click landing at exactly the loop period, which your ear converts into a metronome you did not ask for. Recut at a shallower angle, trim the splice flush, and put the join under a transient rather than in a gap.

- **Slip:** the pitch sags and recovers once per revolution, always at the same point in the phrase. That is one tight spot in the path, not the tape. Rethread and watch where the loop is being pulled.

- **Creep:** the cycle gets gradually longer as the splice and the tape stretch under tension, so a loop that started on the grid is behind it by the end of the take. Record the whole session and pick your window afterward.

- **Dropout:** a brief hole where oxide has shed or the tape lifted off the head. Full-band, unrepairable, and most obvious on sustained tone. After a few hundred passes they start arriving in the same places.

- **Head crud:** dull, then intermittent. Shed oxide builds on the gap and lifts the tape off it. A loop sheds onto one spot rather than a whole reel, so it happens faster than it would on a normal take. Clean between passes.

- **Level sag:** every pass is slightly quieter than the last, which reads as the mix slowly closing rather than as an obvious fault. Compare pass one against pass forty on the same meter.

- **Print-through:** a ghost of a loud hit arriving before it does, magnetized into whatever layer the tape is touching. A loop held out on a pencil is not wound, so it does not accumulate this the way a stored reel does. Coil it on a spindle overnight and it will.

## Test it in your own session

Everything above can be checked in about ten minutes with the recording you already made.

- Record five continuous minutes of the loop into one file, no edits.

- Find a sharp transient on the first pass and note its position in samples.

- Find the same transient on the last pass and note that position, along with how many passes apart they are.

- Divide the sample distance by the number of passes, then by the sample rate. That is the true cycle time in seconds.

- For a four-beat loop, tempo is 240 divided by the cycle time.

- True tape speed is the loop length in inches divided by the cycle time.

A worked case. Say the measurement comes back at 2.71 seconds: 240 divided by 2.71 is 88.56 BPM, not the 90 you were aiming at. To sit in a 90 BPM session the tape has to run 1.63 percent faster, which is 28 cents sharp, and 28 cents is audible on anything with a sustained note in it. Either move the session to 88.56 or accept the 28 cents, and know which one you chose. The worst outcome is stretching it silently and wondering later why the loop lost its edge.

Second check, for the drift. Bounce your two loops as one stereo file, then look at the waveform every minute. If the transients are visibly closer together at minute five than at minute one, the drift is working. If they are locked, something in the DAW quantized a clip behind your back.

## Where it costs you

Splices wear out, and the click of a splice passing the head becomes part of the rhythm whether you invited it or not. Loops on a real machine also change while you record them, so there is no undo: the take you got is the take that exists, and the next pass is quieter and duller. That is the appeal and it is also the reason to record everything from the first pass onward.

The in-the-box version costs you differently. Five generations of bounce is five renders and five decisions you cannot walk back, and the drift that makes the loop interesting is the same drift that fights a quantized drum part. A loop whose pitch wanders will not sit politely under a tuned bassline, which is why most records that use this put the loop somewhere with room around it and keep the grid elsewhere. Decide early whether the loop is the bed or the hook, because the answer changes how much instability you can afford.

## Questions people ask

### How do I make a tape loop at home?

Record onto tape, cut the start and end of the phrase at an angle, join them with splicing tape on the non-magnetic side, and run the loop through the machine with something holding the far end under tension. Record the output as it plays.

### What is a tape loop?

A length of magnetic tape spliced into a circle so the recorded audio repeats continuously. It was the standard way of making a repeating figure before samplers, and it is still the only way to hear a recording physically age as it plays.

### How do you loop a cassette?

Open the shell, splice a short length of tape into a continuous loop, and let it run free inside the housing or outside it on a guide, which is how endless-loop cartridges worked. It takes patience and it eats tape, so practice on a cassette you do not care about.

### How long should a tape loop be?

Divide the duration you want by the tape speed. At cassette speed, 1 7/8 inches per second, a four-second loop needs roughly seven and a half inches of tape, plus the splice.

### How many inches of tape is one bar?

Multiply the bar length in seconds by the tape speed. A 4/4 bar at 90 BPM is 2.667 seconds, so it is exactly 5 inches at 1 7/8 inches per second, 20 inches at 7.5, and 40 inches at 15. At 120 BPM the same three figures are 3.75, 15 and 30 inches.

### Why does my tape loop click once every cycle?

The splice is passing the head. Either the join is not flush, the cut is too square, or the two ends are not level across the tape's width. Recut at a shallower angle and place the join under a transient in the phrase so the tick has something to hide behind.

### Why do two tape loops drift apart?

Because they are different lengths. If one is d seconds longer, it falls d further behind every revolution, and they realign after the loop period divided by d cycles. An 11 millisecond difference on a 2.667 second loop takes 242 cycles, about eleven minutes.

### Can you make a tape loop in a DAW?

You can reproduce the audible result, not the mechanism. Bounce the loop through tape-style processing several times so each generation loses top end and gains noise, then run two copies at slightly different lengths. What a DAW will not do on its own is change the file while it plays it.

### How do you sync a tape loop to a DAW?

Measure the cycle time off the recording, then set the session tempo to 240 divided by that figure for a four-beat loop. If you need a specific tempo instead, work out the speed ratio and accept the pitch shift that comes with it: 1 percent of speed is 17 cents, 3 percent is 51.

### Do you need a reel to reel to make a tape loop?

No, but you need a machine you can thread by hand and a path you can get the tape out of. A cassette deck with the shell opened works, and so does a portable machine with the door removed. The requirement is access to the head, not a particular format.

### What is the difference between a tape loop and a sample?

A sample is a fixed file, so the hundredth playback is bit-identical to the first. A tape loop is a physical object being worn down by the act of playing it, so the hundredth pass is measurably duller and quieter than the first. Everything interesting about loops comes from that one difference.

### How long does a tape loop last?

Longer than you would think and shorter than you want. A 2.667 second loop passes the head 1,350 times an hour, so wear that would take weeks on a normal reel arrives in an afternoon, and the splice usually gives out before the oxide does. Record from the first pass, because you are recording something that is on its way out.

### What tape should I use for a tape loop?

Anything you can afford to destroy, because you are going to. Old stock that has been stored damp will squeal and shed onto the heads mid-pass, which is a distinct problem from wear and worth ruling out first. Keep one known-good tape aside so you can tell a bad loop from a bad reel.

## What TRIPLE OG does

TRIPLE OG is a cassette transport with six controls for what the medium is and what it is doing. **AGE** is in years, nought to sixty: darker, noisier, slightly more saturated, less speed-stable and less perfectly matched left to right, all on one knob. **HISS** is a continuous broadband bed rather than clicks or crackle. **CATCH** is the machine failing on its own, dragging, jamming and recovering, on its own clock or from a trigger on the panel. **MIX** is on the face and defaults to 100 percent.

For loop work the useful pair is **WOW FLUT** and **AGE**. WOW FLUT is the drift a spliced loop has and a file does not, built from several motions at once so it never lands in the same place twice. AGE is generation loss without the five bounces: darker, noisier and less stable together, on one knob and reversible, which the razor blade version is not. **TONE** and **DRIVE** handle the top end and the level the loop lost on its way through.

The transport has the failures too. **SLAM** stops the tape and returns it in sync, **SCRUB** runs the head backward and springs home, and CATCH drags then sprints to catch up, which is what a loop does when the splice snags a guide.

The loop is still going round. It is a little quieter than it was when you started reading.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
