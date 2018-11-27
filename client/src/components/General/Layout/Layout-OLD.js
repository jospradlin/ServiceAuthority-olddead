import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../Header/Toolbar/Toolbar';
import AdministrativeToolbar from '../../Header/AdministrativeToolbar/AdministrativeToolbar';
import Footer from '../../General/Footer/Footer';
//import SideDrawer from '../../Header/SideDrawer/SideDrawer';

// Redux Actions
//import * as actions from '../../../store/actions/index';


class Layout extends Component {

    
     state = {
         showSideDrawer: false,
         toolbarUISwitches: {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false,
            reportingFlag: false
         },
         selectedTenant: 'saasprod',
        //  tenants: [
        //      { tenantId: 'saasprod', tenantName: "CA SaaS Production"},
        //      { tenantId: 'saasdev', tenantName: "CA SaaS Development"},
        //  ],
         selectedService: null,
        //  services: [
        //      { serviceId: 'clarityppm', serviceName: "Clarity PPM"},
        //      { serviceId: 'apm', serviceName: "APM"},
        //      { serviceId: 'apim', serviceName: "APIM"}
        //  ],

     }

    componentWillMount() {
        //this.resetFlagsHandler();
        //this.props.getAuthorizedServiceList(this.props.userAuthentication.token);
    }

    componentDidMount() {
        this.resetFlagsHandler();
        //this.props.getAuthorizedServiceList(this.props.userAuthentication.token);
    }

    enterTenantSetupMode = () => {
        const newTBState = {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: true,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        };

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

      
     chooseTenantHandler = (tenantId) => {

        const newTBState = {
            serviceSelection: false,
            tenantSelection: !this.state.toolbarUISwitches.tenantSelection,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        }

        this.props.chooseTenantHandler(tenantId);
        this.setState({
            toolbarUISwitches: newTBState
        });
      
        this.props.getAuthorizedServiceList(this.props.userAuthentication.token, tenantId);

     }

     chooseServiceHandler = (serviceId) => {

        const newTBState = {
            serviceSelection: !this.state.toolbarUISwitches.serviceSelection,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        }

        this.props.selectServiceHandler(serviceId);
        this.setState({
            //selectedService: serviceId,
            toolbarUISwitches: newTBState
        });
     }

     resetFlagsHandler = () => {

        const newTBState = {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

     serviceSelectionHandler = () => {

        const newTBState = {
            serviceSelection: !this.state.toolbarUISwitches.serviceSelection,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

    tenantSelectionHandler = () => {

        const newTBState = {
            serviceSelection: false,
            tenantSelection: !this.state.toolbarUISwitches.tenantSelection,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

    strategyMenuHandler = (e) => {
        e.preventDefault();

        const newTBState = {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: !this.state.toolbarUISwitches.strategyFlag,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: false
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

    architectureMenuHandler = (e) => {
        e.preventDefault();

        const newTBState = {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: !this.state.toolbarUISwitches.architectureFlag,
            operationsFlag: false,
            analysisFlag: false
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

    operationsMenuHandler = (e) => {
        e.preventDefault();

        const newTBState = {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: !this.state.toolbarUISwitches.operationsFlag,
            analysisFlag: false
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

    analysisMenuHandler = (e) => {
        e.preventDefault();

        const newTBState = {
            serviceSelection: false,
            tenantSelection: false,
            search: false,
            setup: false,
            userProfile: false,
            strategyFlag: false,
            architectureFlag: false,
            operationsFlag: false,
            analysisFlag: !this.state.toolbarUISwitches.analysisFlag
        }

        this.setState({
            toolbarUISwitches: newTBState
        });
    }

    handlerClasses = {
        serviceSelectionHandler: this.serviceSelectionHandler,
        tenantSelectionHandler: this.tenantSelectionHandler,
        strategyMenuHandler: this.strategyMenuHandler,
        architectureMenuHandler: this.architectureMenuHandler,
        operationsMenuHandler: this.operationsMenuHandler,
        analysisMenuHandler: this.analysisMenuHandler,
        resetFlagsHandler: this.resetFlagsHandler,
        chooseTenantHandler: this.chooseTenantHandler,
        chooseServiceHandler: this.chooseServiceHandler,
        enterSetupHandler: this.enterTenantSetupMode
    }

    // sideDrawerClosedHander = () => {
    //     this.setState({showSideDrawer: false});
    // }

    // toggleSideBarHandler = () => {
    //     console.log("Clicked SideToggle");
    //     this.setState( (prevState) => {
    //         return {showSideDrawer: !prevState.showSideDrawer}
    //     });
    // }
    

    render() {

        // let attachClasses = ["CloseSD"];
        // if (this.state.showSideDrawer) {
        //     //attachClasses = [cssClasses.SideDrawer, cssClasses.Open];
        //     attachClasses = ["OpenSD"];
        // }

        // let toolbar = null;
        // if (this.props.serviceList && !this.props.servicesLoading) {
        //     toolbar = (
        //         <Toolbar
        //             tenants={this.props.authorization}
        //             selectedTenant={this.props.selectedTenant}
        //             services={this.props.serviceList}
        //             selectedService={this.props.selectedService}
        //             handlerClasses = {this.handlerClasses}
        //             UIcontrol={this.state.toolbarUISwitches}
        //             sideDrawerToggle={this.toggleSideBarHandler}
        //             isAuth={true}
        //         />
        //     );
        // }

        let isTenantAdmin = false;
        const selectedTenantObject = this.props.authorization.filter ( el => el.id === this.props.selectedTenant);
        if (selectedTenantObject.length === 1 && selectedTenantObject[0].role === 'tenantadmin') {
            isTenantAdmin = true;
        }

        let toolbarSelection = (
            <Toolbar
                    tenants={this.props.authorization}
                    selectedTenant={this.props.selectedTenant}
                    handlerClasses = {this.handlerClasses}
                    UIcontrol={this.state.toolbarUISwitches}
                    sideDrawerToggle={this.toggleSideBarHandler}
                    isAdmin={isTenantAdmin}
                />
        );

        if (this.state.toolbarUISwitches.setup) {
            toolbarSelection = (
                <AdministrativeToolbar
                        selectedTenant={this.props.selectedTenant}
                        handlerClasses = {this.handlerClasses}
                />
            );
        }

        return (
            <Aux>
                 
                {toolbarSelection}

                <main>
                    {this.props.children}
                </main>

                <Footer />
            </Aux>
        );
    }
}


// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.authentication.authentication.token !== null,
//         userAuthentication: state.authentication.authentication,
//         authorization: state.authentication.authorized_tenants,
//         selectedTenant: state.authentication.selected_tenant//,
//         //servicesLoading: state.services.loading,
//         //serviceList: state.services.serviceList,
//         //selectedService: state.services.selectedService
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getAuthorizedServiceList: (token, tenant) => dispatch( actions.getAuthorizedServiceList(token, tenant) ),
//         chooseTenantHandler: (tenantId) => dispatch( actions.selectTenant(tenantId)),
//         selectServiceHandler: (serviceId) => dispatch( actions.selectService(serviceId))
//     }
// }

export default withRouter(Layout);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
// export default Layout;
