import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import PaperbaseLayout from '../layout/PaperbaseLayout';

class Layout2 extends Component {
    render() {                
        return (            
            <PaperbaseLayout data={getMainContent}/>            
        )
    }
}

function getMainContent()  {    
    return (
        <Typography paragraph>
        
        </Typography>
    )    
}

export default Layout2