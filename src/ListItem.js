import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";

function ListItem() {
  return (
    <div className='listitem checked'>

        <p>go shopping </p>
        <div className="actions">

            <span> <FaCheck/> </span>
            <span> <MdOutlineModeEdit/> </span>
            <span> <MdDeleteOutline/> </span>

        </div>

      
    </div>
  )
}

export default ListItem
