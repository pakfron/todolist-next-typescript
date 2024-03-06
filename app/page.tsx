import ButtonAddTodo from "./component/ButtonAddTodo";
import Modal from "./component/Modal";
import Todo from "./component/Todo";
import TodoList from "./component/TodoList";

export default function Home() {
  return (
    <div className="relative">

    <div className="w-[100vw] h-[100vh] flex flex-col items-center gap-4">

      <div className="w-full "><ButtonAddTodo/></div>
      <div className=" flex justify-center w-full">
        <TodoList />
      </div>
    </div>
    </div>
  );
}
