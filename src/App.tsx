import Grid from '@material-ui/core/Grid';
import 'App.scss';
import { Main } from 'components/Main/Main';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme, useStyles } from 'helpers/style';

require('dotenv').config();

const App = () => {
    const classes = useStyles(theme);
    return (
        <Router>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.banner}>
                            <h1>Your Pantry Store </h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Main classes={classes} />
                    </Grid>
                </Grid>
            </div>
        </Router>
    );
};
export default App;
