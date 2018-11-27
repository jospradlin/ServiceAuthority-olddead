import React from 'react';
import './Spinner.css';
import Aux from '../../General/Aux/Aux';
import serviceLogo from '../../../assets/images/logo-red.png';

const spinner = () => (
    <Aux>
        <div className="Loading-Logo">
            <img src={serviceLogo} alt="Service Depot Logo"/>
            <div>...Loading...</div>
        </div>
        <div className="wrap">
            {/* <div class="loader"></div>
            <div class="loaderbefore"></div>
            <div class="circular"></div>
            <div class="circular another"></div> */}
            
        </div>
    </Aux>


);

export default spinner;