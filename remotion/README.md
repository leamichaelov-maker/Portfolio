# RAD website walkthrough

60 seconds, 1920 × 1080, 30fps. Built in Remotion 4.0.538 using original captures of rad.com on 26 October 2026. The edit uses frame-driven scrolling, category hover captures, an animated cursor and clean page cuts. It is an animated walkthrough from still captures, not an uninterrupted screen recording. No audio.

## Preview and edit

    npm ci
    npm run dev

Open RADWalkthrough in Remotion Studio. The portfolio also includes a self-contained Remotion Player at `/assets/radware/walkthrough/` and an embedded player in the RAD case study. These previews use the same `Walkthrough` composition.

## Export when needed

    npx remotion render src/index.ts RADWalkthrough out/rad-walkthrough.mp4

## Rebuild the portfolio player

From this folder:

    npx esbuild src/Player.tsx --bundle --minify --define:process.env.NODE_ENV='"production"' --outfile=../assets/radware/walkthrough/player.js

Copy `public/captures/` into `../assets/radware/walkthrough/captures/` after changing captures. No remote assets or API keys are required for playback.

Capture sources: homepage at https://www.rad.com/, IoT Gateways at https://www.rad.com/products/iot-gateways/, Data Center Interconnect at https://www.rad.com/use_case/data-center-interconnect-dci/, resources at https://www.rad.com/resources/.
