# Transferring samples to the MPC Sample

> How to move samples between a computer and the MPC Sample: SD Card Access over USB-C, the folders, the formats it reads, and fixes when nothing shows up.

Source: https://gazillionindustries.com/mpc-sample-transfer-samples/  
Published 2026-11-12, updated 2026-11-12. By Gazillion Industries, who make SMPLUTILITY.

---

The MPC Sample comes with a small errand built in. Thumb the microSD card out of the side, find the adapter, feed it to the laptop, drag the files, eject, walk it back. Do that four times in a session and the idea is gone before the card is home.

There are two ways to move samples between a computer and the MPC Sample. The official one is SD Card Access: with a microSD card in the unit and the USB-C cable connected, hold SHIFT, press PAD 16 (PROJECT) and choose SD Card Access. The card mounts on the computer as a drive. The other way is a card reader. Either way, the files go in the card's MPC-Sample folder and load from SAMPLE SELECT.

## The short version

- **Cable**: the USB-C cable that came with the unit

- **Card**: microSD, in the slot on the left side; none comes in the box

- **Firmware**: 1.2.0 or later, the release that added SD Card Access

- **In**: SHIFT + PAD 16, then SD Card Access

- **Out**: eject on the computer first, then press B1

- **Folder**: MPC-Sample/Samples, created by the unit

- **Formats**: WAV, MP3, AIFF, FLAC, OGG, SND, S1S and S3S at 16 or 24-bit, 44.1, 48 or 96 kHz

## Why the cable alone shows nothing

Plug the unit in and the computer finds an audio interface, not a drive. The one USB-C port carries power, audio, MIDI and file access, and file access only exists inside SD Card Access. On our unit, normal mode showed up as audio, MIDI and a network interface with no storage at all. Enter SD Card Access and the same port turns into a card reader and nothing else.

That mode is exclusive. The [user guide](https://cdn.inmusicbrands.com/akai/sample/MPC%20Sample%20-%20User%20Guide%20-%20v1.3.0%20%28RevA%29.pdf) says you cannot use other modes while you are in it, so the pads go quiet while files move. And it only reaches the card. No official document describes opening the internal 8 GB drive from a computer, and on our unit SD Card Access mounted the microSD card alone. Anything that lives on the internal drive has to be saved to the card before a computer can see it.

## Transfer over USB-C, step by step

- Update to firmware 1.2.0 or later. With the unit connected and switched on, open mpc-sample.local in a browser, or 192.168.155.1 if that address does not answer. On Windows 10, use the MPC Sample Updater for Windows from the downloads page instead.

- Put a microSD card in the slot on the left side of the unit.

- Connect the unit to the computer with the included USB-C cable.

- Hold SHIFT and press PAD 16 (PROJECT). Turn the encoder to SD Card Access and press it.

- Copy your files into MPC-Sample/Samples on the drive that appears.

- Eject the drive on the computer.

- Press B1 on the unit to leave SD Card Access.

- Press SAMPLE SELECT, press B2 to switch to the External drive, choose the file and press the encoder to load it to the selected pad.

Going the other way takes one extra move. Save the project to the card first: SHIFT + PAD 16, Save Project, name it, then B3. A single sound saves with SHIFT + SAMPLE SELECT, and a finished song exports as audio from Song Mode with SHIFT + PAD 12, B1 Export, B2 Audio. Then enter SD Card Access and copy the files off.

## What it reads, and what it writes

Import covers WAV, MP3, AIFF, FLAC and OGG, plus SND, S1S and S3S, at 16 or 24-bit and 44.1, 48 or 96 kHz. One sample can run 20 minutes. 32-bit float is not on the import list, so bounce float files to 24-bit before they go on the card. The unit records at 24-bit, 44.1 kHz and processes internally at 32-bit float.

The files it writes back are less polite. On our card, recordings came out as 24-bit WAV and trimmed samples as 32-bit float WAV, both carrying an extra data chunk that the file header's length leaves out. Strict audio editors refuse them outright. Forgiving ones open them. If an editor on your computer will not take a file the unit made, that chunk is the likely reason.

## When nothing shows up

Most transfer trouble comes in four shapes, and each has a short answer.

- **No SD Card Access in the Project menu.** The firmware predates 1.2.0. Our unit shipped on 1.1.1.9 and had no entry until it was updated.

- **The computer does not see the unit at all.** The official fixes: power-cycle it while connected, try 192.168.155.1, install the Windows 10 driver where it applies, and use the included cable.

- **The files copied, but the unit cannot find them.** Check they went inside MPC-Sample/Samples, then browse from SAMPLE SELECT with B2 set to External.

- **A project is missing from the card.** It is probably still on the internal drive. Save Project to the card, then look again.

A Mac also leaves hidden files behind. Finder writes a ._ companion next to every file it copies, plus its own index folders. We counted 4,456 of those companions on one card. They are clutter, not samples, and cleaning them out keeps the card's folders readable.

## Where it costs you

The round trip is the price. Every transfer is a mode switch: in, copy, eject, B1, browse, load. Skip the eject and you risk the card. Forget to save the project to the card first and the computer sees last week's version. None of it is hard. All of it is time away from the pads, which is the one place the MPC Sample is meant to keep you.

## Questions people ask

### Can I transfer samples to the MPC Sample without an SD card?

Not as files. The documented transfer route is SD Card Access, and it needs a microSD card. You can record audio from a computer over USB-C instead: set the input source to USB with SHIFT + SAMPLE and sample it in like any other source.

### Can my computer open the MPC Sample's internal drive?

No official document describes it, and on our unit SD Card Access mounted only the microSD card. Save the project to the card with Save Project, then copy it from there.

### What file formats does the MPC Sample load?

WAV, MP3, AIFF, FLAC, OGG, SND, S1S and S3S, at 16 or 24-bit and 44.1, 48 or 96 kHz, up to 20 minutes per sample.

### Does SD Card Access work on Windows?

Yes. The card mounts as a class-compliant drive on Mac and Windows. The firmware updater is the one difference: Windows 10 uses the downloadable updater rather than the browser page.

### Why is SD Card Access missing from my Project menu?

Firmware older than 1.2.0. Update the unit and the entry appears below Load, Save and New Project.

## What SMPLUTILITY does

[SMPLUTILITY](https://gazillionindustries.com/smplutility/) is a free companion app for the MPC Sample, for Mac and Windows, built around this round trip. Enter SD Card Access and the lamp at the bottom left turns green: the sounds on the card open in LIBRARY and your newest project lands on the pads. OPEN pulls in any folder on the computer.

From there you [chop](https://gazillionindustries.com/mpc-sample-chop-mode/), [split stems](https://gazillionindustries.com/mpc-sample-stem-separation/) and drag sounds straight to pads. Name the project and press WRITE: the same name updates it, a new name makes a new one, and the app ejects the card when it is done. Press B1 on the unit and load the project. Setup is in the [SMPLUTILITY setup manual](https://gazillionindustries.com/smplutility/manual/), and the card itself is covered in [the MPC Sample SD card guide](https://gazillionindustries.com/mpc-sample-sd-card/).

The card stays in the slot. The files still make the trip.

---

## About SMPLUTILITY

SMPLUTILITY — a free companion app for MPC Sample. USB-C file management, stem separation, chop and edit, resample with Gazillion FX, sample packs and auto mastering. Mac and Windows.

https://gazillionindustries.com/smplutility/
