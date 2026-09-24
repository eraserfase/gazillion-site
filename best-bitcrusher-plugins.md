# Best bitcrusher plugins

> Why crushing adds top end rather than removing it, what separates a good bitcrusher from a bad one, and the free ones already installed in your DAW.

Source: https://gazillionindustries.com/best-bitcrusher-plugins/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make F(ilter)12.

---

The crush that sounded like dust in headphones at midnight comes back through a phone speaker the next morning as a thin, wiry glare. Nothing broke. Both halves of a bitcrusher add new content in the upper mids, and headphones are where that hides best.

Judge a bitcrusher on its resampler, not on its bit knob. Bit reduction is close to arithmetic and most plugins land in much the same place; the products separate on sample rate reduction — whether there is a filter before it, a filter after it, dither on the quantizer and jitter on the clock. Those four decide whether crushing reads as texture or as a fault. Your DAW already ships something that does part of this for nothing. Paid ones sell you the rest.

## The short version

- **Two controls**: bit depth for grain, sample rate for clang

- **Judge it on**: the resampler and its filters, not the bit knob

- **Must have**: a pre filter, a post filter and a dry/wet mix

- **Free first**: the one in your DAW, then a free modular one

- **Pay for**: dither, jitter, oversampling, filter placement

- **Audition on**: a held note and a quiet tail, not a drum loop

## What a bitcrusher actually does

A bitcrusher runs two unrelated destructions in one box, and almost every argument about which plugin is best is really an argument about which of the two the arguers had turned up. Bit depth reduction is vertical. Sample rate reduction is horizontal. They sound nothing alike and they fail in opposite directions.

**Bit depth** sets how many levels each measurement of the wave can land on. Each bit doubles the number of steps and buys roughly 6 dB of dynamic range: 16 bits is 65,536 steps and about 96 dB, 12 bits is 4,096 steps and about 72 dB, 8 bits is 256 steps and about 48 dB, 4 bits is sixteen steps and about 24 dB. Take bits away and the wave gets forced onto a coarser staircase. The gap between the real wave and the staircase is the error, and the error is what you hear. It is loudest, in relative terms, where the signal is quietest, which is why crushing eats reverb tails and fade-outs first and leaves the hit itself alone.

**Sample rate** sets the highest frequency the signal can carry, at half the rate. Drop the rate and the top end above the new half-rate has nowhere to go, so it folds back down the spectrum as new, out-of-tune tones that move against the music instead of with it. That is aliasing, and it is the clangy, metallic half of the sound. The detail is in [what is aliasing in audio](https://gazillionindustries.com/what-is-aliasing-in-audio/), and the wider mechanism in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

The practical consequence: the bit knob is a grain control and the rate knob is a pitch control in disguise. Rate reduction generates tones whose frequencies depend on the input, so the same setting behaves differently on a bass note and on a hi-hat. Bit reduction is level-dependent instead, so the same setting behaves differently loud and quiet. Neither of them is a fixed color you can dial once and forget.

**12 bit, full rate.** The quantization is present and the top end is untouched. This is the setting most people actually want and almost nobody starts from.

## Hear the two halves apart

Every page written about this category describes the sound in adjectives. Here is one loop four ways, so you can check the adjectives against the thing.

- **Dry** — no processing — https://gazillionindustries.com/f12/f12-clean.m4a

- **Bit reduction only** — grain, no new clang — https://gazillionindustries.com/f12/f12-bitcrush.m4a

- **Sample rate reduction only** — the metallic half — https://gazillionindustries.com/f12/f12-rate25.m4a

- **Both** — grain and clang together — https://gazillionindustries.com/f12/f12-both.m4a

The same 1.05 seconds each time, through [F(ilter)12](https://gazillionindustries.com/f12.html). Peak levels sit within 0.05 of each other and RMS within two per cent, so what changes across the four is spectrum rather than volume.

## Crushing adds top end rather than removing it

This is the single most useful thing to know before you shop, and it is the opposite of what the word "lo-fi" suggests. Take the 99 per cent spectral rolloff of those four files — the frequency below which ninety-nine per cent of the energy sits. Dry, that loop rolls off at 869 Hz. Bit reduction alone pushes it to 1,462 Hz. Sample rate reduction alone pushes it to 3,348 Hz. Both together, 3,406 Hz. The crushed versions are brighter than the clean one, by a factor of almost four.

That makes sense once you look at the mechanisms. Quantization error is broadband noise spread across the whole spectrum. Aliasing images are folded copies of high-frequency content arriving at new frequencies. Both are additions. Neither is a low-pass filter, and the widespread belief that a bitcrusher darkens a sound comes from plugins that quietly put a low-pass after the resampler and never mention it.

So the failure mode of a bitcrusher on a busy mix is harshness, not dullness. The added energy lands in the two to five kilohertz region where small speakers put most of their output and where human hearing is at its most sensitive — see [Fletcher-Munson](https://gazillionindustries.com/fletcher-munson/). That is the band that survives a phone, a laptop and a car dash intact. A crush that felt like character on studio monitors arrives on a commute as glare, which is the whole of the opening paragraph explained in one sentence.

[F(ilter)12](https://gazillionindustries.com/f12.html) puts the crush pair in front of a filter rather than behind it, which is the layout this problem asks for: crush, then decide what survives. There's a demo on the page.

## What separates a good bitcrusher from a bad one

Six things, in the order they matter. Two of them are the reason a paid plugin can be worth money in a category where the arithmetic is free.

**One: a filter before the resampler.** Aliasing images come from content above half the new rate. Remove that content before the rate reduction and the folding has less to work with, so the effect gets more controlled and less random. Plugins that expose this call it a pre filter or an anti-alias filter. It is the difference between a crush you can aim and a crush that detonates differently on every source. Ableton's Redux describes its Pre button as engaging a filter before downsampling to reduce the bandwidth of the signal being processed, which is exactly the job.

**Two: a filter after the resampler.** The post filter removes the folded images you did not want while keeping the ones below it. Redux calls its post filter a low-pass that reduces imaging, with the cutoff set in octaves above or below half the rate shown. Klevgrand's Degrader fixes its filter frequency to half the sample rate value and lets you pick the character on both sides. A crusher with a pre filter, a post filter and nothing else is already more useful than one with twelve presets.

**Three: dither on the quantizer.** Dither is a small amount of noise added before the bits are thrown away, and it converts the ugly, level-dependent distortion of raw truncation into a steady noise floor. Kilohearts' Bitcrush exposes it directly and describes it as noise added to reduce the distortion caused by quantization. Whether you want it is a taste question — the ugly version is frequently the point — but you want the choice, and a plugin that hides it has made the decision for you. The background is in [dithering](https://gazillionindustries.com/dithering/).

**Four: jitter on the clock.** Jitter randomizes when each sample is taken rather than what it measures. Redux describes it as noise added to the downsampler's clock, which makes the result noisier and wider in stereo. Degrader has a jitter amount in its resampler. It is the control that separates a downsampler from something that sounds like a circuit, and it is also the one most likely to cost you mono compatibility, so audition it folded to mono — see [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

**Five: a dry/wet mix that works.** Parallel is how this effect is used in practice, and a mix knob that simply crossfades is not the same as one that keeps phase alignment across the blend. Test it: set mix to 50 per cent, then bypass, and listen for whether the low end thins. If it does, the wet path is delayed relative to the dry and you are hearing partial cancellation rather than a blend.

**Six: parameter smoothing.** Bitcrushers get automated more than almost any other effect, and a rate knob that steps rather than glides produces audible zipper clicks on every automation move. This is invisible in a demo video and obvious the first time you draw a filter sweep over eight bars. Tritik's notes on the second version of Krush list reworked parameter handling and smoother parameter automation as changes from the first, which tells you the problem is real enough to be worth a rewrite.

## How to audition a bitcrusher in ten minutes

Demo videos are cut to flatter the plugin and the audio on maker pages is chosen the same way. Run these four checks on your own material and you will know more in ten minutes than a week of reading roundups will tell you.

**One: the held note.** Feed it something sustained — a pad, a bass note, a vocal held for two seconds. Rate reduction artifacts are pitched, and pitched artifacts against a sustained note either sit in the key or fight it. On a drum loop this is nearly inaudible, which is why a plugin auditioned only on a break always sounds fine. Most disappointing purchases in this category were auditioned on a break.

**Two: the quiet tail.** Find a passage with a real decay in it: a snare ring, a reverb tail, the last two beats before a drop. Quantization error is worst relative to signal at low levels, so the tail is where the plugin's quantizer shows its manners. A good one turns the tail grainy. A poor one makes it sputter and cut out unevenly, which is raw truncation with no dither and nothing else.

**Three: the mono fold.** Engage whatever jitter or stereo widening the plugin offers, then sum to mono. Downsampler jitter generates different noise on each channel by design, and different noise on each channel is width that partially disappears when a club system, a phone or a radio sums it. You are not looking for zero change. You are looking for how much of the effect you bought is still there.

**Four: the automation sweep.** Draw a rate automation from full to a quarter over four bars and play it. Listen for clicks at each automation node. Then do the same on the bit control. A plugin that survives both is one you can use as a transition effect, which is half of what these get bought for.

## How to set one up

- Insert the bitcrusher on a duplicate of the track, not on the track itself.

- Set the dry/wet mix to 100 per cent so you can hear what the controls do.

- Engage the pre filter and set it below the top of the source material.

- Lower bit depth until grain appears, usually between 12 and 8 bits.

- Lower sample rate until the top end starts to ring, and stop at the first setting you like.

- Engage the post filter and bring it down until the ring stops being painful.

- Set output gain to match bypassed level within 0.5 dB.

- Blend the duplicate under the original, starting at minus 12 dB.

- Raise the blend until you hear it, then lower it by 3 dB.

- Check the result on a phone speaker before you commit.

Step nine is the one people skip and it is the one that matters. Crushing is an upper-mid addition, the upper mids are where attention lives, and every setting that sounded correct in solo is roughly double what the arrangement wanted.

## Where a bitcrusher goes in the chain

Before the filter, after the compressor, on a parallel path if you can afford the CPU. Each of those has a reason.

**Before the filter,** because the filter is how you choose which artifacts survive. Crushing first and filtering second gives you a crush whose brightness you control. Filtering first and crushing second gives you a crush that generates new brightness after your filter has stopped being able to do anything about it. Both are usable. Only one of them is steerable. Cutoff and resonance behavior is covered in [filter cutoff and resonance](https://gazillionindustries.com/filter-cutoff-and-resonance/).

**After the compressor,** because quantization error is level-dependent and a compressor changes levels. Crush before the compressor and the grain rises and falls with gain reduction in ways you did not ask for; crush after it and the grain sits still. There is a creative use for the first arrangement, and it is a creative use rather than a default.

**On a parallel path,** because the one thing this effect does not do well is full-strength across a whole mix. A parallel crush lets you keep transient definition from the dry path and take grain from the wet one. Parallel technique transfers directly from [parallel saturation](https://gazillionindustries.com/parallel-saturation/).

One placement to avoid: after the limiter. Bit reduction after your final gain stage will push samples past full scale on the way back up, and the resulting intersample overs are the kind of problem that only shows up after encoding. See [true peak](https://gazillionindustries.com/true-peak/).

## Best free bitcrusher plugins

The free tier in this category is unusually strong, because bit and rate reduction are cheap to compute and every developer writing a modular effect suite includes one. What free plugins generally leave out is oversampling and refined filter placement. What they mostly include is enough to finish a record.

**Kilohearts Bitcrush.** Free with a Kilohearts account, and the most complete free control set on this list. Its page lists a Rate display that downsamples to a minimum of 200 Hz, a Bits knob, a Dither knob, separate ADC Q and DAC Q knobs for the quality of the analog-to-digital and digital-to-analog conversion, and a Mix knob. The two quality controls are unusual: lowering ADC Q adds dissonant aliasing in the low frequencies, lowering DAC Q adds it in the high frequencies, so you can put the folding where you want it. It runs as a regular VST, AU or AAX plugin and as a Snapin inside Phase Plant, Multipass and Snap Heap. It comes as part of Kilohearts Essentials, a free collection whose product table lists every item in it at zero.

**MeldaProduction MBitFun.** Free, and included in the MFreeFXBundle, which Melda's page describes as a set of 38 completely free effects. MBitFun converts audio to limited fixed-point precision from one single bit up to 16 bits per sample and then lets you access each bit individually and apply operations to it. That is a different instrument from a bit depth knob: you are not choosing a resolution, you are reaching into the binary word. It makes sounds nothing else on this list makes, and it is harder to aim than everything else on this list. Melda's free versions carry a reminder box on the interface and leave preset management, upsampling and the modulators to the paid upgrade.

**Tritik Krush, version one.** Tritik's page keeps the original Krush available as a free legacy download, version 1.3.0 for macOS and Windows, with the note that it is no longer maintained. Unmaintained matters over a five-year project life, so treat it as a tool for finishing something rather than one to build a template around. The company has moved to a second version, which is not free.

**Glitchmachines Fracture.** Free, and a different animal: a buffer effect with a multimode filter, three LFOs and a delay, with a configuration menu that reorders the chain. Its page describes it as geared toward robotic artifacts and musical malfunctions, which is the honest description. If what you actually want when you type "bitcrusher" is glitch and stutter rather than quantization grain, this is closer to the thing you meant. It runs Win/Mac, VST3/AU, 64-bit, and its stated requirements are macOS 11 or later and Windows 11.

## Free bitcrusher plugins already in Ableton, FL Studio and Logic

Before downloading anything, open the device you already paid for. All three major DAWs ship bit reduction, and in one case the stock device has a better feature list than several paid plugins.

**Ableton Live: Redux.** The best-specified stock bitcrusher of the three and the answer to "free bitcrusher plugin Ableton" in almost every case. Live's manual splits it into downsampling on the left and bit reduction on the right. Downsampling gives you Rate, Jitter for noise on the downsampler's clock, and both a Pre filter that reduces the bandwidth going into the downsampler and a Post low-pass that reduces imaging, with the post cutoff set in octaves relative to half the rate. Bit reduction gives you Bits and a Shape control that varies the quantizer's characteristic curve, with higher values giving finer resolution at small amplitudes so that quiet components are affected less than loud ones. Pre filter, post filter, jitter and a variable quantizer curve is four of the six things worth paying for, and it is already installed.

**FL Studio: Fruity Squeeze.** The answer to "best bitcrusher plugin FL Studio" if the budget is zero. Image-Line's manual describes it as a bit-reducing, distortion and filtering plugin, with Squarize reducing the bit depth of the input stream, a low-pass Filter Freq and Filter resonance that can be switched pre or post, and Mix and Gain. Its distinguishing section is Puncher, which replaces audio sample data with a fixed user-set value: Preserve sets how many samples pass untouched, from zero up to a one-second buffer whose maximum depends on the mixer's sample rate setting, Impact sets how many get forced to the nominal value, Relation sets the ratio between the two, and Amount sets the value they get forced to, with the manual noting that low settings work best. That is a sample-replacement effect rather than a quantizer, and nothing else here does it.

**Logic Pro: Bitcrusher.** Logic ships a device called Bitcrusher, listed in Apple's user guide under distortion effects alongside Clip Distortion, Overdrive and Phase Distortion. It is the plainest of the three stock options and the quickest to get a usable result from.

The general rule: if the stock device has a pre filter and a post filter, a paid plugin has to beat it on something other than the crush itself. Several do. Several do not, and finding out which is what the audition checks above are for.

**4 bit at a reduced rate.** Bits make it grainy; the rate is what makes it clang. Almost nobody needs both this far down, which is why both knobs exist separately.

## Paid bitcrusher plugins worth knowing

Prices below were read off each maker's own page in September 2026 and they move, so check before you buy. Where a page did not state a price, none is given here.

**Tritik Krush2.** Tritik describes it as a bitcrusher combining bit-depth reduction, sample-rate reduction, filtering and compression, with a drive stage, analog-modeled resonant filters and a modulation section holding two stereo LFOs. Their FAQ prices a Krush2 license at 10 euros. The feature list for version two includes two LFOs with adjustable left/right phase offset, LFO rate up to 20 Hz, sawtooth LFO shapes, comb and band-pass filters, a pre/post filter position switch, a one-knob compressor with a Phat mode, a downsampling jitter control, a bitcrushing dither control and up to 8x oversampling. Mac builds are VST3, AU and AAX; Windows builds are VST3 and AAX; stated requirements are Windows 10 or 11 and macOS 10.15 or later on Intel and ARM. The demo is fully functional with an occasional audio fade. For a plugin at that price, the oversampling and the dither and jitter controls are the notable parts — see [oversampling](https://gazillionindustries.com/oversampling/) for what that buys.

**Klevgrand Degrader.** Listed at $39.99 on Klevgrand's page, described as a combined resampler and bitcrusher. It resamples between 250 Hz and 96 kHz, offers a low-pass filter with selectable character both before and after resampling with the frequency fixed to half the sample rate value, and takes bit depth continuously between 3 and 24 bits. Continuous bit depth is worth noting: most plugins step in whole bits, and the fractional positions between them are usable. It adds a jitter amount, a separate distortion algorithm, parameter linking so one knob can drive several, input and output gain, and a dry/wet control. Stated requirements are macOS 10.10 or later, Windows 7 SP1 or later, AU, VST or AAX in a 64-bit host, with an iPad AUv3 version. Klevgrand's demo is the full version with occasional audio dropouts.

**d16 Group Decimort 2.** Listed at 59 euros, and the one on this list aimed squarely at the sound of vintage digital sampling hardware rather than at destruction. Its page describes an approximative anti-alias filter and an image filter, adjustable jitter and dithering, two alternative quantization algorithms, and a multimode filter that works pre or post alongside a resampler module. The claim worth understanding is their statement that the plugin has zero internal aliasing, and that the only aliasing present is the emulated aliasing of the classic samplers they modeled. Read plainly, that means the artifacts are computed deliberately rather than falling out of a cheap resampler, which is a real engineering distinction and also the reason it costs what it costs. Installers are listed for Windows 32-bit, Windows 64-bit and Mac OS X.

**Sonic Charge Permut8.** Listed at $66, with a three-week trial. Sonic Charge describes it as an effect that embraces the sounds of primitive signal processing hardware, built around a 12-bit digital delay with a variable sample rate from 0 to 352 kHz, with the delay controlled by a programmable processor whose behavior you change with operators, and input and output stages carrying virtual analog saturation, limiting and filtering. It ships with 11 program banks holding 320 presets in total, and it can be extended with alternative firmwares loaded as bank files. Stated requirements are Windows XP or later and macOS 10.13 or later, in a host supporting VST 2.4, VST3 or Audio Units 2. Calling it a bitcrusher undersells it and also explains why people who want a bit knob sometimes bounce off it.

## What a bitcrusher costs you

Every technique has a bill. This one has four.

**Harshness in the band that travels.** Covered above and worth repeating, because it is the failure that reaches listeners rather than the one you hear in the room. The added energy sits where phones, laptops and car dashes are loudest.

**Low-end definition.** Quantization noise is broadband, which means it also lands under your bass. On a sub-heavy arrangement a crushed bass gains a gray haze that reads as thickness in solo and as mud in the mix. Crush a filtered copy and leave the fundamental clean.

**CPU, if you want it clean.** Oversampling is how a plugin keeps its own internal distortion from folding back on top of the aliasing you asked for. It costs processing, and on a session with a crusher on twelve channels it costs enough to notice.

**Reversibility.** Crushing is destructive in the useful sense — it removes information — so a print you make today cannot be softened tomorrow. Keep the plugin live until the arrangement is finished, or keep the dry stem.

And the non-cost worth naming: bit reduction does not make anything louder. If loudness is the goal, the direct route is in [making a mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/), and the difference between grit that adds level and grit that only adds noise is in [saturation versus distortion](https://gazillionindustries.com/saturation-vs-distortion/).

## Settings that work, by source

Starting points, not destinations. Every one of these wants checking against the arrangement rather than in solo.

**Drums.** The most forgiving source and the reason most people buy one. Grain sits on the transient and the tail, and the grid hides pitched aliasing. Start at 12 bits and a rate around a quarter of session rate, then pull the post filter down until the hats stop spitting. Full method in [how to make lofi drums](https://gazillionindustries.com/how-to-make-lofi-drums/) and [how to make drums sound dusty](https://gazillionindustries.com/how-to-make-drums-sound-dusty/).

**Sampled loops and chords.** This is where 12-bit earns its reputation. A loop at 12 bits with the rate barely touched picks up a worn quality without announcing that a plugin was used, which is the whole trick of [making a sample sound old](https://gazillionindustries.com/how-to-make-a-sample-sound-old/).

**Vocals.** Small amounts, automated. A held vowel is the worst case for rate reduction because the artifacts are pitched and the vowel is pitched, so they beat against each other. Ride the mix control up on consonants and down on sustained notes, or crush a parallel copy and duck it under the lead.

**Bass and sub.** Split it. Crush a high-passed copy at around 200 Hz and leave the fundamental untouched, then blend. Crushing a full-range bass is the most common way to lose a low end and not understand why.

**Synths and pads.** The place rate reduction sounds best, because the added tones become part of the timbre rather than an artifact on top of one. Automate the rate with an envelope or an LFO and the pad develops. See [the auto filter effect](https://gazillionindustries.com/auto-filter-effect/) for the same idea applied to a cutoff.

**The full mix.** Rarely, gently, and in parallel. A crush across a summed mix applies its harshness to everything at once, including the vocal, and the vocal is where a listener notices first.

## Why the recommendation threads never agree

Ask which bitcrusher is best in any producer forum and you get four answers that do not overlap, which reads as noise and is actually information. The category contains at least four distinct products sharing one name.

There is the vintage sampler tone, where the goal is a specific warmth from a specific era of converters and the correct plugin is one with careful anti-alias and image filtering. There is the destruction tool, where the goal is the sound of something failing and the correct plugin is whichever one has the ugliest quantizer. There is the glitch and stutter instrument, where the goal is rhythm rather than tone and a buffer effect beats every bitcrusher made. And there is the mix seasoning, where the goal is grain you do not consciously hear and the correct plugin is the stock one with a good post filter.

Four people arguing are usually holding four of those goals. Name yours before you shop and the shortlist collapses to two. For the wider set of tools around this one, see [lofi plugins](https://gazillionindustries.com/best-lofi-plugins/).

## Questions people ask

### What is the best bitcrusher plugin?

There is no single answer, because the category holds four different products under one name: vintage sampler tone, destruction, glitch, and subtle mix grain. Decide which of those you want first. For most people the honest answer is that the stock device in their DAW does the job, and the reason to buy is oversampling, dither and jitter control, or filter placement rather than the crush itself.

### What is the best free bitcrusher VST?

Kilohearts Bitcrush is the most complete free option, with rate down to 200 Hz, a bits knob, dither, separate converter-quality controls for where the aliasing lands, and a mix control. Before downloading it, check what you already own: Ableton's Redux in particular has a pre filter, a post filter, jitter and a variable quantizer curve, which is a stronger feature list than several paid plugins.

### What is the best free bitcrusher plugin for Ableton?

Redux, which ships with Live. Its manual documents downsampling with Rate and Jitter, a Pre filter that reduces bandwidth before downsampling, a Post low-pass that reduces imaging with its cutoff set in octaves relative to half the rate, and bit reduction with Bits plus a Shape control for the quantizer curve. Free VST bitcrushers add variety rather than capability over it.

### What is the best bitcrusher plugin for FL Studio?

Fruity Squeeze is included and does more than its age suggests: bit reduction via Squarize, a low-pass with resonance switchable pre or post, mix and gain, plus the Puncher section, which replaces sample data with a fixed value and has no direct equivalent elsewhere. Any VST3 bitcrusher works in FL Studio, so the paid options on this page are all available to you.

### What is the best bitcrusher plugin according to Reddit?

Recommendation threads in this category do not converge, and the reason is structural rather than a failure of the people posting. Four goals share one search term, so four correct answers arrive at once and each looks wrong to the other three. Read the threads for the goal being described rather than the plugin being named, and you will find yours faster.

### Is a bitcrusher the same as distortion?

No. Distortion bends the waveform along a smooth curve and adds harmonics related to the notes, so it stays musical. A bitcrusher quantizes amplitude and time, so its added content is broadband noise and inharmonic folded tones. They stack well: a little saturation before a gentle crush usually beats either at full strength.

### Does a bitcrusher make a sound darker?

Not by itself. Measured on one loop through a bitcrusher, the frequency below which 99 per cent of the energy sits moved from 869 Hz dry to 3,406 Hz with both bit and rate reduction engaged. Crushing adds high-frequency content. Plugins that seem to darken a sound are applying a low-pass filter after the resampler.

### What bit depth should I use?

Twelve bits for grain you do not consciously notice, eight for obvious crunch, four or fewer for destruction. Twelve is where most producers end up on loops and drums, because it changes the texture without announcing that anything was done. There is no technically correct value; each bit removed costs roughly 6 dB of dynamic range.

### Where should a bitcrusher go in the chain?

Before the filter, so the filter chooses which artifacts survive, and after the compressor, so the grain does not rise and fall with gain reduction. Never after the limiter: bit reduction at the end of a chain pushes samples past full scale and produces intersample overs that only appear after encoding.

### Is a paid bitcrusher worth it over a free one?

Only for specific things: oversampling, exposed dither and jitter, continuous rather than stepped bit depth, and smooth parameter automation. If none of those is on your list, the stock device will finish the record. Audition a demo on a held note and a quiet tail before deciding, since those are the two places the difference shows.

## What F(ilter)12 does

F(ilter)12 puts the crush pair in front of the filter rather than behind it. **SAMPLE RATE** slows the rate the audio is sampled at, so the top goes and what was up there folds back down as new content. **BIT** coarsens the steps it is measured in, so quiet detail rounds off and what is left picks up a hard edge. Twelve bits is as clean as it gets; it only goes down from there.

Behind them sits the part this article says to judge a crusher on. **POSITION** sets where the filter sits, and the further it works the more it drives. There are five filter shapes — low-pass, high-pass, band-pass, notch, and a morph that runs from a closing low-pass through untouched in the middle to an opening high-pass. **SLOPE** is how hard it falls away past the corner, from 18 dB per octave up to a wall. **DIRTY** feeds the filter's own distortion back through itself. **Q SHAPE** puts peaks and dips at fixed distances from wherever the cutoff is, so the shape travels with the knob: WAH is one peak at the cutoff, VOWEL is four spaced like a voice, COMB alternates peaks and nulls, SCOOP lifts both ends and pulls the middle down, PLAIN adds nothing, and DRAW is your own, clicked in on the display. **DRIVE**, **RESO**, **Q** and **MIX** finish it. Either **AUTO FILTER** or **SIDECHAIN** can move the cutoff, one at a time. **AURA** sits on top, drawn on the display in green where it is adding and red where it is taking away.

Crush, then choose what survives. That is the order the problem asks for.

Which is the whole answer to the phone speaker the next morning. Nothing made a filter decision after the crush, because nothing was there to make one.

---

## About F(ilter)12

F(ilter)12 — a 12 bit sauce filter for Mac and Windows: a lo-fi section, five filter shapes, six resonance shapes and AURA.

https://gazillionindustries.com/f12.html
