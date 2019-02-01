import React from 'react';
import './Logo.css';
import serviceLogo from '../../../assets/images/logo-red.png';

const logo = (props) => (
    <div className="Logo">
        <img src={serviceLogo} alt="Service Authority Logo"/>
        <label>Service Authority</label>
    </div>
);

export default logo;
