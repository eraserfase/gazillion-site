# Free vinyl sim plugins, and the one we make

> A vinyl sim is two jobs: the surface and the squash. The free plugin for each, what Live and Logic ship, the paid field, and the chain order that makes it work.

Source: https://gazillionindustries.com/free-vinyl-sim-plugin/  
Published 2026-10-28, updated 2026-10-28. By Gazillion Industries, who make DRUGS.

---

The break sounded right coming off the record and wrong the moment it was clean inside the DAW. Too wide, too polite, every hit sitting on its own. The search that follows is "free vinyl sim plugin", and most of what it finds is a crackle generator.

A vinyl sim is two jobs, both covered free. The first is the surface: noise, wear, a band-limited top, the record as a medium. iZotope's Vinyl does that and is free. The second is the squash: dense, slightly crushed drums with the room pushed up under the hits, the way a break sounds once it has been through a sampler. That half is a compressor, and DRUGS is ours, free for Mac and Windows, voiced for exactly that on the drum bus. Load both.

## The short version

- **Free, for the squash**: DRUGS — ours, one knob, on the drum bus, Mac and Windows

- **Free, for the surface**: iZotope Vinyl — dust, wear, warp, motor noise, spin down

- **Already in your DAW**: Ableton Live Standard and Suite ship Vinyl Distortion; Logic names no stock vinyl sim

- **Order**: compress first, then band-limit, then the noise bed

- **What paying buys**: program-dependent compression and a mastering-chain model, from $39.99 to $149

- **Formats**: DRUGS: VST3 and AU on Mac, VST3 on Windows

## What a vinyl sim plugin actually does

The name is older than the plugins. It comes from an effect on a cheap 1990s sampler, the SP-303, whose Vinyl Simulator did something the manual did not advertise: it compressed. Producers ran whole loops through it for the squash and kept the noise as a side effect, and the [SP303 vinyl sim guide](https://gazillionindustries.com/sp-303/) has that history in full. The phrase stuck to the sound rather than the machine, which is why one search now returns crackle plugins and compressors on the same page.

Goodhertz say as much on their own page for Vulf Compressor, where the algorithm's lineage is described as a "Vinyl Sim" compression that "languished in obscurity" before they built a plugin around it. That is the half of the effect the free crackle plugins leave out. The [vinyl sim explainer](https://gazillionindustries.com/vinyl-sim-plugin/) takes the four parts of the sound apart. This page is about getting each part for free.

## The free vinyl sim for the surface: iZotope Vinyl

Vinyl is free and it does the record. Its controls are Warp, Dust, Year, Wear, Mechanical Noise and Spin Down: the amount and shape of the warp, the dust on the surface, a filter response for record players of different decades, the wear of a record played too many times, turntable rumble and motor noise, and a slow-down that drops speed and pitch together to a stop. It installs as AU, AAX, VST and VST3 on macOS and AAX, VST and VST3 on Windows, and it is a plugin only, with no standalone application.

What it does not have is a compressor. Set every knob and the loop is dusty, dull and exactly as dynamic as it was before. That is the tell on nearly every free vinyl chain: the texture is right and the hits still jump out of it like they were recorded yesterday.

## The free vinyl sim for the squash: DRUGS

DRUGS is a one-knob bus compressor for drums, free for Mac and Windows, and the squash is the whole point of it. Turning DOSE up makes a drum bus denser rather than louder, with the peak level barely moving across the range of the knob. It reshapes a break instead of leveling it, and brings the room up under the hits. The release is adaptive: a hit gets the short time and sustained material gets the long one, so it holds still instead of breathing.

**DOSE 88.** It dives on each hit and takes the bar to come back. That slow recovery is the squash.

There is nothing to set up. GAIN adds 5 dB on the way out, LIMIT holds the output under −0.3 dBFS, and both are on when it opens. MIX blends dry and wet with zero latency, so pulling it back to 60 percent gives you the crushed loop under the clean one with no comb filtering. It is one plugin with one job, and the job is the part of the vinyl sim sound that no noise generator can supply.

[DRUGS](https://gazillionindustries.com/drugs.html) is free. Put it on the drum bus, turn DOSE up until the room comes forward under the hits, then add the noise.

## What your DAW already ships

**Ableton Live.** Vinyl Distortion, in Standard and Suite but not Intro. Ableton's manual says it "emulates some of the typical distortions that occur on vinyl records during playback", with a Tracing Model section that adds even harmonics, a Pinch Effect that adds odd ones, a Drive control over both, Soft and Hard modes, and a Crackle section with Density and Volume. It is a distortion and a crackle box. No compression, no filter.

**Logic Pro.** Apple's plug-ins page for Logic names no vinyl simulator. The closest entry is Remix FX, which Apple describes as DJ-style effects including "vinyl scratches and stops". For the surface you are downloading Vinyl; for the squash, DRUGS runs in Logic as an Audio Unit.

**Everything else.** Any DAW has a low-pass filter and a noise source of some kind, which is half the surface for nothing. What none of them ship is a compressor voiced for this particular job, which is the gap DRUGS fills in FL Studio, Reaper, Cubase, Studio One, Bitwig and GarageBand as well.

## How to set up a free vinyl sim chain

Order decides most of it. Compress first, so the noise ends up inside the signal instead of riding on top of it.

- Route the full loop, or every drum, to one bus.

- Insert DRUGS on the bus with DOSE at zero.

- Loop four bars and turn DOSE up until the room comes forward under the hits.

- Lower MIX if the front edge of the kick starts to soften.

- Insert iZotope Vinyl after DRUGS.

- Set Year and Wear first, so the top rolls off before any noise is added.

- Raise Dust and Mechanical Noise until the bed sits just under the hats, then back off a little.

- Bypass both at matched level and play the loop on a phone speaker.

Step eight catches the two common failures. If the noise disappears on the phone, it was set against the monitors' low end and needs to come up a touch. If the drums got smaller, DOSE went past the point where density turns into mush, and the fix is one notch back rather than more noise.

## The paid field, and what paying buys

The paid vinyl sims are worth knowing because of what they include. Several of them carry a compressor, which is the field agreeing with us about where the sound lives.

**Goodhertz Vulf Compressor**, $149, is a compressor first and a vinyl sim by lineage, as its own page says. **Unfiltered Audio Needlepoint**, $75 at Plugin Alliance, synthesizes "hair, dust mites, scratches, warping" on a record, runs the turntable at speeds beyond 33, 45 and 78, and includes an "onboard single knob compressor with 6 flavorful modes". **Minta Foundry Patina**, $49, lists Crackle, Vinyl Age, Vinyl Warp, Inner Groove Distortion, RIAA Character, a Vinyl Compression control and four mastering-house models. **Klevgrand DAW LP**, $39.99, is a vinyl player simulation with scratch rate, hum at 50 or 60 Hz, and continuous control of amplifier, needle and cable quality. **2getheraudio V1NYLLA** lets you draw the flutter and crackle with the mouse, at $49 list or $29 discounted. **XLN RC-20 Retro Color**, $99, puts vinyl crackle in its Noise module alongside five others.

A newer Gumroad product named VINYL SIM PLUGIN, in VST3 and AU for Mac and Windows, is sold rather than free, and TapeFi's STOP, a vinyl-stop effect with a noise layer, launched free in September 2025 and shows a $25 price on the maker's page today. ToneBytes' Vinyl is free, Windows only, and dates from 2012. None of the paid ones is a bad plugin. What they charge for is program-dependent behavior: compression that answers a kick differently from a hat, and a mastering chain modeled stage by stage. For the squash on a drum bus, ours does that part for nothing, and you can hear it on the page.

## What a vinyl sim costs you

It costs top end, on purpose, and that bill arrives on small speakers first. A loop that was rolled off against monitors can lose its hats entirely on a phone, so check there before you print. It costs dynamics: four to eight decibels of slow-release squash makes a busy bar quieter than a sparse one, which changes the groove as well as the tone. And a noise bed under a quiet intro is a feature until the chorus, when it disappears and comes back on the breakdown like a stranger. Automate the noise, or print the loop and own it.

## Questions people ask

### Is there a free vinyl sim plugin?

Yes, two that do different halves. iZotope Vinyl is free and does the surface: dust, wear, warp, motor noise and a spin down. DRUGS is ours and free, and does the squash: a one-knob compressor for the drum bus that makes a break denser with the room up under the hits. Together they cover the whole effect.

### What is the best free vinyl plugin?

For noise and wear, iZotope Vinyl, because the controls map directly onto the parts of a worn record and it is free with no trial timer. For the compression that makes a loop sound like it went through a sampler, DRUGS. If you only install one, install the compressor; a filter and a noise source you already have.

### Does Ableton have a vinyl sim?

Vinyl Distortion, in Live Standard and Suite but not Intro. It adds the harmonic distortion of a stylus in a groove and a crackle generator. It does not compress or filter, so it is one piece of the chain rather than the chain.

### Does Logic Pro have a vinyl plugin?

Not by that name. Apple's plug-ins page for Logic includes Remix FX, which does DJ-style vinyl scratches and stops, and nothing described as a vinyl simulator. Both free plugins above load in Logic as Audio Units.

### Is a vinyl sim the same as a lofi plugin?

They overlap. A lofi plugin usually bundles bit and sample-rate reduction, a filter and noise. A vinyl sim is the record specifically: surface noise, wear and warp, plus the squash when it is done right. The [lofi VST guide](https://gazillionindustries.com/best-lofi-vst/) sorts the four jobs.

### Where does a vinyl sim go in the chain?

On the drum bus or the loop bus, compressor first and surface second. Compress last and the noise gets squashed as a separate layer on top, which is the tell people hear and cannot name.

### Is DRUGS a vinyl emulation?

No. DRUGS is a bus compressor tuned by ear for the dense, crushed drum sound the term describes. Nothing in it is modeled from or measured off any machine. It goes at the sound directly, which is the part a noise plugin cannot do.

## What DRUGS does

DRUGS is our free bus compressor with one macro control. **DOSE** moves the transfer curve, the knee, the attack and the release together, so the drum bus gets denser rather than louder. The release is adaptive and has no user control. Auto-makeup sits after the gain cell, **MIX** blends dry and wet with zero latency so parallel never comb-filters, **GAIN** adds 5 dB on the way out and **LIMIT** holds the output under −0.3 dBFS. It installs as VST3 and AU plus a standalone app on macOS 10.13 or later, and as VST3 on 64-bit Windows 10 or later. The [free glue compressor guide](https://gazillionindustries.com/free-glue-compressor/) covers the same plugin on a cleaner job.

The break is back where it was on the record now, sitting in one piece with the room behind it. The crackle was never the part you missed.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
