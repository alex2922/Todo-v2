import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";

function ListItem({ name, markedstate }) {
  const [marked, setmarked] = useState(markedstate);

  return (
    <div className={marked ? "listitem checked " : "listitem "}>
      <div className="title">
        <p>{name} </p>
      </div>
      <div className="date">
        
        <p>
          Due Date - <span>{marked}</span>
        </p>

      </div>
      <div className="priority">
        <span className="c">Critical</span>
        <span className="i">Important</span>
        <span className="l">Low Priority</span>
        <span className="s">Skippable</span>
      </div>





      <div className="actions">
        <span
          className={marked ? " " : " activem "}
          onClick={() => setmarked(!marked)}
        >
          
          <FaCheck />
        </span>
        <span>
          
          <MdOutlineModeEdit />
        </span>
        <span>
          
          <MdDeleteOutline />
        </span>



      </div>
    </div>
  );
}

export default ListItem;
