import {useState,useRef} from 'react'; import {AnimatePresence,motion} from 'framer-motion'
import {loveStory as d} from './data/loveStory'
import Gate from './components/Gate'; import Music from './components/Music'; import Quiz from './components/Quiz';
import {Letter,Review,Award} from './components/Finale'; import {Section,P,Note,Polaroid,Reveal} from './components/ui'
const Btn=({onClick,children})=><button onClick={onClick} className="px-8 py-4 rounded-full bg-burgundy text-cream text-lg">{children}</button>
function Stickers(){
  const [imgs,setImgs]=useState(d.stickers?.length ? d.stickers : [null,null,null,null,null,null])
  const up=(k,f)=>f&&setImgs(a=>a.map((x,i)=>i===k?URL.createObjectURL(f):x))
  return(<div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">{imgs.map((s,k)=>(
    <motion.label drag dragMomentum={false} whileHover={{rotate:3}} key={k} className="w-32 h-32 bg-white shadow-lg grid place-items-center text-xs text-center cursor-grab overflow-hidden" style={{rotate:(k%3-1)*4}}>
      {s?<img src={s} alt="" className="w-full h-full object-contain"/>:'Tap to add sticker'}
      <input type="file" accept="image/*" hidden onChange={e=>up(k,e.target.files[0])}/></motion.label>))}</div>)}
export default function App(){
  const [ok,setOk]=useState(()=>sessionStorage.getItem('shan')==='1'),[secret,setSecret]=useState(false),story=useRef()
  const open=()=>{sessionStorage.setItem('shan','1');setOk(true)}
  if(!ok)return <AnimatePresence><Gate onOpen={open}/></AnimatePresence>
  return(<main>
    <Music/>
    <section className="min-h-screen grid place-items-center text-center px-5 py-16 relative">
      <button aria-label="secret" onClick={()=>setSecret(true)} className="absolute top-4 right-5 text-gold text-xs opacity-60">✦</button>
      <div><h1 className="text-4xl md:text-6xl text-burgundy mb-4">Happy Boyfriend's Day, Shan ❤️</h1>
        <p className="max-w-xl mx-auto text-lg mb-3">To the person who somehow walked into my ordinary life and turned it into the most beautiful rom-com plot.</p>
        <p className="hand text-2xl mb-8">June 2025 → Forever</p>
        <div className="flex justify-center mb-8"><Polaroid src={d.images.hero} caption="Somewhere between strangers and lovers..." rot={-3}/></div>
        <Btn onClick={()=>story.current.scrollIntoView({behavior:'smooth'})}>Start our story →</Btn></div></section>
    {secret&&<div onClick={()=>setSecret(false)} className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-6"><div className="bg-cream p-8 max-w-sm text-center rounded">
      <h3 className="text-2xl text-burgundy">YOU FOUND THE SECRET. ❤️</h3><p className="my-3">Of course I had to hide one thing for you. Because apparently making an entire website wasn't enough.</p><p className="hand text-2xl">{d.secret}</p></div></div>}

    <div ref={story}><Section title="It started with a message.">
      <Reveal><div className="bg-white max-w-md mx-auto p-5 rounded-2xl shadow-lg"><p className="text-xs text-brown/60 mb-2">Bumpedin · {d.nickname}</p><p className="bg-blush/60 rounded-xl p-4">{d.firstMessage}</p></div></Reveal>
      <P>And somehow...{'\n'}it reached me.</P>
      <P>We met on Bumpedin. I read your profile, liked it and texted you back. At first we were just getting to know each other, talking regularly like friends. I can't pinpoint the exact moment it changed.</P>
      <Reveal><div className="text-center space-y-1 hand text-3xl text-burgundy"><p>"I like talking to this person."</p><p>became "I like this person."</p><p>And eventually: "Oh!!"</p><p>"This is love."</p></div></Reveal>
      
      <div className="flex justify-center items-center mt-10"><Polaroid src="/images/me.jpeg" caption="Me" rot={-6} className="w-40"/><Polaroid src="/images/you.png" caption="You" rot={2} className="w-40 -ml-6"/></div></Section></div>

    <Section title="The first time our story left the screen.">
      <P>Long-distance meant most of our relationship started through messages and calls.{'\n\n'}But then I visited to Chennai to meet you, but the reason given was for a Technical meet.{'\n\n'}And a week later...we got into a relationshipppp..YEAH !!!.</P>
      <div className="flex flex-wrap justify-center gap-6 my-8">{d.chennaiPolaroids.map((c,k)=><Polaroid key={c} caption={c} src={`/images/chennai${k+1}.jpeg`} rot={(k%3-1)*4} className="w-40"/>)}</div>
      <P>Our first little date. Lunch + ice cream + two people who were slowly realizing this was becoming something real.</P>
      <Reveal><div className="bg-white max-w-xs mx-auto p-5 shadow-lg rotate-1"><b>Plot development:</b><p>Strangers: ❌</p><p>Friends: ❌</p><p>"I think I love you": ✅</p></div></Reveal></Section>

    <Section title="And then I said it." dark>
      <P>I confessed first. We were on your bike, me sitting behind you, hugging you from the back. And I told you:</P>
      <Reveal><p className="text-center text-4xl md:text-5xl font-serif text-blush my-8">"I love you."</p></Reveal>
      <p className="text-center"><Note className="!text-gold">"Apparently I decided subtlety was overrated." 😂</Note></p></Section>

    <Section title="Different places. Same everyday life.">
      <P>Our relationship isn't built around being on calls 24/7. It's the small everyday presence.</P>
      <div className="flex flex-wrap justify-center gap-3 my-8">{d.fragments.map((f,k)=><Reveal key={f} delay={k*.1}><span className="bg-white px-4 py-2 rounded-full shadow">{f}</span></Reveal>)}</div>
      <P>We text randomly throughout the day. We video call once in a while. But somehow, even from far away, you never make me feel like I'm missing from your life.</P>
      <Reveal><h3 className="text-3xl text-burgundy text-center">"You keep checking in."</h3></Reveal>
      <P>That's one of the things that makes distance feel a little smaller.</P></Section>

    <Section title="Things about you that I love">
      <div className="grid sm:grid-cols-2 gap-8 justify-items-center">{d.loves.map(([t,m],k)=>(
        <Reveal key={t}><motion.div whileHover={{rotate:0}} style={{rotate:(k%2?1:-1)*2}} className="bg-white p-6 shadow-lg max-w-xs"><h3 className="text-xl text-burgundy mb-2">{t}</h3><p className="hand text-2xl leading-snug">{m}</p></motion.div></Reveal>))}</div></Section>

    <Section title="Unfortunately, you're also annoying.">
      <P>Because apparently loving someone means having to tolerate their logic.</P>
      <div className="grid md:grid-cols-2 gap-8">
        <Reveal><div className="bg-white p-6 shadow-lg -rotate-1"><h3 className="text-xl mb-2">Shan vs. Jail</h3><p><b>Situation:</b> Jail wants to be pampered because she had a bad situation.</p><p><b>Expected:</b> "Come here, baby. 🥺"</p><p><b>Shan:</b> <i>Provides logical explanation.</i></p><p className="hand text-2xl text-burgundy mt-3">Sir. This was not a debate. I wanted pampering. 😂</p></div></Reveal>
        <Reveal><div className="bg-white p-6 shadow-lg rotate-1 relative"><h3 className="text-xl mb-2">The Sugar Investigation</h3><p>Shan: "I'm cutting sugar."</p><p className="text-sm text-brown/60">five minutes later</p><p>Shan: "Sending reels that, I want food from you as an apology gift."</p><p className="mt-3 font-mono text-sm">CASE STATUS: UNDER INVESTIGATION</p>
          <motion.div initial={{scale:3,opacity:0,rotate:-20}} whileInView={{scale:1,opacity:1,rotate:-12}} viewport={{once:true}} transition={{delay:.5,type:'spring'}} className="absolute right-3 bottom-3 border-4 border-red-700 text-red-700 font-bold px-2 py-1 text-sm">HYPOCRISY DETECTED</motion.div></div></Reveal></div></Section>

    <Section title="Apparently I'm... your">
      <div className="flex flex-wrap justify-center gap-4">{d.girlfriendNames.map((n,k)=><Reveal key={n} delay={k*.1}><span className="hand text-3xl bg-blush px-5 py-2 shadow" style={{rotate:(k-1.5)*3}}>{n}</span></Reveal>)}</div>
      <P>And I call you:</P>
      <div className="flex flex-wrap justify-center gap-4">{d.boyfriendNames.map((n,k)=><Reveal key={n} delay={k*.1}><span className="hand text-3xl bg-white px-5 py-2 shadow" style={{rotate:(1.5-k)*3}}>{n}</span></Reveal>)}</div></Section>

    <Section title="Our extremely serious communication system">
      <Stickers/><div className="mt-6 text-center"><Note>{d.stickerCaptions.join('  ·  ')} 😂</Note></div></Section>

    <Section title="Then you came to Hyderabad.">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch my-8">{d.hydStops.map(([e,t],k)=><Reveal key={t+k} delay={k*.12} className="flex-1"><div className="bg-white p-4 text-center shadow h-full"><small>Stop 0{k+1}</small><div className="text-3xl">{e}</div><p>{t}</p></div></Reveal>)}</div>
      <P>You came to meet me in Hyderabad. We explored. We wandered. We rode around on a scooty. We went to the museum, the mall, a heritage site. And eventually, after all the places we went... my favorite part was simply getting to be with you.</P>
      </Section>

    <Section title="The Bangles.">
      <P>I asked you for bangles sending a reel. I didn't expect anything. And then you actually got them for me.{'\n\n'}It might have looked like a small thing. But to me, it was huge.</P>
      <Reveal><p className="text-center font-bold text-2xl text-burgundy my-6">It's never really about the thing.<br/>It's about being remembered.</p></Reveal>
    </Section>

    <Section title="Our memories">
      <div className="flex md:flex-wrap gap-8 overflow-x-auto md:overflow-visible snap-x pb-6 md:justify-center">{d.memories.map((m,k)=>(
        <div key={k} className="snap-center shrink-0"><Polaroid src={m.image} caption={m.caption} editable rot={(k%3-1)*3}/><p className="text-xs text-center mt-3 text-brown/70">{m.title} · {m.location} · {m.date}</p></div>))}</div></Section>

    <Section title="Okay Shan, let's see how well you know your girlfriend."><Quiz/></Section>

    <Section title="The chapters we haven't written yet." dark>
      <P>I don't just love the memories we already have. I love thinking about all the ones we haven't made yet.</P>
      <div className="space-y-8 my-10">{d.future.map(([e,t,m])=><Reveal key={t}><div className="text-center"><div className="text-4xl">{e}</div><h3 className="text-2xl text-gold">{t}</h3><p>{m}</p></div></Reveal>)}</div>
      <Reveal><p className="text-center text-2xl md:text-4xl font-serif text-blush">❤️ And most importantly... I hope we never stop loving, dating, and pursuing each other.</p></Reveal></Section>

    <Letter/><Review/><Award/>
  </main>)}
