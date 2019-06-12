import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'
import ContactUs from './contents/ContactUs';
import Welcome from './contents/Welcome';
import NotFound from './contents/NotFound';

class App extends Component {
  render() {
    return (     
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="*" component={NotFound} />   
        </Switch>
    )
  }
}
export default App;