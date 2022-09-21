import React, { useEffect, useState } from "react";
import "./App.css";


function App() {

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

  console.log('render parent', messageList)

  const ROBOT_MESSAGE = 'Привет, человек! Я получил твоё сообщение'
  
  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
      setTimeout(() => {
        setMessageList(pervstate => [...pervstate, { text: ROBOT_MESSAGE, author: 'robot' }])
      }, 1500)
    }
  }, [messageList])
  

  return (
    <div className="App">
      {<Form data={messageBody} setData={setMessageBody} setMessageList={setMessageList}></Form>}
      <div className="MessageList">
        {
          
          messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)
      }
      </div>
    </div>
  );
}
export default App;

const Message = ({text, author}) => {
  console.log(text, author, 'Message');
  return (
    <div>
      <h1>{text}  <span className={author==='robot' ? "forRobot" : "forOthers" }> ({author})</span>  </h1>
    </div>
  );
};

const Form = ({ setMessageList }) => {

  const [data, setData] = useState('');
  let {text, author} = data;

  const submitData = (x) => {
    console.log(x.text)
    if (x.text.length > 0) {
      setMessageList((prevstate)=>[...prevstate, {...x}])
    }
  }

  console.log('child render');
  console.log(data);
  return (
    <div className="input-form">
      <input type='text' placeholder="Text" value={text} onChange={(e) => setData(prevstate => ({ ...prevstate, text: e.target.value }))}/>
      <input type='text' placeholder="Author" value={author} onChange={(e) => setData(prevstate => ({ ...prevstate, author: e.target.value }))} />
      <button className="submit-buton" type="submit" onClick={() => {
        submitData(data)
      }}>send</button>
    </div>
  )
};
