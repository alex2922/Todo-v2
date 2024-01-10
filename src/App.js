import "./App.scss";
import ListItem from "./ListItem";
import { FaPlus } from "react-icons/fa";
import Pop from "./Pop";
import { useState } from "react";

function App() {
  const [showPop, setShowPop] = useState(false);

  const [inputVal , setInputVal] = useState('');


  function closePop() {
    setShowPop(false);
  }

  function getVal(e) {
    setInputVal(e.target.value);
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

          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
      {
     showPop 
      && 
      <Pop closePop={closePop} />}
    </>
  );
}

export default App;
