"use client";
import React, { SetStateAction, useState } from "react";
import { GetTodo } from "../api/GetTodo";
import { AddTodo } from "../api/AddTodo";
import { UseTodo } from "../context/useTodo";
import EditTodo from "../api/EditTodo";

export default function EditModal() {
  const { editOpen, setEditOpen, editInput, setEditInput ,setAllTodo} =
    UseTodo();

  const inputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data: string = e.target.value;
    setEditInput({ id: editInput.id, todo: e.target.value });
  };

  const handleSubmitEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      await EditTodo(editInput);
      const { todo } = await GetTodo();
      setAllTodo(todo);
      setEditOpen(!editOpen);
    } catch (error) {
      throw error;
    } finally {
      setEditOpen(false);
      setEditInput({
        id: 0,
        todo: "",
      });
    }
  };

  return (
    <div className="w-[400px] h-full bg-white rounded-md flex-col ">
      <div className="py-4 pl-4 flex  items-center border-b-2 relative font-bold">
        <div>Edit Task</div>
        <div
          className="absolute right-1 top-1 w-[25px] h-[25px] flex justify-center items-center rounded-full text-white font-bold bg-gray-700 hover:cursor-pointer"
          onClick={() => {
            setEditInput({
              id: 0,
              todo: "",
            });
            setEditOpen(!editOpen);
          }}
        >
          X
        </div>
      </div>
      <div className="flex w-full py-4  items-center justify-between px-4 text-black">
        <div className="">
          <input
            className="p-2 outline outline-1 rounded-md"
            value={editInput.todo}
            onChange={(e) => {
              inputHandleChange(e);
            }}
            type="text"
          />
        </div>
        <div>
          <button
            className="bg-gray-700 p-2 text-white font-bold rounded-md"
            type="button"
            onClick={(e) => {
              handleSubmitEdit(e);
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
