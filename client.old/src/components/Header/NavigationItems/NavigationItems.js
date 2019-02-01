import React from 'react';
import './NavigationItems.css';
//import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';

const navigationItems = (props) => {

    let attachStrategyClasses = ["NavigationSubmenu", "NavigationSubmenu-Closed"];
    let attachArchitectureClasses = ["NavigationSubmenu", "NavigationSubmenu-Closed"];
    let attachOperationsClasses = ["NavigationSubmenu", "NavigationSubmenu-Closed"];
    let attachAnalysisClasses = ["NavigationSubmenu", "NavigationSubmenu-Closed"];
    
    if (props.UIcontrol.strategyFlag) {
        attachStrategyClasses = ["NavigationSubmenu", "NavigationSubmenu-Open"];
    }
    if (props.UIcontrol.architectureFlag) {
        attachArchitectureClasses = ["NavigationSubmenu", "NavigationSubmenu-Open"];
    }
    if (props.UIcontrol.operationsFlag) {
        attachOperationsClasses = ["NavigationSubmenu", "NavigationSubmenu-Open"];
    }
    if (props.UIcontrol.analysisFlag) {
        attachAnalysisClasses = ["NavigationSubmenu", "NavigationSubmenu-Open"];
    }
    
    return (

        <ul className="NavigationItems">
            <li>
                <NavLink activeClassName="active"
                    to="/service/dashboard"
                    exact={true}
                    onClick={props.UIhandlers.resetFlagsHandler}>
                    <i className="ion-ios-home"></i>
                </NavLink>
            </li>
            <li>
                <a href=""
                    onClick={props.UIhandlers.strategyMenuHandler}>
                    Strategy
                </a>
                <ul className={attachStrategyClasses.join(' ')}>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/strategy/definition"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            General Definition
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/strategy/dependencies"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Service Dependencies
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/strategy/budgetforecasting"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Budgeting &amp; Forecasting
                        </NavLink>
                    </li>
                </ul>  
            </li>
            <li>
                <a href=""
                    onClick={props.UIhandlers.architectureMenuHandler}>
                    Design
                </a>
                <ul className={attachArchitectureClasses.join(' ')}>
                    <li>                
                         <NavLink activeClassName="active"
                            to="/service/design/architecture"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Architecture
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/design/vault"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Configuration Vault
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/design/assets"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Configuration Assets 
                        </NavLink>
                    </li>
                </ul>  
            </li>
            <li>
                <a href=""
                    onClick={props.UIhandlers.operationsMenuHandler}>
                    Operations
                </a>
                <ul className={attachOperationsClasses.join(' ')}>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/operations/discovery"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Discovery 
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/operations/sdintegration"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Service Desk Integration 
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/operations/process"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Standard Process Automation
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/operations/knowledge"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Knowledge Management
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/operations/autoscaling"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Autoscaling Rules
                        </NavLink>
                    </li>
                </ul>  
            </li>
            <li>
                <a href=""
                    onClick={props.UIhandlers.analysisMenuHandler}>
                    Analysis
                </a>
                <ul className={attachAnalysisClasses.join(' ')}>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/analysis/capacity"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Capacity Reports
                        </NavLink>
                    </li>
                    <li>                
                        <NavLink activeClassName="active"
                            to="/service/analysis/performance"
                            exact={true}
                            onClick={props.UIhandlers.resetFlagsHandler}>
                            Performance Reports
                        </NavLink>
                    </li>
                </ul>  
            </li>
            <li>
                <NavLink activeClassName="active"
                    to="/service/reporting"
                    exact={true}
                    onClick={props.UIhandlers.resetFlagsHandler}>
                    Reports
                </NavLink>
            </li>
        </ul>
    
        );
    };









export default navigationItems;