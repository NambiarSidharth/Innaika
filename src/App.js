import React, { Component } from 'react';
import {redirectToSignIn} from 'blockstack';
import {appConfig} from './utils/constant';
import PrivateRoute from './components/common/PrivateRoute'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Button} from 'react-bulma-components';
import Navigation from './components/navigation/Navigation';
import Landing from './components/common/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Startup from "./components/startup/startup";
import {Provider,connect} from 'react-redux'

import 'tachyons'
import './App.css';

class App extends Component {
  
 componentDidMount=()=>{
   const {userSession} = this.props.auth;
   if(userSession.isUserSignedIn){
     console.log("logged in")
   }
 }
  
  render() {
    return (
      
      <Router>
      <div>
      <Route exact path="/" component={Startup}/>
      <div>
      <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      </Switch>
      </div>
      </div>
      </Router>
    );
  }
}
const mapStateToProps = (state)=>({
  auth:state.auth
})
export default connect(mapStateToProps)(App);
