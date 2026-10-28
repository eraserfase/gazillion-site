# A history of tape simulation

> How tape became an effect: the first tape plugins of 1997 and 2001, the named-machine models of the 2010s, the cassette and lo-fi wave, and the part nobody modeled.

Source: https://gazillionindustries.com/tape-simulation-history/  
Published 2026-10-28, updated 2026-10-28. By Gazillion Industries, who make TRIPLE OG.

---

February 1997. A reviewer testing a wave editor on a Pentium 166 gets a late beta of an optional plug-in with two VU meters and a knob you turn until the top end sounds right. It glitches in stereo, the only thing in the box that does, and it begins thirty years of software pretending to be a reel of oxide.

Tape simulation puts what a tape machine did to a recording back into one that never touched tape. It has gone through three generations. The first, from 1997, treated tape as a flavor of saturation. The second, from 2010, measured named machines and sold the nameplate. The third, from about 2016, turned to cassette, lo-fi and physics and simulated the faults as well as the fidelity. TRIPLE OG belongs to a fourth idea, a transport you play.

## The short version

- **Medium**: 1935 Magnetophon, 1948 Ampex 200, 1963 Compact Cassette

- **Generation one**: 1997 Magneto, 2001 Phoenix, 2001 Vinyl: saturation and flavor

- **Generation two**: 2010 to 2017: named decks, measured tape paths, $349 plug-ins

- **Generation three**: 2016 to 2021: cassette, lo-fi, physics, free and open source

- **The missing part**: the transport: hands on the reel, in time with the music

## Tape as the medium

Before tape was an effect it was the only way to keep a sound. AEG demonstrated the Magnetophon in Berlin in 1935. The tape's magnetic response was never linear; it follows a hysteresis curve that distorts the signal, and the high-frequency bias current that engineers at German radio added was there to push the audio away from the worst of it. Ampex released its Model 200 in 1948, developed from Magnetophons that Jack Mullin had brought home and modified, and financed in part by $50,000 of Bing Crosby's money.

Philips introduced the Compact Cassette at the Berlin Radio Show on 28 August 1963. Tape 3.81 mm wide moving at 1⅞ inches per second, with stereo tracks 0.6 mm each: a format with almost no headroom and a high noise floor, and the world adopted it for music anyway. The Walkman went on sale on 1 July 1979. From 1983 to 1991 the cassette was the best-selling music format in the United States, and by 2007 pre-recorded cassette sales had fallen from 442 million a year to 274,000. Everything in a tape plug-in's wow, hiss and drop-out sections is a memory of those years, and [the Memphis tapes](https://gazillionindustries.com/memphis-rap-sound/) are the clearest case of a whole sound built from the format's faults. The mechanics of the machine itself, heads, bias, speed and saturation, are laid out in [how a tape machine works](https://gazillionindustries.com/how-does-a-tape-machine-work/).

## Generation one: tape as a flavor (1997 to 2005)

Steinberg's Magneto is the earliest tape plug-in with a date on it. Sound On Sound met it in February 1997 as a "brand new" optional plug-in for WaveLab 1.5, delivered in late beta with no manual, simulating tape saturation at 15 and 30 ips with VU-style meters, an HF control and an overdrive you set by ear. The plug-in was a saturation curve with a speed switch. It did not pretend to be any particular machine, and nobody expected it to.

Crane Song's Phoenix moved the idea into professional rooms. Dave Hill released it in 2001 as a Pro Tools TDM plug-in, by Sound On Sound's account, derived from the code in his HEDD converter. It came as five separate plug-ins, Luminescent, Iridescent, Radiant, Dark Essence and Luster, each a different saturation and compression curve, with Opal, Gold and Sapphire brightness buttons. It modeled saturation, frequency response and compression and deliberately left out wow, flutter and hiss. Tape Op's 2005 review found it made tracks "fuller, punchier, and louder" and quoted a price of $450. Tape, in this generation, meant the good part of tape.

The faults got their own plug-in anyway, just not for tape. iZotope's first product, in 2001, was Vinyl: free, and built to add the surface noise, warp and mechanical sounds of a record player. The company re-released it on its fifteenth birthday in 2016 with a Spin Down button. Vinyl was the proof that producers would download a plug-in whose only purpose was to make things sound worse in a specific way, and the lo-fi generation fifteen years later is its descendant.

## Generation two: the nameplate (2010 to 2017)

Universal Audio changed what a tape plug-in claimed to be. In December 2010 it released a Studer A800 plug-in at $349, modeled over about a year with the AES magnetic-recording expert Jay McKnight. UA's statement said it modeled "the entire tape path and circuit electronics," including the Input, Sync and Repro paths, four tape formulas and their calibration levels. Harman, which owned the Studer name, said the plug-in "had to live up to the Studer name." Nine months later came the Ampex ATR-102 at the same price: one-inch, half-inch and quarter-inch widths, four tape types including 456 and 468, record and repro paths, optional transformer emulation, and controls for hum, hiss, wow, flutter and crosstalk. The faults had come back, as options.

The rest of the decade followed the pattern. Waves shipped its Master Tape in May 2011, developed with Eddie Kramer and modeled, by Waves' account, on an Ampex 350 transport with 351 electronics, as the last piece of a recreated Olympic Studios chain. Slate Digital's Virtual Tape Machines was on sale by June 2012, based on a 16-track two-inch Studer A827 and a half-inch Studer A80 mastering deck, and Steven Slate called it the most complex plug-in his company had coded. u-he's Satin arrived in September 2013 at $129 with Studio, Delay and Flange modes. Softube's Tape came in June 2017 at $99 with three machine types named only as letters, Type A "a classic Swiss high end reel-to-reel," Type B transformer-based with low-end weight, Type C a British machine, and one Amount knob.

Every one of those is a model of a studio deck playing well. The claims are about accuracy: this path, this formula, this calibration. The user's job is to pick a machine and set a level. That is a real thing to want, and [best tape emulation plugins](https://gazillionindustries.com/best-tape-emulation-plugins/) sorts the current field on exactly that basis, reel against cassette, machine first. But it is a photograph of a tape machine. Nobody is touching the reel.

**DRIVE at 92.** The tape side of TRIPLE OG: TONE, HISS, DRIVE and AGE. This is the part every generation of tape plug-in has had a version of.

## Generation three: cassette, lo-fi and physics (2016 to 2021)

The third generation stopped asking which studio deck and started asking which bedroom. XLN Audio's RC-20 Retro Color, announced in December 2016 at €79.95, bundled six modules, noise, wobble, distortion, digital, space and magnetic, and sold the whole decay of a recording as one effect. Aberrant DSP's SketchCassette arrived in July 2019 at $20, "inspired by 4-track cassette recorders," with age modeling, dropouts, stereo hiss and tape profiles based on cassettes from 1985 to 1988. Wavesfactory's Cassette followed in November 2019; the maker says it analyzed Type I to IV tapes and two cassette decks, and modeled frequency-dependent saturation, asperity noise, random high-frequency loss, crosstalk and stereo imbalance. Caelum Audio's Tape Cassette 2, in June 2020, did a version of the same thing for free.

Two things from this period point somewhere else. The first is Jatin Chowdhury's CHOW Tape Model, a physical model of a Sony TC-260 reel-to-reel described in a 2019 DAFx paper, released free and open source. Rather than measuring a deck's output, it simulates magnetic hysteresis with the Jiles–Atherton equations, lets you underbias the virtual tape until the hysteresis curve widens into a dead zone, and derives high-frequency loss from head-to-tape spacing, tape thickness, head gap and azimuth, all speed dependent. Its flutter was captured from an actual TC-260. The second is Baby Audio's TAIP, in September 2021, which its maker says skipped traditional DSP altogether and trained a neural network on dry and taped versions of the same audio. Physics at one end, statistics at the other, and neither one names a studio.

Two weeks after TAIP shipped, Roland announced the SP-404MKII with a Cassette Simulator beside its legacy Vinyl Simulator. The cassette had become a preset on a sampler, which is roughly where the vinyl crackle had been twenty years earlier.

## What each generation left out

Generation one left out the faults. Generation two put the faults back as parameters, hiss at this level, wow at that depth, set once and forgotten. Generation three made the faults the product and gave you an Age knob. What none of them gave you was the thing a person with a cassette deck actually has: a transport. Fingers on the reel to drag the pitch down. A pause button that catches the tape and lets it lurch back up to speed. A stop that slumps. In every generation the speed of the tape is a setting. On a real machine it is a performance, and it happens in time with the music.

**CATCH at 88.** The transport side: WOW, FLUTTER and CATCH, the scrub lever and the slam. The part the other generations modeled quietly and set once.

## Where TRIPLE OG sits

TRIPLE OG is a cassette transport in a plug-in, tuned by ear. It has the tape side every generation shares: TONE for playback brightness, HISS as a broadband bed, DRIVE as soft asymmetric saturation, and AGE, which makes the tape darker, noisier and less stable on one knob, up to sixty years of it. Then it has the part the others treat as a setting. WOW and FLUTTER are played, not printed. A scrub lever drags the head back across the tape under your hand. A slam stops it. CATCH grabs the tape and lets it sprint back up to speed, and you decide when. One reviewer put the distinction better than we would: most tape plug-ins model the transport quietly in the background, and this one hands it to you as an instrument.

It does not model a deck. Nothing in it was measured from a machine, and it makes no claim about a path or a formula. What it was tuned against is how a cassette behaves when somebody is touching it, which is a different question from how it sounds when nobody is. Both questions are worth a plug-in. Only one of them was still open.

## Questions people ask

### What was the first tape emulation plugin?

The earliest with a published date is Steinberg's Magneto, reviewed in late beta by Sound On Sound in February 1997 as an optional WaveLab plug-in simulating tape saturation at 15 and 30 ips. Crane Song's Phoenix followed in 2001 for Pro Tools TDM.

### What does a tape emulation plugin actually model?

It depends on the generation. Early ones modeled saturation and a frequency response. The named-machine plug-ins of the 2010s claim to model a specific deck's electronics, tape path and tape formulas. Cassette and lo-fi plug-ins model the faults: hiss, wow, flutter, dropouts, head misalignment and age. Physical models simulate the magnetics themselves.

### Is tape saturation the same as tape emulation?

No. Saturation is one part of what tape does: the rounding of loud peaks and the harmonics that come with it. A full emulation also covers the frequency response, the noise, the speed instability and the losses. Most early plug-ins were saturation only.

### Why are there so many cassette plugins now?

Because the sound that lo-fi, phonk and a lot of beat music chase comes from cassette rather than from a studio reel: narrow bandwidth, hiss, wobble and generation loss. The named-machine plug-ins were built for a different sound, so a new wave of plug-ins appeared from 2016 onward to cover the cheap end.

### What is the difference between a tape plugin and a tape stop effect?

A tape plug-in colors the whole signal continuously. A tape stop is a transport event: the pitch falls as the reel slows. Most tape plug-ins do the first and not the second, which is the gap a playable transport fills.

## What TRIPLE OG does

[TRIPLE OG](https://gazillionindustries.com/tripleog.html) is cassette tape simulation for Mac and Windows, with a transport you play. **TONE**, **HISS**, **DRIVE** and **AGE** on the tape; **WOW**, **FLUTTER**, **CATCH**, a scrub lever and a slam on the transport. It was tuned by ear, it is not a model of any deck, and there is a demo on the page.

Thirty years after a late beta glitched on a Pentium, the saturation curve is a solved problem. The reel is still turning, and now you can put your hand on it.

---

## About TRIPLE OG

TRIPLE OG — cassette tape simulation for Mac and Windows, with a transport that drags, jams and sprints to catch up. There is a demo on the page.

https://gazillionindustries.com/tripleog.html
