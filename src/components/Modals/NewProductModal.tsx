import { Paper, AppBar, Typography, Button, withStyles, ButtonGroup } from '@material-ui/core';
import 'components/Modals/ProductModal.scss';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { theme } from 'helpers/style';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
            },
        },
        title: {
            padding: 10,
        },
        submit: {
            display: 'flex',
            '& .MuiButton-label': {
                color: theme.palette.primary.main,
            },
        },
        modal: {
            width: '400px',
            margin: '20vh auto',
        },
    }),
);

const Footer = withStyles({
    root: {
        display: 'flex',
        marginTop: '30px',
    },
})(ButtonGroup);

const NewProductModal = (): JSX.Element => {
    const classes = useStyles(theme);
    return (
        <div role="button" className="modal-wrapper">
            <Paper elevation={3} className={classes.modal}>
                <div style={{ width: '100%', height: '25px' }}>
                    <Link to="/">
                        <button>X</button>
                    </Link>
                </div>
                <AppBar position="static">
                    <Typography variant="h6" className={classes.title}>
                        Create new product
                    </Typography>
                </AppBar>
                <div style={{ padding: '20px' }}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField required id="filled-required" label="Name" defaultValue="" />
                        <TextField required id="filled-required" label="Category" defaultValue="" />
                        <TextField required id="filled-required" label="Amount" defaultValue="" />
                        <TextField required id="filled-required" label="Minimal Amount" defaultValue="" />
                        <Footer>
                            <Button className={classes.submit} variant="contained" type="submit">
                                Create
                            </Button>

                            <Button className={classes.submit} color="secondary" variant="contained" type="submit">
                                Cancel
                            </Button>
                        </Footer>
                    </form>
                </div>
            </Paper>
        </div>
    );
};

export default withRouter(NewProductModal);
