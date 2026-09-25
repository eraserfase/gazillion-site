# How to mix drums

> How to mix drums in order: balance by fader first, then EQ, compression, saturation and one bus compressor, with the checks that catch a mix that will not travel.

Source: https://gazillionindustries.com/how-to-mix-drums/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The beat knocked in your headphones at three in the morning and arrived at the session sounding like a demo. Same files, same order, and somehow all the authority drained out on the way over.

Mix drums in this order: balance by ear with no processing, cut what is in the way with EQ, control the loud hits with compression, add weight with saturation, then glue the whole kit on one bus. Set the kick and snare first and build everything else around them, keep the low end centered, and check the balance on a phone speaker before you commit to anything. Most drum mixes fail at the first step, not the last.

## The short version

- **Order**: balance, EQ, compress, saturate, bus

- **Anchor**: kick and snare first, everything else relative to them

- **Low end**: kick and 808 mono and centered

- **Width**: hats, percussion and room to the sides

- **Bus**: 1–3 dB of glue, and saturation if it needs weight

- **Check**: phone speaker, mono, and at low volume

**SOFT CLIP** as the out stage, BEEF at 62.

## Balance is the mix

Before a single plugin, pull every drum fader down and bring them up one at a time: kick, snare, hats, percussion, room. Give yourself ten minutes on that alone. A balance that works at conversation volume with nothing on it will survive everything you do afterward, and a balance that does not will keep sending you back to the EQ for problems that are level problems wearing a disguise.

The kick and the snare are the anchor because they carry the rhythm and they occupy the two ranges a listener uses to locate a beat. Set them against each other first, then place everything else relative to that pair rather than to the master fader.

Work at a level where you could talk over the speakers. Loud playback flatters a balance because the ear hears more low end and more top as the level rises, so a mix built loud tends to arrive thin and spiky when somebody plays it quietly. [Fletcher–Munson](https://gazillionindustries.com/fletcher-munson/) is the curve behind that, and it is the cheapest fix in this article: turn it down.

Watch the sum while you do it. Two identical signals played together add 6 dB; two unrelated signals of the same level add about 3 dB. Five drum tracks that each look modest can put the drum bus 6 dB past where you want it, so leave the bus peaking around −6 dBFS before any bus processing goes on. [Gain staging](https://gazillionindustries.com/gain-staging/) and [headroom](https://gazillionindustries.com/headroom-in-mixing/) cover why that number, and not −0.1.

## Build the drum bus before you process it

Route every drum to one bus first, then decide what is allowed in. Kick, snare, hats, percussion and room always belong. The 808 or sub is the judgement call: put it in and the bus compressor hears the loudest thing in the record on every downbeat, which means the hats duck to the 808 rather than to the kick. Keep it out and the sub stays steady while the kit moves. [What a drum bus is](https://gazillionindustries.com/what-is-a-drum-bus/) has the routing in full.

Order on the bus matters more than the settings on any one box. Corrective EQ, then compression, then saturation, then whatever catches the peak. Put the saturation before the compressor and you are compressing harmonics you just invented; put the peak catcher first and everything after it works on a signal that has already been squared off. [Drum bus chain order](https://gazillionindustries.com/drum-bus-chain-order/) is the long version.

One routing detail costs people an afternoon. A send taken after the fader changes the parallel blend every time you move that fader, so a parallel path you balanced at 3 pm is a different blend at 5 pm. Take the send before the fader and the blend holds. Check which one your session is using before you tune anything by ear.

## How to mix drums

- Balance every drum by fader alone, at a quiet level, with no processing.

- High-pass everything that is not the kick, starting around 80 to 120 Hz.

- Cut the frequencies that are in the way before boosting anything: a narrow cut beats a wide boost.

- Compress the drums that jump, not the ones that behave.

- Saturate for weight and presence rather than reaching for more low end.

- Pan hats, percussion and room, and keep kick, snare and bass down the middle.

- Put one compressor on the drum bus for 1 to 3 dB of gain reduction.

- Check in mono, then on a phone, then at a volume where you could hold a conversation.

- Match the level with the bus processing bypassed before you judge whether it helped.

- Bounce it, sleep on it, and fix only what still bothers you in the morning.

Subtractive EQ first is not a superstition. Boosting adds level and level flatters, so a session mixed with boosts drifts louder and louder until nothing has room. Cut what is crowding, then raise the fader. For the per-element detail, [how to make drums hit harder](https://gazillionindustries.com/how-to-make-drums-hit-harder/) covers punch and [how to compress drums](https://gazillionindustries.com/how-to-compress-drums/) covers the timings.

[BEEFY](https://gazillionindustries.com/beefy.html) is our saturation and loudness effect. On a drum bus it pulls the hits and the body closer together: BEEF for weight and density, COOK for how bright the edge gets.

**BEEF at 8.** The reference you A/B against.

## Drum bus settings, with the arithmetic

Start here and move one control at a time. These are glue settings, meaning the bus is holding the kit together rather than reshaping it. If you want the compressor to be an effect instead, that is [parallel compression](https://gazillionindustries.com/parallel-compression/) on a second path, not a heavier hand on the main one.

- **Ratio**: 2:1, up to 4:1 when the kit is already even

- **Threshold**: set for 1–3 dB on the loudest hits, not the average

- **Attack**: 10–30 ms, slow enough that the stick still lands

- **Release**: shorter than one sixteenth note at your tempo

- **Knee**: soft

- **Makeup**: enough to match bypassed level, to the tenth of a dB

Threshold and ratio are one decision, not two. Put the threshold at −18 dBFS with a 2:1 ratio and a kick peaking at −6 dBFS sits 12 dB over, so the output lands at −18 + 12 / 2 = −12 dBFS. That is 6 dB of gain reduction, which is twice what glue means. Lift the threshold to −12 dBFS and the same kick is 6 dB over, giving −12 + 3 = −9 dBFS, or 3 dB down. Same ratio, same plugin, half the damage.

Now the release, which is where most drum buses go wrong. At 90 BPM a quarter note is 60000 / 90 = 666.7 ms, an eighth is 333.3 ms and a sixteenth is 166.7 ms. Set release around 150 to 250 ms and the gain has come back before the next hit arrives. At 140 BPM a sixteenth is 60000 / 140 / 4 = 107.1 ms, so the same setting is now too slow and the kit starts pumping in time with itself.

Attack is the opposite problem. A drum transient is a few milliseconds of energy at the very front of the hit, and an attack of 10 to 30 ms lets that pass untouched before the compressor takes hold of the body. Set attack to 1 ms and you are flattening the stick, which reads on the meter as control and on a phone as a soft, blunted kit. [What a transient is](https://gazillionindustries.com/what-is-a-transient/) explains the shape you are protecting.

Then the makeup gain, which is the part nobody wants to hear about. Louder wins every blind test, so 3 dB of reduction with 5 dB of makeup beats the bypass whether it is helping or not. Match the two to within a tenth of a dB and then decide. Half the drum bus chains in the world would come off if anyone did that honestly. See [glue compression](https://gazillionindustries.com/glue-compression/) and [drum bus compressor settings](https://gazillionindustries.com/drum-bus-compressor-settings/).

## Three decibels, worked out

Take a loop that peaks at −1.0 dBFS and reads −17.0 dBFS RMS. That is a [crest factor](https://gazillionindustries.com/crest-factor/) of 16 dB, which is a normal, lively drum loop. Take 3 dB off the peaks and add 3 dB of makeup: the peaks return to −1.0 dBFS, the material that sat under the threshold has risen by 3 dB, and the crest factor lands near 13 dB. Nothing got louder at the top. The quiet third of the bar came up to meet it.

That is the whole trick, and the whole cost. Every dB off the crest is a dB of contrast you are not getting back, and the peak meter will not warn you, because its number did not move. By the time the kit reads 8 dB crest it measures loud on everything you own and feels like a photograph of a drummer.

Parallel paths are arithmetic too. A compressed copy blended in at −10 dB relative to the dry adds 20 × log10(1 + 10−10/20) = 2.4 dB of level on its own. At −6 dB it adds 3.5 dB. Set the blend by ear, then check the arithmetic, because most of what people hear as "the parallel bus working" at first pass is that 2.4 dB.

## EQ a drum kit by range

Work from the bottom up and know what lives where before you touch a band. These ranges are where the parts of a kit actually sit, and knowing them turns EQ from hunting into aiming.

- **20–30 Hz**: subsonic; nothing useful, and it eats headroom

- **45–65 Hz**: kick fundamental, and where an 808 lives

- **90–130 Hz**: kick weight; the range a small speaker fakes

- **180–250 Hz**: snare body, tom body

- **250–450 Hz**: mud: the first place a kit turns to cardboard

- **3–5 kHz**: snare crack, stick, the part that carries on earbuds

- **8–12 kHz**: hats, air, and where harshness collects

A high-pass filter is a slope, not a wall. A 12 dB per octave high-pass set at 100 Hz is down 12 dB at 50 Hz and 24 dB at 25 Hz, so plenty of the 65 Hz region is still coming through. If you want the sub genuinely gone from a hat channel, set the filter at 200 Hz and stop apologizing for it; if you want the snare to keep its body, do not put that filter above 150 Hz.

The 250 to 450 Hz problem is almost always a sum, not a single track. Four elements that each carry a gentle rise at 300 Hz stack into something none of them has on its own, which is why the kit sounds thick in solo and cloudy in the mix. Cut 2 to 3 dB with a wide bell on two of the four rather than 8 dB on one. [Why a mix sounds muddy](https://gazillionindustries.com/why-is-my-mix-muddy/) takes that further.

Boost last, and boost wide. A 2 dB shelf above 8 kHz across the bus does more for the sense of air than a 6 dB bell on the hat channel, because the shelf lifts the room and the cymbal wash with it. If the kit still will not open up, the problem is the balance.

## How to check a drum mix

Four checks, in this order, and all of them take under a minute. Do them before you decide the mix is finished, not after somebody tells you it sounds strange in their car.

- Collapse to mono and listen for anything that drops or thins.

- Bounce it and play it through a phone speaker at arm's length.

- Turn the monitors down until the drums are almost background and check the balance holds.

- Play a record you trust at matched loudness, then go straight back to yours.

The mono check is the one that catches real faults. If the snare loses 3 dB or more when you fold to mono, something in the chain is widening it by phase rather than by level, and that trick collapses on a club system and on most laptops. [Mono compatibility](https://gazillionindustries.com/mono-compatibility/) and [phase cancellation](https://gazillionindustries.com/phase-cancellation/) cover what is happening underneath.

The phone check is not a vibe check. A handset speaker puts out almost nothing in the range where a kick's fundamental lives, so what the listener hears is the harmonic series above it. An 808 at C1 is 32.7 Hz, and its harmonics land at 65.4, 98.1, 130.8, 163.5 and so on, reaching 327 Hz at the tenth. Saturation is what puts energy up there. [Making bass audible on phone speakers](https://gazillionindustries.com/how-to-make-bass-audible-on-phone-speakers/) is the whole mechanism.

Match the reference for loudness before you compare. A finished master is running hotter than your bounce, and you will hear that difference as quality unless you cancel it. Pull it level and the comparison becomes about balance, which is the thing you can act on tonight.

## What a broken drum mix sounds like

Faults have signatures. Learn them and you stop guessing, because the sound tells you which control moved too far.

- **Pumping on the backbeat**: bus release longer than the gap between hits — shorten it below one sixteenth

- **Hats swimming forward and back**: too much bus reduction with a fast release lifting them in the gaps — take the reduction to 2 dB

- **Kick that clicks but does not land**: transient passing a clipper while the body gets held — slow the attack, lower the drive

- **Snare with crack and no weight**: high-passed above 150 Hz — the body is at 180 to 250 Hz

- **One-note, flabby low end**: kick and 808 sharing the same 50 Hz — see [mixing kick and 808](https://gazillionindustries.com/how-to-mix-kick-and-808/)

- **Loud but small**: crest factor already spent — nothing downstream will restore it

- **Harsh on earbuds**: 2 to 5 kHz stacked up by saturation — see [why a mix sounds harsh](https://gazillionindustries.com/why-is-my-mix-harsh/)

- **Disappears in mono**: width made by phase rather than by panning

The one that fools everybody is loud but small. The kit measures fine, every meter agrees, and the record still sounds like it is happening in another room. That is crest factor, and by the time you can hear it the damage was done three plugins upstream. Bypass the chain from the top and find the stage that flattened it. [Why drums sound weak](https://gazillionindustries.com/why-do-my-drums-sound-weak/) walks the same path from the other end.

## Where your DAW actually differs

Less than the tutorials suggest, and in three specific places. The compressor curve is the same arithmetic everywhere; the routing is where sessions go wrong.

First, the name: group track, summing stack, bus channel or aux, all of them summing the children to one fader. Second, the fader order. The child faders feed the bus, so every balance move you make after setting the bus compressor changes what that compressor hears. Set the balance, then the bus, then stop moving the children by more than a dB.

Third, latency. Anything on the bus with lookahead delays the whole bus, and your DAW pays that back by delaying everything else to match. That is fine on playback and it is not fine when you are recording over the top, so bypass the lookahead stage while you track and switch it back on to mix. For a step-by-step in one host, see [drum bus compression in Ableton Live](https://gazillionindustries.com/drum-bus-compression-in-ableton-live/).

## Where drums sit in the mix

It depends on the music, and in rap and beat-driven records the answer is usually "in front". The drums and the low end carry the song, the vocal sits on them rather than above them, and everything melodic gets arranged around that. In a band mix the kit supports and the vocal leads. Decide which one you are making before you start moving faders, because the two balances are 4 or 5 dB apart and no amount of processing splits the difference.

Whatever you decide, the test is the same: mute the drums and the record should collapse. If it does not, they are too quiet or they are not doing enough. See [how to make drums cut through the mix](https://gazillionindustries.com/how-to-make-drums-cut-through-the-mix/) when the problem is other instruments rather than the kit.

## Where it costs you

Every stage of this trades something. High-passing the non-kick elements tidies the low end and takes the body out of a snare if you go too far. Compression evens the hits and shortens them. Saturation adds weight and fills space the vocal may want. Bus glue makes the kit move as one thing and lets the kick push the hats around. Do each of them a little and check the balance again afterward, because every one of them changes the balance you spent ten minutes setting.

The cost you can count is the crest. Three dB on the bus, 2 dB from a saturator and another 3 dB at the master is 8 dB gone from a kit that started with 16, and there is no stage later in the chain that puts dynamics back. Decide in advance how much you are willing to spend and stop when you have spent it. [Mastering a beat](https://gazillionindustries.com/how-to-master-a-beat/) assumes you left something for it.

The cost you cannot count is attention. A kit that is arranged well needs almost none of this, so when a mix keeps resisting, the honest move is to change a part rather than add a twelfth plugin.

## Questions people ask

### Should drums be mixed in mono or stereo?

Kick, snare and bass belong in the middle, in mono, because low frequencies carry no useful stereo information and a wide low end falls apart on a phone or a club system. Hats, percussion, room and overheads can be as wide as you like. Check the whole thing in mono: anything that disappears was relying on a phase trick.

### Where should drums sit in a mix?

Loud enough that muting them kills the record. In beat-driven music that usually means the drums and the low end are the foundation and the vocal sits on top of them; in other genres the kit sits further back. Set the kick and snare first and judge everything else against them.

### What order should I mix drums in?

Balance, then EQ, then compression, then saturation, then the bus. The only rule that really matters is that balance comes first and loudness comes last.

### Should I mix drums loud or quiet?

Quiet, most of the time. At low volume your ears are less sensitive to the extremes, so a balance that works quietly usually works everywhere. Turn it up to check the low end and the excitement, then turn it back down to make decisions.

### What are good drum bus settings?

Ratio 2:1, soft knee, attack 10 to 30 ms, release shorter than a sixteenth note at your tempo, and a threshold set so the loudest hits pull the meter down 1 to 3 dB. Match the makeup gain to the bypassed level before you judge it. Those six numbers cover most beat-driven music; everything else is taste.

### How much compression should I put on a drum bus?

One to three decibels on the loudest hits. Past 4 dB the compressor stops gluing and starts arranging, lifting the hats in the gaps and shortening the kick. If you want the crushed sound, get it on a parallel path blended underneath, where you can dial the amount without spending the main bus.

### What attack and release should I use on a drum bus?

Attack 10 to 30 ms so the stick gets through before the gain moves. For release, divide 60000 by your tempo to get a quarter note in milliseconds, then quarter it. At 90 BPM that is 166.7 ms, so set release a little under that. Faster tempo, faster release.

### Should I EQ before or after compression on drums?

Corrective cuts before, tone shaping after. A 250 Hz build-up feeding a compressor makes the compressor react to the build-up, so cut it first. A high shelf for air belongs after, where the compressor cannot chase it and pull the top back down on every hit.

### Do I need to high-pass my drums?

Everything except the kick and the 808, yes, and only as far as it takes. Start around 80 to 120 Hz on hats and percussion and listen for the snare losing body, which happens above about 150 Hz. Remember a 12 dB per octave filter at 100 Hz is still passing material at 50 Hz, 12 dB down.

### How loud should the drums be in dB?

There is no single number, because it depends on the arrangement and on where the vocal sits. What is worth setting is the headroom: leave the drum bus peaking near −6 dBFS before bus processing, and leave the whole mix a few dB under full scale so the master stage has something to work with.

### Should I use saturation or a limiter on the drum bus?

Saturation for weight, a peak catcher for safety, and in that order. Saturation adds harmonics that make the kit read louder and travel to small speakers; a limiter only stops the peaks, and asking it to do the tone work is how drum buses end up flat. [Saturating drums](https://gazillionindustries.com/how-to-saturate-drums/) has the settings.

### Can I mix drums with one plugin?

For a bus, close to it. A single compressor doing 2 dB, or a saturator doing the weight, will get a balanced kit most of the way. It will not rescue an unbalanced one, and no plugin count ever has. See [one-knob compressors](https://gazillionindustries.com/one-knob-compressor/) for the argument in full.

### Why do my drums sound good in solo and weak in the mix?

Because solo removes the masking. Everything you mixed in solo has a competitor in the full arrangement, usually in the 250 to 450 Hz range and again at 3 to 5 kHz. Mix drums against the rest of the record from the start, and use solo only to find a problem, never to fix one.

## What BEEFY does

BEEFY is a saturation and loudness effect for making sounds thicker, punchier and more up front. **BEEF** is the main event: more weight, more density, more loudness and more attitude as you turn it up. **COOK** changes the color and bite, from a rounder feel toward a brighter, more cooked edge. **JUICE** sets the level going in. **SOFT CLIP** opens switched on and brings rounded, fuzzy edges to the loudest parts, and **LIMIT** is the other choice when you want the output peaks kept in check. Try it on a whole drum bus to pull the hits and the body closer together.

On a drum bus, set JUICE so the loop is arriving at a sensible level, then bring BEEF up slowly from zero and stop at the first point where the kit sounds planted. COOK decides whether the added harmonics land as warmth or as edge, which is the difference between a kit that travels to a phone and one that gets fatiguing on earbuds. SOFT CLIP catches the transients with a rounded shoulder; LIMIT catches them with a harder one, and on drums they do not sound alike. It runs on Mac and Windows as AU, VST3 and standalone.

**BEEF at 96.** Where it stops being polite. A drum bus almost never wants this.

If the bus needs holding together rather than thickening, [DRUGS](https://gazillionindustries.com/drugs.html) is our free one-knob bus compressor for drums, Mac and Windows, with a single DOSE control and a soft ceiling on the way out. Judge it by bypassing the plugin rather than by turning DOSE down, since DOSE at zero is still part of the sound.

Same files, same order. The authority was in the first ten minutes all along.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
