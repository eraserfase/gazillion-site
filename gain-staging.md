# Gain staging for beatmakers

> What gain staging is, why it still matters in a DAW, and how to gain stage a beat: channel levels, plugin input, buses, the master, and the mistakes to avoid.

Source: https://gazillionindustries.com/gain-staging/  
Published 2026-09-13, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The session has forty tracks, every fader sits at zero, the master meter lives in the red, and somebody put a limiter on the master to make the red go away. Nothing sounds broken. Nothing sounds good either.

Gain staging means setting the level going into each stage (the sample, the channel, every plugin, the bus and the master) so nothing runs too hot or too quiet. As a starting point, trim channels to peak around -12 to -6 dBFS, feed hardware-style plugins an average level near -18 dBFS, keep the master peaking below 0 dBFS before any limiter, and fix levels with a trim at the top of the chain instead of the fader at the bottom.

## The short version

- **Channels**: peaks around -12 to -6 dBFS

- **Into plugins**: average near -18 dBFS for anything modeled on hardware

- **Trim first**: clip gain or a gain utility at the top of the chain

- **Faders**: for balance, not for fixing input level

- **Buses**: leave headroom; nothing summing into the red

- **Master**: peaks below 0 dBFS before the limiter

- **Loudness**: at the end, never along the way

**LIMIT** instead, everything else identical.

## Headroom is a budget

Every stage spends some. A sample normalized to 0 dBFS, an EQ boost, a saturator that adds level, a bus that sums eight of those: by the time the signal reaches the master, the account is overdrawn and the limiter is the collections agency. Gain staging is keeping the books so the loud part happens on purpose, once, at the end.

## Why it still matters in a DAW

Most DAWs mix in 32-bit floating point, so a channel that goes over 0 dBFS inside the mix usually isn't ruined yet. It clips for real at the output, in a fixed-point bounce, or inside a plugin that isn't built to take it. So the modern case for gain staging is less about disaster and more about three practical things.

- **Plugins react to level.** Compressors, saturators and anything modeled on hardware sound different depending on how hard you hit them. Many are calibrated around an old convention where 0 VU equals -18 dBFS, though not all of them.

- **Meters become readable.** Everything pinned near the top tells you nothing.

- **Faders land where they're usable.** A fader parked at -30 dB has no fine control left.

## How to gain stage a beat

- Set every channel fader to 0 dB.

- Put a gain utility (or clip gain) at the start of each channel.

- Play the loudest section and trim each channel until it peaks around -12 to -6 dBFS.

- Check the buses and master; if someone else will master it, leave the master peaking around -6 dBFS.

- Now balance the mix with the faders.

- Add loudness last, on the master.

The kick and the 808 usually sit near the top of that range and supporting parts below it. The numbers are a starting point, not a law; the point is that every plugin gets a sensible level and every fader has room to move.

**SOFT CLIP** as the out stage, BEEF at 62.

## Recording and samples

Hot is not better. At 24-bit there is no reason to record near the ceiling; peaks around -12 dBFS leave room for the take that comes in louder than the soundcheck. Samples are the same story in reverse. Plenty of packs arrive normalized to the ceiling, so trim them down as soon as they land in the session, before anything else touches them.

BEEFY's [SOFT CLIP](https://gazillionindustries.com/beefy.html) takes care of the initial gain staging for you, so there is no magic input level to hunt for. The demo on the page is 28 seconds.

## Gain staging mistakes

- normalizing every sample to 0 dBFS and mixing from there

- mixing into a limiter on the master from the first bar

- pulling faders down instead of trims, so plugins still get slammed

- judging loudness on a peak meter

- leaving a trim plugin on the master bus at +12 dB "just for now" (it's never just for now)

## Questions people ask

### What are common gain staging mistakes?

Mixing from samples normalized to 0 dBFS, keeping a limiter on the master while mixing, fixing level with faders instead of input trims, and reading a peak meter as if it measured loudness. Each one either overdrives plugins or hides problems until the end.

### Should gain be low or high?

Moderate. Trim channels to peak around -12 to -6 dBFS and feed hardware-style plugins an average near -18 dBFS. Too high slams every plugin and leaves no headroom; too low buries the signal in the plugin's noise and makes compressors and saturators do nothing.

### Is there a gain staging cheat sheet?

The short version box at the top of this page is one: channels peaking around -12 to -6 dBFS, about -18 dBFS average into hardware-style plugins, trims before faders, master peaks below 0 dBFS before the limiter, loudness last.

### Does gain staging matter in a DAW?

Yes, for different reasons than on tape. Floating-point mixing forgives most internal overs, but plugins still change their sound with input level, and a session with sensible levels is easier to mix and master.

## Stock plugins that do this

- **FL Studio**: Fruity Balance, or the channel's own volume

- **Ableton Live**: Utility (Gain)

- **Logic Pro**: Gain plugin, or region gain

## What BEEFY does

BEEFY is our saturation and loudness plugin, and it is built so gain staging doesn't become a research project. **SOFT CLIP** opens switched on and takes care of the initial gain staging, helping the clipping find the sound without a hunt for the right input level. **JUICE** sets the level going in if you want to feed it harder or back off, and the input and output clip lights keep an eye on either end.

**BEEF** adds weight, density and loudness from there, and **LIMIT** holds the output peaks if you'd rather have that.

Same forty tracks. The limiter is off, the master meter is green, and the beat finally has somewhere to go.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
