import React from 'react'
import './buttons.css'

export default function SettinsButton(props) {

    return (
        <button className="bttn" onClick={props.onClick}>
          Setup
        </button>
    );
}
