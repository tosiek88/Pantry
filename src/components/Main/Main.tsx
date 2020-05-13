import Paper from '@material-ui/core/Paper';
import Modal from 'components/modals/productModal';
import NewProductModal from 'components/modals/NewProductModal';
import { ToolbarApp } from 'components/ToolbarApp/ToolbarApp';
import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pantryReducer } from 'store/reducers/pantryReducer';
import { GlobalContext, initState } from 'store/store';
import ListProducts from 'components/ListProducts/ListProducts';

export const Main = ({ classes }: any) => {
    const [globalState, dispatch] = useReducer(pantryReducer, initState);
    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            <Paper className={classes.content} elevation={10}>
                <ToolbarApp />
                <Switch>
                    <Route exact path="/">
                        <ListProducts />
                    </Route>
                    <Route path="/shopping">
                        <p>Shopping</p>
                    </Route>
                    <Route path="/notify">
                        <p>Notify</p>
                    </Route>
                </Switch>

                <Route exact path="/store/new-product">
                    <NewProductModal />
                </Route>

                <Route exact path="/store/product/:id">
                    <Modal />
                </Route>
            </Paper>
        </GlobalContext.Provider>
    );
};
