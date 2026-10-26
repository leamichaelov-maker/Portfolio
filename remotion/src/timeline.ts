// Figma file 2G8Af2n3G4ijBtvNbzsXtF, verified page order, Sprints 1–5.
// One shared timing manifest drives Studio, the embedded player and chapter links.
export const HOME_SECONDS=32;
const pages=[
['resources','03 / Resources Lobby','rad.com/resources/',8],
['resource-inner','04 / Resource Inner Page','rad.com/resource/extending-coherent-optics-to-the-carrier-ethernet-edge/',8],
['products','05 / Products Page · Lobby','rad.com/products/',8],
['product-inner','06 / Product Inner Page','rad.com/product/iot-gateways/secflow-1p-iot-lorawan-gateway/',8],
['use-case','07 / Use Cases','rad.com/use_case/data-center-interconnect-dci/',8],
['topic','08 / Product & Topic · Lobby Category','rad.com/topics/carrier-edge/',8],
['news','09 / News & Events','rad.com/news-events/',8],
['blog','10 / Blog Page','rad.com/blog/',8],
['about','11 / About RAD','rad.com/rad-at-a-glance/',8],
['contact','12 / Contact Us','rad.com/contact-us/',8],
['partner','13 / Become a Partner','rad.com/become-a-rad-partner/',8],
['use-cases-lobby','14 / Use Cases Lobby','rad.com/solutions/',7],
['404','15 / 404 · original Figma design','Figma · 404 design',5],
['support','16 / Support','rad.com/contact-rad-support/',7],
['search','17 / Search','rad.com/?s=IoT',7],
] as const;
let next=9+HOME_SECONDS+6;
export const chapters=pages.map(([id,title,url,seconds])=>{const chapter={id,image:'rad2-'+id,title,url,seconds,start:next,figma:id==='404'};next+=seconds;return chapter;});
export const TOTAL_FRAMES=(next+4)*30;
