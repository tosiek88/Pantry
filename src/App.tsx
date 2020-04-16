import { List, Toolbar } from '@material-ui/core/';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import 'App.scss';
import { StoreListItem } from 'components/StoreListItem/StoreListItem';
import { theme, useStyles } from 'helpers/style';
import React, { useReducer } from 'react';
import { pantryReducer } from 'store/reducers/pantryReducer';
import { initState, GlobalContext } from 'store/store';
import { CalendarIcon, ListIcon, StoreIcon } from './components/Icons';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Modal from 'components/modals/productModal';

require('dotenv').config();

const App = () => {
    const classes = useStyles(theme);
    const [globalState, dispatch] = useReducer(pantryReducer, initState);
    const products = globalState.products.map((it) => {
        return (
            <Link key={it.id} to={`/store/modal/${it.id}`}>
                <StoreListItem key={it.id} product={it} />
            </Link>
        );
    });

    return (
        <Router>
            <GlobalContext.Provider value={{ globalState, dispatch }}>
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
                                        <Link to="/store" className={'link'}>
                                            <StoreIcon />
                                        </Link>
                                        <Link to="/shopping" className={'link'}>
                                            <ListIcon />
                                        </Link>
                                        <Link to="/notify" className={'link'}>
                                            <CalendarIcon />
                                        </Link>
                                    </Toolbar>
                                </AppBar>
                                <Switch>
                                    <Route path="/store">
                                        <List>{products}</List>
                                    </Route>

                                    <Route path="/shopping">
                                        <p>Shopping</p>
                                    </Route>

                                    <Route path="/notify">
                                        <p>Notify</p>
                                    </Route>
                                </Switch>
                                <Route exact path="/store/modal/:id">
                                    <Modal />
                                </Route>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </GlobalContext.Provider>
        </Router>
    );
};
export default App;
