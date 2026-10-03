import {useState} from 'react'; import {AnimatePresence,motion} from 'framer-motion'
import {loveStory as d} from '../data/loveStory'
export default function Quiz(){
  const [i,setI]=useState(0),[pick,setPick]=useState(null),[score,setScore]=useState(0),n=d.quiz.length
  const q=d.quiz[i]
  const choose=k=>{ if(pick!==null)return; setPick(k); if(k===q.a)setScore(s=>s+1) }
  const next=()=>{setPick(null);setI(i+1)}
  return(<div className="bg-white p-6 md:p-10 shadow-xl rotate-1 max-w-xl mx-auto"><AnimatePresence mode="wait">
    {i<n?<motion.div key={i} initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-40}}>
      <p className="hand text-xl">Question {i+1} / {n}</p><h3 className="text-2xl my-3">{q.q}</h3>
      {q.o.map((t,k)=><button key={k} onClick={()=>choose(k)} className={`block w-full text-left p-3 my-2 rounded border ${pick===null?'border-brown/30':k===q.a?'bg-green-100 border-green-600':k===pick?'bg-red-100 border-red-400':'opacity-50 border-brown/20'}`}>{'ABCD'[k]}. {t}</button>)}
      {pick!==null&&<><p className="hand text-2xl text-burgundy my-3">{pick===q.a?q.r:`Not quite. ${q.r}`}</p><button onClick={next} className="px-6 py-3 rounded-full bg-burgundy text-cream">Next →</button></>}
    </motion.div>:<motion.div key="end" initial={{opacity:0}} animate={{opacity:1}} className="text-center">
      <h3 className="text-4xl">Score: {score} / {n}</h3><p className="mt-4">You still get to keep your girlfriend.<br/>Congratulations. ❤️</p></motion.div>}
  </AnimatePresence></div>)}
