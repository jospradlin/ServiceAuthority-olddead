import React from 'react';
import cssClasses from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
    <ul className={cssClasses.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        { props.isAuth ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        { props.isAuth ? <NavigationItem link="/logout">Logout</NavigationItem> : <NavigationItem link="/auth">Authenticate</NavigationItem> }
    </ul>

    )
};

export default navigationItems;