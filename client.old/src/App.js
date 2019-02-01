import React, { Component } from 'react';
// import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import config from './TestOkta/.samples.config';
import Home from './TestOkta/Home';
import CustomLoginComponent from './TestOkta/Login';
import Messages from './TestOkta/Messages';
import Navbar from './TestOkta/Navbar';
import Profile from './TestOkta/Profile';
// Standardized Application Layouts and CSS Imports
import './App.css';
// import logo from './logo.svg';
// import { withCookies, Cookies } from 'react-cookie';

// Components
// import Layout from './components/General/Layout/Layout';
// import LinkList from './components/LinkList';
// import CreateLink from './components/CreateLink';
// import Header from './components/Header';
// import Login from './components/Login';
// import Login from './containers/Authentication/Login/Login';
// import Logout from './containers/Authentication/Logout/Logout';

// Application Pages
import AddService from './containers/General/AddService/AddService';
// import ServiceDashboard from './containers/General/ServiceDashboard/ServiceDashboard';


function customAuthHandler({ history }) {
  history.push('/login');
}

// const config = {
//   issuer: 'https://dev-654282.oktapreview.com/oauth2/default',
//   redirect_uri: window.location.origin + '/implicit/callback',
//   client_id: '0oafbybdr9v95LoCp0h7'
// };


class App extends Component {

  state = {
    isAuthenticated: false
  }

  render() {
    return (
      <div>
        <Router>
              <Route path="/" component={AddService} />
        </Router>
      </div>
    );
  }
}

export default withRouter(App);



  //render() {
    // console.log('auth:', this.state.isAuthenticated);
    
    // let routes = (
    //   <Switch>
    //     <Route path="/login" component={Login} />
    //     <Redirect to="/login" />
    //   </Switch>
    // );

    // if (this.state.isAuthenticated) {
    //   console.log('auth yes');
    //   routes = (
    //     <Layout authenticationState={this.state.isAuthenticated}>
    //       <Switch>
    //         {/* <Route path="/logout" exact component={Logout} /> */}
    //         <Route path="/l" exact component={LinkList} />
    //         <Redirect to="/" />
    //       </Switch>
    //     </Layout>
    //   );
    // }




  //   return (
  //     <div className='App'>
  //         {routes}
  //     </div>
  //   );
  // }
// }

//export default withRouter(App);
