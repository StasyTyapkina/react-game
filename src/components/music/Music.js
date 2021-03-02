import React, {useState} from 'react'
import './music.css'
import Play from "./Play";
import Pause from "./Pause";

import mainTheme from "./main.mp3";


function Music() {

    const mainAudio = new Audio(mainTheme);

    const playAudio = audioFile => {
        audioFile.play();
    }

    const pauseAudio = audioFile => {
        audioFile.pause();
    }

    const [play, setPlay] = useState(false)
/*
    return (
        <div >
          <audio id="audio">
            <source src="./main.mp3" />
          </audio>
          
          <div className="controls">
            {play ? 
              <Pause handleClick={() => {
                  setPlay(false)
                  pauseAudio(mainAudio)
                }} /> :
              <Play handleClick={() => {
                  setPlay(true)
                  playAudio(mainAudio)
                  }
                } />
            }
           
          </div>
        </div>
      );

    return (
      <div>
        <button 
            className = 'sound_bttn' 
            title = 'Turn on sounds and music'
            onClick={() =>{
                playAudio(mainAudio)
                toggleSound()
            } }
            
            >
                <i class = 'fas fa-volume-off'/>
        </button>
        <div className="sound_сontrol">                     
            <input 
                title="Sound volume" 
                type="range" 
                min="0" 
                max="1" 
                step="0.05" 
                value="0.4" 
                className="sound_control_slider"/>
            <span className="sounds_value">40%</span>
        </div>
      </div>
    );*/
  }

  export default Music