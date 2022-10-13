import React, { useState, useEffect } from "react";
import { Link, useNavigate, Routes, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Chat from "./chat";
import { actionChatAdd, actionChatRem } from '../actions/actionChats';
import {chatsReduser} from "../redusers/chatsReduser";

// console.log(actionChatAdd)
// console.log(chatReduser)
const ChatsPage = () => {
 
  const dispatch = useDispatch();
  // const [chats, setChats] = useState([]);
  const { chatId } = useParams();
  const chats = useSelector(state => state);
  // console.log(chats.chats[chatId]);
 

  const newChat = {
    id: 'chat77',
    dispatcher: 'Vasya',
    messages: [
      {
        author: 'You',
        text: 'Hello!'
      },
      {
        author: 'Mary',
        text: 'Oh, hi.'
      },
      {
        author: 'You',
        text: 'How are you doing?'
      },
      {
        author: 'Mary',
        text: 'I m doing alright. How about you?'
      }]
  };

  const addChatHandler = () => {
    // console.log(newChat)
    // console.log(actionChatAdd)
    dispatch(actionChatAdd(newChat));
    // dispatch({ type: 'ADD_CHAT', payload: newChat})
  }

  const removeChatHandler = () => {
    dispatch(actionChatRem())
    // dispatch({type: 'REMOVE_CHAT'})
  }


 return (
    <div className="chat-list">
      {/* {console.log(chats)} */}
      <>
        {
          chats.chats.map((e, id) =>
    <div key={id}>
      <Link to={`${id}`}>{e.dispatcher}</Link>
    </div>
        )
        }
        
  </>
      {chatId && chats.chats[chatId] ? <Chat chat={chats.chats[chatId]} /> : <h2>select chat</h2>}
      <button onClick={addChatHandler}>Add chat</button>
      <button onClick={removeChatHandler}>Remove chat</button>
      
  </div>
)

}

export default ChatsPage


const Test=({x,y}) => {
    // console.log(x)
    // console.log(y[x])
  
}