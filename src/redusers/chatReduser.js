// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

import { ADD_MESSAGE } from "../actions/actionChat";

// const dispatch = useDispatch();
const initialState = []



export const chatReduser = (state = initialState, action) => {
  if (action.type == ADD_MESSAGE) {
    console.log('chatReduser', state, action, action.payload)
    return [...state, action.payload]
  }
  return state
} 
  
