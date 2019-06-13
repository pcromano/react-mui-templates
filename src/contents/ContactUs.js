import React, { Component } from 'react'
import Main from '../layout/Main';
import TextField from '@material-ui/core/TextField';

class ContactUs extends Component {
    render() {                        
        return (            
            <Main data={getMainContent}/>            
        )
    }
}

function handleChange(name) {
    return;
}
function getMainContent()  {    
    return (
        <form noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"        
        onChange={handleChange('name')}
        margin="normal"
      />
      </form>
        
    )    
}

export default ContactUs