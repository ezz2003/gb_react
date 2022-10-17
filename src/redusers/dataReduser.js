import { GET_POSTS, GET_POSTS_LOAD, GET_POSTS_ERROR } from "../actions/actionData";
import { URL_PLACEHOLDER } from "./endpointsData";

const initialState = {
  posts: [],
  loading: false
};

export const dataReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null
      }
    case GET_POSTS_LOAD: {
      return{...state, loading:true}
    }
      
    case GET_POSTS_ERROR: {
      return{...state, error: action.payload, loading: false}
    }


    default:
      return state
  }
}


const getDataSuccess = (data) => ({
type: GET_POSTS,
payload: data,
});



export const getData = () => {

  return async (dispatch) => {

    dispatch({
     type: GET_POSTS_LOAD
    })

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch({
        type: GET_POSTS,
        payload: data
          })
    } catch (error) {
      dispatch({
        type: GET_POSTS_ERROR,
        payload: error.toString()
      })
    }
    
    
    
    
    
  }
}
  
  
