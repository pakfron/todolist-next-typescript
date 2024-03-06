'use client'

import React, { createContext, useContext, useState } from "react";


type ContainerProps = {
    children :React.ReactNode
}

type Edit = {
    id:number;
    todo:string
}
type todoList = {
    ID: number;
    Todo: string;
    Check: boolean;
    isDel: boolean;
  };
  
type TodoContextType = {
    todo :string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
    input:string
    setInput:React.Dispatch<React.SetStateAction<string>>
    editOpen:boolean
    setEditOpen:React.Dispatch<React.SetStateAction<boolean>>
    editInput:Edit
    setEditInput:React.Dispatch<React.SetStateAction<Edit>>
    allTodo:todoList[]
    setAllTodo:React.Dispatch<React.SetStateAction<todoList[]>>
}
const Todo = {
    todo:'',
    setTodo:()=>"",
    open:false,
    setOpen:()=>false,
    input:'',
    setInput:()=>"",
    editOpen:false,
    setEditOpen:()=>false,
    editInput:{id:0,todo:""},
    setEditInput:()=>( {id:0,todo:""}),
    allTodo:[
        {
          ID: 0,
          Todo: "",
          Check: false,
          isDel: false,
        },
      ],
    setAllTodo:()=>([
        {
          ID: 0,
          Todo: "",
          Check: false,
          isDel: false,
        },
      ])
}

export const TodoContext = createContext<TodoContextType>(Todo);

export const TodoContextProvider = (props:ContainerProps)=>{
    const[allTodo,setAllTodo]=useState([
        {
          ID: 0,
          Todo: "",
          Check: false,
          isDel: false,
        },
      ])
    const[todo,setTodo]=useState("")
    const [open,setOpen]=useState(false)
    const [editOpen,setEditOpen]=useState(false)
    const [input,setInput]=useState("")
    const [editInput,setEditInput]=useState({
        id:0,todo:""
    })
    return (
        <TodoContext.Provider value={{allTodo,setAllTodo,editInput,setEditInput,editOpen,setEditOpen,todo,setTodo,open,setOpen,input,setInput}}>
            {props.children}
        </TodoContext.Provider>
        
       
    )
}




