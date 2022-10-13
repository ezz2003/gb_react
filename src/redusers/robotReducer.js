
const initialState = ['Hey, Robot?'];

export const robotReducer = (state = initialState, action) => {
  // console.log(action,state);
  switch (action.type) {
    case 'add':
      // console.log('reduser', action)
      return [...state, action.payload]
    case "delete": {
      return [...state.filter((e,i)=> i < state.length -1)]
     }  
    default:
      return state
  }
}