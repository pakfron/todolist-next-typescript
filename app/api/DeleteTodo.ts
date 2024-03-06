import { throws } from 'assert'
import axios from 'axios'
import React from 'react'

type Props = {ID:number,
IsDel:boolean
}

export default async function DeleteTodo({ID,IsDel}: Props) {
  try {
    
      const data =  await axios.patch('http://localhost:8008/delete',{id:ID,is_del:IsDel})
      console.log(data)
      
    } catch (error) {
    throw error
  }
}