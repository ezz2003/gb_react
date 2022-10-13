import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionRobot, actionRobotDel } from "../actions/actionRobot";
import "../App.css";

const RobotChat = () => {
  const styleButtons = {
    marginTop: "10px",
    display: "flex",
    width: "85px",
    justifyContent: "space-between"

  }
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  // const { rId } = useParams();
  const messageRobot = useSelector(state => state.robotChat);
  
  // console.log(messageRobot,'messageRobot')

  const handleAdd = () => {
    // console.log(text)
    dispatch(actionRobot(text))
  }

  const handleDel = () => {
    dispatch(actionRobotDel())
  }

  return (
    <div className="chat-list">
      <input value={text} onChange={(e) => setText(e.target.value)} autoFocus></input>
      <div style={styleButtons}>
          <button onClick={handleAdd}>SEND</button>
          <button onClick={handleDel}>DEL</button>
      </div>
      
      
      {messageRobot.map((message, i) => <h3 key = {i}>{message}</h3>)}
    </div>
  )
}

export default RobotChat