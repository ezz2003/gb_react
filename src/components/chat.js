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
  const allChats = useSelector(state => state);
  const [currentChat, setCurrentChat] = useState(allChats[chatId]);

  // useEffect(() => {
    // console.log('useEffect');
      //  }, [currentChat]);

  const addMessageHandler = () => {
    console.log(allChats[chatId].messages, "111111")
    setCurrentChat( 
        allChats[chatId].messages.push(newMessage)
    )
    console.log(allChats[chatId].messages,'2222222')
}

    return (
            <div className="one-chat">
        <h1>{allChats[chatId].dispatcher}</h1>
                    {
                    allChats[chatId].messages.map((e, i) =>
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