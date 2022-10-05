import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate, Routes, useParams } from "react-router-dom";
import App from "./App";
import PageHome from "./pageHome";
import Chat from "./chat";

const chatsValue = [
  {
    dispatcher: 'Mary',
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
      }

    ]
  },
  {
    dispatcher: 'Semen',
    messages: [
      {
  author: 'You',
  text: 'The weather is great isn t it?'
},
{
  author: 'Semen',
  text: 'So where are you going now?'
},
    ]
  }
]

const ChatsPage = () => {

  
  // 
  const [chats, setChats] = useState([]);
  const { chatId } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
    setTimeout(() => {
      setChats(chatsValue);
    }, 1000)
  },[])
  // console.log(chatId);


  return (
    <div className="chat-list">
      {/* {console.log(chatId)} */}
      <>
  {chats.map((e, id) =>
    <div key={id}>
      <Link to={`${id}`}>{e.dispatcher}</Link>
    </div>
  )}
  </>
      {/* <ChatList chats={chats} chatId={chatId } /> */}
      {/* <h1>{chatId}</h1> */}
      {chatId && chats[chatId] ? <Chat chat={chats[chatId]} /> : <h2>select chat</h2>}
      
  </div>
)

}


export default ChatsPage



const Test=({x,y}) => {
    // console.log(x)
    // console.log(y[x])
  
}