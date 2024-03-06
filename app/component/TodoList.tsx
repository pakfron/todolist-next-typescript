import React from "react";
import Todo from "./Todo";

type Props = {};

export default function TodoList({}: Props) {
  return (
    <div className="w-[40%] min-w-[350px] ">
      <div className="bg-gray-100 font-bold  text-gray-600 flex w-full justify-between py-4 pl-4 rounded-md">
        <div>Task</div>
        <div className="w-[150px] flex items-center justify-center">Action</div>
      </div>
      <div className="min-w-[350px]">
        <Todo />
      </div>
    </div>
  );
}
