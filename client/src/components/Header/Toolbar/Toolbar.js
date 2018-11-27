import React from 'react';
import './Toolbar.css';
import Logo from '../Logo/Logo';
import VerticalLineBreak from '../../UI/VerticalLineBreak/VerticalLineBreak';
import TenantSelector from '../TenantSelector/TenantSelector';
import ServiceSelector from '../ServiceSelector/ServiceSelector';
import NavigationItems from '../NavigationItems/NavigationItems';
import Search from '../Search/Search';
import Settings from '../Settings/Settings';
import UserProfile from '../UserProfile/UserProfile';
//import Input from '../../UI/Input/Input';

const toolbar = (props) => (
    <header>
       <nav>
            <Logo/>
            <VerticalLineBreak />
            {/* <TenantSelector 
                UIcontrol={props.UIcontrol} 
                tenantSelectionHandler={props.handlerClasses.tenantSelectionHandler}
                tenants={props.tenants}
                selectedTenant={props.selectedTenant}
                chooseTenantHandler={props.handlerClasses.chooseTenantHandler}/>
            <ServiceSelector 
                UIcontrol={props.UIcontrol} 
                serviceSelectionHandler={props.handlerClasses.serviceSelectionHandler} 
                // services={props.services}
                // selectedService={props.selectedService}
                handlers={props.handlerClasses}/> */}
            {/* <NavigationItems UIcontrol={props.UIcontrol} UIhandlers={props.handlerClasses}/> */}
            {/* <UserProfile UIcontrol={props.UIcontrol} UIhandlers={props.handlerClasses}/> */}
            {/* { (props.isAdmin) ? <Settings UIcontrol={props.UIcontrol} setupHandler={props.handlerClasses.enterSetupHandler}/> : null }
            <Search UIcontrol={props.UIcontrol} /> */}
            <button onClick={props.logout}>Logout</button>
        </nav>
    </header>
);

export default  toolbar;


//<NavigationItems isAuth={props.isAuth} />