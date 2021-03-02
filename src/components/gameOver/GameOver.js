import React from 'react'

function GameOver(props) {
    return (
      <div className="game_over">
      
        <div>
            <h2>Congratulations!</h2>
            <h2>Winner is: {props.winner}</h2>
        </div>
       
        <button className="start_bttn" onClick={props.onClick}>
          Restart
        </button>
      </div>
    );
  }

  export default GameOver