import React, { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import style from "./todo.module.css";

const TodoList = () => {
  const {state,deleteTodo}=useContext(TodoContext);
  const [isCompleted,setIsCompleted]=useState(false)
  console.log(state);
  const handleDelete=(id)=>{
deleteTodo(id)
  }
const handleCheck=(e)=>{
setIsCompleted(e.target.checked)
}
  return (
    <div>TodoList
      {state.map((d)=>{
       return(<div key={d.id} className={style.input}>
         <input type="checkbox" checked={isCompleted} onChange={handleCheck} />
         <div className={isCompleted ? style.line:style.green} >{d.text}</div>
          <button onClick={()=>handleDelete(d.id)}>Delete</button>
       </div>
       ) 
      })}
    </div>
  )
}

export default TodoList