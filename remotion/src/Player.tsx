import {createRoot} from 'react-dom/client';
import {useRef} from 'react';
import {Player,PlayerRef} from '@remotion/player';
import {Walkthrough} from './Walkthrough';
import {chapters,TOTAL_FRAMES} from './timeline';
function Preview(){const ref=useRef<PlayerRef>(null);return <><Player ref={ref} component={Walkthrough} compositionWidth={1920} compositionHeight={1080} durationInFrames={TOTAL_FRAMES} fps={30} controls loop style={{width:'100%',aspectRatio:'16 / 9'}}/>{!location.pathname.endsWith('embed.html')&&<div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:20}}>{[{id:'home',title:'01 / Home Page',start:0},{id:'menu',title:'02 / Mega Menu',start:41},...chapters].map(c=><button key={c.id} onClick={()=>{ref.current?.seekTo(c.start*30);ref.current?.play();}} style={{padding:'9px 12px',border:'1px solid #574f65',borderRadius:6,background:'#211a2b',color:'#dfd6f0',cursor:'pointer'}}>{c.title}</button>)}</div>}</>}
createRoot(document.getElementById('video-root')!).render(<Preview/>);
