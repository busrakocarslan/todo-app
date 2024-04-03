import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FcFullTrash } from "react-icons/fc";
import "../index.css"



function TodoList({ plans }) {
  const [word,setword]=useState("")
  const handleLine=(id)=>{
    let newWord=word.toUpperCase();
    setword(newWord)
    console.log(newWord);
  }
  return (
    <div className="w-50 m-auto div">
      <ul className="w-100 m-auto list-unstyled">
        {plans.map((plan) => (
          <li onDoubleClick={()=>handleLine(id)} className="p-1 pe-4" key={plan.id}><span><GoArrowRight />{plan.title} </span><FcFullTrash type="button"/></li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
