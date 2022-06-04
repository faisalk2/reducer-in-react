import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
    const {query,setQuery,addTodo}=useContext(TodoContext);
    const handleClick=()=>{
        const newTodo={
            id:uuidv4(),
            text:query,
            isCompleted:false
        }
        addTodo(newTodo);
        setQuery("");
    }
  return (
    <div>Todo List
        <input type="text" placeholder='enter Todo...' value={query} onChange={(e)=>(setQuery(e.target.value))} />
        <button onClick={handleClick}>add</button>
    </div>
  )
}

export default Todo