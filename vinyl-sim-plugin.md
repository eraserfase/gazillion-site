# Vinyl sim, and what a vinyl sim plugin does

> What the vinyl simulator effect actually is, why it works on drums, the four parts of the sound, and what separates a convincing one from a thin one.

Source: https://gazillionindustries.com/vinyl-sim-plugin/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Every plugin in this category claims the same thing and they do not all do the same work. Pulled apart, the effect is four separate behaviors happening at once, and which of them a given plugin actually implements is what decides whether the result sounds like a record or like a filter with noise on it.

A vinyl sim is a plugin that adds the warmth, noise floor, and subtle pitch instability associated with analog disc playback to a digital audio signal. It typically layers a crackle or [hiss](https://gazillionindustries.com/tape-hiss/) bed, applies gentle high-frequency roll-off, and introduces slow wow and flutter so the track reads as though it were cut to a physical disc and played back through a turntable rather than rendered purely in the box.

## The short version

- **What it is**: four things at once, not one process

- **The four**: bandwidth, noise, the squash, the wear

- **The one most leave out**: the squash - level collapsing and returning

- **Why on drums**: it shortens hits and lifts the room behind them

- **Sounds fake when**: it is a low-pass with noise laid over the top

- **Free covers**: the noise and the bandwidth; pay for the rest

- **Our answer**: DRUGS, free, one control called DOSE

## What the effect actually does

A vinyl simulator takes a clean digital signal and reshapes it to resemble what a turntable would have produced from a lacquer cut. The most obvious change is bandwidth. High frequencies roll off gently, low frequencies lose their deepest extension, and the midrange gets a slight forward push. This alone makes a track sound older and more confined, as though it were captured through a smaller lens.

Beyond the frequency shaping, the plugin introduces noise. A steady hiss sits under everything, and intermittent crackle pops at irregular intervals, mimicking the sound of a needle dragging across a worn groove. Some simulators also add a subtle pitch instability, a slow wobble in the timing that makes sustained notes drift slightly sharp or flat. This is the wow and flutter that a turntable introduces when the platter is not perfectly true.

The third thing a vinyl sim does is compress the signal in a nonlinear way. Transients get softened, peaks get tamed, and the overall dynamic range narrows without a traditional [compressor](https://gazillionindustries.com/what-is-a-compressor/) doing the work. Harmonic distortion layers in, usually even-order, which thickens the sound and makes it feel denser. The combination of all these elements is what separates a convincing simulation from a thin one. A thin simulation applies only the frequency curve and the noise floor, leaving the signal otherwise untouched. A convincing one also handles the transient behavior, the saturation, and the pitch instability together, so the result reads as a single coherent artifact rather than a stack of unrelated processing.

**DOSE 88.** It dives on each hit and takes the bar to come back.

## Why it works on drums

Drums are the first thing most producers reach for when they want that vinyl character, and the reason is straightforward. A drum hit is a burst of energy that starts and stops abruptly, and the gentle compression built into a vinyl sim softens those edges without you having to dial in a compressor manually. The attack gets a little rounder, the tail gets a little thicker, and the whole kit starts to sit together in a way that feels physical rather than clinical. The noise floor fills the silence between hits, giving the track a sense of air and room that a clean digital recording often lacks.

The bandwidth limitation does real work on the high-frequency content of a kit. Hi-hats and snares are where digital recordings tend to get brittle, and the roll-off that comes with vinyl emulation tames that harshness in a way that feels organic rather than like a low-pass filter. The crackle and pops add a layer of rhythmic interest that sits underneath the groove, making the pattern feel like it is happening in a space rather than floating in a void.

What separates a convincing vinyl sim on drums from a thin one is how it handles the transient content. A good one lets the initial snap of a kick or snare survive the processing, so the hit still reads as a hit, while the body and tail get the warmth and the squash. A thin one flattens everything equally, turning a punchy snare into a dull thud. The trick is finding a sim that treats the attack and the sustain differently, the way a real turntable does when a needle hits a groove with a lot of energy in it.

## The four parts of the sound

A vinyl simulation plugin works by layering several distinct behaviors on top of your signal, and understanding each one separately helps you dial in something that sounds right rather than just something that sounds old. The first is bandwidth. A real cutting lathe and playback system cannot reproduce the full frequency range of a modern digital file. The highs roll off gently, the lows lose weight and definition, and the midrange becomes the dominant region. A good sim replicates this as a smooth, asymmetric curve rather than a harsh brick-wall filter, because the real thing never cuts cleanly at a single point.

The second part is noise. Surface noise, crackle, and a faint hiss sit underneath everything else, and they are not random in the way a white noise generator produces them. Real noise has a character tied to the physical medium, with pops that cluster and a floor that breathes. The third part is the dynamic behavior. A vinyl chain applies a gentle, program-dependent squash that rounds transients and pulls the mix together in a way that resembles compression but is not quite compression. It is more like the medium absorbing energy unevenly across the frequency spectrum.

The fourth part is wear. Wow and flutter introduce slow pitch instability, and harmonic distortion adds a subtle thickness that no simple saturation model quite captures. These four elements interact. Bandwidth shapes how the noise sits in the mix, the squash changes how the distortion reads, and the wear ties everything into a sense of physical motion. A convincing sim handles all four as a system. A thin one treats them as independent toggles you can switch on and off, which is why it sounds like a filter with a noise gate rather than a record.

**DOSE 95, MIX 45.** The squashed copy under the dry one, without a send.

## How to set one

Start by setting the noise floor to a level that sits just below the quietest part of your source material. If you can hear the hiss clearly over a full mix, it is too loud. The goal is texture, not a separate track. Once the noise sits right, bring in the band-limiting. Most sims offer a low-pass and a high-pass that together narrow the frequency window. Pull the low-pass down until the top-end sparkle softens into something rounder, then bring the high-pass up until the sub-bass feels contained rather than gone. You are looking for the sound of a signal that has been squeezed through a narrow pipe.

Next, dial in the compression or squash. This is the parameter that gives the effect its weight. On drums, a moderate amount of squash makes transients feel closer and denser without the obvious pumping you would hear from a dedicated compressor. Keep the attack slow enough that the initial crack of a snare still reads. If everything sounds mushy, you have gone too far. The wow and flutter control adds pitch instability. At low settings it gives a sense of movement and life. At high settings it becomes a wobble that no real turntable produces unless the platter is warped.

Wear and clicks are the last thing to add. A few sparse pops scattered across the signal sell the illusion of a physical medium. Too many and it sounds like a broken machine rather than a well-used one. The trick is to automate the wear so it appears only in the intro or outro, or only during quiet passages, rather than across the entire track. A convincing vinyl sim never announces itself. It makes the listener feel they are hearing something that has been handled, stored, and played before.

## What makes it sound fake

The most common tell is a noise floor that sits on top of the signal instead of living inside it. Real vinyl noise interacts with the music. A loud snare hit masks the crackle underneath it, and the noise swells back in during the decay. A cheap simulation just layers a constant hiss and crackle pattern over the whole track regardless of what the music is doing. The noise never ducks, never breathes, never changes character between a quiet bridge and a dense chorus. It sounds like someone placed a sheet of static behind the mix rather than the mix being pressed into a groove.

Another giveaway is uniform saturation. Actual vinyl compresses differently at different frequencies and at different signal levels. The low end squashes harder than the highs, and the squash gets more pronounced when the signal is hot. A simulation that applies the same gentle curve everywhere sounds polite and thin, like a gentle high-pass filter with a bit of noise bolted on. It lacks the sense that the medium is struggling under the weight of the material.

The third failure is a pitch wobble that is too regular. Real turntable speed variation is irregular, a slow drift with small unpredictable deviations. A simulation that applies a smooth sine-wave wobble at a fixed rate sounds like a chorus effect, not like a platter that is slightly off-center or a motor that is hunting. The wobble needs to feel organic and slightly random, not metronomic.

## The options, and how to choose between them

Four different kinds of product get sold under this name. Knowing which one you are holding stops you buying the same quarter of the sound three times.

The first is the all-in-one. One panel, all four behaviors, usually with a single wear or age control moving several at once. Fastest route to something usable, and for most people the right purchase. The cost is that the four were balanced against each other by somebody else: when the noise sits right the squash is often too heavy, and your only correction is the wet control.

The second is the lo-fi multi-effect with a vinyl mode inside it: the record next to cassette, radio, a blown speaker, a bad phone line. Good value when you want the whole shelf in one window. The cost is depth. A mode rarely exposes its own parts, so when the crackle gets busy you turn the whole mode down instead of the crackle.

The third is the noise player. A sampled surface bed, a filter, a level control, nothing else. Often free. It does one of the four jobs well enough, so keep one. Alone it never will be: static crackle over an untouched digital signal is the most recognizable failure in the category.

The fourth is assembling it from plugins you already own. Slower the first time, better every time after, and the only route where one part moves without disturbing the other three. Section below.

Some are sold on a specific patina: a named decade, a pressing plant, one worn copy of one record. That is packaging, and no reason to avoid them, but it tells you nothing about which of the four parts are implemented. Judge the four.

Five questions settle the purchase faster than any demo video.

- **What is it going on?** Drums need the squash and the bandwidth most. A finished mix needs the bandwidth and a little noise, and the squash will argue with your master chain.

- **Is the noise on its own control?** If you want crackle in the intro and none in the second verse, you need a level you can automate rather than one wear knob that drags the tone along with it.

- **Does it survive mono?** Identical noise in both channels sums around 6 dB hotter and collapses to the middle. Two independent beds sum around 3 dB and stay wide. Check which you have before you commit — see [mono compatibility](https://gazillionindustries.com/mono-compatibility/).

- **Does the transient live?** Put it on a loop with a hard snare at the loudest point of the bar. If the snare loses its edge before the noise reaches a useful level, the squash stage is too blunt to be worth the slot.

- **What does it cost to run?** Wear sections are often oversampled and expensive. One instance is free; twelve across a session is a number you feel on the transport.

## Free vinyl emulation, and what paying adds

Free gets you further here than in most categories. Two of the four parts are cheap to build and sound much the same whoever builds them.

Noise is the first. A filtered bed with a level control and a crackle generator over the top is not hard engineering, and a free one set correctly disappears into a mix like a paid one. Bandwidth is the second: a gentle low-pass, a shallow high-pass, and every DAW ships with a filter that can. Half the effect, for nothing. [Best free VST plugins](https://gazillionindustries.com/best-free-vst-plugins/) covers which categories are worth filling this way.

Money buys the other two, and specifically how program-dependent they are. Saturation that gets dirtier as the signal gets hotter rather than one curve at every level. A dynamics stage that answers a kick differently from a hi-hat. Pitch drift with an irregular shape instead of a sine at a fixed rate. Those are expensive to get right, and the parts a free plugin usually leaves out. [Analog warmth](https://gazillionindustries.com/analog-warmth/) is mostly this distinction under a friendlier word.

The honest buying advice is unglamorous. Take the noise and the bandwidth for nothing, pay once for whichever of the remaining two your material actually needs, and stop. The failure in the free lane is rarely a bad plugin. It is collection: twenty free lo-fi effects means twenty noise beds, no chain you can repeat, and a session you cannot rebuild next month.

## Building one from parts

Four parts, four slots, in this order: bandwidth, squash, wear, noise. Each stays adjustable without disturbing the others, which is the whole argument for doing it this way.

**Bandwidth.** A filter with a shallow slope. Roll the top down until the cymbals stop glittering, lift the bottom until the sub stops moving the meter. Six decibels per octave sits closer to a physical playback chain than twenty-four, because nothing mechanical cuts at a single point. [F12](https://gazillionindustries.com/f12.html) is our filter for this end of it: five filter shapes, six resonance shapes, a lo-fi section for the digital half of the damage, and AURA. $49, and DRUGS comes with it.

**The squash.** The part most home-built chains leave out, and the part doing the most work on drums. You want level collapsing on the loud hits and climbing back across the bar rather than a fixed curve applied evenly. [DRUGS](https://gazillionindustries.com/drugs.html) is one knob for exactly that, free for Mac and Windows, with MIX on the face so the squashed copy can sit under the dry one without a send.

**Wear and noise.** Instability and a noise floor are the two things a record shares with tape, and a cassette simulation will hand you both on separate controls. [TRIPLE OG](https://gazillionindustries.com/tripleog.html) puts HISS on its own control, WOW FLUT on the instability, and AGE across a range from zero to sixty years. It is a cassette machine rather than a turntable and it sounds like one, so take the motion and the floor from it and get your bandwidth from the filter.

**Drift on its own.** When movement is the only thing missing, [SKRUU](https://gazillionindustries.com/skruu.html) is varispeed with PITCH and TIME on independent controls, ELASTIC to make the knob sprung and SLOPE to shape the return, sixteen shapes of it. Its SAMPLING GRADE steps the rate down as far as 3.9 kHz on LO-FI 2, which is the digital way of losing the top rather than the physical one. $29. The background is in [what varispeed is](https://gazillionindustries.com/what-is-varispeed/).

The cost is setup time and up to four slots per bus, and an evening lost to the first template. The return arrives the first time somebody says the crackle is too much and you turn down the crackle.

**DOSE 12.** Under a noise bed and a filter, the useful setting is lower than it looks.

The wider lo-fi shelf, and the order to put it in, is in [best lofi plugins](https://gazillionindustries.com/best-lofi-plugins/). For the drums specifically, [how to make drums sound dusty](https://gazillionindustries.com/how-to-make-drums-sound-dusty/).

## Questions people ask

### What does a vinyl sim actually do?

A vinyl simulation plugin takes your finished mix and layers on the artifacts you hear on a record. It adds a subtle rumble, a gentle high-frequency roll-off, a bit of surface noise, and sometimes a slight pitch wobble. The goal is to make a digital file sound like it was cut to lacquer and pressed onto a disc, rather than just exported from a session.

### Is vinyl sim the same as a lofi filter?

No. A lo-fi filter is a single low-pass or band-limiting stage that rolls off highs and mids. A vinyl sim is a stack of processing: rumble, crackle, pitch wobble, harmonic saturation, and a frequency curve that mimics the physical groove. You can approximate the tone with a filter alone, but the noise and instability layers are what make it read as vinyl rather than just dull.

### Where should a vinyl sim go in the chain?

Place it at the end of your processing chain, after your equalization, compression, and saturation stages. The vinyl sim represents the final playback medium, so it should sit after all your mixing decisions. If you put it earlier, downstream processors will alter the wow, flutter, and surface noise in ways that do not reflect how a record actually sounds when played back.

### What is the best vinyl sim VST?

There is no single answer: the category covers four separate behaviors and no two products weight them the same. Decide which parts you need before you shop. For one plugin and one decision, take an all-in-one that keeps noise and wear on independent controls. If you already own a filter, a saturator and a bus compressor, you have three quarters of it and need only the drift.

### Is there a free vinyl emulation plugin?

Several, and free is strongest at the noise and the bandwidth. A free crackle bed with a filter and a level control does the same job as a paid one once the level is right. Where free runs thin is level-dependent saturation and irregular pitch drift. Assemble the cheap half for nothing and spend once on the half that is hard to build.

### Are vinyl sim, vinyl simulator and vinyl emulation different things?

One category under three names, used interchangeably on product pages. Simulator and emulation tend to appear where the plugin aims at the whole chain from lacquer to needle. Sim is the shorthand producers use in a session. None of the three tells you which of the four behaviors are implemented, which is the only question that changes what you hear.

### How much does a vinyl sim plugin cost?

Anywhere from nothing to the price of any other paid effect, and the price mostly tracks how many of the four parts are covered rather than how well any one is done. Ours, for the record: DRUGS is free and handles the squash, F12 is $49 for the filter and the digital damage with DRUGS included, TRIPLE OG is $29 for the noise and the instability, SKRUU is $29 for the drift.

### Can I get the sound without a vinyl sim plugin?

Yes, and the result is usually more controllable. A shallow low-pass, a saturator driven until the low end thickens, a bus compressor with a slow release, and a noise bed ten to fifteen decibels under the quietest passage will carry most of it. What stock plugins rarely give you is the drift, which needs a varispeed effect or a tape simulation.

### Should a vinyl sim go on the drum bus or the master?

Drum bus, almost always. Drums carry the transients the squash and the bandwidth act on, and there the effect reads as character rather than a blanket over the arrangement. On a master it treats everything at once, right when you want the record conceit across the whole track and wrong when you only wanted the kit to sound handled. On the master, use roughly half as much.

## What DRUGS does

DRUGS is our bus compressor for drums, free for Mac and Windows. One control called **DOSE**, with **MIX** on the face for parallel without a send, **GAIN** on the way out and a soft ceiling after it. It has no threshold and no ratio, because the whole point is that you do not set them.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
