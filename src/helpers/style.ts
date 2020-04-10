import { createMuiTheme, makeStyles, Theme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#622012',
        },
        secondary: {
            main: '#72A4C4',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});
export const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
        },
        banner: {
            textAlign: 'center',
            fontSize: '3vh',
            fontFamily: 'Roboto, sans-serif',
            textTransform: 'uppercase',
            textShadow: '0px 10px 15px rgba(0, 0, 0, 1)',
            [theme.breakpoints.up('sm')]: {
                textAlign: 'right',
                fontSize: '5vh',
            },
        },
        content: {
            backgroundColor: theme.palette.grey['50'],
            width: '400px',
            height: '500px',
            marginLeft: '50px',
        },
    };
});
