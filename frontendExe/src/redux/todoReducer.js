import { Types } from './types'

const initialState = {
  todo: [],
}


export const todoReducer = (state = initialState, action) => {
  console.log('action', [action])

  switch(action.type) {
    case Types.addTodo:{
      return  {
        todo: [
          ...state.todo,
          action.payload
        ],    
      }
    }
    case Types.deleteTodo:{    
      return {todo: state.todo.filter(todo => todo.id !== action.payload)}
    }
    default: 
      return state   
  }
}