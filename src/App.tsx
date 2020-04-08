import { calendar } from 'react-icons-kit/icomoon/calendar';
import { Toolbar } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { archive } from 'react-icons-kit/fa/archive';
import { list2 } from 'react-icons-kit/icomoon/list2';
import './App.scss';
import { useStyles } from './helpers/style';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const StoreIcon = (props: {}) => (
  <div>
    <div>
      <p style={{ marginRight: '20px' }}>Store</p>
    </div>
    <div className="icon">
      <Icon icon={archive} size={40} />
    </div>
  </div>
);

const ListIcon = () => (
  <div>
    <div>
      <p style={{ marginRight: '20px' }}>Shopping</p>
    </div>
    <div className="icon">
      <Icon icon={list2} size={40} />
    </div>
  </div>
);

const CalendarIcon = () => (
  <div>
    <div>
      <p style={{ marginRight: '20px' }}>Notify</p>
    </div>
    <div className="icon">
      <Icon icon={calendar} size={40} />
    </div>
  </div>
);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.banner}>
            <h1>Your Pantry Store</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper className={classes.content} elevation={10}>
            <AppBar position="static">
              <Toolbar style={{ height: '100px' }}>
                <StoreIcon />
                <ListIcon />
                <CalendarIcon />
              </Toolbar>
            </AppBar>

            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText className="" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar></Avatar>
                </ListItemAvatar>
                <ListItemText
                  /* className="header" */
                  primary="Vacation"
                  secondary="July 20, 2014"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
