# MPC Sample chop mode

> How chop mode works on the MPC Sample: Threshold, Regions and lazy chop, the 16-slice limit, putting chops on their own pads, and saving or exporting chops.

Source: https://gazillionindustries.com/mpc-sample-chop-mode/  
Published 2026-11-12, updated 2026-11-12. By Gazillion Industries, who make SMPLUTILITY.

---

Two bars of a drum break, a thumb on PAD 1, and the record still running in your head. Chopping is the reason most people bought a pad sampler, and the MPC Sample puts it one button away.

Press CHOP in Sample Mode and the sample on the selected pad is chopped automatically, by Threshold unless you change it. K3 sets the chop type: Threshold, Regions 4, 8 or 16, or Manual, the lazy chop, where you tap pads while it plays, up to 16 slices. Slice 1 plays from PAD 1, slice 5 from PAD 5. SHIFT + B1 (Extract) copies a slice to the next free pad as its own sample. There is no way to export all the slices as files at once.

## The short version

- **Enter**: CHOP in Sample Mode; press it again to go back to Trim

- **Types (K3)**: Threshold (default), Regions 4/8/16, Manual

- **Threshold**: SHIFT + K3, 0 to 100%; higher means fewer slices

- **Limit**: 16 slices per sample

- **Edit**: K1 start, K2 end, SHIFT + B2 split, SHIFT + B3 merge, ERASE + pad removes

- **To a pad**: SHIFT + B1 (Extract) puts the slice on the next free pad

- **Not here**: Sequence Mode, undo for slice edits, batch export of slices

## The three ways it cuts

Threshold listens for hits. It is the default, and it cuts where the transients are, which suits drums. Its control is SHIFT + K3, from 0 to 100%. The higher you set it, the fewer slices you get, so a busy break with ghost notes wants it raised until only the hits you would play survive.

Regions 4, 8 and 16 divide the space between the sample's start and end into equal parts. On a loop trimmed to exactly a bar or two, equal regions land on the grid and the pads play the loop back in time. On anything else they cut through the middle of notes, and that can be its own sound.

Manual is the classic MPC lazy chop. You play the sample and tap where the slices start.

## Lazy chop, step by step

- Select the pad with the sample and press CHOP.

- Turn K3 to Manual.

- Tap PAD 1 to start playback and set the first slice.

- Tap the next pads in order as the sample plays, one per slice, up to 16.

- Adjust each slice with K1 (start) and K2 (end). SHIFT + K1 or K2 zooms.

Editing a slice switches the chop type to Manual by itself, and slice edits cannot be undone or redone. Change the chop type after a Threshold chop and that chop is gone. If a set of slices is close, Extract the ones you like before you experiment.

## Getting chops onto their own pads

A chopped sample starts out as one pad that plays its slices from the other pads while you are in Chop Mode. Leave for Sequence Mode and the chop controls are off-limits, and owners describe the sample turning back into one pad. To make a slice a sound in its own right, select it and press SHIFT + B1. Extract copies it as a new sample onto the next free pad, without touching the original.

Extract one slice at a time and the pads fill in order. Owners who want all 16 regions laid out across one bank find it copies to the next free pad instead. Plan the bank before you start.

## Saving and exporting chops

Chops save with the project. On our card, the slice points live in the project file as frame positions, and the audio itself is never cut, so a saved project brings its chops back exactly. To get a single chop out as a file, Extract it, then save that sample with SHIFT + SAMPLE SELECT to the internal drive or the card. TRIM SAMPLE (SHIFT + PAD 13) makes a trim permanent. None of the official documents describe exporting every slice as separate WAVs in one move.

## Where it costs you

Sixteen slices is a hard ceiling, and producers who chop wide feel it fast. Owners also miss a play-through option, where a chop runs on past its end point into the record. And because slice edits do not undo, the unit rewards deciding before you cut. That suits drums. It is slower on a long melodic sample you want to audition twenty ways.

## Questions people ask

### How many chops can the MPC Sample make?

Up to 16 slices per sample in Manual. Regions divides into 4, 8 or 16, and Threshold's count depends on its setting and the material.

### How do I put each chop on its own pad?

Select the slice in Chop Mode and press SHIFT + B1 (Extract). It becomes a new sample on the next free pad.

### Why can't I chop in Sequence Mode?

Chop and 16 Levels are unavailable while you are in Sequence Mode. Do the chopping in Sample Mode, extract what you need, then sequence.

### Can I undo a chop on the MPC Sample?

No. Slice edits cannot be undone or redone, and changing the chop type replaces the chop you had.

### How do I export chops as WAV files?

On the unit, one at a time: Extract the slice, then save it with SHIFT + SAMPLE SELECT. To export a whole set at once you need a computer, which is what SMPLUTILITY's EXPORT does.

## What SMPLUTILITY does

[SMPLUTILITY](https://gazillionindustries.com/smplutility/) is a free companion app for the MPC Sample, for Mac and Windows, with a chop editor on the computer screen. Pick Equal, Auto or Manual and press CHOP. In Manual, CHOP starts playback and Enter or M drops a chop point as it plays. Double-click the waveform to add a point, double-click a point to remove it, drag it to move it.

Drag a chop from the waveform straight to a pad, or drag the whole chopped sound and it fills the pads that follow. EXPORT saves your chops as WAV files in a folder you pick, normalized if you want. [SPLIT](https://gazillionindustries.com/mpc-sample-stem-separation/) pulls the drums out first if the break has company, and WRITE sends the project back to the card over USB-C, as covered in the [transfer guide](https://gazillionindustries.com/mpc-sample-transfer-samples/). The [SMPLUTILITY setup manual](https://gazillionindustries.com/smplutility/manual/) has the rest, and [the SD card guide](https://gazillionindustries.com/mpc-sample-sd-card/) covers where the project lands.

The break still starts with a thumb on PAD 1. Where it ends is up to you.

---

## About SMPLUTILITY

SMPLUTILITY — a free companion app for MPC Sample. USB-C file management, stem separation, chop and edit, resample with Gazillion FX, sample packs and auto mastering. Mac and Windows.

https://gazillionindustries.com/smplutility/
