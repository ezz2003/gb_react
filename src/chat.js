import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const Chat = ({chat}) => {
    return (
            <div className="one-chat">
                <h1>{chat.dispatcher}</h1>
                {
                    chat.messages.map((e, i) =>
                        <>
                        <h2 key={i} style={{ lineHeight: 0, marginBottom: '7px' }}>{e.author}</h2>
                            <h3>{e.text}</h3>
                        </>
                    )
                }
            </div>

    )
};

export default Chat;