import {Composition} from 'remotion';
import {Walkthrough} from './Walkthrough';
import {TOTAL_FRAMES} from './timeline';
export const RemotionRoot=()=> <Composition id="RADWalkthrough" component={Walkthrough} width={1920} height={1080} fps={30} durationInFrames={TOTAL_FRAMES}/>;
