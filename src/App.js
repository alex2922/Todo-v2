import "./App.scss";
import ListItem from "./ListItem";
import { FaPlus } from "react-icons/fa";
import Pop from "./Pop";
import { useState } from "react";
import data from './Data';

function App() {
  const [showPop, setShowPop] = useState(false);


  const [tasks, setTasks] = useState([]);


  const handleAddTask = (newTask) => {

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  function closePop(){
    setShowPop(false)
  }

 

  return (
    <>
      <div className="App  todo-body">
        <div className="todo-box">
          <div className="head">
            <h1>Todo</h1>
            <div className="line"></div>
            <div className="add"  onClick={() => setShowPop(true)}>
              <FaPlus />
            </div>
          </div>

          {tasks.map((task) => (
          <ListItem name={task.title} marked={task.marked}
          priority={task.priority} date={task.date} desc={task.desc}
          />
        ))}
        
        
        </div>
      </div>
      {
     showPop 
      && 
      <Pop closePop={closePop} onAddTask={handleAddTask} />}
    </>
  );
}

export default App;
