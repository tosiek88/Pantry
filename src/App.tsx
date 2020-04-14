import { Toolbar, List } from '@material-ui/core/';
import { StoreIcon, ListIcon, CalendarIcon } from './components/Icons';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useReducer, useContext } from 'react';
import { StoreListItem } from 'components/StoreListItem/StoreListItem';
import 'App.scss';
import { useStyles, theme } from 'helpers/style';
import { GlobalContext } from 'store/store';
import { pantryReducer } from 'store/reducers/pantryReducer';
require('dotenv').config();

const App = () => {
  const classes = useStyles(theme);
  const ctx = useContext(GlobalContext);
  const [PantryState] = useReducer(pantryReducer, ctx);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.banner}>
            <h1>Your Pantry Store </h1>
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
            <List>
              <StoreListItem product={PantryState.products[0]} />
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
