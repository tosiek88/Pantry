import { Toolbar, List } from '@material-ui/core/';
import { StoreIcon, ListIcon, CalendarIcon } from './components/Icons';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import { StoreListItem } from './components/StoreListItem/StoreListItem';
import './App.scss';
import { useStyles } from './helpers/style';
import { createContext } from 'react';
require('dotenv').config();

interface IStore {
  counter: number;
}

interface IitemContext {
  store: IStore;
  setStore: (prev: IStore, next: IStore) => IStore;
}
const store: IStore = { counter: 0 };
const context: IitemContext = {
  store: store,
  setStore: (prev, next) => next,
};

export const ItemsContext = createContext(context);

const App = () => {
  const classes = useStyles();
  const setStore = (prev: IStore, next: IStore): IStore => {
    next.counter = prev.counter + 1;
    return next;
  };

  const [state, setState] = useState<IitemContext>({ store: { counter: 0 }, setStore: setStore });

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
            <List>
              <ItemsContext.Provider value={state}>
                <StoreListItem categoryLabel="vege" />
                <StoreListItem categoryLabel="meat" />
                <StoreListItem categoryLabel="dairy" />
              </ItemsContext.Provider>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
