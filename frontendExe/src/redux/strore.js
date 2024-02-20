import {applyMiddleware, combineReducers, createStore} from "redux"
import { counterReducer} from "./countReducer"
import { todoReducer } from './todoReducer'
import { thunk } from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 



const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['count'] 
}



const rootReducer = combineReducers({
  count: counterReducer,
  todos: todoReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)