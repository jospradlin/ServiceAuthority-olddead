import React from 'react';
import './TenantSelector.css';
//import Logo from '../../UI/Logo/Logo';
//import NavigationItems from '../NavigationItems/NavigationItems';
//import Backdrop from '../../UI/Backdrop/Backdrop';
//import Aux from '../../General/Aux/Aux';

const tenantSelector = (props) => {

    // Dynamic UI Control Classes
    let attachSubmenuClasses = ["TenantSubmenu", "TenantSubmenu-Closed"];
    let attachIconClasses = ["ion-ios-paper", "TenantSelector-icon-inactive"];
    if (props.UIcontrol.tenantSelection) {
        attachSubmenuClasses = ["TenantSubmenu", "TenantSubmenu-Open"];
        attachIconClasses = ["ion-ios-paper", "TenantSelector-icon-active"];
    }
    
    // Create Tenant List
    let tenantList = null;
    tenantList = props.tenants.map( tenantInstance => {
            if (tenantInstance.id === props.selectedTenant) {
                
                return (
                    <li className="active" key={tenantInstance.id} onClick={ () => props.chooseTenantHandler( tenantInstance.id ) }>
                        {tenantInstance.name}
                    </li>
                );
            } else {
                return (
                    <li  key={tenantInstance.id} onClick={ () => props.chooseTenantHandler( tenantInstance.id ) }>
                        {tenantInstance.name}
                    </li>
                );
            }
        });

    return (
        <div className="TenantSelector">
            <i className={attachIconClasses.join(' ')} onClick={props.tenantSelectionHandler}></i>
            <div className={attachSubmenuClasses.join(' ')}>
                <label>Tenants</label>
                <ul>
                    {tenantList }
                </ul>
            </div>
        </div>
    );
    
};

export default tenantSelector;
