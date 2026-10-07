// Add real file/frame or prototype URLs here as Lea provides them.
// Never guess a file key. Figma permissions must allow the portfolio's visitors.
const figmaCases = {
  radware: null
};
document.querySelectorAll('[data-figma-case]').forEach(container=>{
  const url=figmaCases[container.dataset.figmaCase];
  if(url){container.dataset.figmaUrl=url;container.replaceChildren();}
});
document.querySelectorAll('[data-figma-url]').forEach(container=>{
  const url=container.dataset.figmaUrl;
  let parsed;
  try{parsed=new URL(url);}catch{return;}
  if(parsed.protocol!=='https:'||!['www.figma.com','figma.com'].includes(parsed.hostname))return;
  const button=document.createElement('button');button.type='button';button.textContent='Load Figma preview';
  const note=document.createElement('p');note.className='figma-note';note.textContent='Interactive preview hosted by Figma. It may require access to the original file.';
  const link=document.createElement('a');link.href=url;link.className='text-link';link.textContent='Open in Figma';link.target='_blank';link.rel='noopener noreferrer';
  button.addEventListener('click',()=>{
    const frame=document.createElement('iframe');
    const embed=new URL('https://www.figma.com/embed');embed.searchParams.set('embed_host','share');embed.searchParams.set('url',url);
    frame.src=embed.toString();frame.title=container.dataset.figmaTitle||'Interactive Figma project preview';frame.loading='lazy';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
    button.replaceWith(frame);
  },{once:true});
  container.append(button,note,link);
});
