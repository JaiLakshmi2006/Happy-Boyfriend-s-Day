import {useRef,useState} from 'react'; import {Play,Pause,Volume2,VolumeX} from 'lucide-react'
import {loveStory as d} from '../data/loveStory'
export default function Music(){
  const a=useRef(),[on,setOn]=useState(false),[mute,setMute]=useState(false),[miss,setMiss]=useState(false)
  const toggle=()=>{ if(on){a.current.pause();setOn(false)} else a.current.play().then(()=>setOn(true)).catch(()=>setMiss(true)) }
  return(<div className="fixed bottom-4 right-4 z-50 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center gap-2 pl-4 pr-2 py-2 text-sm">
    <audio ref={a} src={d.song.file} loop muted={mute} onError={()=>setMiss(true)}/>
    <span>🎵 {d.song.title}<br/><small className="text-brown/70">{miss?'MS Dhoni - The Untold Story':d.song.artist}</small></span>
    <button aria-label="play/pause" onClick={toggle} className="p-2">{on?<Pause size={20}/>:<Play size={20}/>}</button>
    <button aria-label="mute" onClick={()=>setMute(!mute)} className="p-2">{mute?<VolumeX size={20}/>:<Volume2 size={20}/>}</button></div>)}
