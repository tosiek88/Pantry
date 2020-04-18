import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Modal from 'components/modals/productModal';
import { StoreListItem } from 'components/StoreListItem/StoreListItem';
import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { pantryReducer } from 'store/reducers/pantryReducer';
import { initState, GlobalContext } from 'store/store';
import { ToolbarApp } from 'components/ToolbarApp/ToolbarApp';

export const Main = ({ classes }: any) => {
    const [globalState, dispatch] = useReducer(pantryReducer, initState);
    console.log(classes);
    const products = globalState.products.map((it) => {
        return <StoreListItem key={it.id} product={it} />;
    });
    return (
        <GlobalContext.Provider value={{ globalState, dispatch }}>
            <Paper className={classes.content} elevation={10}>
                <ToolbarApp />
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
        </GlobalContext.Provider>
    );
};
