# Sidechain compression

> Sidechain compression explained: how to duck the bass under the kick, the settings to use, when a volume envelope is better, and what it hides rather than fixes.

Source: https://gazillionindustries.com/sidechain-compression/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

You know the sound before you know the name. The whole track breathing in and out around a kick you can barely hear, the bass ducking out of the way four times a bar like it has been trained.

Sidechain compression is compression triggered by a different signal from the one being compressed. A compressor on the bass listens to the kick and turns the bass down every time the kick hits, so the two stop fighting for the same space. Set it up by routing the trigger track to the compressor's sidechain input, then use a fast attack, a release timed to the tempo, and enough gain reduction to hear the gap: 3 to 6 dB for a mix fix, 10 dB or more when the pumping is the point.

## The short version

- **What**: one track's compressor listens to another track

- **Classic use**: kick triggers the bass, so they take turns

- **Attack**: fast, 0–5 ms, so the duck happens on the hit

- **Release**: timed to the tempo: recover before the next kick

- **Amount**: 3–6 dB to fix a clash, 10 dB+ to hear it pump

- **Alternative**: a volume envelope, if you want the shape exactly

## Why it works

Two sounds in the same frequency range at the same moment do not add up to twice as much; they add up to mud, and whichever one you turn up wins at the expense of the other. A kick and a sub bass are the standard example because both live below 120 Hz and both need to be felt rather than heard. Ducking the bass for the length of the kick gives the kick an empty room to arrive in, and the ear fills in the bass note it did not quite hear.

The second reason is rhythmic. A track that dips and recovers in time with the kick has a pulse whether or not you can hear the kick at all, which is why the technique took over dance music once producers noticed it was a groove rather than a repair.

## How to set it up

- Put a compressor on the track you want to duck, usually the bass.

- Set its sidechain or key input to listen to the trigger track, usually the kick.

- Set the ratio to 4:1 and the attack as fast as the compressor allows.

- Lower the threshold until the meter shows the gain reduction you want on every kick.

- Set the release so the bass is fully back before the next kick: at 120 bpm that is under 500 ms, and usually much less.

- Listen to the bass alone: it should dip and return smoothly, not stutter.

- If your compressor has a sidechain filter, high-pass the trigger around 100 Hz so only the kick's body triggers it.

If the trigger kick is not in the arrangement, put one on a muted track and use it anyway. That is the standard way of getting a pump with no audible kick.

DRUGS is our free one-knob drum bus compressor. It has no sidechain input, so this job belongs to a compressor that does; DRUGS is what goes on the drums afterward.

## When to use a volume envelope instead

A compressor gives you a curve it chooses. An automation lane or a volume-shaping plugin gives you the curve you draw, repeated exactly, with no dependence on how loud the kick happens to be in that bar. For tightly programmed electronic music that control is usually worth more than the compressor's responsiveness. For live playing, where the trigger varies, the compressor is better, because it reacts.

## Where it costs you

Heavy sidechaining removes energy from your track four times a bar, and a mix that pumps hard feels exciting for thirty seconds and tiring by the second chorus. It also hides problems rather than fixing them: if the kick and bass are clashing because they occupy the same two octaves, ducking papers over an arrangement decision. Tuning the kick and the bass note to each other, or moving one of them in pitch, often removes the need entirely. See how to mix kick and 808 for that conversation.

## Questions people ask

### What should be sidechained to what?

Usually the bass to the kick. After that: pads and synths to the kick for a pumping feel, reverb returns to the dry vocal so the space opens up between words, and a busy sample bus to the snare if the backbeat is disappearing.

### Why does sidechaining sound so good?

Because it turns a frequency clash into a rhythm. The ear reads the regular dip and recovery as pulse, and it hears both elements clearly instead of hearing one smear over the other.

### How do I set up sidechain compression in my DAW?

Every major DAW does the same thing under different names: put the compressor on the track to be ducked, then select the trigger track as the sidechain, key or external input in the compressor's routing menu. In some hosts you also have to enable a send from the trigger track first.

### How much gain reduction should sidechain compression use?

Three to six decibels if you are solving a low-end clash and do not want it heard. Ten or more if the pump is a deliberate part of the arrangement. Watch the meter return to zero before the next trigger either way.

## What DRUGS does

DRUGS is our free bus compressor for drums, and it does one job. DOSE moves the transfer curve, the knee, the attack and the release together, making a drum bus denser rather than louder, with the room brought up underneath the hits. There is no sidechain input and no trigger routing: it listens to what you feed it and nothing else. Put your ducking compressor on the bass, and put this on the drums that are doing the ducking.

Four times a bar, everything gets out of the way of a sound you can hardly hear. That is the whole trick.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
