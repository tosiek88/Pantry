import { Toolbar } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import { CalendarIcon, ListIcon, StoreIcon } from 'components/Icons';
import React from 'react';
import { Link } from 'react-router-dom';

export const ToolbarApp = () => {
    return (
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
    );
};
