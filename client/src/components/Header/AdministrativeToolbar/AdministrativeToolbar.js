import React from 'react';
import './AdministrativeToolbar.css';
import Logo from '../Logo/Logo';
import VerticalLineBreak from '../../UI/VerticalLineBreak/VerticalLineBreak';
import UserProfile from '../UserProfile/UserProfile';

const toolbar = (props) => (
    <header>
       <nav>
            <Logo/>
            <VerticalLineBreak />
            <UserProfile UIcontrol={props.UIcontrol} UIhandlers={props.handlerClasses}/>    
        </nav>
    </header>
);

export default  toolbar;


//<NavigationItems isAuth={props.isAuth} />