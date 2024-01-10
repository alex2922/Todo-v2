import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

function Pop({closePop }) {

    const [inputVal , setInputVal] = useState('');

    function clearInput {
        setInputVal('');
    }

 



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
            <input type="text" onChange={(e) =>  setInputVal(e.target.value)}  value={inputVal} />
            <button > Add Task</button>
        </div>


        <p>
            {inputVal}
        </p>

      </div>
    </div>
  );
}

export default Pop;
