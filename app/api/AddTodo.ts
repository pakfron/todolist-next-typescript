import axios from "axios"

type AddTodo ={

    todo:string
}


export async function AddTodo(data:string) {
    let todo:AddTodo = {
        todo:data
    }
    try {
        const respone = await axios.post("http://localhost:8008/create",todo)

        console.log(respone)

    } catch (error) {
        throw error
    }

}