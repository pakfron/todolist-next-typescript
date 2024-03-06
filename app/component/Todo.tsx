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

type AllTodo = {
  [key: string]: todoList;
};

export default function Todo({}: Props) {
  const {open}=UseTodo()
  const [allTodo, setTodo] = useState<todoList[]>([
    {
      ID: 0,
      Todo: "",
      Check: false,
      isDel: false,
    },
  ]);

console.log(open)
  useEffect(() => {
    if (open ==false){
      todoList();

    }
  }, [open]);

  const todoList = async () => {
    try {
      const { todo } = await GetTodo();
      setTodo(todo);
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

  return (
    <div className="flex flex-col">
      {allTodo &&
        allTodo.map((el) => (
          <div key={el.ID} className="flex justify-between py-2 border-b-2">
            <div className="flex items-center  pl-4">
              <div>{el.Todo}</div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <input type="checkbox" />
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
