import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { messageAdd } from "../actions/actionChat";

const newMessage ={
  author: 'You',
  text: 'Hello Again!'
}


const Chat = () => {
  
  const dispatch = useDispatch();
  const { chatId } = useParams();
  // console.log(chatId)
  const allChats = useSelector(state => state);
  const [currentChat, setCurrentChat] = useState(allChats.chats[chatId]);
  // console.log(allChats)

  // useEffect(() => {
    // console.log('useEffect');
      //  }, [currentChat]);
  
  const addRobotMessage = () => {
     allChats.chats[chatId].messages.push(newMessage)
}


  const addMessageHandler = () => {
    // console.log(allChats[chatId].messages, "111111")
    setCurrentChat( 
        allChats.chats[chatId].messages.push(newMessage)
    )
    dispatch(messageAdd(newMessage))
    // console.log(allChats[chatId].messages,'2222222')
}

    return (
            <div className="one-chat">
        <h1>{allChats.chats[chatId].dispatcher}</h1>
                    {
                    allChats.chats[chatId].messages.map((e, i) =>
                        <>
                        <h2 key={i} style={{ lineHeight: 0, marginBottom: '7px' }}>{e.author}</h2>
                            <h3>{e.text}</h3>
                        </>
                    )
        }
        <button onClick={addMessageHandler}>Add message</button>
            </div>
    )
};

export default Chat;