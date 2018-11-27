import React from 'react';
import { NavLink } from 'react-router-dom';
import cssClasses from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={cssClasses.NavigationItem}>
        <NavLink activeClassName={cssClasses.active}
            to={props.link}
            exact={props.exact}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;