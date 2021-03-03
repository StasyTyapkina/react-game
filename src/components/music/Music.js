import React, { useState, useEffect}from 'react'
import './music.css'
import Switch from "react-switch";

import mainTheme from "./main.mp3";
import sound1 from "./Chord_3.mp3";
import Button from '../button/Button'
import AudioSetup from './AudioSetup'

import useSound from 'use-sound';


const Music = () => {
  const [playing, setPlaying] = useState(false)
  const toggle = () => setPlaying(!playing);
  const audio = mainTheme
  const [volume, setVolume] = React.useState(0.4)


  const [play, { stop }] = useSound(audio, {
    volume,
    interrupt: true,
  });



  function handleVolume(e) {
    
      setVolume(e.target.value)
    
  }

    function handlePlay() {
      if(playing){
        play();
      } else{
        stop(); 
      }
    }
  
  return (
    <div>

      <label>
        <button onClick = {
        
        handlePlay}>dhbdhdr</button>
        <Switch onChange={toggle} checked={playing} />
      </label>
      <AudioSetup value={volume} onChange={handleVolume}  />

     
     
    
    </div>
  );
  }


  export default Music