import React from 'react';
import './Settings.css';
import { NavLink } from 'react-router-dom';

const settings = (props) => (
    <div className="Settings">
        <NavLink
            to="/setup"
            exact={true}
            onClick={props.setupHandler}>
            <i className="ion-settings"></i>
        </NavLink>
    </div>
);

export default settings;
