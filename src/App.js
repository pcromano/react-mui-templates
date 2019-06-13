import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Welcome from './contents/Welcome';
import NotFound from './contents/NotFound';
import Checkout from './contents/Checkout';
import SignIn from './forms/Signin';
import Album from './forms/Album';
import MiniDrawer from './layout/MiniDrawer';
import NavTabs from './layout/NavTabs';

class App extends Component {  
  render() {    
    return (     
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/login" component={SignIn} />
          <Route path="/album" component={Album} />          
          <Route path="/checkout" component={Checkout} />
          <Route path="/minidrawer" component={MiniDrawer} />
          <Route path="/navtabs" component={NavTabs} />
          <Route path="*" component={NotFound} />   
        </Switch>
    )
  }
}
export default App;