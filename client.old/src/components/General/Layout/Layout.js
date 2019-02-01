import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';
import { withRouter } from 'react-router-dom';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../Header/Toolbar/Toolbar';
import AdministrativeToolbar from '../../Header/AdministrativeToolbar/AdministrativeToolbar';
import Footer from '../../General/Footer/Footer';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        console.log('check auth')
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidLoad() {
        console.log(this.props);
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        console.log('login:', this.props)
        // Redirect to '/' after login
        this.props.auth.login('/');
    }

    async logout() {
        // Redirect to '/' after logout
        this.props.auth.logout('/');
    }

    render() {
        if (this.state.authenticated === null) return null;
        // return this.state.authenticated ?
        //     <button onClick={this.logout}>Logout</button> :
        //     <button onClick={this.login}>Login</button>;
        if(!this.state.authenticated) {
            this.props.auth.login('/');
        } else {
            return (
                <Aux>
                    <Toolbar
                        tenants={this.props.authorization}
                        selectedTenant={this.props.selectedTenant}
                        handlerClasses={this.handlerClasses}
                        UIcontrol={this.state.toolbarUISwitches}
                        sideDrawerToggle={this.toggleSideBarHandler}
                        isAdmin={false}
                        logout={this.logout}
                    />
                    <main>
                        {this.props.children}
                    </main>

                    <Footer />
                </Aux>
            );
        }
    }
};

export default withAuth(withRouter(Home));