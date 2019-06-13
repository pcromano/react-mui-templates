import React, { Component } from 'react'
import Main from '../layout/Main';
import Typography from '@material-ui/core/Typography';

class NotFound extends Component {
    render() {
        return (
            <Main data={getMainContent} />
        )
    }
}

function getMainContent() {
    return (
        <React.Fragment>
            <Typography className="h2">
                404 Not Found
            </Typography>
        </React.Fragment>
    )
}

export default NotFound