import axios from "axios";

type todoList = {
  ID: number;
  Todo: string;
  Check: boolean;
  isDel: boolean;
};

type allList = {
    [key:string]:todoList
}

type GetTodoRespone = {
  data: allList[];
  status: number;
};

export async function GetTodo() {
  try {
    const { data, status } = await axios.get(
      "http://localhost:8008/todolist"
    );
   
        
        console.log("status Respone : ",status)
        return data

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message : ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error : ", error);
      return "An unexpected error occurred";
    }
  }
}
