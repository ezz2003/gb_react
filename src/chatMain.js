import React, { useEffect, useRef, useState } from "react";
// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FolderList from "./list";
import "./App.css";


function Chat1() {

  const [messageList, setMessageList] = useState([
    {
      text: 'text1',
      author: 'author1'
    },
     {
   text: 'text2',
   author: 'author2'
    },
      {
   text: 'text3',
   author: 'author3'
    }
  ])
  
  const [messageBody, setMessageBody] = useState({
    text: '',
    author: ''
  })

  const ROBOT_MESSAGE = 'Привет, человек! Я получил твоё сообщение'
  
  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: ROBOT_MESSAGE, 
author: 'robot' }])
      }, 1500)
    }
  }, [messageList])
  
  return (
    // <div className="App">
      <div className="wrap">
      {/* <FolderList></FolderList> */}
      <div className="wrap-input-message">
      {<Form data={messageBody} setData={setMessageBody} setMessageList=
{setMessageList}></Form>}
      <div className="MessageList">
        {
          
          messageList.map((e, i) => <Message text={e.text} author={e.author} 
key={i} />)
        }
      </div> 
        </div>
        </div>
    // </div>
  );
}
export default Chat1;

const Message = ({text, author}) => {
  return (
    <div>
      <h3>{text}  <span className={author==='robot' ? "forRobot" : "forOthers" }
> ({author})</span>  </h3>
    </div>
  );
};

const Form = ({ setMessageList }) => {
  const [data, setData] = useState('');

  const { text, author } = data;
  
  const ref = useRef(null);
  useEffect(() => {
    
    // console.log(ref.current);
    ref.current.focus();
    if (!data) {
      ref.current.focus();
    } else if (!data.text) {
      ref.current.focus();
    }
  },[data]);

  const submitData = (x) => {
    if (x.text.length > 0) {
      setMessageList((prevstate) => [...prevstate, { ...x }]);
      setData({text: "", author:""})
    }
  }

  return (
    <div className="input-form">

      <TextField autoFocus ref={ref} id="outlined-size-small" size="small" 
label="Message" variant="outlined" margin='normal' value={text} onChange=
{(e) => setData(prevstate => ({ ...prevstate, text: e.target.value }))}/>
      
      <TextField  id="outlined-basic" size="small" label="Author" 
variant="outlined" margin='normal' value=
      {author} onChange={(e) => setData(prevstate => ({...prevstate, author: e.
target.value }))}/>

      <Button variant="contained" type="submit" color="secondary" onClick={()=>{
        submitData(data);
      }}>SEND</Button>
    </div>
  )
};
