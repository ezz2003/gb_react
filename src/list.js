import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        
        <ListItemText primary="ch-1" secondary="3 members" />
        
      </ListItem>
      <ListItem>
        
        <ListItemText primary="ch-2" secondary="45 members" />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="ch-3" secondary="22 members" />
      </ListItem>
    </List>
  );
}