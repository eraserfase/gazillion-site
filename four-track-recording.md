# Four-track recording on cassette

> How four-track cassette recording works: four mono tracks in one direction, bouncing to free tracks, what each generation costs, and why Nebraska sounds like that.

Source: https://gazillionindustries.com/four-track-recording/  
Published 2026-09-20, updated 2026-09-20. By Gazillion Industries, who make TRIPLE OG.

---

In January 1982 a man recorded a set of demos at home on a four-track cassette machine, carried the tape around in his jacket pocket with no case, and released it as the album that September because nothing they cut in a studio sounded as right.

A four-track cassette recorder puts four separate mono tracks on a standard cassette by using the full width of the tape in one direction, instead of two stereo pairs in two directions. Each track has its own record-enable, level and pan, so you can record parts one at a time and mix them down afterward. When you run out of tracks, you bounce: combine two or three of them onto a spare track and reuse the ones you freed.

## The short version

- **How**: four mono tracks across the tape, one direction only

- **Width**: 3.81 mm of tape split four ways — 0.9525 mm a lane at the absolute most, less once the guard bands take their share

- **Speed**: many machines ran at double cassette speed for more top end

- **Bouncing**: combine tracks onto a spare one to free them up

- **Cost**: each bounce adds a generation of noise and loses top

- **The noise**: the first bounce is the expensive one, about 6 dB; every bounce after it costs less than the one before

- **Plan**: decide the bounce order before you record anything

- **Mixdown**: out of the machine into a stereo recorder, in real time

## How four tracks fit on a cassette

A normal cassette holds four tracks already: two for each side, so the tape can be flipped. A four-track machine ignores the flip and records all four in one direction at once, which is why a four-track tape played in a normal deck gives you your song with two parts backwards underneath it. Many of these machines also ran the tape at twice the standard speed, which extends the top end and halves your recording time. [Tape speed](https://gazillionindustries.com/tape-speed/) explains that trade.

The width is where the format's entire personality comes from. Cassette tape is 3.81 mm across. Four lanes divided into it leave 3.81 ÷ 4 = 0.9525 mm apiece before you subtract the guard bands that keep one track from bleeding into the next, so the working lane is narrower still. Set that against a two-inch machine carrying 24 tracks: 50.8 ÷ 24 = 2.117 mm a lane, more than twice as wide, on tape moving at least eight times faster.

Noise comes off the area of oxide the head is looking at. Signal comes off the width of the magnetized stripe. Narrow the stripe and the music slides down toward its own floor while the floor stays exactly where it was. That is the hiss, it is structural, and nothing you do at the recording stage removes it. [Tape hiss](https://gazillionindustries.com/tape-hiss/) goes further into what the floor is made of.

One practical consequence of the layout, and it catches people the first time. Track one sits at one edge of the tape and track four at the other, and the edges of a cassette take the abuse: a crease from a jammed shell, a curled ribbon after a violent rewind, the slow damage of a machine that does not quite hold the tape flat. It lands on the outer lanes first. Put the part you cannot possibly re-record on track two or three.

## What the double-speed switch actually buys

Double speed is the one setting on these machines that changes everything downstream, and the trade is pure arithmetic. Standard cassette speed is 1 7/8 ips, which is 4.7625 cm/s. The double-speed position runs 3 3/4 ips, or 9.525 cm/s. Every wavelength written on the tape gets twice as long: a 10 kHz tone that occupied 4.763 microns of oxide now occupies 9.525, and 15 kHz goes from 3.175 microns to 6.35. Longer patterns are easier for a head to resolve, so the top extends and the music sits further above the noise.

You pay in tape, and the sum is brutal. A C60 holds 30 minutes a side, but a four-track spends both sides at once, so 30 minutes is the whole reel — and at double speed it is 15. A C90 gives you 45, or 22.5 doubled. That is not much room for a band that likes to run the tape while it argues. It is also why so many home four-track records open on the count-in: the count-in was the take.

Speed sets how much the transport's wobble costs you as well, because wow and flutter are a percentage of the speed rather than a fixed quantity of pitch. The same stiff bearing produces half the pitch error at twice the speed. [Wow and flutter](https://gazillionindustries.com/wow-and-flutter/) is the long version of that.

## How to work on four tracks

- Plan the song backwards: decide which parts will end up bounced together.

- Record the rhythm part to track one, with a click or a drum machine if you want a grid.

- Record the next two parts to tracks two and three, listening to track one.

- Set the balance of tracks one, two and three exactly as you want them for good.

- Bounce those three to track four in one pass.

- Erase tracks one to three and record three new parts over them.

- Repeat until the song is done or the noise becomes the song.

- Mix down to a stereo recorder in real time, riding the faders as it plays.

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is a cassette transport with AGE in years and a DRIVE that gets dirtier without getting louder, which is most of what a bounced four-track pass was doing to your parts.

## What bouncing costs

Every bounce is another generation of tape: more hiss, less top end, more saturation, and a balance you can no longer change. Three parts bounced to one are married for life, and if the guitar is too loud you re-record all three. Producers planned around that by recording the things they were sure about first, and it is why home four-track records have a particular layered haze on the early parts and a bright, present vocal sitting on top: the vocal was last, so it was never bounced.

The noise is cumulative in a specific way. Each pass adds the machine's own hiss to the hiss already on the tape, so by the third generation the quiet parts have a texture of their own. Plenty of people spent the eighties fighting that and plenty of people now pay for it.

## The arithmetic of three generations

You can put a number on the haze. Call the noise that one pass of the machine puts on tape one unit of power. Noise from separate passes is uncorrelated, so it sums as power rather than as voltage, and the whole calculation is addition followed by a logarithm.

A track recorded once carries 1 unit. Bounce tracks one, two and three onto track four and you sum three units, then the record pass on track four contributes its own: 3 + 1 = 4 units, which is 10 × log10(4) = 6.02 dB above a single pass. Erase the first three, record two new parts at 1 unit each, and bounce the composite plus both of them to a free track: 4 + 1 + 1 + 1 = 7 units, 8.45 dB. Once more and you are at 7 + 1 + 1 + 1 = 10 units, which is exactly 10 dB.

Read the sequence again, because it is the reverse of what everybody assumes. 0, 6.02, 8.45, 10.00. The first bounce is the expensive one. It costs 6 dB on its own and the two after it together cost 4. Nobody wrecks a four-track recording on the third generation. They wreck it on the first, by bouncing parts they had not finished having opinions about.

Two honest caveats. The chain assumes unity gain at every stage and no noise reduction in the path, and it says nothing at all about the top end — high-frequency loss stacks in dB the same way, so whatever a single pass costs you at 10 kHz, three passes cost roughly three times that. A hiss complaint and a dullness complaint are separate faults and they arrive together.

## Hiss or saturation: where to set the bounce level

Every bounce forces a level decision, and no setting escapes the cost. Three parts summed at unity peak higher than any one of them did. If they line up in time the peak rises by 20 × log10(3) = 9.54 dB; if they are unrelated it lands nearer 10 × log10(3) = 4.77 dB. Either way the destination track sees more than the sources did, so you either pull the sum down or you let the tape have it.

Pull it down 5 dB to keep the meter honest and you have moved the music 5 dB closer to a floor that just rose 6. Eleven decibels of separation, gone in one pass. You hear it in the gaps, where the tape stops being a medium and starts being one of the instruments.

Let the tape have it instead and you get saturation, which is the other half of why these records sound the way they do. Oxide runs out of room gradually rather than all at once: it compresses first, then adds harmonics, and a bounce pushed hard comes back thicker, a shade duller, with the transients rounded. Engineers of the era chose that on purpose for drums and regretted it on piano. [Gain staging](https://gazillionindustries.com/gain-staging/) and [headroom](https://gazillionindustries.com/headroom-in-mixing/) are the same argument in a mix that never goes near tape.

## Planning the bounce order on an eight-part song

Here is the plan on paper: eight parts, four tracks, two bounces. The governing rule is that anything you are certain about goes early and anything you might still change goes last.

- Record drums to track 1, bass to track 2, rhythm guitar to track 3.

- Set the balance of those three exactly as you want it forever.

- Bounce tracks 1, 2 and 3 to track 4 in one pass.

- Erase tracks 1, 2 and 3.

- Record piano to track 1 and a second guitar to track 2.

- Bounce tracks 4, 1 and 2 to track 3.

- Erase tracks 1, 2 and 4.

- Record lead vocal to track 1, harmony to track 2, tambourine to track 4.

- Mix tracks 1, 2, 3 and 4 to stereo in real time.

Now count what each part carries when it reaches the stereo master. The drums have been through three record passes and arrive 8.45 dB above the floor of a single pass. The piano has been through two. The vocal has been through one. That is the layered haze under the early parts and the bright vocal sitting on top of it, produced by the order of operations rather than by anybody's taste.

## Hear what a pass adds

A bounce is hard to demonstrate on a web page, because the interesting part is the difference between generations of one performance. These are the ingredients instead: the same loop dry, then a noise bed on its own, then a worn machine. Stack the middle one three times in your head and you have the third generation.

- **Dry** — no processing — https://gazillionindustries.com/tripleog/tog-dry.m4a

- **Hiss 60, tone 45** — a noise bed, nothing else — https://gazillionindustries.com/tripleog/tog-hiss.m4a

- **Age 35, hiss 45, drive 30, wow 40** — a worn deck — speed 0.951 to 1.059 — https://gazillionindustries.com/tripleog/tog-aged.m4a

## Punching in, and the track you give away to sync

Punching in on a four-track is destructive, and that is the whole story. You drop into record on a track at a point in the song, the machine erases from that instant forward, and whatever was there has gone. No crossfade at the punch point, no nudging it afterward. A punch landed half a beat late takes the downbeat with it.

The old discipline was to rehearse the punch against the tape with the track monitored and not armed, then do it for real, and to leave a bar of space before the entry so the punch lands in silence rather than in the middle of a note. If the part is continuous — a held note, a ride pattern, a sustained pad — you cannot punch it at all. Re-record the track.

The other thing a track can hold is not audio. Record a sync tone to track four, feed it back out to a sequencer on playback, and the programmed parts run in step with the tape every time. You give away a quarter of the format and get an unlimited number of machine parts in exchange, arriving live at mixdown instead of occupying tape. It also means those parts never get bounced, which is why some home recordings from this era have a startlingly clean drum machine sitting under three generations of haze on everything else.

## Doing it now

You can impose the same discipline in a DAW, and it is a better exercise than it sounds: limit yourself to four tracks, and every time you want a fifth, bounce three to one and commit. You get decisions instead of options, and arrangements that breathe because there was no room for the extra part. Run each bounce through tape processing if you want the generational loss as well as the constraint. See [how to record to cassette](https://gazillionindustries.com/how-to-record-to-cassette/) for the real version.

## How the bounce works in each DAW

The constraint is the point, so the method matters less than the fact that it commits. Every program has a command that turns a set of tracks into one piece of audio, and they differ mainly in whether the processing gets printed and how easily you can get back.

- **Ableton Live.** Freeze Track followed by Flatten prints a track's devices into audio in place. For a genuine generational bounce, route three tracks to the input of a fourth audio track, arm it, and record the pass in real time with the tape processing on the way in. You get the timing, the fader ride and the commitment in a single move.

- **Logic Pro.** Bounce in Place works on a selection of regions and will include the channel strip and, if you ask it to, the volume and pan automation. Set a tail long enough for the reverb or you will cut it off. A summing stack gives you the four-track discipline structurally: three children, one parent, nothing outside it.

- **FL Studio.** Consolidate in the playlist renders selected tracks to audio with the mixer chain applied. Take the option that keeps the source for the first few songs, until you trust your own judgment about a balance.

- **Reaper.** Apply track FX to items, or glue a selection into one item. Take lanes let you keep the pre-bounce version without keeping the ability to change the balance, which is cheating slightly, and nobody is going to know.

One thing no DAW gives you for free is the level decision. Digital summing will not saturate and will not hiss, so a bounce there costs nothing and teaches nothing. If the exercise is going to mean anything, print the bounce through something that reacts to level, and set that level before you press record rather than after.

## Where it costs you

Four tracks is four tracks. There is no undo, no punch-in that does not overwrite, no rearranging the verse after the fact, and a mistake in bar 30 of a bounce means doing the whole bounce again. Machines vary in speed, so a tape started on one deck may not finish on another. And the tape runs for the length of a side: songs that need eight minutes need a plan.

There is a cost in time as well, and it is the one people forget when they romanticize the format. Every bounce runs at the speed of the song. A four-minute track bounced twice is eight minutes of sitting still, and a botched fader move at 3:40 costs you the full four minutes again. A session that would take ninety minutes of clicking takes an afternoon, and the afternoon is where the discipline comes from: you stop reaching for parts you do not need, because you can feel what each one is going to cost.

## What goes wrong, and what each fault sounds like

Four-track faults are diagnosable by ear, and the list is short enough to learn in a week.

- **Print-through**: a ghost of a loud hit arriving quietly just before the hit itself. Layers of tape touching on the spool magnetize each other while the reel sits. Store tapes wound to the end and do not leave a hot mix parked for a year.

- **Dropout**: a hole, gone before you can point at it, usually the top end first. A speck on the oxide or a patch where the coating is thin. It travels with the tape, so it happens at the same place on every play, which is how you tell it from a bad cable.

- **Azimuth error**: the tape sounds fine on your machine and dull on everybody else's. The head sits a few minutes of arc off perpendicular, which cancels short wavelengths first, so the high end is what goes. Your recording and your playback share the same error, so only other decks hear it.

- **Crosstalk**: a part you erased is faintly still there underneath the new one. Adjacent lanes are a fraction of a millimeter apart and an erase head is not surgical.

- **Speed mismatch**: the tape plays in tune with itself and out of tune with a keyboard. One percent of speed error is 1200 × log2(1.01) = 17.2 cents. Two machines wrong by one percent in opposite directions give 34.3 cents, a third of a semitone, and every overdub after that is committed to it.

- **Shed oxide**: the top end dies across an afternoon and returns when you clean the heads with a swab and isopropyl. If it does not return, the tape is finished and the machine is about to eat the next one.

## Questions people ask

### How does a multitrack recorder work?

It divides the recording medium into separate lanes and gives each one its own record and playback path, so parts can be recorded at different times and balanced afterward. On a cassette four-track, the four lanes are the four tracks the tape already has, used in one direction.

### How do you record with a four-track cassette recorder?

Record one part per track while listening to what is already down, bounce finished parts together onto a spare track when you run out, and mix the result to a stereo recorder in real time.

### Which classic albums were recorded on a four-track cassette?

Bruce Springsteen's "Nebraska" is the famous one: recorded at home in New Jersey in January 1982 on a four-track cassette machine and released that September as the demos themselves. The format also carried a great deal of lo-fi indie rock and early home hip hop through the eighties and nineties.

### Why do four-track recordings sound like that?

Limited top end, a raised noise floor, gentle saturation from hitting the tape hard, and generational loss from bouncing, all on a transport whose speed is never perfectly steady.

### How many parts can you actually get on a four-track?

As many as you are willing to bury. Four at mixdown, always, but two bounces carry eight parts to the master and three carry ten. The limit is not the arithmetic, it is the noise: at the third generation the earliest parts sit 10 dB above the floor of a single pass, and somewhere past that the hiss stops being texture and starts being the loudest thing in the quiet bars.

### What is bouncing in recording?

Playing two or more recorded tracks back, mixing them together, and recording that mix onto another track in the same pass, so the original tracks can be erased and reused. The word survived into software with the meaning softened: a DAW bounce writes a file and costs nothing, where a tape bounce wrote a generation and cost a balance.

### Is bouncing the same as sending tracks to a group bus?

No. A group is a live sum that you can rebalance at any point up to the final mix. A bounce writes a new recording and destroys the ability to change the relative levels inside it. That destruction is the whole discipline, and copying the routing without copying the commitment gives you none of the benefit.

### Why does my four-track recording sound muddy?

Two things at once, almost always. The low mids of three parts stack in a bounce with nothing removing the overlap, and the top end has come off across the generations, so what is left is weighted downward. Filter each part before it goes to the bounce rather than after — once the bounce is printed you are treating three parts with one filter.

### What tape should you use in a four-track?

Whatever the machine is set up for. The bias and equalization on the deck have to match the formulation in the shell, and a tape running on the wrong setting comes back either dull or thin depending on which way the mismatch goes. If the machine has a switch, use it; if it does not, find out what the machine expects before you buy a box of anything.

### Can you still buy a four-track cassette recorder?

Mostly secondhand, and what to inspect is not the electronics. Rubber dies first: check the belts and the pinch roller, run a tape you know all the way through both ways, and listen for the speed settling after a fast wind. Prices move constantly and this page is not going to quote one.

### What does a four-track recording sound like on phone speakers?

Better than you expect and worse than you hoped. A phone speaker has no low end to give, so it removes the region a cassette handled worst, and the mix often reads clearer there than on monitors. What it does not forgive is hiss, which lives in the band a small driver reproduces best. Bounce a verse, play it on your phone at arm's length, and you will know within eight bars whether you bounced too quiet.

### How do you get a four-track sound in a DAW?

Impose the track limit, print the bounces in real time through processing that reacts to level, and accept the balances you commit to. [How to make music sound like cassette](https://gazillionindustries.com/how-to-make-music-sound-like-cassette/) covers the processing side, and [the cassette plugins page](https://gazillionindustries.com/best-cassette-plugins/) covers what to print it through.

## What TRIPLE OG does

TRIPLE OG is a cassette transport: six controls for what the medium is and what it is doing, and one for your hand. **AGE** is in years, nought to sixty, and takes the machine darker, noisier, slightly more saturated, less speed-stable and less perfectly matched left to right at once. **HISS** is a continuous broadband bed, shaped and partly decorrelated across the channels. **DRIVE** is soft asymmetric saturation, oversampled, and the level stays flat inside half a decibel from one end of the knob to the other.

**The transport.** The half of a tape machine that most plugins keep to themselves.

The transport is the part you play. **SLAM** stops the tape and returns it in sync, so the song keeps its place while the machine loses its own. **SCRUB** runs the head backward and springs home. **CATCH** makes the tape drag and then sprint to make the time back up, which is the most four-track thing on the panel: a deck that lost its place and knew it. **WOW FLUT** and **TONE** finish the set. It runs on Mac and Windows as AU, VST3 and standalone. Put it on a bus and print the pass — that is a generation, with the one luxury the original method never offered, which is undo.

No case on the cassette, in a jacket pocket, all the way to the pressing plant.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
