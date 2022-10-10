import React, { useEffect, useRef, useState } from "react";
// import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
// import Chat1 from "./chatMain";
import ProfilePage from "./components/profilePage";
import PageHome from "./components/pageHome";
import ChatsPage from "./components/chats"
import NotFound from "./notFound";


function App() {

const [menuList, setMenuList] = useState([
  {
    name: 'HOME',
    id: '1',
    link: '/'
  },
  {
    name: 'chats',
    id: '2',
    link: 'chats'
  },
  {
    name: 'Profile',
    id: '3',
    link: 'profile'
  }
]);
  
  
  const checkOnProfile = useSelector(state => state);
  // console.log(checkOnProfile);
  
  return (
    <div className="App">
      {/* <ChatMain></ChatMain> */}
      {/* <h4>On page 'Profile' check - {checkOnProfile? 'YES': "NO"}</h4> */}
      <BrowserRouter>
        <div className="lists-main">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          
          {menuList.map((e, i) =>
            <Link to={e.link}>
      <ListItem key={i}><ListItemText primary={e.name} ></ListItemText></ListItem></Link>
          )}
          </List>
          </div>
        <Routes>
          <Route path="/" element={<PageHome />}></Route>
          <Route path="chats" element={<ChatsPage />}>
            <Route path=":chatId" element = {<ChatsPage/>}></Route>
          </Route>
          <Route path="profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}
export default App;
