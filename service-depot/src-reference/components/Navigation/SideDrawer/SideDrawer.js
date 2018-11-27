import React from 'react';
import cssClasses from './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachClasses = [cssClasses.SideDrawer, cssClasses.Close];
    if (props.open) {
        attachClasses = [cssClasses.SideDrawer, cssClasses.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(' ')} onClick={props.closed}>
                <div className={cssClasses.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
    
};

export default sideDrawer;