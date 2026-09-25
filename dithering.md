# Dithering

> What dither actually does, why rounding errors are worse than noise, which type to use, and the three rules that cover every case you will meet in practice.

Source: https://gazillionindustries.com/dithering/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make BEEFY.

---

The last checkbox in the export dialog, the one nobody understands, sitting there asking whether you want to add noise to a record you just spent a week cleaning up. The answer is usually yes, and the reason is a genuinely strange piece of engineering.

Dither is a tiny amount of noise added deliberately before you reduce bit depth, because the errors caused by that reduction are worse than the noise. Truncating a 24-bit file to 16-bit produces rounding errors that follow the signal, which the ear hears as distortion on quiet material. Adding noise first makes those errors random instead, turning a correlated distortion into an unobtrusive hiss. Apply it once, at the very end, only when you are actually reducing bit depth.

## The short version

- **What**: noise added before reducing bit depth

- **Why**: it converts rounding distortion into steady noise

- **When**: only when going to a lower bit depth, usually 16-bit

- **Where**: last, after the limiter, once and only once

- **Type**: triangular is the standard safe choice

- **Noise shaping**: moves the noise to where the ear cares less

**BEEF at 96.** Past where most settings want to live.

## Why rounding is worse than noise

A 24-bit sample has far more possible values than a 16-bit one. When you convert, every value has to move to the nearest available step, and the amount it moves is the error. That error is not random: it depends on the signal, so it tracks the music, and anything that tracks the music is heard as distortion rather than as background.

On a loud passage the error is minuscule compared to the signal and nobody will ever hear it. On a fade-out, a solo piano note decaying into silence, or a quiet ambient passage, it is audible as a grainy, gritty edge that gets worse as the music gets quieter, which is exactly backwards from how noise behaves.

Dither breaks the correlation. Add a small amount of random noise before the conversion and the errors stop following the signal, because the thing being rounded is now signal plus noise. You trade a distortion that appears when the music is quiet for a constant noise floor a few decibels above where it would otherwise be. In every listening test that matters, that is the better trade.

## The numbers, exactly

A 16-bit file has 65,536 available values and a 24-bit file has 16,777,216, so one 16-bit step spans 256 of the 24-bit ones. In a file scaled to plus or minus one, a 16-bit step is 1/32768 of full scale, which is −90.31 dBFS. The whole argument turns on that one number.

Round to the nearest step with nothing added and the error lands anywhere inside half a step with roughly equal likelihood, which gives a root-mean-square error of the step divided by the square root of twelve: −101.10 dBFS. Add triangular dither two steps wide and the total error becomes exactly half a step, −96.33 dBFS. The gap between those two figures is 10 log10(3), or 4.77 dB. That is the entire price of dither, and it covers every quiet passage on the record.

−96.33 dBFS is the familiar 6.02 dB per bit times sixteen, which is why a properly dithered 16-bit file measures at the textbook floor for its depth and never below it.

- **One 16-bit step**: 1/32768 of full scale, −90.31 dBFS

- **Rounded, no dither**: error floor at −101.10 dBFS, correlated

- **Triangular dither**: error floor at −96.33 dBFS, random

- **What dither costs**: 4.77 dB of floor, once

- **One 24-bit step**: −138.47 dBFS, error floor −149.27 dBFS

- **Flat noise density**: −139.76 dBFS in any single hertz at 44.1 kHz

Put that in a room. If your playback is set so 0 dBFS reads 105 dB SPL, which is loud, the dithered 16-bit floor sits at 8.7 dB SPL, under the noise of an empty room with the air conditioning off. Spread flat from 0 Hz to the 22,050 Hz Nyquist of a 44.1 kHz file, that same floor works out at −139.76 dBFS in any one hertz. The thing everybody argues about is that quiet.

## What the error does as a fade gets quiet

The rounded error holds at roughly one level all the way down. What moves is where that energy sits in the spectrum, and that is the part you hear. Measured here this session: a 997 Hz tone, eight seconds, reduced to 16-bit both ways, the error isolated and its spectrum split into energy sitting on harmonics of the tone against everything else.

- **Tone at −60 dBFS.** Rounded: error at −100.96 dBFS, 5.7% of it on harmonics. Dithered: −96.32 dBFS, 0.25% on harmonics.

- **Tone at −80 dBFS.** Rounded: error at −101.81 dBFS, 64.1% on harmonics. Dithered: −96.33 dBFS, 0.23%.

- **Tone at −90.31 dBFS**, a peak of exactly one step. Rounded: error at −102.25 dBFS, 76.8% on harmonics. Dithered: −96.33 dBFS, 0.17%.

Read those two columns against each other. Across a 30 dB drop in the music the rounded error barely moves in level, while the share of it locked to the note climbs from one twentieth to three quarters. Dither holds that share under 0.3% at every level tested. That is what decorrelated means in practice: the error stops being a function of the signal.

The reason is arithmetic. A waveform peaking at −40 dBFS reaches 328 steps, about 9.4 bits of description. At −60 dBFS it reaches 33 steps, 6.0 bits. At −80 dBFS, 3.3 steps, 2.7 bits. At −90.31 dBFS it has become a three-level staircase, up one, back to zero, down one, and a staircase of that shape carries harmonics the way a square wave does.

Now a case you meet every session. A reverb tail with an RT60 of 2.5 seconds decays at 24 dB per second. Start it at −10 dBFS and it crosses −60 dBFS at 2.08 seconds and −90.31 dBFS at 3.35 seconds. That leaves 1.26 seconds of every tail running on fewer than six bits. Hang a tail like that off every snare in a four-minute record and the grain stops being an edge case.

At 16 bits the error is too quiet to put on a web page. Pull the depth down far enough and the same error becomes the loudest thing in the file, which is the only honest way to demonstrate it. Here is a clean loop, then the same loop with bit depth reduced and nothing else touched. Measured off these two files: relative to each one's own internal balance, the reduced version carries 19.8 dB more energy from 6 to 12 kHz and 40.0 dB more above 12 kHz.

- **Full depth** — no reduction — https://gazillionindustries.com/f12/f12-clean.m4a

- **Depth reduced** — +19.8 dB from 6 to 12 kHz, +40.0 dB above 12 kHz — https://gazillionindustries.com/f12/f12-bitcrush.m4a

Both files come from [F(ilter)12](https://gazillionindustries.com/f12.html), where the reduction is the point rather than the problem. The hash sitting on top of the loop is rounding error, and it moves with the music instead of under it. At 16 bits it is the same thing, far quieter, sitting on your fade. More on the mechanism in [bitcrushing explained](https://gazillionindustries.com/bitcrushing-explained/).

## Types, briefly

- **Triangular (TPDF)** is the standard choice and the one to use if you do not want to think about it. It fully decorrelates the error at the cost of a slightly higher noise floor.

- **Noise shaping** adds more total noise than flat dither but moves most of it into frequency ranges the ear is less sensitive to, usually the top octave. It measures worse and sounds better.

- **Aggressive noise shaping** pushes that further. On material destined for further processing it is a bad idea, because that shaped noise is now baked in.

## What noise shaping actually trades

Noise shaping feeds the quantizer's own error back through a filter so the error spectrum comes out tilted: down where the ear is sharp, up where it is dull. The catch lives in the total, and the total does not hold still.

For a causal, minimum-phase shaper the log-average of the noise spectrum is fixed, so every decibel taken out of one part of the band has to be paid back somewhere else. Because the accounting runs in logs while the power adds linearly, the bill is larger than the saving. Work it through at 44.1 kHz, where Nyquist is 22,050 Hz. Cut 15 dB across 0 to 15,000 Hz, which is 68.0% of the band. The remaining 7,050 Hz then has to rise by 15 x 0.680 / 0.320 = 31.91 dB to keep the log-average where it was, and total noise power goes up by 26.96 dB.

In absolute terms that moves the floor from a flat −96.33 dBFS to −111.33 dBFS below 15 kHz and −64.41 dBFS above it. A meter reading total RMS noise reports the shaped file as roughly 27 dB worse. Your ears report it as quieter, because almost none of that 27 dB lands anywhere they are working. Both readings are honest and they are answering different questions.

That arithmetic also explains the warning attached to the aggressive settings. −64.41 dBFS of hash sitting just under Nyquist is harmless on its way to a speaker and anything but harmless on its way into a saturator, a sample rate conversion or an encoder. See [aliasing](https://gazillionindustries.com/what-is-aliasing-in-audio/) and [oversampling](https://gazillionindustries.com/oversampling/) for what becomes of it there.

[BEEFY](https://gazillionindustries.com/beefy.html) lives much earlier in the chain than this: saturation and loudness, with SOFT CLIP holding the peaks long before anything gets exported.

**LIMIT** instead, everything else identical.

## The rules

- Dither only when reducing bit depth. Exporting 24-bit from a 24-bit session needs none.

- Dither once, on the final export. Dithering a file that was already dithered adds noise without benefit.

- Put it last, after the limiter. Anything after dither re-quantizes and undoes the point.

- If you are delivering 24-bit masters to a distributor, let them dither when they encode. Do not do it for them.

- Triangular unless you have a reason. The reason is usually quiet classical or acoustic material, where noise shaping earns its keep.

## Where dither sits in the export chain

Last means last, and the order is worth spelling out because two of these steps get swapped constantly.

- Mix and master processing, including [gain staging](https://gazillionindustries.com/gain-staging/) and anything else that changes a sample value.

- Sample rate conversion, if the delivery rate differs from the session rate. Conversion calculates entirely new sample values, so it re-quantizes, and dither placed before it is thrown away.

- The final ceiling, set with a limiter or a clipper. See [true peak](https://gazillionindustries.com/true-peak/) for what that ceiling should be and [how loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/) for how hard to drive it.

- Dither.

- Nothing.

Playback loudness normalization on a streaming service runs on their side, in the player's own floating-point path, long after your file has been decoded, so it has no bearing on where dither goes. Neither does the listener's volume knob.

A 32-bit float export needs none of this. A float sample carries a 24-bit mantissa and an exponent that moves with the value, so its rounding error stays around 144.5 dB below whatever that sample happens to be, at every level. An error that scales with the signal can never sit underneath the music as a fixed floor, and it can never turn into grain on a fade. Export float, or export 24-bit, and walk past the checkbox.

Lossy encoding is the last case worth knowing. An encoder discards what it judges you cannot hear, and a flat floor at −96 dBFS is near the front of that queue, so dithering on the way into an encoder spends 4.77 dB on something the encoder is likely to throw out. Hand the encoder the deepest file you have and let it work from that.

## Where the control lives, by DAW

The rule is identical in every host. The control sits in a different place in each, and one of them handles it differently enough to cause most of the accidental double-dithering in the world.

- **Ableton Live** — Export Audio/Video, a Dither Options menu. It only becomes selectable once Bit Depth is set to 16. Choose the depth first, then the dither.

- **Logic Pro** — the Bounce dialog, a Dither menu beside file format and resolution. Leave it off for 24-bit bounces.

- **Reaper** — the Render dialog, with dither and noise shaping as separate checkboxes, and a second set for stem output. Two sets of boxes is two chances to do it twice.

- **FL Studio** — the export dialog, near the depth selector.

- **Pro Tools** — a plugin on the last insert of the master rather than a checkbox in the bounce window. It stays there between bounces and it has no idea what depth you picked, which makes it the easiest place in any host to dither a 24-bit file by accident.

- **Anything else** — open the export dialog, set bit depth to 16, and watch which control wakes up. That is the dither. If nothing wakes up, read the manual before assuming the host has quietly done it for you.

One check covers all of them. If the dither control is dimmed or has no effect, your export is not reducing bit depth, and you do not need it.

## Test it in your own session

Take none of this on trust. Ten minutes and you will never have to read about it again.

- Render ten seconds of one sustained note, or a reverb tail decaying from about −10 dBFS into silence. Keep the session at 24-bit or higher.

- Export that file to 16-bit three times: dither off, triangular, and whichever noise shaping your host offers.

- Import all three into a fresh 24-bit session, lined up on separate tracks.

- Turn your monitors down before you unmute anything.

- Put a gain plugin set to +60 dB on each of the three tracks.

- Play the last two seconds of each and compare them.

- Invert the triangular file against the undithered one and play the sum.

At +60 dB a −96.33 dBFS floor arrives at −36.33 dBFS, which is audible on anything, including a laptop. The undithered tail gives a grainy, buzzing edge that changes as the note changes. The triangular one gives steady hiss that sits still. The shaped one gives quieter hiss with a thin, airy top to it. On the null test, the residual measured −95.25 dBFS in the version rendered for this page, and that residual is the whole disagreement, at full size.

**BEEF at 8.** The reference you A/B against.

## The five ways it goes wrong, and what each sounds like

- **Dithering twice.** Two independent noise floors add in power, so the total climbs by 10 log10(2) = 3.01 dB. Once is inaudible. Four bounces through the same chain is 6.02 dB, and by then it is hiss you can pick out on headphones in a quiet room.

- **Dither, then sample rate conversion.** The conversion invents new sample values and quantizes them afresh, so the correlated error returns while the old dither noise gets smeared across the band by the interpolation. Sounds like the grain coming back with hiss on top of it.

- **Dithering a file that gets processed again.** Everything downstream re-quantizes at its own output, so your dither is now a signal being compressed, equalized and limited along with the music. On a heavy master chain that noise gets pumped up under the quiet parts with everything else, which is audible long before the dither itself would be.

- **Aggressive shaping into something nonlinear.** The worked example above put −64.41 dBFS between 15 kHz and Nyquist. Saturate that, or convert its rate carelessly, and it folds back into the audible band as tones unrelated to the music, moving the wrong way when the pitch moves. Compare [crest factor](https://gazillionindustries.com/crest-factor/), where the arithmetic is similarly unforgiving.

- **Dithering a 24-bit export.** This raises a floor from −149.27 dBFS to −144.49 dBFS. It sounds like absolutely nothing, which is why nobody has ever caught anybody doing it.

## Where it costs you

Honestly: on a loud modern master, very little either way. The noise floor of a 16-bit file is low enough that the difference between dithered and truncated is inaudible under a record that never drops below a moderate level. The people who genuinely need this are working on material with real quiet passages. Everyone else should do it because it is free and correct, not because they will hear it.

The real cost is double-dithering and dithering at the wrong stage, both of which add noise for no reason.

## Questions people ask

### Should dithering be on or off?

On, if the export is reducing bit depth, usually to 16-bit. Off if you are exporting at the same bit depth you worked at, or handing a 24-bit file to someone who will process it further.

### Does dither lower quality?

It raises the noise floor very slightly and removes a distortion that would otherwise appear on quiet material. By any measure that matters musically, it improves the result.

### Should I add dither to my master?

If the master is being delivered as a 16-bit file, yes, on the final export only. If you are delivering 24-bit, no.

### What does dithering mean in music?

Adding low-level noise before a bit-depth reduction so that the rounding errors become random noise rather than signal-dependent distortion.

### Should I dither when exporting 24-bit?

No. A 24-bit step is −138.47 dBFS and the undithered error floor lands at −149.27 dBFS, which is 52.94 dB below the floor of a dithered 16-bit file. There is no audible distortion down there to convert into anything.

### What bit depth should I export at?

24-bit for masters going to a distributor, a mastering engineer or an archive, with no dither. 16-bit with dither when something specifically calls for 16-bit. 32-bit float for anything that is coming back into a session.

### Do I need dither for streaming?

No. Upload the deepest file the service accepts, normally 24-bit, and let their encoder work from that. Dither belongs on a 16-bit delivery.

### Does dither change LUFS or loudness?

Not measurably. Triangular dither puts 4.77 dB onto a floor sitting near −96 dBFS, which is more than 80 dB under any integrated loudness figure you are likely to deliver. It changes nothing about how loud the record sounds.

### Is dither audible?

On a loud master at normal listening levels, no. Raise the file by 60 dB and it is obvious. The people who hear it unaided are working on material with genuine silence in it — solo piano, classical, spoken word — where the tail of a note runs down into the last few bits.

### What is TPDF dither?

Triangular probability density function: noise two steps wide whose values cluster around zero and taper toward the edges. That shape is what fully decorrelates the rounding error. It is the default in most hosts and the right answer whenever you do not want to think about it.

### What is the difference between dither and noise shaping?

Dither decides whether the error comes out as noise or as distortion. Noise shaping decides where in the spectrum that noise sits. You can have dither with no shaping, and shaping with no dither is a poor idea, because it tilts a correlated error rather than a random one.

### Should dither go before or after the limiter?

After. A limiter changes sample values, and anything that changes sample values after dither re-quantizes and undoes it. Dither is the last plugin in the chain, or the export dialog's own checkbox, with nothing following it.

### Dither before or after sample rate conversion?

After. Conversion calculates new samples from old ones, which is a fresh quantization, so dither applied before it gets discarded and replaced by exactly the error you were avoiding.

### Does 32-bit float need dither?

No. A float sample's rounding error stays around 144.5 dB below that sample's own value at every level, because the exponent tracks the signal. There is no fixed floor to raise and no grain to appear on a fade.

### What happens if I dither twice?

The two noise floors add in power and the total goes up 3.01 dB. Once, that is inaudible. It accumulates, though, so a workflow that bounces through three or four stages with dither left on each time gives away 4.77 to 6.02 dB of floor for nothing.

### Which dither should I use for beats?

Triangular, and only on a 16-bit delivery. A loud rap or electronic master never approaches the bottom of the 16-bit range, so noise shaping has nothing to buy you there, and its ultrasonic peak is a liability if anything downstream is nonlinear.

### Why is the dither option dimmed in my DAW?

Because the export is not reducing bit depth. Set bit depth to 16 and the control becomes available. If it stays dimmed at 16-bit, you are looking at the wrong dialog.

### Can I dither a stem or a bounce I will use again?

No. Export stems at the session depth or higher with no dither. Every later stage re-quantizes anyway, and dithering each stem separately stacks noise floors that all end up summed together in the same mix.

### Does dither fix clipping?

No, and the two are unrelated. Clipping happens at the top of the range and dither works at the bottom of it. For the top, see [what is clipping](https://gazillionindustries.com/what-is-clipping/) and [how to use a limiter](https://gazillionindustries.com/how-to-use-a-limiter/). For the room you leave above the mix, [headroom in mixing](https://gazillionindustries.com/headroom-in-mixing/).

### What does dither sound like?

Steady, featureless hiss that holds still while the music moves. That constancy is the whole point. The ear discounts a background that stays put and fastens onto anything that tracks the note.

## What BEEFY does

BEEFY is our saturation and loudness effect, and the reason it appears in an article about dither is the shape of the chain. **BEEF**, **COOK** and **JUICE** do their work on the source or the bus; **SOFT CLIP** opens switched on and rounds the loudest parts so the peaks are dealt with early; **LIMIT** holds the output when you want that instead. Dither is the very last thing that happens, after all of it, in the export dialog.

Three controls shape the sound, **JUICE**, **BEEF** and **COOK**, and two switches handle the output, **SOFT CLIP** and **LIMIT**. $19, Mac and Windows, AU, VST3 and standalone. None of it has any bearing on the checkbox in your export dialog, which is the point worth carrying away: by the time you reach that dialog, every decision that changes how the record sounds has already been made. Dither only keeps them intact on the way out. If you want the rest of that sequence, [how to master a beat](https://gazillionindustries.com/how-to-master-a-beat/) walks the chain from the top.

Add noise on purpose, at the end, to make the quiet parts sound cleaner. Engineering is not always intuitive.

---

## About BEEFY

BEEFY — saturation and loudness plugin for Mac and Windows. There is a 28-second demo with three without/with comparisons on the page.

https://gazillionindustries.com/beefy.html
