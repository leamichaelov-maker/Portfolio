import {createRoot} from 'react-dom/client';
import {Player} from '@remotion/player';
import {Walkthrough} from './Walkthrough';
createRoot(document.getElementById('video-root')!).render(<Player component={Walkthrough} compositionWidth={1920} compositionHeight={1080} durationInFrames={1800} fps={30} controls loop style={{width:'100%',aspectRatio:'16 / 9'}}/>);
