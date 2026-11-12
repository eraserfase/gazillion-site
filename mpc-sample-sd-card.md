# The MPC Sample SD card

> The MPC Sample's microSD card: what size and format work, the folders it creates, saving projects to the card, and fixes when the card or SD Card Access fails.

Source: https://gazillionindustries.com/mpc-sample-sd-card/  
Published 2026-11-12, updated 2026-11-12. By Gazillion Industries, who make SMPLUTILITY.

---

The microSD card is the smallest part of the MPC Sample and the one that decides whether last night's beat still exists. It is also the part the official paperwork says least about.

The MPC Sample takes a microSD card in the slot on its left side, and none comes in the box. The official documents do not name a required format or a maximum size. In practice exFAT works: we run a 256 GB exFAT card, owners report 128 GB cards, and the unit builds its own MPC-Sample folder when a card goes in. There is no format command on the unit. Your work lives on the internal drive until you save the project to the card.

## The short version

- **Type**: microSD, slot on the left side, not included

- **Format**: not stated officially; exFAT works in practice

- **Size**: not stated officially; 256 GB and 128 GB cards in use

- **Folders**: the unit creates MPC-Sample/Samples

- **Saving**: autosave goes to the internal drive; Save Project copies to the card

- **Computer access**: SD Card Access over USB-C, firmware 1.2.0 or later

## Format and size

Format the card on the computer, as exFAT. The unit's Project menu holds Load Project, Save Project, New Project and SD Card Access, and nothing else, so formatting is the computer's job. One owner reported never being asked to format at all when the card went in. FAT32 is not addressed anywhere official, and we have not tested it, so exFAT is the safe call.

Size is the same story. No official maximum exists in the user guide, the FAQ or the product page. A 256 GB exFAT card runs on our unit, including over SD Card Access, where the computer reads it as an exFAT drive. Owners report 128 GB cards working. Buy for the sample library you plan to carry.

## What lives on the card

Put a card in and the unit creates MPC-Sample/Samples. On our card the full layout is MPC-Sample/Samples/User for your own folders, and MPC-Sample/Projects for saved work, where each project is an .xpj file beside a folder named after it with _[ProjectData] on the end. That folder holds the project's audio, flat. The .xpj describes the pads, the trims and the sequences, and the audio stays separate.

The internal drive is 8 GB, with about 2 GB of it factory content, next to 2 GB of RAM. It is where the unit autosaves the project you are working on, in the background, all the time.

## Save to the card, step by step

- Hold SHIFT and press PAD 16 (PROJECT).

- Choose Save Project.

- Name it with the encoder, the - and + buttons and B2.

- Choose the external microSD card as the destination.

- Press B3 (Do It!).

Saving copies the project from the internal drive to the card. Until you do it, the card holds an older version or none at all, which is why a computer in SD Card Access cannot see the pads you are playing right now. Loading a project replaces everything in memory, sequences included, so save before you load something else.

## When the card misbehaves

- **The card works but SD Card Access is missing.** The firmware predates 1.2.0. Update at mpc-sample.local with the unit connected.

- **The computer does not see the card.** Power-cycle the unit while connected, use the included cable, and on Windows 10 install the driver the release notes describe.

- **Projects stop saving to the card.** Owners have reported it. Save to internal so nothing is lost, then check the card on a computer: copy everything off, reformat it as exFAT and copy it back.

- **Some files load and others do not.** Check the format list: WAV, MP3, AIFF, FLAC, OGG, SND, S1S and S3S, at 16 or 24-bit and 44.1, 48 or 96 kHz.

## Where it costs you

A card is a single point of failure. The unit's factory reset wipes user content on the internal drive, and the card may hold the only other copy, so a card nobody backs up is one bad night from gone. Copy the Projects folder to a computer on a schedule you will actually keep. A computer that reads the card makes that a drag, not a ritual.

## Questions people ask

### What size SD card does the MPC Sample take?

The official documents do not name a maximum. A 256 GB exFAT card runs on our unit, and owners report 128 GB cards. Pick the size your sample library needs.

### Should the card be FAT32 or exFAT?

exFAT. It is the format we and other owners run successfully. FAT32 is not addressed in any official document.

### How do I format the card for the MPC Sample?

On a computer. The unit has no format command; its Project menu only loads, saves, starts projects and opens SD Card Access. Format exFAT, put the card in, and the unit creates its MPC-Sample folder.

### How do I move beats from the internal drive to the card?

Load the project, then SHIFT + PAD 16, Save Project, choose the microSD card and press B3. The copy on the card is the one a computer can reach.

### How do I eject the card from the MPC Sample?

The user guide covers ejecting only from the computer, before pressing B1 to leave SD Card Access. To pull the card, save first and switch the unit off.

## What SMPLUTILITY does

[SMPLUTILITY](https://gazillionindustries.com/smplutility/) is a free companion app for the MPC Sample, for Mac and Windows, that works the card while it stays in the unit. In SD Card Access, LOAD lists the projects saved on the card, the sounds on it open in LIBRARY, and your newest project lands on the pads. EJECT hands the card back without writing.

WRITE saves the project back to the card under a name you choose, then ejects it, so the computer side of the save is done when the button is. The [transfer guide](https://gazillionindustries.com/mpc-sample-transfer-samples/) covers moving sounds both ways, the [chop guide](https://gazillionindustries.com/mpc-sample-chop-mode/) covers what to do with them once they land, and the [SMPLUTILITY setup manual](https://gazillionindustries.com/smplutility/manual/) walks through the first connection.

The card is still the smallest part of the MPC Sample, and last night's beat is still on it.

---

## About SMPLUTILITY

SMPLUTILITY — a free companion app for MPC Sample. USB-C file management, stem separation, chop and edit, resample with Gazillion FX, sample packs and auto mastering. Mac and Windows.

https://gazillionindustries.com/smplutility/
