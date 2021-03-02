import React from 'react'
import './gameOver.css'
import soundGameOver from '../music/success.mp3';

function GameOver(props) {

  const mainAudio = new Audio(soundGameOver);
  mainAudio.play()

    return (
      <div className="game_over">
        <div>
            <h3>Congratulations!</h3>
            <p>Winner is: {props.winner}</p>
        </div>
       
        <button className="restart_bttn" onClick={props.onClick}>
          Restart
        </button>
      </div>
    );
  }

  export default GameOver