import React from "react";
import './TableWins.css';

const TableWins = (props) => {
  let i = 0;
  return (
    <div className="winTable">
      <div className="tableContainer">
        <div className="title">{props.nameTable}</div>
        <div className="bodyTable">
          {
            props.items.map(element => (
              <div className="itemTable" key={i++}>
                <div className="itemTime">{element.time}</div>
                <div className="itemScore">{element.score}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TableWins;