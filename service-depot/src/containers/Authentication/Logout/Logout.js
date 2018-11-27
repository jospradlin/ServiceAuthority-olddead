import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../../../store/actions/index';

class Logout extends Component {

    componentDidMount() {
        console.log("logout called");
        this.props.logoutSession();
        
    }

    render() {
        return <Redirect to="/" />;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutSession: () => dispatch(authActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout); 