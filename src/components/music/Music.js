import React, { useState }from 'react'
import './music.css'
import Switch from "react-switch";

import mainTheme from "./main.mp3";
import sound1 from "./Chord_3.mp3";
import Button from '../button/Button'


const Music = () => {
    const [checked, setChecked] = useState(false)
    const [volume, setVolume] = useState(0.4)

    function handleVolume(e) {
      if(checked){
        setVolume(e.target.value)
      }
    }


  return (
    <div>

      <label>
        <span>Switch with default style</span>
        <Switch onChange={() => setChecked(!checked)} checked={checked} />
      </label>
     
      <div  
          className='key' 
          onClick={() => {
          document.getElementById('sound1').volume = volume; 
          document.getElementById('sound1').play(); 
          document.getElementById('sound1').currentTime = 0;
          }}>
                        
          <span className='sound'>Hi-Hat</span>
     </div>
      <div className='sound_сontrol'>
      
          <label><i class="fas fa-volume-up" title="Sound volume"/>
            <input type="range" 
            min='0' 
            max='1' 
            value={volume} 
            onChange={handleVolume} 
            step='0.01' />
            <span class="sounds_value">{`${Math.round(volume * 100)}  %`}</span>
          </label>
          <audio id='sound1' src={sound1}></audio>
                  
      </div>
    </div>
  );
        }


  export default Music