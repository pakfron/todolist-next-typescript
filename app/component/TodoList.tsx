import React from "react";
import Todo from "./Todo";

type Props = {};

export default function TodoList({}: Props) {
  return (
    <div className="w-[40%]">
      <div className="bg-gray-100 font-bold text-gray-600 flex w-full justify-between py-4 px-4 rounded-md">
        <div>Task</div>
        <div>Action</div>
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}
