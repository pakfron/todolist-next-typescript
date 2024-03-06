'use client'

import React, { createContext, useContext, useState } from "react";


type ContainerProps = {
    children :React.ReactNode
}


type TodoContextType = {
    todo :string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    open:boolean
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const Todo = {
    todo:'',
    setTodo:()=>"",
    open:false,
    setOpen:()=>false
}

export const TodoContext = createContext<TodoContextType>(Todo);

export const TodoContextProvider = (props:ContainerProps)=>{

    const[todo,setTodo]=useState("")
    const [open,setOpen]=useState(false)
    return (
        <TodoContext.Provider value={{todo,setTodo,open,setOpen}}>
            {props.children}
        </TodoContext.Provider>
        
       
    )
}




