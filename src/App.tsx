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

require('dotenv').config();

const App = () => {
    const classes = useStyles(theme);
    const [globalState, dispatch] = useReducer(pantryReducer, initState);
    const products = globalState.products.map((it) => {
        return <StoreListItem key={it.id} product={it} />;
    });

    return (
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
                                    <StoreIcon />
                                    <ListIcon />
                                    <CalendarIcon />
                                </Toolbar>
                            </AppBar>
                            <List>{products}</List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </GlobalContext.Provider>
    );
};
export default App;
