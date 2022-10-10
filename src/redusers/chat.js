import { ADD_MESSAGE } from "../actions/actionChat";


export const chatReduser = (state, action) => {
  if (action.type == ADD_MESSAGE) {
    console.log(state)
    return [state]
  }
} 
  
