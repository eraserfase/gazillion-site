# MPC Sample stem separation

> Does the MPC Sample split stems? What the official documents say, what stems means for MPC Sample projects, and how to separate a sample and send it to pads.

Source: https://gazillionindustries.com/mpc-sample-stem-separation/  
Published 2026-11-12, updated 2026-11-12. By Gazillion Industries, who make SMPLUTILITY.

---

A record comes in off the shelf with everything welded together: the drums under the horns, the bass under the voice. The question everyone with an MPC Sample asks in the first week is whether the box can pull them apart.

It cannot. None of the MPC Sample's official documents describe stem separation on the unit: not the user guides, the FAQ, the product page or the 1.2.0 and 1.3.0 release notes. Its effects are Pad FX, Knob FX, Flex Beat and the Color Compressor. When the manufacturer says "stems" about the MPC Sample, it means track stems, the separate tracks of your own project, exported through MPC 3. Splitting a sample happens somewhere else, then comes back to the pads.

## The short version

- **On the unit**: no stem separation in any official document, firmware 1.3.0 included

- **"Stems" officially**: track stems of your own project, exported from MPC 3

- **MPC Stems**: the separation in MPC 3; the MPC Sample's own documents never mention it

- **What owners do**: separate on a computer or phone, then bring the parts back

- **Free route**: SMPLUTILITY splits on the computer and sends parts to the pads over USB-C

## Two jobs share one word

Stem separation and stem export are different jobs. Separation takes a finished mix and guesses which parts belong to which instrument, so you get a drums file, a bass file, a vocal file. Export takes a beat you built, where every pad is already its own sound, and writes each track out on its own. One is surgery on a record. The other is packing up a session.

The MPC Sample's paperwork only covers the second. The official article on stems walks through saving the project to the card, opening its .xpj file in MPC 3, and exporting an Audio Mixdown with Separate Tracks ticked. That is for handing a beat to a mix engineer. It does nothing for the sample you just recorded off a record.

The separation people mean when they type the question exists in the bigger MPC world as MPC Stems, part of MPC 3, built on zplane's STEMS technology. The MPC Sample's own guides, FAQ and product page never mention it, and the FAQ rules the unit out as a controller for MPC 3 altogether.

## Split a sample and get it back on the pads

The workable route is a round trip: the sound goes to a computer, gets split, and the parts you want come back to pads. Owners do this with phone samplers and desktop apps, then record or copy the result in. With SMPLUTILITY the whole trip runs over the USB-C cable.

- Put a microSD card in the MPC Sample and connect it to the computer with USB-C.

- On the unit, hold SHIFT, press PAD 16 (PROJECT) and choose SD Card Access.

- In SMPLUTILITY, click the sound in LIBRARY, or use OPEN to pick any file on the computer.

- Press SPLIT. The sound separates into bass, drums, vocals, guitar, piano and other.

- Switch off the stems you do not want. The screen now holds the mix of what is left.

- Chop it, or drag it whole, onto the pads.

- Name the project and press WRITE. The app writes it to the card and ejects it.

- Press B1 on the unit to leave SD Card Access, then load the project from the Project menu.

## What a split is good for

A split gives a sample room. Drop the drums out of a soul loop and the original break stops fighting yours. Keep only the bass and you have a line to chop into notes. Keep the drums alone and the break is ready to [chop](https://gazillionindustries.com/mpc-sample-chop-mode/) without the horns riding every hit. Each stem is a switch, so trying the loop with and without the vocal is two clicks, not a new bounce.

## Where it costs you

Separation is a guess about a mix, and dense mixes make it work harder. On a crowded record you can hear traces of one instrument inside another's stem. Listen to what is left before you commit it to pads, and trust your ears over the switch labels. It also adds a stop on the computer, which is the price of a box that fits in a backpack.

## Questions people ask

### Does the MPC Sample have stem separation?

No. No official MPC Sample document describes separating a sample into stems on the unit, through firmware 1.3.0. Separation has to happen on another device, and the parts come back to the pads.

### Does MPC Stems work on the MPC Sample?

The MPC Sample's own documents never mention it. MPC Stems is part of MPC 3, and the MPC Sample cannot be used as a controller for MPC 3.

### How do I remove the drums from a sample on the MPC Sample?

Move the sound to a computer, separate it, switch the drums off and send the rest back to a pad. SMPLUTILITY does this over USB-C in SD Card Access, with no card swapping.

### How do I export stems from an MPC Sample project?

Save the project to the microSD card, enter SD Card Access, open the .xpj file in MPC 3 version 3.8 or later, then choose File, Export, Audio Mixdown with Separate Tracks checked.

### Is there a free stem splitter for the MPC Sample?

SMPLUTILITY is free for Mac and Windows. It splits into six stems and drags the result straight to the MPC Sample's pads.

## What SMPLUTILITY does

[SMPLUTILITY](https://gazillionindustries.com/smplutility/) is a free companion app for the MPC Sample, for Mac and Windows. SPLIT separates a sound into bass, drums, vocals, guitar, piano and other. Turn stems off and what is left is ready to chop and drag like any sound, from the sample on the card or any file on the computer.

It also moves sounds both ways over USB-C, as covered in [transferring samples to the MPC Sample](https://gazillionindustries.com/mpc-sample-transfer-samples/), resamples through Gazillion plug-ins in its FX tab, and masters an exported song with one click. The [SMPLUTILITY setup manual](https://gazillionindustries.com/smplutility/manual/) covers setup, and the card side is in [the MPC Sample SD card guide](https://gazillionindustries.com/mpc-sample-sd-card/).

The record still comes in welded together. Now it comes apart over a cable.

---

## About SMPLUTILITY

SMPLUTILITY — a free companion app for MPC Sample. USB-C file management, stem separation, chop and edit, resample with Gazillion FX, sample packs and auto mastering. Mac and Windows.

https://gazillionindustries.com/smplutility/
