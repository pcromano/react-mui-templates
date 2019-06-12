import React from 'react'
import Sidebar from '../layout/Main';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

function NotFound() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Header />
            <Sidebar />


            <main className={classes.content}>
                <div className={classes.toolbar}>
                    <Typography variant="warning">
                        404 Not Found
          </Typography>
                </div>

            </main>

        </React.Fragment>
    )
}

export default NotFound