import {combineReducers, createStore} from "redux"
import { counterReducer} from "./countReducer"
import { todoReducer } from './todoReducer'

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todoReducer
})

export const store = createStore(rootReducer)