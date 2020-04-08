import { Toolbar } from '@material-ui/core/';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { archive } from 'react-icons-kit/fa/archive';
import './App.scss';
import { useStyles } from './helpers/style';

const StoreIcon = () => <Icon icon={archive} size={40} />;

const App = () => {
  const classes = useStyles();
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
              <Toolbar variant="dense">
                <StoreIcon />
              </Toolbar>
            </AppBar>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
