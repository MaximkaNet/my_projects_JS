import React from "react";
import './Topbar.css'

const Topbar = (props) =>{
  return (
    <div className="Topbar">
        <div className="timer">
          {`Time played: ${props.time} second(s)`}
        </div>
        <div className="score">
          {`You score: ${props.score}`}
        </div>
      </div>
  )
}
export default Topbar;