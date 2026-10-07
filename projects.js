// Replace typographic covers with approved original project images as they become available.
// Keep claims source-grounded. Project overview copy is intentionally limited in version 0.1.
const projects = [
  {id:'yotpo', name:'Yotpo', subtitle:'Onboarding', category:'AI-ASSISTED DESIGN', color:'lime', description:'An onboarding project selected to show how I work with machines alongside my design practice. The process and original screens will be added as this case study develops.'},
  {id:'adidas', name:'adidas', subtitle:'Brand & campaign design', category:'BRAND / MARKETING', color:'black', description:'Selected brand and marketing work for adidas, from my experience adapting global brand toolkits and developing localized design language. The selected work is part of my Behance portfolio.'},
  {id:'tnuva', name:'Tnuva', subtitle:'Website design', category:'DIGITAL / UX / UI', color:'blue', description:'A large-scale website design project. Its full scope and original interface designs will be documented in a dedicated case study.'},
  {id:'hava', name:'Hava Zingboim', subtitle:'E-commerce', category:'UX / UI / ART DIRECTION', color:'pink', description:'An e-commerce website designed with attention to image-making and the way imagery supports product sales. Explore the Figma design below; detailed design decisions will be added.', figma:'https://www.figma.com/design/fMRkkhyWzIQ9Ju0hJOg0SF/Hava-Website-UI-Workflow--Copy-?node-id=964-1664'},
  {id:'similarweb', name:'Similarweb', subtitle:'Data Summit', category:'DIGITAL / UX / UI', color:'orange', description:'Selected UX/UI work for Similarweb Data Summit. Explore the original project on Behance.', source:'https://www.behance.net/gallery/155944507/UX-UI-Similarweb-Data-Summit'},
  {id:'barilla', name:'Barilla', subtitle:'Brand & marketing design', category:'BRAND / MARKETING', color:'red', description:'Selected Barilla work from my brand and marketing design practice. The selected work is part of my Behance portfolio.'},
  {id:'volcani', name:'Volcani / Kidum', subtitle:'Technology communication', category:'BRAND / UX / UI', color:'purple', description:'Website rebranding and custom iconography for technologies, with color differentiation between commercialized and non-commercialized technologies. Original visuals and the full project story will be added.'}
];
const grid=document.getElementById('project-grid');
const overviews=document.getElementById('project-overviews');
projects.forEach((project,index)=>{
  const card=document.createElement('a'); card.className='project-card'; card.href='#project-'+project.id;
  const art=document.createElement('div'); art.className='tile '+project.color;
  const meta=document.createElement('span'); meta.className='small-label'; meta.textContent=String(index+2).padStart(2,'0')+' / '+project.category;
  const name=document.createElement('span'); name.className='tile-name'; name.textContent=project.name;
  const bottom=document.createElement('span'); bottom.className='tile-bottom'; bottom.textContent=project.subtitle;
  const hoverTitle=document.createElement('span'); hoverTitle.className='project-hover-title'; hoverTitle.textContent=project.name; hoverTitle.setAttribute('aria-hidden','true');
  art.append(meta,name,bottom,hoverTitle);
  const title=document.createElement('h3');title.textContent=project.name;
  const caption=document.createElement('p');caption.textContent=project.subtitle;
  card.append(art,title,caption); grid.append(card);
  const overview=document.createElement('article'); overview.id='project-'+project.id; overview.className='overview';
  const number=document.createElement('span');number.className='eyebrow';number.textContent=String(index+2).padStart(2,'0');
  const body=document.createElement('div');
  const heading=document.createElement('h3');heading.textContent=project.name;
  const text=document.createElement('p');text.textContent=project.description;
  body.append(heading,text);
  if(project.figma){const preview=document.createElement('div');preview.className='figma-preview';preview.dataset.figmaUrl=project.figma;preview.dataset.figmaTitle=project.name+' design preview';body.append(preview);}
  if(project.source){const link=document.createElement('a');link.href=project.source;link.className='text-link';link.textContent='View the original project';link.target='_blank';link.rel='noopener noreferrer';body.append(link);}
  overview.append(number,body);overviews.append(overview);
});
