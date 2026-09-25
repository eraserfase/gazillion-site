# How to EQ vocals

> How to EQ a vocal: the frequency map, how to sweep for resonances, why cuts are narrow and boosts are wide, and when to use a dynamic EQ instead.

Source: https://gazillionindustries.com/how-to-eq-vocals/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Somebody told you to cut 300 and boost 3k, so you cut 300 and boosted 3k on a voice that needed neither, and now it sounds like a voice that has had 300 cut and 3k boosted. There is a better way to do this and it starts with listening rather than with a chart.

EQ a vocal by finding and cutting what is in the way first, then adding only what is missing. High-pass below the voice, sweep with a narrow boost to find resonances and turn them into narrower cuts, then use wide, gentle boosts for character. Cuts can be surgical; boosts should be broad. And do all of it with the beat playing, because a vocal that sounds perfect in solo is a vocal tuned for a context nobody will ever hear.

## The short version

- **80–120 Hz**: high-pass: rumble, handling noise, room

- **150–400 Hz**: weight, and the first place mud appears

- **400–800 Hz**: boxiness, the sound of a small room

- **1–3 kHz**: intelligibility: where the words live

- **5–8 kHz**: sibilance: cut dynamically, not statically

- **10 kHz+**: air, best added with a wide shelf

**BEEF at 8.** The reference you A/B against.

## What is actually in a voice, in hertz

A voice is three things stacked: a fundamental that moves with the melody, a run of harmonics above it at whole-number multiples, and two or three broad resonances that stay where they are no matter what note is being sung. Knowing which of the three you are looking at decides whether a cut fixes the take or fixes one word.

The fundamental is arithmetic. With A4 at 440 Hz and equal temperament, E2 is 82.41 Hz, G2 is 98.00 Hz, A2 is 110.00 Hz, C3 is 130.81 Hz and A3 is 220.00 Hz. A voice bottoming out on G2 puts harmonics at 196.00, 294.00, 392.00, 490.00, 588.00 and 686.00 Hz, and those move up and down the scale with the melody. Cut one of them and you have taken a bite out of a single note.

The resonances do not move, and that is why they are worth hunting. Treat the vocal tract as a tube closed at one end and the arithmetic falls out: the lowest resonance is *c* / 4*L*, with odd multiples above it. Speed of sound 343 m/s at 20 °C, a 17.5 cm tract: 343 / 0.70 = 490 Hz, then 1470 Hz, 2450 Hz and 3430 Hz. A shorter 15 cm tract gives 571.7, 1715.0 and 2858.3 Hz. A longer 20 cm one gives 428.8, 1286.2 and 2143.8 Hz.

That single calculation explains most of the chart at the top of this page. Boxiness lands between 400 and 800 Hz because the first tract resonance lands there. Intelligibility lands between 1 and 3 kHz because the second and third land there. It also explains why the same voice needs the same cut from the first bar to the last, while a boom on one word is a fundamental problem and needs a ride or a dynamic band instead. The straight tube is an idealization — the actual thing is not a uniform pipe, and vowels shove the peaks around by hundreds of hertz — but the spacing is right, and it tells you where to point the sweep.

## Subtractive first, and why

Boosting adds level, and level flatters. Make five boosts and the vocal is now 4 dB louder than it was, which your ear reads as better whether or not the tone improved. Cutting the problems leaves you with a quieter, cleaner signal you can then turn up in one move, and the decisions stay honest.

There is a second reason. A resonance is a narrow peak, and narrow problems need narrow solutions. A broad boost to compensate for a narrow dip raises everything around the dip too. Find the peak, cut the peak, move on.

## Q, bandwidth, and what the number on the dial covers

Q is a ratio rather than a taste setting. It is the center frequency divided by the width of the band at the 3 dB points, so a bell at 300 Hz with Q 4 is 300 / 4 = 75 Hz wide and runs from 264.8 to 339.8 Hz. The same Q 4 parked at 3 kHz is 750 Hz wide. Q holds a constant percentage, not a constant number of hertz, which is why one dial setting feels surgical down low and broad up top.

In octaves it is easier to picture, and the conversion is fixed.

- **Q 0.7**: 1.92 octaves — a tone control

- **Q 1.4**: 1.01 octaves — one octave, the widest useful bell

- **Q 2.9**: 0.50 octaves — half an octave

- **Q 4.3**: 0.33 octaves — one third of an octave

- **Q 8**: 0.18 octaves — roughly two semitones wide

- **Q 16**: 0.09 octaves — about one semitone

Read that table against the two rules. A resonance cut at Q 8 covers about two semitones, so it removes the offending peak and leaves the notes either side of it alone. A character boost at Q 0.7 centered on 2.5 kHz reaches from 1543.9 Hz to 5829.6 Hz, which means it is lifting the words and the sibilance in the same gesture. Neither number is wrong. The wide one just has to be small, because it is touching everything.

## How to find what to cut

- High-pass first, starting at 80 Hz and moving up until the voice loses weight, then back off a little.

- Make a narrow band with about 6 dB of boost and sweep it slowly from 200 Hz to 1 kHz.

- Listen for the frequency that goes from "louder" to "unpleasant": that is the resonance.

- Turn the boost into a cut of 2 to 4 dB at the same frequency, with a moderate Q.

- Repeat once or twice at most. A vocal with nine cuts has been sculpted into a different instrument.

- Now add: a wide shelf above 10 kHz for air, a gentle wide lift around 2 to 3 kHz if the words are not landing.

- Bypass at matched level and confirm each move earns its place.

## The sweep lies to you, and how to keep it honest

Three things go wrong during a sweep, and all three have a fix worth the thirty seconds.

The first is speed. From 200 Hz to 1 kHz is log2(1000 / 200) = 2.32 octaves. Stepping in thirds of an octave puts seven positions in that range, and your ear needs about a second at each one to decide anything. A sweep that takes two seconds end to end finds nothing, which is why people conclude the technique does not work.

The second is the boost itself. Six decibels is a factor of 106/20 = 1.995 in amplitude, so everything under the band sounds worse while you are moving it. You are not listening for which frequency gets louder. All of them get louder. You are listening for the one that turns ugly, honks, or suddenly sounds like a phone.

The third is the level bias at the end. One decibel is a factor of 1.122, two decibels is 1.259, and a bypass comparison that is 2 dB out has already been decided before you form an opinion. Match the output of the EQ to the input within half a decibel — use the plugin's own output trim, or a gain stage after it — and only then press bypass. [Gain staging](https://gazillionindustries.com/gain-staging/) covers the same discipline across a whole chain, and [Fletcher–Munson](https://gazillionindustries.com/fletcher-munson/) explains why the louder version keeps winning.

[BEEFY](https://gazillionindustries.com/beefy.html) is a saturation and loudness effect rather than an equalizer, and the distinction matters here: it adds harmonics, which is a different way of making a voice more present than boosting what is already there.

**SOFT CLIP** as the out stage, BEEF at 62.

## Setting the high-pass corner against this voice, not against a number

Find the lowest sustained note in the take with a tuner, then put the corner under it. Say the voice bottoms out on E2, 82.41 Hz. A 24 dB per octave corner at 60 Hz leaves that note 0.33 dB down, and a 12 dB per octave corner at the same place leaves it 1.08 dB down. Move the corner up to 80 Hz and the same note is 2.53 dB down at 24 dB per octave and 2.76 dB down at 12 dB per octave, which is a change you will hear on every low line the singer delivers.

The surprise is which slope is gentler where. Above the corner, steeper is kinder: at 82.41 Hz the fourth-order filter costs 0.33 dB where the second-order one costs 1.08 dB. Below the corner the order reverses hard. At 30 Hz against a 60 Hz corner, second order is 12.30 dB down and fourth order is 24.10 dB down. A steep filter set low does more cleaning and less damage than a shallow filter set high. Sixty hertz sits 1200 × log2(82.41 / 60) = 549 cents under that E2, five and a half semitones of clearance.

Plosives will not be solved this way, and it is worth knowing before you keep climbing. A hard p is a slug of air with most of its energy under 40 Hz and almost no pitch. Forty hertz against a 70 Hz fourth-order corner is 19.49 dB down, and a thump that loud still arrives. Draw a short clip-gain dip over the plosive instead, or angle the microphone off-axis at the source. One of those is free and takes four seconds.

## Static EQ versus the problems that come and go

A permanent cut fixes a permanent problem. Sibilance is not permanent: it appears on S and T sounds and is absent everywhere else, so a static cut at 7 kHz dulls the whole performance to fix a dozen syllables. Use a de-esser, or a dynamic EQ that only cuts when the energy is actually there. The same applies to a note that booms on one word because the singer moved closer to the microphone.

Compression changes this too, because it brings quiet detail up and therefore makes sibilance worse. De-ess after the compressor rather than before it, or you will fix a problem the compressor is about to recreate.

## De-essing, counted

Sibilance occupies less room than people assume. From 5 to 8 kHz is log2(8 / 5) = 0.68 octaves, two-thirds of an octave, and a bell at 7 kHz with Q 6 spans 6440.9 to 7607.6 Hz, which is 1166.7 Hz of the spectrum. A static 4 dB cut across that band pays 4 dB on every consonant, every breath and every bit of air in a three-minute take to fix perhaps eight seconds of it.

Set the amount by how much the s still reads as an s. Three to six decibels of reduction on the syllables that need it is normal; past that a singer starts to lisp, which is a more noticeable artifact than the sibilance was. If the de-esser lets you trigger on one band and reduce another, trigger at the peak of the ess and reduce a little wider — the trigger wants to be precise, the reduction wants to be smooth.

One reason the ess seems to move between systems: the wavelength at 7 kHz is 34300 / 7000 = 4.9 cm. Half of that is shorter than the distance between your ear and a headphone driver's edge, so small changes in head position, earbud seating and speaker angle change the level up there by more than any de-esser setting will. Judge sibilance on the system your audience uses, then check it on one other.

## Minimum phase, linear phase, and what each costs

Every ordinary EQ shifts phase around the frequencies it changes. That is the price of a filter that is short, cheap and has no delay. Linear-phase EQ trades that away: it uses a long symmetric filter so that every frequency is delayed by the same amount, and pays for it in latency and in pre-ringing.

The latency is exact. A symmetric 4096-tap filter at 48 kHz delays by half its length, 2048 / 48000 = 42.7 ms. Eight thousand taps doubles that to 85.3 ms. At 88 BPM a sixteenth note is 60000 / 88 / 4 = 170.5 ms, so an 85 ms filter puts half a sixteenth of delay between a singer and their own headphones. Your DAW compensates it on playback; it cannot compensate it while somebody is recording.

Pre-ringing is the other half of the bill. A symmetric filter spreads energy backward in time as well as forward, so a hard consonant arrives with a faint smear in front of it. On a kick drum that is obvious. On a vocal it shows up as a slight loss of edge on the front of words, which is exactly the thing you were trying to protect.

Practical rule: minimum phase on a solo lead, because the phase shift is inaudible on a single source and you keep the transient intact. Consider linear phase only when the same signal exists twice — a double you are blending, or a microphone and a second capture of the same performance — because there a phase shift on one copy changes how the two sum. [Phase cancellation](https://gazillionindustries.com/phase-cancellation/) has the mechanism, and [mono compatibility](https://gazillionindustries.com/mono-compatibility/) is where it shows up first.

## Boxiness is the room, and the room has arithmetic

Enclosures resonate at *c* / 2*L* along each dimension, with whole multiples above. A closet used as a booth, 0.6 m across, rings at 343 / 1.2 = 285.8 Hz and again at 571.7 and 857.5 Hz. A 2.7 m bedroom wall rings at 63.5 Hz, a 3.6 m one at 47.6 Hz. Stand a singer in the small box and the recording carries the small box's frequencies, which is the honest explanation of the 400 to 800 Hz row in the chart at the top of this page.

Early reflections do their own damage further up. The wavelength at 500 Hz is 343 / 500 = 0.686 m. A reflection off a desk or a laptop lid that travels 0.34 m further than the direct sound arrives half a wavelength late at 500 Hz and subtracts there, with a matching addition an octave away. That is a comb, not a peak, and no single bell will follow it.

What EQ can do here is narrow. Cutting 285 Hz removes the ring and the part of the voice that lives at 285 Hz along with it, because they arrive together in the same file. Moving the microphone 40 cm, angling it away from the flat surface, or hanging something soft behind the singer costs nothing and fixes the cause. Test by recording ten seconds in two positions and comparing — [how a room ends up in a recording](https://gazillionindustries.com/how-to-make-music-sound-like-another-room/) goes further into what a space does to a signal.

## Doubles, stacks, and why the cut belongs on the bus

Four takes of the same part do not sum the way one take does. Four independent performances at matched level add up to 10 × log10(4) = 6.02 dB louder than one. Four copies of one file add to 20 × log10(4) = 12.04 dB. Real stacks sit between, closer to 6 dB in the high mids where the takes differ and closer to 12 dB down low where the fundamentals line up.

That gap decides where the cut goes. A 250 Hz build-up that measures fine on one voice is around 12 dB hotter across four, so cutting 3 dB on each of the four tracks is both four times the work and the wrong shape. Put one cut on the stack bus. Keep the individual EQs for problems that belong to individual takes: the one where the singer stepped in, the one recorded on a different day.

Mid/side gives you a finer tool on the same problem. The low mids that stack up are largely the same in both channels, so they sit in the mid signal, and a cut there thins the pile-up while leaving the spread of the sides intact. Check the result in mono before you keep it.

## Host by host

The arithmetic is identical everywhere and the stock tools are not. Every DAW ships an EQ that does everything on this page; what differs is how quickly you can reach the two controls that decide anything, which are Q and the analyzer.

Ableton Live's EQ Eight gives up to eight parametric filters per channel and runs in Stereo, L/R or M/S modes, so the mid-only cut described above needs no second plugin. The output spectrum draws behind the curves when the Analyze switch is on. Low cut is available at 12 or 48 dB per octave, which brackets the slope arithmetic above at both ends. Q sits on a modifier: hold Alt on Windows or Option on Mac and drag. On the low cut, notch and high cut shapes there is no gain to set, so a vertical drag adjusts Q instead — handy, and the first thing that catches people out.

Elsewhere the stock EQ is Channel EQ in Logic Pro, Parametric EQ 2 in FL Studio, EQ3 in Pro Tools, ReaEQ in REAPER, Pro EQ in Studio One, Frequency in Cubase and EQ+ in Bitwig Studio. Find three things in whichever you use before you start: the Q control and its readout, the analyzer toggle, and the output trim. If the third one is missing, put a gain utility directly after the EQ, because every honest decision on this page depends on being able to bypass at matched level.

## A whole vocal, with the numbers written down

One pass end to end at 88 BPM, so every move arrives with a figure attached rather than an adjective.

- **Measure.** Tuner on the take. Lowest sustained note is G2, 98.00 Hz. Harmonics therefore at 196.00, 294.00, 392.00 and 490.00 Hz.

- **High-pass.** Corner 70 Hz, 24 dB per octave. The fundamental sits 1200 × log2(98 / 70) = 583 cents above the corner, where the filter is 0.28 dB down — inaudible. At 40 Hz the same filter is 19.49 dB down.

- **Sweep.** Narrow band, +6 dB, Q 8. Seven positions from 200 Hz to 1 kHz, one second each, beat playing.

- **First cut.** Found at 265 Hz. Turn it into −3 dB at Q 4: 66.2 Hz wide, running 233.9 to 300.2 Hz. That sits between the second and third harmonic of the lowest note, so it thins the pile without landing on a sung pitch.

- **Second cut.** A honk at 620 Hz. −2.5 dB at Q 3: 206.7 Hz wide, 525.2 to 731.9 Hz.

- **Stop cutting.** Two is the budget. A third only if it is obvious with the beat playing.

- **Dynamic band.** 7.2 kHz, Q 6, spanning 6625 to 7825 Hz, up to 4 dB of reduction and only while the ess is present. After the compressor.

- **Presence.** +1.5 dB at 2.4 kHz, Q 0.9 — 1.53 octaves, reaching 1412 to 4079 Hz. Wide and small, because it is touching a third of the audible band.

- **Air.** Shelf at 12 kHz, +2 dB.

- **Match and bypass.** Net change is a few tenths of a decibel down; trim it back, then A/B. Anything that does not survive that test comes off.

Total: one filter, two cuts, one dynamic band, two small boosts. That is what a finished vocal EQ usually looks like, and it took longer to read than it takes to do.

## How to check it in your own session

- Bypass with the levels matched inside half a decibel and pick the version you prefer without looking at the screen.

- Play the verse from a phone speaker at arm's length. The wavelength at 200 Hz is 343 / 200 = 1.715 m, more than a hundred times the width of the driver in a phone, so almost nothing you hear down there survives. What reaches you is above 500 Hz, which is where intelligibility lives anyway.

- Turn the monitors down to conversation level and listen again. Balances set loud arrive thin.

- Sum to mono and confirm the stacks and any mid/side moves survive it.

- Solo each cut band with a huge boost and check you are removing what you think you are removing, then set it back.

- Leave it overnight and open it in the morning before you print.

## What each failure sounds like

- **Clear soloed, buried in the track**: EQ'd in solo — every decision on this page is made with the beat playing

- **Thin and brittle**: high-pass corner set above the lowest sung note

- **Boomy on one word only**: a fundamental, not a resonance — ride it or use a dynamic band

- **Cloudy across the whole verse**: 150 to 400 Hz stacking — see [why a mix sounds muddy](https://gazillionindustries.com/why-is-my-mix-muddy/)

- **Small-room honk that will not leave**: an enclosure mode, recorded in — move the microphone, not the EQ

- **Loud and still unclear**: nothing between 1 and 3 kHz, where the tract resonances sit

- **Harsh on earbuds**: a wide boost centered near 2.5 kHz reaching up to 5829 Hz — see [why a mix sounds harsh](https://gazillionindustries.com/why-is-my-mix-harsh/)

- **Esses stabbing**: static cut instead of dynamic, or the de-esser placed before the compressor

- **Singer now lisps**: more than about 6 dB of sibilance reduction

- **Front of words softened**: linear-phase pre-ringing on a source that did not need it

- **Doubles thinner than a single take**: phase shift from a cut on one copy only — put it on the bus

- **Curve looks like a mountain range**: symptoms treated one at a time; start again with two cuts

- **Better every time you touch it, worse the next day**: unmatched bypass — you have been choosing the louder one for an hour

- **Great on monitors, gone on a phone**: all fundamental, nothing above 500 Hz to survive a small driver

## Where it costs you

Equalization is not free. Every cut removes something that was recorded, and enough of them leave a voice that is technically clean and characterless. Heavy high-passing takes the chest out of a deep voice. Big presence boosts bring up the room and the microphone's own harshness along with the words. And EQ cannot fix a bad source: a boxy room, a badly chosen microphone or a performance with no dynamics will still be all of those things afterward, with an equalizer on top.

There is a time cost that nobody warns you about either. Sweeping properly means seven positions at a second each, twice, with the beat playing — call it a minute per pass and three passes before you trust the answer. People skip it, reach for a preset curve, and spend twenty minutes undoing the result. The chart at the top of this page is a map of where to look, and it is worth exactly that much: every number on it moves with the voice, the microphone and the room.

The money cost is nothing, and it is worth saying plainly. Every move on this page runs on the EQ that shipped with your DAW: a high-pass with a selectable slope, four or five bells with Q readouts, a shelf, and an output trim. A paid EQ buys a faster workflow, better metering and a particular curve shape at the extremes. It does not buy a better decision about where 265 Hz was hiding. If a plugin does tempt you, the level-matched bypass in step ten is the only test that settles it.

## Questions people ask

### What is the best EQ setting for vocals?

There is no setting, because it depends on the voice, the microphone and the track. The method is reliable even though the numbers are not: high-pass, sweep to find resonances, cut them narrowly, then add broad boosts only for what is missing.

### What should my vocal EQ look like?

Usually a high-pass, one or two narrow cuts in the low mids, possibly a small dip where sibilance lives, and a wide gentle lift up top. If the curve looks like a mountain range, you have been fixing symptoms.

### What are the most common EQ mistakes?

Boosting before cutting, EQing in solo instead of in the mix, using narrow boosts, copying a preset curve onto a voice it was not made for, and trying to fix with EQ something that is really a level or arrangement problem.

### Should I EQ before or after compression?

Cut before, so the compressor is not reacting to a frequency you are about to remove. Add after, because compression changes the tone and you want to judge the result you actually have.

### What frequencies should I cut on a vocal?

The ones this voice has too much of, which you find by sweeping rather than by reading. In practice the first cut usually lands between 200 and 400 Hz and the second between 500 and 900 Hz, because the first vocal tract resonance falls near 490 Hz for a 17.5 cm tract and everything crowds around it.

### What frequency makes vocals clear?

Between 1 and 3 kHz. The second and third tract resonances land at 1470 and 2450 Hz on a 17.5 cm tract, and consonant energy piles up in the same region. Clarity is usually won by removing what is masking that range rather than by boosting it.

### What Q should I use on a vocal?

Q 4 to Q 8 for cuts, which is a third of an octave down to about two semitones. Q 0.7 to Q 1.4 for boosts, which is one to two octaves. A boost at Q 8 sounds like a filter; a cut at Q 0.7 removes a quarter of the voice.

### How many EQ bands should a vocal have?

A high-pass, two cuts, and at most two broad boosts. Five moves. More than that and you are usually building a new voice out of the one you recorded.

### Should I high-pass every vocal?

Almost always, and low. Find the lowest sustained note with a tuner and set the corner under it: at a 60 Hz corner and 24 dB per octave, an 82.41 Hz E2 loses 0.33 dB, while the same note against an 80 Hz corner loses 2.53 dB.

### How do I make a vocal sit in the mix?

Cut the instrumental where the voice needs room rather than boosting the voice. The vocal only has to beat what is competing with it, and a 2 dB dip in the beat costs less than a 4 dB boost on the voice. [Mixing vocals](https://gazillionindustries.com/how-to-mix-vocals/) covers the level work underneath that.

### Why do my vocals sound muddy?

Energy stacking between 150 and 400 Hz, usually from several tracks at once. Four matched takes add 6 dB where they differ and up to 12.04 dB where their fundamentals agree, so the cut belongs on the stack bus. See [why a mix sounds muddy](https://gazillionindustries.com/why-is-my-mix-muddy/).

### Why do my vocals sound nasal?

A peak somewhere between about 800 Hz and 1.5 kHz, often the singer rather than the signal. Sweep at Q 8 and cut 2 to 3 dB; if it is in the performance it will still be there, which is the useful information.

### Why do my vocals sound boxy?

Because a box was recorded. A 0.6 m closet resonates at 343 / 1.2 = 285.8 Hz and again at 571.7 Hz. Cutting helps a little and moving the microphone helps a lot.

### Is the 300 Hz cut real?

The region is real and the number is a coincidence of how often people record in small rooms. Sweep it: on one voice the peak is at 265 Hz, on another at 340 Hz, and a fixed 300 Hz cut misses both by roughly a third of an octave.

### Should I boost 3 kHz on a vocal?

Only if the words are not landing, only wide, and only by a decibel or two. A boost at 3 kHz with Q 1 reaches from 1854 to 4854 Hz, so it lifts consonants and the top of the sibilance together. Check for harshness afterward.

### How do I add air to vocals?

A wide shelf at 10 to 12 kHz, 1 to 3 dB. If the recording has nothing up there, a shelf raises the noise floor and the sibilance instead of adding air, and saturation is the other route — see [saturation explained](https://gazillionindustries.com/saturation-explained/).

### Do I need a de-esser?

If a static cut at 7 kHz fixes the esses without dulling the take, no. That is rare, because 5 to 8 kHz is only 0.68 octaves wide and everything bright in the voice lives in it. A dynamic band costs you those 4 dB only while the ess is sounding.

### Should I use linear phase EQ on vocals?

Usually not. It adds latency — 4096 taps at 48 kHz is 42.7 ms — and pre-ringing that softens the front of words. Reach for it when you are cutting one of two copies of the same performance and the blend is changing on you.

### How do I EQ rap vocals?

The same method with consonants prioritized: the words carry the record, so protect 1 to 3 kHz and be careful with anything wide that dulls it. Dense delivery also means less space between syllables, so dynamic cuts beat static ones by a wider margin than they do on singing.

### Do male and female vocals need different EQ?

The fundamentals differ and the resonances mostly do not. A voice sitting around G2 at 98.00 Hz and one sitting around G3 at 196.00 Hz need different high-pass corners, but both have their first tract resonance somewhere near 430 to 570 Hz depending on tract length, so the cuts often land in a similar place.

### Should I EQ vocals in solo or in the mix?

In the mix, always, with the beat at normal balance. Solo is useful for one thing only: confirming that the band you are cutting contains what you think it does.

### How do I EQ background vocals and doubles?

Route them to a bus and treat the bus. High-pass the stack higher than the lead — they do not need the weight and the lead does — and make one low-mid cut there instead of the same cut on every track.

### Can EQ fix a bad vocal recording?

It can improve a recording with one problem and it cannot rebuild one. Room reflections comb the spectrum rather than peaking it, and a comb from a 0.34 m path difference nulls near 500 Hz with matching dips above — no bell follows that shape.

### Should EQ go before or after reverb?

Before, on the channel, so the reverb receives a signal you already like. A second EQ on the return is worth having: high-passing the reverb around 300 Hz keeps the tail from adding to the mud you just removed.

### Why does my vocal sound harsh after EQing it?

Usually a wide boost placed where sibilance lives. A Q 0.7 bell at 2.5 kHz reaches 5829 Hz, and your own ear is already boosting up there: the ear canal is about 2.5 cm of tube closed at one end, so it resonates near 343 / 0.10 = 3430 Hz. Narrow the boost, make it smaller, or move its center down toward 2 kHz.

### Do I need a paid EQ plugin?

No. Every move on this page is in the stock EQ of every DAW named above. Paid EQs buy speed, metering and specific curve shapes, and the only way to know whether one is worth it to you is a bypass matched within half a decibel.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. On a vocal it is the other route to presence: instead of boosting a frequency that is already there, it brings out harmonics that help a sound feel bigger, and squeezes some space out of the peaks. **BEEF** adds weight, density and attitude, **COOK** changes the color and bite from a rounder feel toward a brighter edge, and **JUICE** sets the level going in. The page's own invitation: a vocal that could use some attitude.

Where it goes relative to the EQ follows from what each one does. Put the subtractive EQ first, so the harmonics being generated are built on a signal with the mud and the honk already gone — feed a 265 Hz resonance into any saturation and you get that resonance plus everything it generates above itself. Anything additive can sit after, where you can hear what the drive already supplied and boost only the rest. Often the presence boost gets smaller or disappears once the harmonics are there.

**SOFT CLIP** and **LIMIT** are the two output switches, they are separate choices, and both can be off if you would rather push it yourself. Input and output clip lights show you either end. The window starts at 80% and remembers the size you leave it at. On Mac it installs as AU, VST3 and a standalone; on Windows as a 64-bit VST3. It is $19 as a one-time purchase. If you want the full argument for driving a voice rather than boosting it, [distortion on vocals](https://gazillionindustries.com/distortion-on-vocals/) is the longer version.

**LIMIT** instead, everything else identical.

Cut 300, boost 3k. Or find out what this particular voice is actually doing, which takes four minutes longer and works.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
