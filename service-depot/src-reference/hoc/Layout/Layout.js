import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import cssClasses from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHander = () => {
        this.setState({showSideDrawer: false});
    }

    toggleSideBarHandler = () => {
        this.setState( (prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar 
                    sideDrawerToggle={this.toggleSideBarHandler}
                    hideToggle={this.state.showSideDrawer}
                    isAuth={this.props.isAuthenticated}
                /> 
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHander} 
                    isAuth={this.props.isAuthenticated}
                />
                <main className={cssClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //isAuthenticated: () => dispatch(orderActions.fetchOrders(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
