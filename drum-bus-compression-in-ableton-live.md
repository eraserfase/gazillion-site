# How to glue your drum bus in Ableton Live

> Group your drums in Live, set the Glue Compressor's attack and release against the tempo, and use Makeup and Dry/Wet without flattening the transients.

Source: https://gazillionindustries.com/drum-bus-compression-in-ableton-live/  
Published 2026-09-24, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

You made the group, put a Glue Compressor on it, pulled the threshold down, and the break went polite.

In Live, select your drum tracks and press Cmd-G on a Mac or Ctrl-G on Windows to make a Group Track, then put a Glue Compressor first in the group's chain. Set Ratio to 2, Attack to 10 or 30 ms so the stick gets through before the gain falls, Release to Auto or a step shorter than the sixteenth note at your tempo, and lower Threshold until the needle shows 1 to 3 dB on the loudest hits. Match Makeup so bypassing the device does not change the loudness. If you want more compression than that, turn the Ratio up and pull Dry/Wet back to 70 or 80 percent instead.

## The short version

- **Group**: select the drum tracks, Cmd-G or Ctrl-G, balance the faders first

- **Position**: Glue Compressor first in the group chain, saturation after it

- **Ratio**: 2 for glue, 4 only if you are going to use Dry/Wet

- **Attack**: 10 or 30 ms — the fast steps are where transients die

- **Release**: 0.1 s or Auto on a busy break, 0.2 to 0.4 s on half-time

- **Amount**: 1 to 3 dB on peaks, needle back at rest between hits

- **Check**: Utility after the device, trimmed by the makeup, for a level-matched bypass

## How do I set up the drum group?

Select every drum track, including the ones you forgot about, and press Cmd-G on a Mac or Ctrl-G on Windows. Live makes a Group Track with the selected tracks inside it. Everything on that group processes the sum, and the child faders feed the sum, so the balance inside the group is part of what the compressor reacts to. Move a fader after you set the threshold and you have changed the compression as well.

Balance first, then compress. A kick that is 4 dB too loud will hold the gain down for the whole bar and the hats will spend the track being pushed out of the way by it. Fix that with the fader, not with the threshold.

Chain order on the group is short and worth being strict about. Corrective EQ first if a track inside the group needed it and you did not do it there. Glue Compressor next, because it should see the drums as they were mixed. Then Drum Buss, Saturator or Roar for weight and dirt. Nothing on the group needs to be a limiter; that belongs on the master, and the group is not the place to chase level.

## What do the Glue Compressor's controls do?

**Threshold** sets where the compressor starts working. On a drum group you are aiming it at the loudest hits only, so it should sit just under the peaks and above everything else in the bar.

**Ratio** gives you 2, 4 and 10. Two is the glue setting. Four is usable if you are going to bring Dry/Wet back down afterward. Ten on a drum group turns the kick into a volume pedal for the rest of the kit.

**Attack** is stepped: 0.01, 0.1, 0.3, 1, 3, 10 and 30 ms. There is nothing in between, which makes the decision simpler than it looks. The bottom four steps catch the front of the hit. The top two let it through.

**Release** is stepped too: 0.1, 0.2, 0.4, 0.6, 0.8 and 1.2 s, plus Auto. Those are seconds, and on a drum group almost all of them are too long. Auto follows the material and is a reasonable default when the pattern varies.

**Makeup** adds level after the gain cell, so it changes how loud the group is and not how the compressor behaves. **Dry/Wet** blends the uncompressed group back in. **Range** caps how much gain reduction the device will do, which is useful when one loud fill would otherwise duck an entire bar. **Peak Clip In** puts a soft clip on the output — leave it off while you are setting the timings, because it flatters everything.

The sidechain section has its own EQ. High-passing the detector around 100 Hz stops the kick from driving the whole gain movement, which is the single most useful control on the device for a group that is mostly kick.

## What attack and release keep the transients?

Transients survive attack. If the drums sound soft, flat or further away after you engaged the compressor, the attack is too fast, and no other control will bring the front edge back. Start at 30 ms, and only come down to 10 ms if the group feels detached from the beat. The steps at 1 ms and below are for holding a peak down, not for making a kit sound like a kit. [How to compress drums](https://gazillionindustries.com/how-to-compress-drums/) works through the same two decisions without the Live specifics.

Release is where the groove goes. The gain has to be back up before the next hit arrives, and the arithmetic is one division: 60000 divided by the tempo gives the quarter note in milliseconds, and you halve from there.

- **70 bpm**: quarter 857 ms · eighth 429 ms · sixteenth 214 ms

- **80 bpm**: quarter 750 ms · eighth 375 ms · sixteenth 188 ms

- **90 bpm**: quarter 667 ms · eighth 333 ms · sixteenth 167 ms

- **100 bpm**: quarter 600 ms · eighth 300 ms · sixteenth 150 ms

- **120 bpm**: quarter 500 ms · eighth 250 ms · sixteenth 125 ms

- **140 bpm**: quarter 429 ms · eighth 214 ms · sixteenth 107 ms

- **170 bpm**: quarter 353 ms · eighth 176 ms · sixteenth 88 ms

At 90 bpm the sixteenth is about 167 ms, and that is the ceiling on a busy break. Live's shortest step, 0.1 s, clears it. The next one up, 0.2 s, is already past the sixteenth and into the eighth, so it works on a pattern with space in it and drags on one without. If the hi-hats are in sixteenths, take 0.1 s or Auto and stop thinking about it.

Half-time at the same tempo is a different bar. The gap between the kick and the snare is the half note, so 0.2 to 0.4 s recovers between events and holds the kit still through the decay rather than lifting the room on every eighth. The tempo tells you the ceiling, and the pattern tells you where under it to sit.

## What do Makeup and Dry/Wet actually change?

Makeup is the reason most drum groups end up over-compressed. It sits after the gain cell, so it makes the group louder without changing a single thing about how the compressor responds, and louder wins every quick A/B you run. Set it so the device switching off does not change the loudness, then decide.

Dry/Wet is parallel compression built into the device. Instead of a second group and a send, you turn the Ratio to 4, set a threshold that would be far too much on its own, and then bring Dry/Wet back to 70 or 80 percent. The compressed signal supplies the body and the dry signal supplies the front edge, and the drums get denser without the hit getting shorter. On a sampled break, where the balance was committed long before you heard it, this is usually a better trade than gentler settings at 100 percent wet. [Glue compression](https://gazillionindustries.com/glue-compression/) covers what the gentle version is for.

One habit worth keeping: move Dry/Wet before you move Threshold. If you are unhappy with the sound at 100 percent, the answer is often a blend rather than a smaller amount of the same thing.

## How do I see gain reduction in Live?

The Glue Compressor shows it on a needle that swings down from zero, in decibels. Watch the needle across a full bar rather than on one hit. For glue it should dip 1 to 3 dB on the loudest moments and come all the way back at rest. A needle that never returns to zero means the release is too long or the threshold is too low, and the result is the flat, permanently pressed sound people blame on the compressor.

Live's other Compressor draws gain reduction over time instead of on a needle, which makes the release far easier to see: you can watch whether the line has recovered before the next transient lands. It is worth putting one on the group for five minutes purely as a meter while you set the release, then deleting it. It also offers a lookahead of 0, 1 or 10 ms, which catches peaks without forcing you into a fast attack.

For level, use the numeric peak readout under the group's track meter, and put a Utility after the compressor trimmed by the same amount as the makeup. Toggle the two together and you get a bypass at a matched level, which is the only bypass that tells you anything.

## Where does the rest of the drum chain go?

After the compressor. Drum Buss interacts with everything you just set: Transients sharpens or softens the attacks, Drive and Crunch add distortion that a compressed signal feeds more evenly, and Boom adds low end, which is level, so it changes what the master sees.

Saturator and Roar go in the same place and do the same structural thing — they trade peak height for density. Put them after the compressor and the compressor keeps reacting to your drums. Put them before and the compressor is reacting to the distortion instead, which is a valid choice, and a different one, so make it on purpose. [Drum bus compressor settings](https://gazillionindustries.com/drum-bus-compressor-settings/) goes through attack, release and ratio one control at a time.

## Where it costs you

Group compression trades separation for agreement. The kick pushing the group down is the effect working, and it is also a hi-hat pattern you programmed losing a little of its place. Room and bleed come up, which is a gift on a break and a problem on a close-miked kit.

There is also a Live-specific trap. Because the group sums the child tracks, anything you change inside it later changes the compression, so a group compressor set early in a session gradually stops being the setting you chose. Check the needle again once the arrangement is done.

## Questions people ask

### Why do my drums get quieter and smaller when I compress the group?

The attack is too fast. At 1 ms and below the compressor catches the front of every hit, which reads as softer and further away no matter how little gain reduction is showing. Move to 10 or 30 ms and the hits keep their edge while the body still gets pulled together.

### Should I use Glue Compressor or Compressor on a drum group?

Glue Compressor for the job in the name: low ratio, gentle knee, stepped timings that are hard to get wrong. Live's Compressor when you need a specific attack or release value, lookahead, or a view of gain reduction over time. The timings decide the sound far more than the choice of device does.

### What release should the Glue Compressor use at my tempo?

Short enough that the needle is back at rest before the next hit. Divide 60000 by the tempo for the quarter note in milliseconds and halve it twice for the sixteenth: at 90 bpm that is about 167 ms, so 0.1 s on a busy break. Use 0.2 to 0.4 s when the pattern has space in it.

### Where should the compressor go in the group chain?

First, before saturation and before Drum Buss, so it reacts to the drums as you balanced them. Any device that adds level or density in front of it is changing what the compressor hears, which is worth doing deliberately and easy to do by accident.

### How much gain reduction should a drum group show?

One to three decibels on the loudest hits for glue, and nothing in the quiet bars. If you want more density than that, use Ratio 4 with Dry/Wet around 70 percent rather than a lower threshold at 100 percent wet.

## What DRUGS does

[DRUGS](https://gazillionindustries.com/drugs.html) is our free bus compressor with one macro control, called DOSE, and it goes in the same slot: first in the group chain, before the saturation. There is no threshold and no ratio to set, and the release reacts to the transient in front of it rather than asking you for a number, so the tempo arithmetic stops being your problem on a drum group. MIX is there when you want the dry front edge back.

Balance the faders, watch the needle for a bar, and stop when the kit starts agreeing with itself.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
