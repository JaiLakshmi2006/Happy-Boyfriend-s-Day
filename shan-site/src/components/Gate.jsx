import {useState} from 'react'; import {motion} from 'framer-motion'
import {loveStory as d} from '../data/loveStory'
export default function Gate({onOpen}){
  const [v,setV]=useState(''),[err,setErr]=useState(false),[ok,setOk]=useState(false)
  const go=()=>{ if(v===d.password){setErr(false);setOk(true)} else setErr(true)}
  return(<motion.div exit={{rotateY:-90,opacity:0}} className="min-h-screen grid place-items-center text-center px-6 bg-cream">
    {!ok?<div className="max-w-sm w-full">
      <h1 className="text-4xl text-burgundy mb-4">FOR SHAN ONLY. ❤️</h1>
      <p className="mb-6 text-brown">Some things on the internet are meant for everyone.<br/>This isn't one of them.</p>
      <p className="hand text-2xl mb-2">Enter your password</p>
      <input value={v} onChange={e=>setV(e.target.value)} onKeyDown={e=>e.key==='Enter'&&go()} type="password" inputMode="numeric" className="w-full text-center text-xl tracking-widest p-3 rounded border border-brown/30 bg-white"/>
      {err&&<motion.p initial={{x:-8}} animate={{x:0}} className="mt-3 text-burgundy">Hmm... nice try, Shan. 😂<br/>You know this one.</motion.p>}
      <button onClick={go} className="mt-5 w-full py-4 rounded-full bg-burgundy text-cream text-lg">Let me in →</button>
    </div>:<motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}}>
      <h1 className="text-5xl text-burgundy mb-3">Hey, Shan. ❤️</h1><p className="hand text-3xl mb-8">I made you something.</p>
      <button onClick={onOpen} className="px-8 py-4 rounded-full bg-burgundy text-cream text-lg">Start our story →</button></motion.div>}
  </motion.div>)}
