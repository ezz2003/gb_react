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
import "./App.css";
import Chat1 from "./chatMain";
import ProfilePage from "./profilePage";
import PageHome from "./pageHome";
import ChatsPage from "./chats"
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
  
  return (
    <div className="App">
      {/* <ChatMain></ChatMain> */}
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
