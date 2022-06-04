import { useReducer } from "react";
import { useState } from "react";
import {createContext} from "react";

const todoReducer=(state,{type,payLoad})=>{
switch(type){
    case "ADD_TODO":{
        return [...state,payLoad];
    }
    case "DELETE_TODO":{
        return state.filter((a)=>{
            return a.id !==payLoad;
        })
    }
}
}


export const TodoContext=createContext();


export const TodoProvider=({children})=>{
    const initial=[];
const [query,setQuery]=useState("");
const [state,dispatch]=useReducer(todoReducer,initial)

const addTodo=(newTodo)=>{
dispatch({
type:"ADD_TODO",
payLoad:newTodo
})
}

const deleteTodo=(id)=>{
dispatch({
    type:"DELETE_TODO",
    payLoad:id
})
}

const toggleTodo=()=>{
   
        dispatch(
            {
                type:"TOGGLE_TODO",
                payLoad:true
            }
        )
}

   return (<TodoContext.Provider value={{query,state,setQuery,toggleTodo,deleteTodo,addTodo}}>{children}</TodoContext.Provider>)
}