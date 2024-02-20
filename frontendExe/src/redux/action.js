import axios from 'axios'
import {Types} from "./types"

export const increaseCount = (data) => {
  console.log(data)
  return {
    type: Types.increaseCount,
    payload: data
  }
}

export const decreaseCount = (data) => {
  console.log(data)

  return {
    type: Types.decreaseCount,
    payload: data
  }
}

export const addTodo = (data) => {
  console.log('addTodo', data)

  return {
    type: Types.addTodo,
    payload: data
  }
}

//Trả về function
export const addToDoAsync = () => async(dispatch) => {
  const res =  await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  dispatch(addTodo({
    name: res.data.title,
    id: Math.random(),
}))
}

export const deleteTodo = (data) => {
  console.log('deleteTodo', data)

  return {
    type: Types.deleteTodo,
    payload: data
  }
}