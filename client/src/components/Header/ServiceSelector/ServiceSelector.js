import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './ServiceSelector.css';


// Redux Actions
// import * as actions from '../../../store/actions/index';

class ServiceSelector extends Component {

    state = {
        recentServicesSelected: [],

        hierarchyFlags: {
            coreFlag: false,
            coreSubCategoryFlags: [],
            supportingFlag: false,
            supportingSubCategoryFlags: [],
            infrastructureFlag: false,
            infrastructureSubCategoryFlags: [],
            delegatedFlag: false,
            delegatedSubCategoryFlags: []
        },

        filterBy: '',
        coreOnlyOption: false,
        alphabeticalOption: false,
        showDependentOption: false
        
    }

    componentDidMount = () => {
        //this.props.getAuthorizedServiceList(this.props.userAuthentication.token, this.props.selectedTenant);
    }

    // componentDidUpdate= () => {
    //     this.props.getAuthorizedServiceList(this.props.userAuthentication.token, this.props.selectedTenant);
    // }


    coreFlagClickHandler = () => {
        const updatedState = {
            ...this.state.hierarchyFlags,
            coreFlag: !this.state.hierarchyFlags.coreFlag
        };
        
        this.setState( {hierarchyFlags: updatedState} );
    }

    supportingFlagClickHandler = () => {
        const updatedState = {
            ...this.state.hierarchyFlags,
            supportingFlag: !this.state.hierarchyFlags.supportingFlag
        };
        
        this.setState( {hierarchyFlags: updatedState} );
    }

    infrastructureFlagClickHandler = () => {
        const updatedState = {
            ...this.state.hierarchyFlags,
            infrastructureFlag: !this.state.hierarchyFlags.infrastructureFlag
        };
        
        this.setState( {hierarchyFlags: updatedState} );
    }

    delegatedFlagClickHandler = () => {
        const updatedState = {
            ...this.state.hierarchyFlags,
            delegatedFlag: !this.state.hierarchyFlags.delegatedFlag
        };
        
        this.setState( {hierarchyFlags: updatedState} );
    }

    selectServiceClickHandler = (serviceId) => {
        this.props.selectServiceHandler( serviceId );
        this.props.handlers.resetFlagsHandler();
    }

    maximizeClickHandler = () => {
        const updatedState= {
            coreFlag: true,
            coreSubCategoryFlags: [],
            supportingFlag: true,
            supportingSubCategoryFlags: [],
            infrastructureFlag: true,
            infrastructureSubCategoryFlags: [],
            delegatedFlag: true,
            delegatedSubCategoryFlags: []
        }

        this.setState( {hierarchyFlags: updatedState} );
    }

    minimizeClickHandler = () => {
        const updatedState= {
            coreFlag: false,
            coreSubCategoryFlags: [],
            supportingFlag: false,
            supportingSubCategoryFlags: [],
            infrastructureFlag: false,
            infrastructureSubCategoryFlags: [],
            delegatedFlag: false,
            delegatedSubCategoryFlags: []
        }

        this.setState( {hierarchyFlags: updatedState} );
    }

    filterByOptionClickHandler = (event) => {
        this.setState( {filterBy: event.target.value} );
    }

    coreOnlyOptionClickHandler = () => {
        this.setState( {coreOnlyOption: !this.state.coreOnlyOption} );
    }

    alphabeticalOptionClickHandler = () => {
        this.setState( {alphabeticalOption: !this.state.alphabeticalOption} );
    }

    showDependentOptionClickHandler = () => {
        this.setState( {showDependentOption: !this.state.showDependentOption} );
    }


    render() {
        
        // Service Selection - Access Toolbar Open/Close
        let attachSubmenuClasses = ["ServiceSubmenu", "ServiceSubmenu-Closed"];
        let attachIconClassesDownArrow = ["ion-ios-arrow-thin-down", "ServiceSelector-icon-inactive"];
        let attachIconClassesDownChevron = ["ion-ios-arrow-down", "ServiceSelector-icon-inactive"];

        // Menu Flags
        let coreFlagMenuDefinition = <i className="ion-arrow-right-b" onClick={this.coreFlagClickHandler}></i>;
        let showCoreSubmenu = "ServiceSubmenu-Closed";
        let supportingFlagMenuDefinition  = <i className="ion-arrow-right-b" onClick={this.supportingFlagClickHandler}></i>;
        let showSupportingSubmenu = "ServiceSubmenu-Closed";
        let infrastructureFlagMenuDefinition  = <i className="ion-arrow-right-b" onClick={this.infrastructureFlagClickHandler}></i>;
        let showInfrastructureSubmenu = "ServiceSubmenu-Closed";
        let delegatedFlagMenuDefinition  = <i className="ion-arrow-right-b" onClick={this.delegatedFlagClickHandler}></i>;
        let showDelegatedSubmenu = "ServiceSubmenu-Closed";

        // Update Service Selection - Access Toolbar Open/Close Flags based on selection
        if (this.props.UIcontrol.serviceSelection) {
            attachSubmenuClasses = ["ServiceSubmenu", "ServiceSubmenu-Open"];
            attachIconClassesDownArrow = ["ion-ios-arrow-thin-down", "ServiceSelector-icon-active"];
            attachIconClassesDownChevron = ["ion-ios-arrow-down ", "ServiceSelector-icon-active"];
        }

        // Update Service Selection - Menu Flags based on selection
        if (this.state.hierarchyFlags.coreFlag) {
            coreFlagMenuDefinition = <i className="ion-arrow-down-b" onClick={this.coreFlagClickHandler}></i>;
            showCoreSubmenu = "ServiceSubmenu-Open";
        }

        if (this.state.hierarchyFlags.supportingFlag) {
            supportingFlagMenuDefinition = <i className="ion-arrow-down-b" onClick={this.supportingFlagClickHandler}></i>;
            showSupportingSubmenu = "ServiceSubmenu-Open";
        }

        if (this.state.hierarchyFlags.infrastructureFlag) {
            infrastructureFlagMenuDefinition = <i className="ion-arrow-down-b" onClick={this.infrastructureFlagClickHandler}></i>;
            showInfrastructureSubmenu = "ServiceSubmenu-Open";
        }

        if (this.state.hierarchyFlags.delegatedFlag) { 
            delegatedFlagMenuDefinition = <i className="ion-arrow-down-b" onClick={this.delegatedFlagClickHandler}></i>;
            showDelegatedSubmenu = "ServiceSubmenu-Open";
        }

        // Create Service List
        let selectedService = {
            name: 'Please choose a Service'
        };


        
        let fullServiceList = [];
        let coreServiceList = [];
        let supportingServiceList = [];
        let infrastructureServiceList = [];
        let delegatedServiceList = [];

        if (!this.props.serviceListLoading && this.props.serviceList) {
            
            // Core Services
            if( !this.props.serviceList.core || this.props.serviceList.core.length === 0) {
                coreFlagMenuDefinition = <i className="ion-arrow-right-b" style={{color: '#666'}}></i>;
            }
            if( this.props.serviceList.core && this.props.serviceList.core.length > 0) {
                fullServiceList = fullServiceList.concat(this.props.serviceList.core);
                coreServiceList = this.props.serviceList.core.map( serviceInstance => {
                    
                    if(this.state.filterBy === '' || (this.state.filterBy.toLowerCase() !== '' && serviceInstance.name.toLowerCase().indexOf(this.state.filterBy.toLowerCase()) !== -1)) {
                        if (serviceInstance.serviceId === this.props.selectedService) {
                            selectedService = serviceInstance;
                            return (
                                <li className="active" key={serviceInstance.serviceId} onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        } else {
                            return (
                                <li key={serviceInstance.serviceId} onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>

                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        }

                    } else {
                        return null;
                    }
                });
            }

            // Supporting Services
            if( !this.props.serviceList.supporting || this.props.serviceList.supporting.length === 0) {
                supportingFlagMenuDefinition = <i className="ion-arrow-right-b" style={{color: '#666'}}></i>;
            }
            if( !this.state.coreOnlyOption && this.props.serviceList.supporting && this.props.serviceList.supporting.length > 0) {
                fullServiceList = fullServiceList.concat(this.props.serviceList.supporting);
                supportingServiceList = this.props.serviceList.supporting.map( serviceInstance => {
                    
                    if(this.state.filterBy === '' || (this.state.filterBy.toLowerCase() !== '' && serviceInstance.name.toLowerCase().indexOf(this.state.filterBy.toLowerCase()) !== -1)) {
                    
                        if (serviceInstance.serviceId === this.props.selectedService) {
                            selectedService = serviceInstance;
                            return (
                                <li className="active" key={serviceInstance.serviceId}  onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        } else {
                            return (
                                <li key={serviceInstance.serviceId} onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        }
                    
                    } else {
                        return null;
                    }
                });
            }

            // Infrastructure Services
            if( !this.props.serviceList.infrastructure || this.props.serviceList.infrastructure.length === 0) {
                infrastructureFlagMenuDefinition = <i className="ion-arrow-right-b" style={{color: '#666'}}></i>;
            }
            if( !this.state.coreOnlyOption && this.props.serviceList.infrastructure && this.props.serviceList.infrastructure.length > 0) {
                fullServiceList = fullServiceList.concat(this.props.serviceList.infrastructure);
                infrastructureServiceList = this.props.serviceList.infrastructure.map( serviceInstance => {
                    
                    if(this.state.filterBy === '' || (this.state.filterBy.toLowerCase() !== '' && serviceInstance.name.toLowerCase().indexOf(this.state.filterBy.toLowerCase()) !== -1)) {
                        
                        if (serviceInstance.serviceId === this.props.selectedService) {
                            selectedService = serviceInstance;
                            return (
                                <li className="active" key={serviceInstance.serviceId}  onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        } else {
                            return (
                                <li key={serviceInstance.serviceId} onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        }

                    } else {
                        return null;
                    }
                });
            }

            // Delegated Services
            if( !this.props.serviceList.delegated || this.props.serviceList.delegated.length === 0) {
                delegatedFlagMenuDefinition = <i className="ion-arrow-right-b" style={{color: '#666'}}></i>;
            }
            if( !this.state.coreOnlyOption && this.props.serviceList.delegated && this.props.serviceList.delegated.length > 0) {
                fullServiceList = fullServiceList.concat(this.props.serviceList.delegated);
                delegatedServiceList = this.props.serviceList.delegated.map( serviceInstance => {
                    
                    if(this.state.filterBy === '' || (this.state.filterBy.toLowerCase() !== '' && serviceInstance.name.toLowerCase().indexOf(this.state.filterBy.toLowerCase()) !== -1)) {
                        if (serviceInstance.serviceId === this.props.selectedService) {
                            selectedService = serviceInstance;
                            return (
                                <li className="active" key={serviceInstance.serviceId}  onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        } else {
                            return (
                                <li key={serviceInstance.serviceId} onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                                    <i className="ion-ios-minus-empty"></i>
                                    {serviceInstance.name}
                                </li>
                            );
                        }
                    } else {
                        return null;
                    }
                });
            }
        }

        let tempRecentServicesList = [];
        for( let recentServiceId in this.props.recentServices ) {
            for( let serviceIter in fullServiceList) {
                
                if ( fullServiceList[serviceIter].id === this.props.recentServices[recentServiceId] ) {
                    tempRecentServicesList.push( fullServiceList[serviceIter] );
                }
            }
        }

        let recentServicesListFinal = [];
        recentServicesListFinal = tempRecentServicesList.map( serviceInstance => {
            if (serviceInstance.serviceId === this.props.selectedService) {
                selectedService = serviceInstance;
                return (
                    <li className="active" key={serviceInstance.serviceId}  onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                        {serviceInstance.name}
                    </li>
                );
            } else {
                return (
                    <li key={serviceInstance.serviceId} onClick={ () => this.selectServiceClickHandler( serviceInstance.serviceId ) }>
                        {serviceInstance.name}
                    </li>
                );
            }
        });

        let submenuHierarchy = (
            <div className="ServiceSubmenu-Hierarchy">
                <div className="ServiceSubmenu-Hierarchy-PowerButtons">
                    <i className="ion-ios-plus" onClick={this.maximizeClickHandler}></i>
                    <i className="ion-ios-minus" onClick={this.minimizeClickHandler}></i>
                </div>
                <div className="ServiceSubmenu-Hierarchy-Section">
                    {coreFlagMenuDefinition}
                    <p onClick={this.coreFlagClickHandler}>Core</p>
                    <ul className={showCoreSubmenu}>
                        {coreServiceList}
                    </ul>
                </div>
            </div>
        );
        if( !this.state.coreOnlyOption ) {
            submenuHierarchy = (
                <div className="ServiceSubmenu-Hierarchy">
                    <div className="ServiceSubmenu-Hierarchy-PowerButtons">
                        <i className="ion-ios-plus" onClick={this.maximizeClickHandler}></i>
                        <i className="ion-ios-minus" onClick={this.minimizeClickHandler}></i>
                    </div>
                    <div className="ServiceSubmenu-Hierarchy-Section">
                        {coreFlagMenuDefinition}
                        <p onClick={this.coreFlagClickHandler}>Core</p>
                        <ul className={showCoreSubmenu}>
                            {coreServiceList}
                        </ul>
                    </div>
                    <div className="ServiceSubmenu-Hierarchy-Section">
                        {supportingFlagMenuDefinition}
                        <p onClick={this.supportingFlagClickHandler}>Supporting</p>
                        <ul className={showSupportingSubmenu}>
                            {supportingServiceList}
                        </ul>
                    </div>
                    <div className="ServiceSubmenu-Hierarchy-Section">
                        {infrastructureFlagMenuDefinition}
                        <p onClick={this.infrastructureFlagClickHandler}>Infrastructure</p>
                        <ul className={showInfrastructureSubmenu}>
                            {infrastructureServiceList}
                        </ul>
                    </div>
                    <div className="ServiceSubmenu-Hierarchy-Section">
                        {delegatedFlagMenuDefinition}
                        <p onClick={this.delegatedFlagClickHandler}>Delegated</p>
                        <ul className={showDelegatedSubmenu}>
                            {delegatedServiceList}
                        </ul>
                    </div>
                </div>
            );
        }


        return (
            <div className="ServiceSelector">
                <i className={attachIconClassesDownArrow.join(' ')}></i>
                <label onClick={this.props.serviceSelectionHandler}>{selectedService.name}</label>
                <i className={attachIconClassesDownChevron.join(' ')}></i>

                <div className={attachSubmenuClasses.join(' ')}>
                    <div className="ServiceSubmenu-Recent"
                        onClick={this.coreOpened}>
                        <label>Recent Services</label>
                        <ul>
                            {recentServicesListFinal}
                        </ul>
                    </div>

                    {submenuHierarchy}
                    
                    <div className="ServiceSubmenu-SortingOptions">
                        <label>View Options</label>
                        <ul>
                            <li>
                                Filter
                                <input className="ServiceSubmenu-SortingOptions-Filter" id="filterBy" type="text" value={this.state.filterBy} onChange={this.filterByOptionClickHandler} />
                            </li>
                            <li>
                                <input type="checkbox" checked={this.state.coreOnlyOption} value={this.state.coreOnlyOption} onChange={this.coreOnlyOptionClickHandler} />
                                Show Core Services Only
                            </li>
                            <li>
                            <input type="checkbox" checked={this.state.alphabeticalOption} value={this.state.alphabeticalOption} onChange={this.alphabeticalOptionClickHandler} />
                                Show Services Alphabetically
                            </li>
                            <li>
                            <input type="checkbox" checked={this.state.showDependentOption} value={this.state.showDependentOption} onChange={this.showDependentOptionClickHandler} />
                                Show Dependent Services of Selected
                            </li>
                            
                        </ul>
                    </div>
                    <NavLink
                        to="/addservice"
                        exact={true}>
                        Add Service
                    </NavLink>
                </div>
            </div>
        );
    }
    
};

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.authentication.authentication.token !== null,
//         userAuthentication: state.authentication.authentication,
//         selectedTenant: state.authentication.selected_tenant,
//         serviceListLoading: state.services.loading,
//         serviceList: state.services.serviceList,
//         recentServices: state.services.recentServices,
//         selectedService: state.services.selectedService
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getAuthorizedServiceList: (token, tenant) => dispatch( actions.getAuthorizedServiceList(token, tenant) ),
//         selectServiceHandler: (serviceId) => dispatch( actions.selectService(serviceId))
//     }
// }

export default ServiceSelector;
// export default connect(mapStateToProps, mapDispatchToProps)(ServiceSelector);
