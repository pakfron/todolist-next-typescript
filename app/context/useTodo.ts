'use client'

import { useContext } from "react"
import { TodoContext } from "./TodoContext"


export const UseTodo = ()=>{
    return useContext(TodoContext)
}