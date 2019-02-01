import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserProfile.css';

const userProfile = (props) => (
    <div className="UserProfile">
        <NavLink activeClassName="active"
            to="/logout"
            exact={true}
            onClick={props.UIhandlers.resetFlagsHandler}>
            <div className="UserProfile-icon">
                JS
            </div>
            <i className="ion-ios-arrow-down"></i>
        </NavLink>
    </div>
);

export default userProfile;
