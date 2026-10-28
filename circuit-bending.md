# Circuit bending

> Circuit bending explained: Reed Ghazala's 1967 accident and 1992 name, the probe method, the toys bent most, and why the clock bend mattered to producers.

Source: https://gazillionindustries.com/circuit-bending/  
Published 2026-10-28, updated 2026-10-28. By Gazillion Industries, who make SKRUU.

---

Cincinnati, 1967. A teenager leaves a toy nine-volt amplifier in his desk drawer with the back off and the power on. The drawer closes, the circuit touches metal, and the drawer starts to sing a sweeping, oscillating sound the amplifier was never built to make. He spends the next fifty years doing it on purpose.

Circuit bending is rewiring cheap battery-powered electronics, mostly toys and home keyboards, to make sounds their designers did not intend. Reed Ghazala discovered it by accident in 1967, named it in 1992, and defined it as "the electronic art of the implementation of the creative audio short-circuit." Its favorite victims were the Speak & Spell and the Casio SK-1. Its signature sound is a clock pushed off its rate: pitch and speed moving together, done to a plastic box.

## The short version

- **Discovered**: 1967, Reed Ghazala, a shorted toy amplifier in a desk drawer

- **Named**: 1992, in Experimental Musical Instruments magazine

- **Method**: probe a live circuit, mark what sings, make it a switch or a knob

- **Instruments**: Speak & Spell, Casio SK-1, toy keyboards, drum machines

- **Sound**: clock bends (pitch and speed), glitches, loops, voices gone wrong

- **Rule**: batteries only, never mains

## The accident and the name

Ghazala's account has been told enough times to acquire variants. Sound On Sound's March 2000 feature, built on his own description, puts it in 1967 with a toy nine-volt transistor amplifier; the Associated Press in 2006 made it a Radio Shack amplifier and an Ohio teenager in the mid-sixties. The core is constant: an open circuit, a metal drawer, a short, and a sound nobody designed. Ghazala started building instruments that shorted on command, and when Texas Instruments put the Speak & Spell on sale in 1978, a talking toy with a speech chip inside, he found his canonical raw material. His modified Speak & Spells became the Incantors, and one of them, the Trigon Incantor, grew a textured 36-zone playing surface, steel ball bearings for continuous pressure and a brass ball for pitch bend.

The practice had a prehistory. Serge Tcherepnin had found touch-sensitive points inside transistor radios in the 1950s, and the Swiss duo Voice Crack had been performing with what they called cracked everyday electronics since 1984. But it was Ghazala who gave it a name and a method. In 1992 he began a series of articles in Experimental Musical Instruments magazine under the term circuit bending, and the articles spread the two things the practice needed: a procedure anyone could follow, and permission to break toys.

## The method, as he taught it

It is, in his words, "without a doubt, the easiest electronic audio design process in existence." Clip two small screwdrivers to the ends of a wire. Take the back off a battery toy and turn it on, taping down a key so it keeps making sound. Hold one screwdriver on a point on the circuit board and touch the other one everywhere else, listening. When something interesting happens, mark the pair of points. Move the first screwdriver and do it again until the board is explored. Then make the useful shorts permanent: a toggle switch for an on-off effect, a potentiometer where a variable one is wanted, and for the adventurous a photoresistor, a solar cell, an LED or a humidity sensor, so the instrument responds to light or to a breath.

Two rules came with it. Only battery power, never mains and never an AC adaptor, because a short in a wall-powered device can kill you. And eye protection, because capacitors and chips do occasionally give up with a bang. The rest was taste. No schematic, no theory, no idea what the chip was for. Ghazala's point was that the not-knowing was the method: a trained engineer knows which points not to touch, and those are the points that sing.

## What gets bent, and what it does

The Speak & Spell, which the AP called the apex of bendable circuitry: its speech chip, shorted, stutters, loops syllables, drops into a growl or climbs into a shriek, and reads out letters that were never typed. The Casio SK-1, the 1985 sampling keyboard, which Sound On Sound listed in 2000 with the note that bending instructions were already published online; its sampler can be made to play back its own memory as noise, and its clock can be reached. Toy keyboards and drum machines of every brand, talking bears, Game Boys, a breathalyzer turned into a wind instrument at the 2006 Bent Festival. The cheaper and older the device, the better: crystal-locked clocks and highly integrated modern chips give the bender nothing to hold.

Of all the bends, the clock bend is the one that mattered most to people who make beats. A digital toy runs everything off one oscillator. Replace the resistor that sets its rate with a potentiometer and the whole machine slows down or speeds up as one: pitch falls with tempo, the sample's grain coarsens as the rate drops, the drum pattern drags and the voice preset turns into a dying robot. Speed it up and all of it goes bright and frantic. That is varispeed, the same relationship a tape machine or a turntable has between speed and pitch, applied to a device that was never meant to have a speed control. [What is varispeed](https://gazillionindustries.com/what-is-varispeed/) explains why pitch and time move together on a machine and separately in a DAW.

**PITCH below unity.** Speed and pitch fall together, the way a slowed clock drags a whole toy down with it.

## Why the sound mattered to producers

Because it was wrong in a way nobody could buy. By the late 1990s every studio effect was a plug-in and every plug-in sounded like itself, and a sample that had been through a bent toy sounded like nothing a menu offered. The grain of an 8-bit sampler slowed past its design, the stutter of a speech chip looping a syllable, the pitch of a drum box sliding under a thumb: these were textures with a hand in them, and beat music had always valued the hand.

The practice also sat exactly where beat culture already lived. Thrift stores, garage sales, the five-dollar keyboard in the back of the closet. The same economy that produced the pause tape and the cheap sampler produced the bent Speak & Spell, and the same instinct, that the limit is the instrument, ran through both. A bent toy cannot be programmed. It can only be played, and the bender who finds a good short has made the only instrument of its kind in the world.

The scene got its stage in 2004, when The Tank in Manhattan put out an open call for BENT 2004, a week of circuit-bent performances with a basement gallery of artists in residence, billed as the first international circuit bending festival. By 2006 it was in its third year, with the Associated Press in attendance, and by 2007 it was touring to Minneapolis and Los Angeles. Ghazala's book, *Circuit-Bending: Build Your Own Alien Instruments*, came out from Wiley in 2005. Ghazala has built instruments for or consulted with Tom Waits, Peter Gabriel, King Crimson and the Rolling Stones, and Trent Reznor invited him backstage for a consultation. Mark Mothersbaugh and the band Broadcast are among the musicians associated with bent instruments. None of that is why the practice matters; it matters because a kid with a screwdriver can do it tonight.

## What survives in software

You cannot bend a plug-in, and nothing we make claims to be a bent anything. What a DAW can do is reproduce the two mechanisms a bent toy exposes. The first is the clock: pitch and speed as one control, with a sample rate that falls as the pitch does. The second is the resolution: the bit depth and sample rate of a toy chip, with the fold-back that comes when the rate drops. Our [bitcrusher guide](https://gazillionindustries.com/best-bitcrusher-plugins/) covers the second, and the [SK-1 history](https://gazillionindustries.com/casio-sk-1/) covers the machine where both mechanisms lived in one plastic box. The gesture is the part worth keeping. A bend is something a hand does in time with the music, and the plug-in that gets closest is the one that gives you a knob to grab rather than a curve to draw.

## Where it costs you

A bent instrument is unrepeatable, which is its glory and its problem. The same short does not always do the same thing, batteries sag and the pitch sags with them, and a toy that sang on Tuesday can be dead on Wednesday. You cannot recall a sound, you cannot tune one to a track, and you can hurt yourself if you forget the battery rule. The sound you get is the sound you record, once, and then it is a sample like any other.

## Questions people ask

### What is circuit bending?

The creative short-circuiting of cheap battery-powered electronics, usually toys and home keyboards, to produce sounds they were not designed to make. The found shorts are made permanent with switches, knobs and sensors so they can be played.

### Who invented circuit bending?

Reed Ghazala discovered it by accident in 1967 when a toy amplifier shorted in his desk drawer, built instruments from it from the 1970s on, and coined the term in 1992 in Experimental Musical Instruments magazine. Earlier experimenters had found similar effects, but he named and taught the practice.

### What are the best things to circuit bend?

Cheap, old, battery-powered devices with simple boards: the Speak & Spell, the Casio SK-1 and other toy keyboards, toy drum machines and talking toys. Modern devices with crystal clocks and highly integrated chips give you little to work with.

### Is circuit bending dangerous?

Only if you ignore the rules. Never bend anything that plugs into the wall or runs from an AC adaptor, wear eye protection, and expect the occasional component to fail loudly.

### What does a clock bend do?

It changes the rate the whole device runs at, so pitch and tempo rise and fall together and a sampler's grain coarsens as the rate drops. It is varispeed applied to a toy.

## What SKRUU does

SKRUU is our varispeed pitch and time stretch plugin, and it keeps the two on separate knobs. **PITCH** runs from −20% to +10% in 128 states and reads out in semitones as well as speed. **TIME** moves nothing but the length. With **ELASTIC** on, the knob springs back along one of sixteen return shapes, so a dip is a gesture rather than an automation job, and **DRAG** sets how long a new speed takes to arrive. **SAMPLING GRADE** steps the rate down underneath, to 3.9 kHz at LO-FI 2. Tuned by ear, not a model of any machine, bent or otherwise. Mac and Windows, $29.

The drawer is still singing. It just has a knob on it now.

---

## About SKRUU

SKRUU — varispeed pitch and time stretch for Mac and Windows. Pitch and time move independently, with sixteen elastic return shapes.

https://gazillionindustries.com/skruu.html
