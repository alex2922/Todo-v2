import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

function Pop({ closePop , onAddTask}) {
  const [inputVal, setInputVal] = useState('');
  const [date, setDate] = useState('');
  const [priority, setPriority] = useState('');
  const [desc, setDesc] = useState('');
  const [id, setId] = useState(1000);
 

  // this function will clear the input
  function clearInput() {
    setInputVal('');
    setDate('');
    setPriority('');
    setDesc('');
  }
  // this function will add the task to map data.
  function addTask(e) {
    e.preventDefault();

    const newTask = {
      title: inputVal,
      marked: false,
      priority: priority,
      date: date,
      desc: desc,
      id: (parseInt(id) + 1),
    };

    console.log(newTask);


    onAddTask(newTask);

    setId((id) => id + 1);

    // You can clear the input after adding the task if needed
    clearInput();
    closePop();
  }

  return (
    <div className="background">
      <div className="pop-box">
        <div className="head">
          <h1>Add Task</h1>
          <div className="line"></div>
          <div className="close" onClick={closePop}>
            <GrClose />
          </div>
        </div>

        <form className="main">
          <label>
            <p>Task Title</p>
          <input
            type="text"
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
          />
          </label>
          <label>
            <p>Due date</p>
          <input type="date"
           onChange={(e) => setDate(e.target.value)}
           value={date} />
          </label>


          <label> 
          <p>Priority</p>
          <select name="" id=""  onChange={(e) => setPriority(e.target.value)}
          value={priority}>
            <option value="1">Critical</option>
            <option value="2">Important</option>
            <option value="3">Low Priority</option>
            <option value="4">Skippable</option>
          </select>

         </label>
         <label> 
          <p>Task Description</p>
         <textarea cols="30" rows="10"  required
          onChange={(e) => setDesc(e.target.value)}
          value={desc}>

</textarea>
         </label>

       
          <button className="popbtn" onClick={addTask}>Add Task</button>
        </form>

       
      </div>
    </div>
  );
}

export default Pop;
