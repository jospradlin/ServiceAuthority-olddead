import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Standardized Application Layouts and CSS Imports
import Layout from './components/General/Layout/Layout';
import './App.css';

// Application Pages
import AddService from './containers/Services/General/AddService/AddService';
import ServiceDashboard from './containers/Services/General/ServiceDashboard/ServiceDashboard';
import ServiceDefinition from './containers/Services/Strategy/ServiceDefinition/ServiceDefinition';


// Application Containers
import Login from './containers/Authentication/Login/Login';
import Logout from './containers/Authentication/Logout/Logout';
import TenantAdministration from './containers/Administration/TenantAdministration/TenantAdministration';

// Redux Actions
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount() {
    this.props.onAppLoadAuthCheck();
  }

  render() {

    let routes = (
      <Switch>
          <Route path="/" exact component={Login}/>
          <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated && this.props.isAuthorized) {
        routes = (
            <Layout>
                <Switch>
                    <Route path="/logout" exact component={Logout}/>
                    <Route path="/addservice" exact component={AddService}/>
                    <Route path="/setup" component={TenantAdministration}/>
                    <Route path="/service/strategy/definition" exact component={ServiceDefinition}/>
                    <Route path="/service/architecture" exact component={ServiceDashboard}/>
                    <Route path="/service/operations" exact component={ServiceDashboard}/>
                    <Route path="/service/analysis" exact component={ServiceDashboard}/>
                    <Route path="/service/reporting" exact component={ServiceDashboard}/>
                    <Route path="/logout" exact component={Logout}/>
                    <Route path="/" exact component={ServiceDashboard}/>
                    <Redirect to="/" />
                </Switch>
            </Layout>
        );
    }

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authentication.authentication.token !== null,
    isAuthorized: state.authentication.authorized_tenants !== null
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onAppLoadAuthCheck: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

