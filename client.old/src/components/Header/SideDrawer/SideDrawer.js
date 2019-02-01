import React from 'react';
import cssClasses from './SideDrawer.css';
//import Logo from '../../UI/Logo/Logo';
//import NavigationItems from '../NavigationItems/NavigationItems';
//import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../General/Aux/Aux';

const sideDrawer = (props) => {
    //let attachClasses = [cssClasses.SideDrawer, cssClasses.Close];
    let attachClasses = ["SideDrawer", "Close"];
    if (props.open) {
        //attachClasses = [cssClasses.SideDrawer, cssClasses.Open];
        attachClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            
            <div className={attachClasses.join(' ')} onClick={props.closed}>
                <div className={cssClasses.Logo}>
                    LOGO
                </div>
                <nav>
                    NAV ITEMS
                </nav>
            </div>
        </Aux>
    );
    
};

export default sideDrawer;


//<div className={attachClasses.join(' ')} onClick={props.closed}>
//<Backdrop show={props.open} clicked={props.closed}/>