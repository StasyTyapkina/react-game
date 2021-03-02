import React from "react";

export default function Pause(props) {
  const { handleClick } = props;
  
  return (
    <button 
        className = 'sound_bttn' 
        onClick={() => handleClick()}>
            <i className="fas fa-pause-circle"></i>
    </button>
  );
}
