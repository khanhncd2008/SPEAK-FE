import { Types } from './types'

const initialState = {
  count: 2
}


export const counterReducer = (state = initialState, action) => {
  console.log('action', action)

  switch(action.type) {
    case Types.increaseCount:{
      console.log('increaseCount', state)
      return {     
        count: state.count += action.payload
      }
    }
    case Types.decreaseCount:{
      console.log('decreaseCount', state)
      return {      
        count: state.count -= action.payload
      }
    }
    default: 
      return state   
  }
}