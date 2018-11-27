import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout';

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

    if (this.props.isAuthenticated) {
        routes = (
            <Layout>
                <Switch>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" exact component={ServiceDashboard}/>
                    <Redirect to="/" />
                </Switch>
            </Layout>
        );
    }

    return (
      <div>
            {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAppLoadAuthCheck: () => dispatch( actions.authCheckState() )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
