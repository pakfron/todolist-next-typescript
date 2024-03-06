'use client'
import React, { SetStateAction, useState } from "react";
import { GetTodo } from "../api/GetTodo";
import { AddTodo } from "../api/AddTodo";
import { UseTodo } from "../context/useTodo";

type Props = {
open:boolean;
setOpen:React.Dispatch<SetStateAction<boolean>>

};

export default  function Modal({open,setOpen}: Props) {

  const {input,setInput,setAllTodo}=UseTodo()

 
  const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const data:string = e.target.value
    setInput(data)
    console.log(input)
  }
const addTodoSubmit = async (e:React.SyntheticEvent)=>{
  try {
    e.preventDefault()
  await AddTodo(input)
  const {todo} = await GetTodo()
  setAllTodo(todo)
    setOpen(!open)
    setInput("")
  } catch (error) {
    throw error
  }

}


  return (
    <div className="w-[400px] h-full bg-white rounded-md flex-col ">
      <div className="py-4 pl-4 flex  items-center border-b-2 relative font-bold">
        <div>Add new task</div>
        <div className="absolute right-1 top-1 w-[25px] h-[25px] flex justify-center items-center rounded-full text-white font-bold bg-gray-700 hover:cursor-pointer" onClick={()=>{
          setOpen(!open)
        }}>X
        </div>
      </div>
      <div className="flex w-full py-4  items-center justify-between px-4 text-black">
        <div className="">
            <input className="p-2 outline outline-1 rounded-md" placeholder="New Task" value={input} onChange={(e)=>{inputHandleChange(e)}} type="text"/>
        </div>
        <div>
            <button className="bg-gray-700 p-2 text-white font-bold rounded-md" type="button" onClick={(e)=>{
              addTodoSubmit(e)
            }}>submit</button>
        </div>
      </div>
    </div>
  );
}
