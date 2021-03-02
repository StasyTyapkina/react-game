import React from "react";

export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <button 
        className = 'sound_bttn' 
        onClick={() => handleClick()}>
            <i className="fas fa-play-circle"></i>
    </button>
  );
}
