import axios from 'axios';
import { AppBar, Grid, IconButton, List, ListItem, Toolbar } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);  
      setActivities(response.data);
    })
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
    </AppBar>
      </Grid>
      <Grid item md={6} sm={8} xs={12}>
        <List>
          {activities.map((activity: any) => (
            <ListItem key={activity.id}>
              <Grid container direction='row'>
                <Grid item xl={3} lg={3} md={4} sm={5} xs={12} >
                 {activity.title} 
                </Grid>
                <Grid item xl={9} lg={9} md={8} sm={7} xs={12} >
                 {activity.date}
                </Grid>  
              </Grid>          
            </ListItem>
          ))}   
        </List> 
      </Grid>
    </Grid>
  );
}

export default App;
