import React from 'react'
import './buttons.css'

export default function StartButton(props) {

    return (
        <button className="bttn" onClick={props.onClick}>
          New Game
        </button>
    );
}
