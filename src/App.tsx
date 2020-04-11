import { Toolbar, List } from '@material-ui/core/';
import { StoreIcon, ListIcon, CalendarIcon } from './components/Icons';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useReducer, useContext } from 'react';
import { StoreListItem } from './components/StoreListItem/StoreListItem';
import './App.scss';
import { useStyles, theme } from './helpers/style';
import { GlobalContext } from './index';
import { ICounter } from './index';

require('dotenv').config();

interface IAction<T> {
  type: string;
  payload: T;
}

const reducer = (state: ICounter, action: IAction<ICounter>): ICounter => {
  let currentState = state;
  switch (action.type) {
    case 'INC':
      currentState = { ...state, counter: state.counter + 1 };
      break;
    case 'DEC':
      currentState = { ...state, counter: state.counter - 1 };
      break;
  }
  window.localStorage.clear();
  window.localStorage.setItem('state', JSON.stringify(currentState));
  return currentState;
};

const App = () => {
  const classes = useStyles(theme);
  const ctx = useContext(GlobalContext);
  const [counterState, counterDispatch] = useReducer(reducer, ctx);

  const onClickPlus = () => {
    counterDispatch({ type: 'INC', payload: { counter: 1 } });
  };
  const onClickMinus = () => {
    counterDispatch({ type: 'DEC', payload: { counter: 1 } });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.banner}>
            <h1 onClick={onClickPlus}> + </h1>
            <h1 onClick={onClickMinus}> - </h1>
            <h1>Your Pantry Store {counterState.counter}</h1>
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
              <StoreListItem categoryLabel="vege" />
              <StoreListItem categoryLabel="meat" />
              <StoreListItem categoryLabel="dairy" />
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
