# Vocoder vs talkbox vs autotune

> How a vocoder, a talkbox and pitch correction each work, how to tell the three apart by ear, and why no plugin can be a real talkbox.

Source: https://gazillionindustries.com/vocoder-vs-talkbox/  
Published 2026-09-29, updated 2026-09-29. By Gazillion Industries, who make WINNETKA.

---

The hook came on in the car and nobody in it could name the machine. It bends like a person singing and buzzes like something with a power supply.

A vocoder splits a voice into frequency bands, measures each band's level moment to moment, and imposes that moving shape on a second signal, usually a synth you play. A talkbox is mechanical: amplified sound goes up a tube into the player's mouth, the mouth filters it, and a microphone picks up the result. Pitch correction touches no second signal at all and moves the singer's own pitch toward a grid. Three machines. Two of them fit inside a plug-in and one of them cannot, and the reason why is the most useful thing here.

## The short version

- **Vocoder**: a voice's band-by-band level shape, stamped onto a synth you are playing

- **Talkbox**: an amplified signal sent up a tube into a mouth, filtered by that mouth, caught on a microphone

- **Autotune**: the singer's own pitch moved toward a scale, with no second signal anywhere in it

- **Who sets the pitch**: vocoder, your keys; talkbox, whatever feeds the amplifier; pitch correction, the singer, rounded off

- **In software**: a vocoder converts exactly and so does pitch correction; a talkbox does not, because half of a talkbox is a mouth

- **Ours**: [WINNETKA](https://gazillionindustries.com/winnetka/), $49, a polysynth with a sixteen-band vocoder and 40 vocoder presets, twelve of which hold a vowel and need no microphone

## What a vocoder does, band by band

A vocoder needs two inputs and stays silent without both: a modulator, the signal whose shape you want, almost always a voice; and a carrier, the signal that will wear it, almost always a synth with plenty of harmonics in it.

The modulator runs into a bank of band-pass filters stacked across the audible range, and behind each filter sits an envelope follower with one job: reporting how much energy is in that slice of the spectrum right now, as a number. Sixteen bands means sixteen numbers, updated continuously, and those numbers are the entire extent of what the machine knows about your voice.

The carrier runs into a matching bank with the same center frequencies. Each carrier band is multiplied by its own band's number from the voice, and the sixteen results are summed back together. A vowel with peaks near 730 and 1100 Hz opens the two bands straddling those frequencies and holds the rest down, so the carrier leaves with the same two humps in it. The ear reads humps and reports a vowel.

Notice what never crossed over. The vocal folds set the fundamental of the modulator, and the fundamental is among the first things a filter bank discards when it reduces a voice to sixteen levels. Whatever pitch you hear came from the carrier, which means it came from your hands. That one fact separates this machine from the other two.

Band count is the resolution of the effect. Spread sixteen bands evenly across 20 Hz to 20 kHz and each covers 0.62 of an octave, about seven and a half semitones, with edges near 47, 112, 267, 632, 1500, 3557 and 8434 Hz. Two vowels whose formants sit inside the same band arrive as the same vowel. More bands give sharper words and a thinner sound; fewer give mush with character.

### The consonant problem, which is the real limit

Vowels are easy for a vocoder because vowels are pitched and broad. Consonants are where it falls down, and it is worth knowing why before you blame your microphone. An /s/ is turbulence: noise with no fundamental, most of its energy above 4 kHz. Feed that to a filter bank driving a sawtooth carrier and the top band opens on a signal still made of harmonics. At a 110 Hz fundamental the first harmonic above 4 kHz is the 37th, at 4070 Hz. Out comes a pitched chirp where the /s/ should be.

Two honest fixes, and a good vocoder gives you both. Put noise into the carrier so the top bands have something unpitched to pass. And take the top of the voice out of the band system entirely: send everything above roughly 4 kHz straight to the output, dry. That second one is why a well-set vocoder can be understood across a room and a badly set one sounds like a fax.

Follower speed decides whether words survive at all. Fast followers catch every syllable with a faint chatter on sustained notes; slow ones smear consonants into the vowels around them. Push the setting to its limit and the follower stops following, freezing whatever shape was there, which is how a vocoder plays a held vowel with nothing coming in.

### How to hear a vocoder in ten seconds

Hold one key down and sing a rising scale into the microphone. The output sits on the one note you are holding for the whole scale and only the vowels move. Then take your hand off the keyboard and keep singing: silence. Both halves of that test fail on the other two machines, and together they are conclusive.

What a vocoder is good for is chords that talk. Because the pitch is yours and the words are separate from it, a four-note voicing says one word in four-part harmony while your own voice stays free to sing the lead over the top of it. Pads that pronounce, robot choirs, a hook doubled an octave down, a chant locked to an arpeggiator.

All of it converts perfectly into software, because every part of a vocoder is a filter, a multiplier or an envelope follower and nothing in the chain is acoustic. If filter width and resonance are still vague terms, [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/) is the groundwork.

## What a talkbox does, and why it is the odd one out

A talkbox has no filter in it. That sentence is the whole section and everything below is detail.

The box on the floor holds a compression driver, the kind that sits behind a horn in a PA cabinet, and an amplifier feeds it. Instead of a horn, the driver's output goes into a length of plastic tube, commonly around half an inch across and a few feet long. The tube runs up a microphone stand and into the corner of the player's mouth, and a vocal microphone sits in front of the lips, exactly where it would sit for a singer.

Then the player mouths words without making a sound. Tongue, lips, jaw and soft palate move, and every one of those movements changes the shape of a set of connected cavities. A cavity with a shape has resonances, and resonances boost some frequencies passing through and suppress others, which is filtering. The mouth has been doing this to the buzz from the vocal folds since the player was two. A talkbox swaps the buzz for a guitar.

The vocal folds never move. There is no voice in a talkbox recording. The only source of sound is whatever is plugged into the amplifier, and the only thing shaping it is anatomy. So the pitch follows the instrument: bend a string and the vowel bends with it. Roger Troutman built a career on that and put it into funk permanently; Peter Frampton took the rock version into arenas in the mid-seventies. Both are lead lines, because one mouth plays one part.

### The talkbox by-ear test: listen for the room

A talkbox reaches the record through a microphone, and a microphone in a room brings the room with it. Listen for what a vocoder never has unless somebody added it: air, mouth noise, the slap of lips, a capsule six inches from a face. Then listen to the glides. The /l/, /w/ and /r/ sounds come out clean and continuous, because a real tongue made them and a real tongue passes through every position in between rather than jumping from band to band. The third tell is the attack: the instrument's own transient survives the mouth, so a talkbox guitar line still has a pick on the front of every note.

What it costs is worth stating flatly. It is loud in the room, the microphone catches the tube and the amp along with the vowel, and you play one line at a time. And the tube goes in your mouth, which is the sentence that has ended more talkbox experiments than any technical limit above it.

## What autotune does, and why it sits in a different family

Pitch correction does not impose one signal's spectrum on another. There is no carrier, no modulator, no filter bank and no second input. The output is the input, moved.

Three steps. The algorithm estimates the fundamental of an incoming monophonic signal, frame by frame, a few hundred times a second. It compares that estimate to a set of allowed pitches, chromatic or a scale you picked. It shifts the signal by the difference, and a retune-speed control sets how long the journey takes.

The robot sound lives entirely in that last control. Real singing glides from one note to the next, sits a few cents off center for most of a sustained note, and wobbles. Set retune time to zero and all three vanish at once: glides become instant steps, sustained notes park dead on the grid, vibrato flattens into a staircase. The artifact is the effect, and turning the same control the other way removes it.

One more control matters, because getting it wrong produces the sound people blame on the correction itself. Shifting pitch moves every frequency by the same multiplier, formants included, so an uncorrected shift upward tells the ear the singer got smaller. The mechanism is in [formant shifting](https://gazillionindustries.com/formant-shifting/), and [chipmunk soul](https://gazillionindustries.com/chipmunk-soul/) is the version people chase on purpose.

### The pitch-correction by-ear test: listen to the consonants

Pitch correction leaves consonants completely alone. The /s/ is a real /s/, the /t/ has a real burst on it, the breath before the line is a real breath, while the pitch sits in the center of every note and steps between them. Perfect diction with quantized pitch belongs to this machine and to nothing else. A vocoder blurs consonants by design. A talkbox softens them, because the player has no breath to make a fricative with.

## Vocoder vs talkbox vs autotune: the test that settles it

Ask one question and you will be right almost every time. Who is setting the pitch?

- **A keyboard part is setting it, and the singer's own melody has disappeared.** Vocoder. Look for a held chord under the words, and words that move while the notes stay still.

- **An instrument is setting it, and there is a room and a microphone on it.** Talkbox. Look for a single line, a transient on the front of each note, and air around the whole thing.

- **The singer is setting it, rounded off.** Pitch correction. Look for intact consonants and stepped transitions.

If that is ambiguous, run the second pass on consonants: whistly and blurred is a vocoder, soft but human is a talkbox, crisp is pitch correction.

## Can a plug-in be a talkbox? The honest answer

No, and any page that says otherwise is selling something. A talkbox is an amplifier, a driver, a tube and a human mouth. Three of those ship in software. The fourth is a continuously variable resonant cavity run by a nervous system that has been rehearsing vowels for decades, and nobody has put that in a download.

What the plug-ins sold under the name actually do is formant filtering: two or three resonant peaks whose center frequencies you can move, with vowel positions saved so you can travel from "ee" to "ah" on one control or an envelope. That is a fair approximation of the first two formants of a mouth, and on a lead line with the right playing it gets convincingly close. What it cannot give you is the mic in the room, the leakage, the mouth noise and the small irregularities of a body doing the work, all of which are part of why the records you are thinking of sound the way they do. The shortlist for that job is in [best formant shifter plugins](https://gazillionindustries.com/best-formant-shifter-plugins/).

Here is the part that saves you money. A vocoder driven hard lands in the same neighborhood from a different direction, with more control. Turn the band resonance up so each band rings, shift the formant structure down a band or two so the implied mouth gets bigger, and play a bright carrier: a vowel-shaped lead with the pitch on your keys rather than on a guitar. It will not fool a talkbox player, but it sits where a talkbox would have gone, and you can play chords with it.

[WINNETKA](https://gazillionindustries.com/winnetka/) is a $49 polysynth with a sixteen-band vocoder in it: formant shift, band resonance, a follower you can freeze, a dry high path for the consonants, and forty vocoder presets to start from. There's a demo on the page.

## Set up the vocoder version, step by step

- **Set the instrument to VOCODER mode** before you touch anything else.

- **Route your microphone or vocal track to the plug-in's audio input, left channel.** In Ableton Live, set the vocal track's Audio To to the WINNETKA track and choose Audio In-WINNETKA below it, with Monitor on In for a live microphone.

- **In the standalone app, open Settings from the notice at the top of the window, pick your input and untick Mute audio input.** Wear headphones.

- **Set the carrier to a sawtooth and put its mixer level at 127**, with noise at 0 for now.

- **Hold a three-note chord and speak at a steady level.** Nothing sounds until both are happening.

- **Raise the threshold until the room goes quiet between words**, then back it off one step.

- **Set follower sensitivity near 20** so it catches every syllable.

- **Raise the dry high-frequency level until the s's and t's come through**, and stop as soon as they are intelligible.

- **Add noise to the carrier a few points at a time** until the top of the words stops sounding pitched.

- **Move formant shift to +1 for a smaller voice, −1 for a bigger one**, and use the formant cutoff control for anything between.

- **Raise formant resonance until the bands start to ring**, then back it off until the words are clear again.

- **Check the part in mono and on a phone speaker before you print it.** Bands panned hard left and right sound enormous and can partly vanish when the mix is summed; see [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

A vocoder part sits in the same range as the lead vocal it is doubling, and [how to mix vocals](https://gazillionindustries.com/how-to-mix-vocals/) covers that fight.

## Questions people ask

### What is the difference between a vocoder and a talkbox?

A vocoder is electronic and filters in a bank of band-pass filters: it measures your voice band by band and applies that shape to a synth you are playing, so the pitch comes from the keyboard. A talkbox is acoustic and filters in the player's mouth: an amplified signal goes up a tube into the mouth, the mouth shapes it, a microphone catches the result, and the pitch comes from whatever feeds the amplifier. One plays chords. The other has a tube in it.

### Is a vocoder the same as autotune?

No. A vocoder discards your pitch entirely and hands you the pitch of the carrier you are playing. Pitch correction keeps your voice and moves only its pitch toward a scale. There is no carrier in pitch correction and no pitch detection in a vocoder. The confusion comes from both being used to make a singer sound mechanical, which is an overlap in taste rather than in signal flow.

### Why does the robot effect happen in autotune?

The retune-speed control. A real voice glides between notes, sits slightly off center on sustained ones and wobbles. Setting retune speed to its fastest removes all three: transitions become steps, sustained notes park on the grid, vibrato turns into a staircase. It is an artifact of an extreme setting, which is why the same tool set gently is inaudible.

### What is the best talkbox plugin?

The category contains no real talkbox, because half of a talkbox is a human mouth. What is sold under the name is formant filtering with vowel positions, and it is a legitimate effect that gets close on a lead line. For the vowel-shaped, pitch-follows-the-instrument sound, a vocoder with formant shift and band resonance gets you there with more control and lets you play chords on top. That is the job [WINNETKA](https://gazillionindustries.com/winnetka/) does, at $49, with a sixteen-band vocoder and forty presets built for it.

### Is there a best free talkbox plugin?

Open your own plug-in list before you spend anything, because a stock vocoder gets you most of the way and your host may already have one. Our free plug-in is [DRUGS](https://gazillionindustries.com/drugs.html), a one-knob drum bus compressor, so it is the free way to get one of ours into a session rather than the free way to get a vocoder. The genuinely free route to the talkbox sound is a tube and a spare amplifier, and it always has been.

### Do I need a microphone to use a vocoder?

Not always. The modulator can be a frozen one: hold the follower at its limit and the band shape stops moving, so the instrument keeps playing that vowel with no input. Twelve of the forty vocoder presets in WINNETKA are built this way and play from the keyboard alone. You can also drive the modulator from a drum loop, a guitar or a whole mix instead of a voice, which is where the more interesting results are.

### Why does my vocoder sound mushy and unintelligible?

Four causes, in the order they are usually to blame. The carrier is too dull, so use a sawtooth or a narrow pulse instead of a sine or a pad. The consonants have nowhere to go, so send the top of the voice above roughly 4 kHz straight to the output and add noise to the carrier. The follower is too slow and is smearing syllables. Or you are speaking too fast, and slowing down by a quarter fixes more vocoder parts than any control does.

### Can I get a talkbox sound out of a vocoder?

Close enough for a record, in three moves. Raise the band resonance so each band rings. Shift the formant structure down a band or two, which tells the ear the mouth is bigger. Play a single line on a bright carrier, because a talkbox part is almost always one line and the ear knows it. What stays missing is the room and the mouth noise, and a short reverb covers the first.

## What WINNETKA does

[WINNETKA](https://gazillionindustries.com/winnetka/) is a polysynth with a vocoder, $49, for Mac and Windows. **SINGLE** plays one timbre, up to 128 voices at once in POLY. **LAYER** plays two, each with its own full set of rows and 64 voices of its own. **VOCODER** puts the shape of the incoming audio onto the notes you play.

The vocoder runs **sixteen bands**, drawn low to high on the screen so you can watch what it is hearing. **AUDIO IN** gives you a gate with **GATE SENSE** from 2 ms to 2 s and a **THRESHOLD**, plus **HPF LEVEL**, which sends the top of the voice above about 4 kHz straight to the output so the s's and t's cut through. The **MIXER** builds the carrier from **OSC 1**, **NOISE** and **INST**, the right input channel, so an instrument can go through the vocoder alongside the voice on the left. The **FORMANT** row carries **SHIFT** at −2 to +2 bands, **CUTOFF** at ±63 to slide the shape smoothly up to two bands either way, **RESONANCE** for how sharp the bands are, **E.F. SENSE** for how quickly the shape follows the voice, and **HOLD**, which freezes the current shape so it plays on with no input and saves with the preset. **FC MOD** moves the whole shape from an envelope, an LFO, velocity or a wheel, up to four bands either way. **AMP** holds level, **DIRECT** for the dry voice, distortion and keyboard tracking, and four more knobs set the level and stereo position of eight pairs of bands.

Under it is the synth. **OSC 1** offers saw, pulse, triangle, sine, a voice-like **VOX** wave whose **CONTROL 1** moves its formant from dark to bright, a **TABLE** of 64 stored waves, noise tuned to the note you play, and the audio input itself; **OSC 2** adds ring modulation and sync. The filter is switchable, 24 dB or 12 dB lowpass and 12 dB bandpass or highpass, with cutoff from 20 Hz to 20 kHz. **TRANSPOSE** runs ±24 semitones, with two envelopes, two LFOs, four patch cords and a **UNISON** setting that stacks four voices on every note, spread by up to 99 cents of detune. Effects are mod FX, a tempo-locked delay and a three-band **EQ** at ±12 dB a band. The arpeggiator runs sixteen steps, twelve patterns, one to four octaves, rates from 1/1 to 1/64, swing and latch.

350 factory presets: 65 bass, 60 lead, 65 pads, 40 FX, 35 percussion, 45 arp and 40 vocoder. Twelve of the vocoder presets hold a vowel and play with no audio coming in. AU, VST3 and standalone on macOS 10.13 or later, Apple Silicon and Intel; VST3 on Windows 10 or later, 64-bit. The license key arrives with the download and in the receipt email, activates once online, then works offline.

Put the hook back on in the car. Whoever made it either held a chord while they said the words, or had a tube in their mouth. You can tell which from the first bar now, and one of those two is a keyboard part you can play tonight.

---

## About WINNETKA

WINNETKA — a polysynth with a vocoder and 350 presets. AU, VST3 and standalone on Mac, VST3 on Windows.

https://gazillionindustries.com/winnetka/
