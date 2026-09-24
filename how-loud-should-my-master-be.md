# How loud should a master be

> How loud to master a beat or rap song: what LUFS and true peak measure, what Spotify does to loud masters, and how to pick a level with reference tracks.

Source: https://gazillionindustries.com/how-loud-should-my-master-be/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

Loudness works like inflation. When every record prints more of it, each extra dB buys less, and the CD era ended with a lot of albums that were louder than ever and harder to listen to.

There is no single right number. Streaming services normalize playback; Spotify adjusts tracks to -14 LUFS, so a louder master doesn't play louder there, it just keeps less punch. Master as loud as the music takes without audible damage, keep true peaks below -1 dBTP (or -2 dBTP if you're louder than -14 LUFS, per Spotify), and measure the integrated LUFS of records you're competing with instead of chasing a number.

## The short version

- **Loudness**: integrated LUFS, measured over the whole song

- **Spotify**: adjusts tracks to -14 LUFS

- **Peaks**: below -1 dBTP, or -2 dBTP if louder than -14 LUFS

- **Target**: as loud as it sounds good, checked against references

- **Test**: listen to it turned down to -14, not just at full level

**SOFT CLIP** as the out stage, BEEF at 62.

## What LUFS actually measures

A peak meter tells you how close the loudest sample gets to the ceiling. A loudness meter tells you how loud the song feels. LUFS weights the signal the way hearing does and averages it over time: momentary loudness uses a 400 ms window, short-term uses 3 seconds, and integrated covers the whole track. Integrated LUFS is the number streaming services use.

True peak is the other number that matters. It estimates peaks that fall between samples and can show up after conversion or lossy encoding, so a file that never touches 0 dBFS on a sample meter can still clip once it's encoded.

## What Spotify does with your master

Spotify adjusts tracks to -14 dB LUFS. Louder masters get turned down to it and quieter ones turned up, and Premium listeners can choose Loud (-11), Normal (-14) or Quiet (-19). Spotify recommends keeping true peaks below -1 dBTP, and below -2 dBTP for masters louder than -14 LUFS.

Other services normalize too, and not all of them publish their targets as plainly. The safe assumption is that your master will be turned down somewhere, so it has to sound good at a lower level than you mastered it.

**BEEF at 8.** The reference you A/B against.

## So how loud for rap and beats?

Louder than -14 is common in rap and trap, and that's fine as long as the master still hits once it's turned down. The honest way to pick a number is to measure your competition. Load three or four records in your lane into a loudness meter, note their integrated LUFS, and get your master into the same neighborhood, only if it still sounds better there.

**Then listen to your master and the references level-matched.** If yours loses its punch next to them at the same loudness, it was pushed too hard, and no extra dB will fix that.

Loudness that survives normalization comes from density, not limiting. That's what [BEEFY](https://gazillionindustries.com/beefy.html) is for. The demo on the page is 28 seconds.

## How to check your master

- Put a loudness meter after the limiter on your master.

- Play the whole song and read the integrated LUFS and the maximum true peak.

- Make sure the true peak is below -1 dBTP (below -2 dBTP if integrated is louder than -14 LUFS).

- Measure two or three reference records the same way.

- Turn everything down to -14 LUFS and compare by ear.

If you want more loudness than the limiter can give cleanly, go back to the mix: [how to make your mix louder without clipping](https://gazillionindustries.com/how-to-make-mix-louder-without-clipping/) and [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) cover the chain.

## Questions people ask

### How do I know if my master is loud enough?

Measure its integrated LUFS and compare it with a few released records in the same style, then listen to all of them level-matched. If yours sounds as full and punchy at the same loudness, it's loud enough.

### What dB should my master be at?

Two different numbers: keep true peaks below -1 dBTP (Spotify's recommendation), and set loudness in LUFS by comparing with references. Peak level alone doesn't tell you how loud a master sounds.

### Why isn't my master loud enough?

Usually the mix's peaks, often the kick and 808, hit the ceiling before the average gets loud, so the limiter runs out of room. Controlling the low end and transients in the mix gives the limiter far less to do.

### Should I master to -14 LUFS?

Not necessarily. -14 LUFS is where Spotify plays tracks back, not a rule for how loud to master. Many releases are louder; what matters is that the master still sounds good after it's turned down.

## What BEEFY does

BEEFY is our saturation and loudness plugin, and it works on the kind of loudness that holds up at -14: density. **BEEF** adds weight, density and loudness to drums, 808s and bass as you turn it up. **SOFT CLIP** opens switched on and rounds off the loudest parts, and **LIMIT** keeps output peaks in check instead if you prefer. Use a loudness meter for the number and your ears for the rest.

Print all the loudness you want. The records that still sound rich at -14 are the ones that saved some.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
