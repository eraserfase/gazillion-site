# Limiter vs compressor

> The difference between a limiter and a compressor, where the line sits, which order they go in, and how much of each is too much on a mix or a master.

Source: https://gazillionindustries.com/limiter-vs-compressor/  
Published 2026-09-20, updated 2026-09-24. By Gazillion Industries, who make DRUGS.

---

Two boxes, both turning things down, both with a threshold, both promising loudness. The difference between them is one number, and knowing which number decides which one goes at the end of your chain.

A limiter is a compressor with a very high ratio and a very fast attack, set to stop a signal crossing a ceiling. A compressor shapes dynamics across the whole performance; a limiter catches the few peaks that would otherwise clip. In practice: use a compressor early, to control and shape, with 3 to 6 dB of gain reduction on the loud parts. Use a limiter last, with a ceiling around −1 dBTP, to stop the output going over.

## The short version

- **Compressor**: ratio 2:1 to 8:1, shapes the whole performance

- **Limiter**: ratio 20:1 or higher, often infinite: a ceiling

- **Attack**: compressor, milliseconds you choose; limiter, as fast as possible

- **Job**: compressor controls dynamics; limiter prevents overs

- **Order**: compressor first, limiter last

- **Amount**: compressor 3–6 dB; limiter 1–3 dB on peaks only

**DOSE 88.** Same source. The line dives on each hit and takes the whole bar to come back — that recovery is the pump.

## The line between them

There is no hard border in the circuit, only in the setting. Traditionally anything above about 10:1 counts as limiting, and a true brickwall limiter behaves as if the ratio were infinite: nothing crosses the ceiling, ever. Below that you are compressing, which means the signal still gets louder as the input gets louder, just less so.

The practical distinction is what each is listening for. A compressor is reacting to the body of a performance, and its timings are musical decisions. A limiter is reacting to a handful of samples, and its timings are technical ones: it exists so the converter or the encoder does not receive something it cannot represent.

## How to use each

- Put the compressor early, on the track or the bus, and set it by ear for feel.

- Get the balance right with the compressor in, not after the limiter is on.

- Deal with the worst transients before the limiter: a clipper or saturation will shave peaks without the limiter having to pull down the whole track.

- Put the limiter last, with the ceiling at −1 dBTP for anything that will be encoded.

- Push into it a decibel at a time and listen to the quiet bars, not the loud ones.

- If the limiter is doing more than 3 dB on average, the problem is upstream.

For the loudness part of that chain in detail, see [clipper before limiter](https://gazillionindustries.com/clipper-before-limiter/) and [how loud should my master be](https://gazillionindustries.com/how-loud-should-my-master-be/).

[DRUGS](https://gazillionindustries.com/drugs.html) has both ends of this on one free panel: a compressor with one knob, and LIMIT, a soft ceiling on the output at −0.3 dBFS.

## Where each one costs you

A compressor costs you dynamics in exchange for consistency, and the cost shows up as a performance that stops moving. A limiter costs you transients in exchange for level, and the cost shows up first on drums: the snare goes flat, then the kick, then everything develops a soft ceiling you can hear. Limiters also pump when pushed, because a fast attack and a slow release hold the whole mix down after every peak.

Both flatter themselves the same way, through make-up gain. Level-match before deciding.

What to look for when the budget is nothing: [best free compressor plugins](https://gazillionindustries.com/best-free-compressor/).

## Questions people ask

### Should I use a compressor or a limiter?

Both, in that order, for different reasons. The compressor shapes how the performance moves. The limiter stops the output exceeding a ceiling. A limiter used as a compressor will flatten the life out of a track, and a compressor used as a limiter will let peaks through.

### At what point does a compressor become a limiter?

Conventionally around a 10:1 ratio, with a fast attack. A brickwall limiter behaves as though the ratio were infinite, so nothing at all passes the ceiling.

### Should the compressor come before the limiter?

Yes. Shape first, catch what is left afterward. A limiter in front of a compressor gives the compressor a signal whose peaks have already been flattened, so its timings no longer relate to the performance.

### How much limiting is too much?

When the drums lose their front edge and the quiet bars start moving with the loud ones. One to three decibels of gain reduction on peaks is normal; anything much past that is a mix problem being solved in the wrong place.

## What DRUGS does

DRUGS is our free bus compressor for drums, and it carries both halves of this article. **DOSE** is the compression: it moves the transfer curve, the knee, the attack and the release together, making a drum bus denser rather than louder. **GAIN** adds 5 dB after the compressor and before the ceiling. **LIMIT** is a zero-latency soft ceiling at −0.3 dBFS on the output, with a clip indicator; it attenuates only, and it is transparent below about −0.9 dBFS. Both are on when it opens.

Two boxes, one number between them. Now you know which one belongs at the end.

---

## About DRUGS

DRUGS — a one-knob bus compressor for drums, free for Mac and Windows. One control called DOSE, with GAIN and a soft ceiling on the way out.

https://gazillionindustries.com/drugs.html
