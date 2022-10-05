import * as React from 'react';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList() {

  const [menuList, setChatList] = useState([
    {
      name: 'chat1',
      id: '1'
    },
    {
      name: 'chat2',
      id: '2'
    },
    {
      name: 'chat3',
      id: '3'
    }
  ]);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <>
      {menuList.map((e, i) => 
        <ListItem key={i}><ListItemText primary={e.name} secondary={e.id} ></ListItemText></ListItem>
      )
  }
      </>
    </List>
  );
}