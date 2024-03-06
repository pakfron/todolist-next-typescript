import axios from 'axios'
import React from 'react'

type Props = {
    id:number,
    todo:string
}
type Respone = {
    status:number
}

export default async function EditTodo({id,todo}: Props) {
  try {
    const status = await axios.patch<Respone>('http://localhost:8008/edit',{id,todo})
    return status
  } catch (error) {
    throw error
  }
}