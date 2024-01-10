import React from "react";
import { GrClose } from "react-icons/gr";

function Pop({closePop}) {
  return (
    <div className="background">
      <div className="pop-box">
      <div className="head">
            <h1>Add Task</h1>
            <div className="line"></div>
            <div className="close"  onClick={closePop}>
            <GrClose />
            </div>
          </div>
       
          
       
        
        <div className="main">
            <input type="text" />
            <button  > Add Task</button>
        </div>

      </div>
    </div>
  );
}

export default Pop;
