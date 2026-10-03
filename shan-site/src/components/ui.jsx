import {motion} from 'framer-motion'; import {Camera} from 'lucide-react'; import {useState} from 'react'
export const Reveal=({children,className='',delay=0})=>(
  <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-50px'}} transition={{duration:.7,delay}}>{children}</motion.div>)
export const Section=({title,children,dark,className=''})=>(
  <section className={`px-5 py-20 md:py-28 ${dark?'bg-[#2a1218] text-cream':''} ${className}`}>
    <div className="max-w-4xl mx-auto">{title&&<Reveal><h2 className="text-3xl md:text-5xl font-medium mb-8 text-center">{title}</h2></Reveal>}{children}</div></section>)
export const P=({children})=><Reveal><p className="text-lg leading-relaxed my-4 max-w-xl mx-auto text-center whitespace-pre-line">{children}</p></Reveal>
export const Note=({children,className=''})=><span className={`hand text-2xl text-burgundy ${className}`}>{children}</span>
export function Polaroid({src,caption,rot=-2,editable,className=''}){
  const [bad,setBad]=useState(!src)
  return(<motion.figure whileHover={{rotate:0,scale:1.03}} style={{rotate:rot}} className={`relative bg-white p-3 pb-4 shadow-xl w-60 max-w-full ${className}`}>
    <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gold/50 rotate-2"/>
    {bad?<div className="aspect-square bg-blush/60 grid place-items-center text-brown/60"><Camera/></div>
      :<img src={src} alt="" onError={()=>setBad(true)} className="aspect-square w-full object-cover"/>}
    {caption!==undefined&&<figcaption contentEditable={editable} suppressContentEditableWarning className="hand text-xl text-center mt-2 text-brown outline-none">{caption}</figcaption>}
  </motion.figure>)}
