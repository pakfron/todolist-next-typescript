"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { UseTodo } from "../context/useTodo";
import EditModal from "./EditModal";

type Props = {};

export default function ButtonAddTodo({}: Props) {
  const { open, setOpen, editOpen } = UseTodo();

  return (
    <>
      {editOpen ? (
        <div className="absolute bg-black bg-opacity-40 w-full h-full  flex justify-center items-center">
          <div>{editOpen ? <EditModal/> : null}</div>
        </div>
      ) : null}
      {open ? (
        <div className="absolute bg-black bg-opacity-40 w-full h-full  flex justify-center items-center">
          <div>{open ? <Modal open={open} setOpen={setOpen} /> : null}</div>
        </div>
      ) : null}

      <div className="flex w-full justify-center pt-4">
        <button
          className="w-full min-w-[350px] max-w-[40%] bg-blue-600 text-white font-bold p-4 rounded-md"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          Add New Task+
        </button>
      </div>
    </>
  );
}
