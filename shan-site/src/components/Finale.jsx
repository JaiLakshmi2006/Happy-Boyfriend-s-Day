import {useState,useEffect} from 'react'; import {motion} from 'framer-motion'
import {loveStory as d} from '../data/loveStory'; import {Section,Polaroid,Reveal} from './ui'
export const Letter=()=>(<Section title="A letter I might not always know how to say out loud.">
  <Reveal><div className="bg-white shadow-xl p-6 md:p-12 max-w-2xl mx-auto -rotate-1 space-y-4 text-lg leading-relaxed">
    {d.letter.map((p,i)=><p key={i} className={i>=d.letter.length-3?'hand text-2xl text-burgundy':''}>{p}</p>)}</div></Reveal></Section>)
export const Review=()=>(<Section title="Annual Boyfriend Performance Review">
  <Reveal><div className="bg-white p-6 max-w-xl mx-auto shadow-lg font-mono text-sm">
    <p>Employee: <b>Shanthanu</b> · Position: <b>Boyfriend</b></p><p>Department: <b>Jail's Heart</b> · Period: <b>Lifetime</b></p><hr className="my-4"/>
    {d.review.map(([k,v])=><div key={k} className="my-3"><div className="flex justify-between"><span>{k}</span><span>{v}%</span></div>
      <div className="h-3 bg-blush"><motion.div initial={{width:0}} whileInView={{width:v+'%'}} viewport={{once:true}} transition={{duration:1.2}} className="h-3 bg-burgundy"/></div></div>)}
    <p className="italic mt-4">"The committee has concerns about the sugar-cutting claim." 😂</p>
    <p className="mt-2">Overall performance: <b>Suspiciously excellent.</b></p></div></Reveal></Section>)
export function Award(){
  const [stage,setStage]=useState(0)
  useEffect(()=>{ if(stage===0||stage>=4) return; const t=setTimeout(()=>setStage(s=>s+1), stage===1?1800:stage===2?2400:2800); return()=>clearTimeout(t) },[stage])
  return(<>
    <Section dark className="text-center relative overflow-hidden">
      {[...Array(18)].map((_,i)=><motion.span key={i} className="absolute w-1.5 h-1.5 rounded-full bg-gold" style={{left:`${(i*53)%100}%`,top:`${(i*37)%100}%`}} animate={{opacity:[0,1,0],y:-30}} transition={{duration:3+i%3,repeat:Infinity,delay:i*.2}}/>)}
      <Reveal><h2 className="text-3xl md:text-5xl text-gold">🏆 WORLD'S BEST BOYFRIEND AWARD</h2><p className="mt-6">Presented to</p><h3 className="text-5xl md:text-7xl my-3">SHANTHANU</h3>
      <ul className="my-8 space-y-2 max-w-md mx-auto">{d.awards.map(a=><li key={a}>{a}</li>)}</ul>
      <p>Jury: <b>Jail</b> · Competition: <b>None</b> · Bias: <b>Extremely high</b> · Validity: <b>Lifetime</b></p>
      <h3 className="text-4xl my-8">Congratulations, Shan. ❤️</h3>
      {stage===0&&<button onClick={()=>setStage(1)} className="px-8 py-4 rounded-full bg-gold text-[#2a1218] text-lg font-medium">Accept Award</button>}</Reveal>
    </Section>
    {stage>0&&<section className="min-h-screen grid place-items-center px-6 text-center bg-cream">
      <div className="max-w-xl">
        {stage>=1&&<motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-3xl font-serif">Wait...</motion.p>}
        {stage>=2&&<motion.p initial={{opacity:0}} animate={{opacity:1}} className="hand text-3xl my-4">I have one more thing to tell you.</motion.p>}
        {stage>=3&&<motion.h2 initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:1.2}} className="text-4xl md:text-6xl text-burgundy my-6">You are my favorite plot twist.</motion.h2>}
        {stage>=4&&<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}} className="space-y-3 text-lg">
          <p>From a message on a dating app...<br/>to Chennai.</p><p>From random conversations...<br/>to "I love you."</p><p>From different cities...<br/>to dreaming about the same home.</p>
          <p>And somehow, my ordinary life became our rom-com.</p>
          <div className="flex justify-center py-6"><Polaroid src={d.images.final} caption="Us." rot={2}/></div>
          <h2 className="text-3xl text-burgundy">Happy Boyfriend's Day, Shan. ❤️</h2>
          <p className="font-bold">Here's to every chapter we've already lived, and every one still waiting for us.</p></motion.div>}
      </div></section>}</>)}
