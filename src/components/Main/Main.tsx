import Paper from '@material-ui/core/Paper';
import Modal from 'components/modals/productModal';
import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pantryReducer } from 'store/reducers/pantryReducer';
import { initState, GlobalContext } from 'store/store';
import { ToolbarApp } from 'components/ToolbarApp/ToolbarApp';
import Products from 'components/Products/Products';

export const Main = ({ classes }: any) => {
    const [globalState, dispatch] = useReducer(pantryReducer, initState);
    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            <Paper className={classes.content} elevation={10}>
                <ToolbarApp />
                <Switch>
                    <Route exact path="/">
                        <Products />
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
        </GlobalContext.Provider>
    );
};
