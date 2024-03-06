"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { GetTodo } from "../api/GetTodo";
import { UseTodo } from "../context/useTodo";
import DeleteTodo from "../api/DeleteTodo";

type Props = {};
type todoList = {
  ID: number;
  Todo: string;
  Check: boolean;
  isDel: boolean;
};


export default function Todo({}: Props) {
  const {allTodo,setAllTodo,open,setOpen,editOpen,setEditOpen,editInput,setEditInput}=UseTodo()

  useEffect(()=>{
    todoList()
  },[])

  const todoList = async () => {
    try {
      const { todo } = await GetTodo();
      setAllTodo(todo);
    } catch (error) {
      throw error;
    }
  };
 
  const deleteHandleSubmit = async (e:React.MouseEvent<HTMLButtonElement>,ID:number)=>{
    const IsDel:boolean = true
    try {
      e.preventDefault()
      await DeleteTodo({ID,IsDel})
      await todoList()
    } catch (error) {
      console.log(error)
      throw error
    }
    

  }

  const editHandleClick = (e:React.MouseEvent<HTMLButtonElement>,id:number,todo:string)=>{
    e.preventDefault()
    setEditOpen(!editOpen)
    setEditInput({id,todo})

  }

  return (
    <div className="flex flex-col ">
      {allTodo &&
        allTodo.map((el) => (
          <div key={el.ID} className="flex justify-between py-2 border-b-2">
            <div className="flex items-center  pl-4">
              <div>{el.Todo}</div>
            </div>
            <div className="flex items-center gap-4 w-[150px]">
              <div>
              <button type="button" className="bg-blue-950 py-2 px-2 rounded-md font-bold text-white" onClick={(e)=>{
                editHandleClick(e,el.ID,el.Todo)
              }}>
                  Edit
                </button>
              </div>
              <div>
                <button type="button" className="bg-red-600 py-2 px-3 rounded-md font-bold text-white" onClick={(e)=>{
                  deleteHandleSubmit(e,el.ID)
                }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
