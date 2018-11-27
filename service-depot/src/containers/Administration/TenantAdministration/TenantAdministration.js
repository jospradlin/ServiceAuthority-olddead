import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
//import AxiosDatastore from '../../../../store/datasources/axios-datastore';

//import MainFrame from '../../../../components/General/MainFrame/MainFrame';
//import Modal from '../../../../components/UI/Modal/Modal';
//import Spinner from '../../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../components/General/withErrorHandler/withErrorHandler';
// import ServiceGeneralDefinition from '../../../../components/Strategy/ServiceGeneralDefinition/ServiceGeneralDefinition';
// import ServiceUsers from '../../../../components/Strategy/ServiceUsers/ServiceUsers';
// import ServiceDependencies from '../../../../components/Strategy/ServiceDependencies/ServiceDependencies';


// Redux Actions
//import * as actions from '../../../store/actions/index';


/*
const formatMoney = (intToFormat, c, d, t) => {
    var newc = isNaN(c = Math.abs(c)) ? 2 : c,
        newd = d == undefined ? "." : d,
        newt = t == undefined ? "," : t, 
        s = intToFormat < 0 ? "-" : "", 
        i = String(parseInt(intToFormat = Math.abs(Number(intToFormat) || 0).toFixed(newc))), 
        j = (j = i.length) > 3 ? j % 3 : 0;
       return s + (j ? i.substr(0, j) + newt : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + newt) + (newc ? newd + Math.abs(intToFormat - i).toFixed(newc).slice(2) : "");
};
*/

class TenantAdministration extends Component {

    pageId = 'tenantAdministration';

    state = {
        // pageLoading: true,
        // pageError: false,
        // pageData: [],
        // serviceKey: null,
        // formElements: {
        //         name: {
        //             elementType: 'input',
        //             elementConfig: {
        //                 type: 'text',
        //                 label: 'Service Name',
        //                 placeholder: 'Service Name'
        //             },
        //             value: '',
        //             validation: {
        //                 required: true,
        //                 minLength: 8
        //             },
        //             disabled: false,
        //             valid: false,
        //             touched: false
        //         },
        //         serviceId: {
        //             elementType: 'input',
        //             elementConfig: {
        //                 type: 'text',
        //                 label: 'Service ID',
        //                 placeholder: 'Service ID'
        //             },
        //             value: '',
        //             validation: {
        //                 required: true,
        //                 maxLength: 16
        //             },
        //             disabled: true,
        //             valid: false,
        //             touched: false
        //         },
        //         type: {
        //             elementType: 'select',
        //             elementConfig: {
        //                 label: 'Service Type',
        //                 placeholder: 'Service Type',
        //                 image: 'person',
        //                 options: [ {value: 'core', displayValue: 'Core Service'},
        //                     {value: 'support', displayValue: 'Support Service'},
        //                     {value: 'infrastructure', displayValue: 'Infrastructure Service'},
        //                     {value: 'delegated', displayValue: 'Delegated Service'}]
        //             },
        //             value: 'core',
        //             validation: {
        //                 required: true
        //             },
        //             disabled: true,
        //             valid: true,
        //             touched: false
        //         },
        //         status: {
        //             elementType: 'select',
        //             elementConfig: {
        //                 label: 'Status',
        //                 placeholder: 'Status',
        //                 options: [ {value: 'requirements', displayValue: 'Requirements'},
        //                 {value: 'defined', displayValue: 'Defined'},
        //                 {value: 'analyzed', displayValue: 'Analyzed'},
        //                 {value: 'approved', displayValue: 'Approved'},
        //                 {value: 'designed', displayValue: 'Designed'},
        //                 {value: 'implemented', displayValue: 'Implemented'},
        //                 {value: 'tested', displayValue: 'Tested'},
        //                 {value: 'released', displayValue: 'Released'},
        //                 {value: 'operational', displayValue: 'Operational'},
        //                 {value: 'retired', displayValue: 'Retired'}
        //                 ]
        //             },
        //             value:  'defined',
        //             validation: {
        //                 required: true
        //             },
        //             disabled: false,
        //             valid: true,
        //             touched: false
        //         },
        //         description: {
        //             elementType: 'textarea',
        //             elementConfig: {
        //                 type: 'textarea',
        //                 label: 'Description',
        //                 placeholder: 'Description',
        //                 rows: 10    ,
        //                 columns: 50
        //             },
        //             value: '',
        //             validation: {},
        //             valid: false,
        //             touched: false
        //         },
        //         owner: {
        //             elementType: 'input',
        //             elementConfig: {
        //                 type: 'text',
        //                 image: 'person',
        //                 label: 'Owner',
        //                 placeholder: 'Service Owner'
        //             },
        //             value: '',
        //             validation: {
        //                 required: true
        //             },
        //             disabled: false,
        //             valid: false,
        //             touched: false
        //         },
        //         version: {
        //             elementType: 'input',
        //             elementConfig: {
        //                 type: 'text',
        //                 label: 'Release Version',
        //                 placeholder: 'Release Version'
        //             },
        //             value: '',
        //             validation: {},
        //             disabled: true,
        //             valid: false,
        //             touched: false
        //         }
        // },
        // // filterUser: '',
        // // suggestions: [],
        // filterUsersResult: [
        //     { name: 'Smith Smithson1', userId: '6', email: 'smith.smithson1 @test.com', role: 'member' },
        //     { name: 'Jakob Johnsonman1', userId: '7', email: 'jakob.johnsonman1@test.com', role: 'member' },
        //     { name: 'Manny Beerman1', userId: '8', email: 'manny.beerman1@test.com', role: 'admin' },
        //     { name: 'Smith Smithson2', userId: '16', email: 'smith.smithson2@test.com', role: 'member' },
        //     { name: 'Jakob Johnsonman2', userId: '17', email: 'jakob.johnsonman2@test.com', role: 'member' },
        //     { name: 'Manny Beerman2', userId: '18', email: 'manny.beerman2@test.com', role: 'admin' },
        //     { name: 'Smith Smithson3', userId: '26', email: 'smith.smithson3@test.com', role: 'member' },
        //     { name: 'Jakob Johnsonman3', userId: '27', email: 'jakob.johnsonman3@test.com', role: 'member' },
        //     { name: 'Manny Beerman3', userId: '28', email: 'manny.beerman3@test.com', role: 'admin' },
        //     { name: 'Smith Smithson4', userId: '36', email: 'smith.smithson43@test.com', role: 'member' },
        //     { name: 'Jakob Johnsonman4', userId: '37', email: 'jakob.johnsonman4@test.com', role: 'member' },
        //     { name: 'Manny Beerman4', userId: '38', email: 'manny.beerman4@test.com', role: 'admin' },
        //     { name: 'Smith Smithson5', userId: '46', email: 'smith.smithson5@test.com', role: 'member' },
        //     { name: 'Jakob Johnsonman5', userId: '47', email: 'jakob.johnsonman5@test.com', role: 'member' },
        //     { name: 'Manny Beerman5', userId: '48', email: 'manny.beerman5@test.com', role: 'admin' },
        // ],
        // serviceUsers: [
        //     { name: 'John Smith', userId: '1', email: 'john.smith@test.com', role: 'admin' },
        //     { name: 'Jake Johnson', userId: '2', email: 'jake.johnson@test.com', role: 'member' },
        //     { name: 'Sam Beer', userId: '3', email: 'sam.beer@test.com', role: 'member' },
        //     { name: 'James Rack', userId: '4', email: 'james.rack@test.com', role: 'admin' },
        //     { name: 'Arty Fu', userId: '5', email: 'arty.fu@test.com', role: 'member' }
        // ],
        // serviceDependencies: {
        //     core: [],
        //     supporting: [],
        //     infrastructure: [],
        //     delegated: []
        //}
    };


    // componentDidMount() {
    //     //this.loadPageFormData(this.props.userToken, this.props.selectedService, this.pageId);
    //     //this.props.loadPageData(this.props.userToken, this.props.selectedService, this.pageId);
    // }


    helpClickHandler = (e) => {
        e.preventDefault();

    }


    // inputChangedHandler = (event, controlName, optionValue) => {
        
    //     // INPUT vs. SELECT fields have their 'values' in different places currently.
    //     let newValue = optionValue;
    //     if( controlName === 'type' || controlName === 'status') {
    //         newValue = optionValue;
    //     } else {
    //         newValue = event.target.value;
    //     }


    //     console.log('newvalue: ' + newValue);

    //     const updatedControls = {
    //         ...this.state.formElements,
    //         [controlName]: {
    //             ...this.state.formElements[controlName],
    //             value: newValue,
    //             valid: this.checkValidity(newValue, this.state.formElements[controlName].validation),
    //             touched: true
    //         }
    //     }

    //     this.setState( {formElements: updatedControls} );  
    // }

    // removeUserClickHandler = (event, userId) => {

    //     let updatedTeamMembers = [];
    //     let tempUserObj = null;
    //     for (let user in this.state.serviceUsers) {

    //         tempUserObj = this.state.serviceUsers[user];
    //         if (tempUserObj.userId !== userId ){
    //             updatedTeamMembers.push(tempUserObj);
    //         }

    //     }

    //     this.setState( {serviceUsers: updatedTeamMembers} );  
    // }

    // addUserClickHandler = (userObj) => {
        
    //     console.log('userObj2 to add: ' + userObj);


    //     let updatedTeamMembers = [...this.state.serviceUsers];
    //     updatedTeamMembers.push(userObj);
    //     this.setState( 
    //         {
    //             serviceUsers: updatedTeamMembers,
    //             filterUser: ''
    //         } );  

    // }

    // // resetFilterUserField = () => {
    // //     this.setState( {filterUser: 'a'} );
    // // }


    // filterChangedHandler = (event) => {
    //     this.setState( {filterUser: event.target.value} );  
    // }



    //   // Autosuggest will call this function every time you need to update suggestions.
    //   // You already implemented this logic above, so just use it.
    // //   onSuggestionsFetchRequested = ({ value }) => {
    // //     this.setState({
    // //       suggestions: this.getSuggestions(value)
    // //     });
    // //   };
    
    // //   // Autosuggest will call this function every time you need to clear suggestions.
    // //   onSuggestionsClearRequested = () => {
    // //     this.setState({
    // //       suggestions: []
    // //     });
    // //   };



    // checkValidity = (value, rules) => {
    //     let isValid = true;

    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }

    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid;
    //     }

    //     if (rules.maxLength) {
    //         isValid = value.length <= rules.maxLength && isValid;
    //     }

    //     if (rules.isEmail) {
    //         const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    //         isValid = pattern.test(value) && isValid;
    //     }

    //     if (rules.isNumeric) {
    //         const pattern = /^\d+$/;
    //         isValid = pattern.test(value) && isValid;
    //     }

    //     return isValid;
    // }




    // loadPageFormData = (token, serviceId, pageId) => {

    //     // Set State to Page Loading
    //     console.log('is page loading?: ' + this.state.pageLoading);

    //     // Configure Query Parameters for Page Request
    //     const queryParams = '?auth=' + token + '&orderBy="serviceId"&equalTo="' + serviceId + '"';
    //     //+ '&orderBy="tenantId"&equalTo="' + tenantId + '"';

    //     AxiosDatastore.get('services.json' + queryParams )
    //     .then( response => {

    //         const obj = response.data;
    //         console.log(Object.keys(obj)[0]);

    //         let updatedformElements = {
    //             ...this.state.formElements
    //         };

    //         for( let key in response.data ) {

    //             for ( let subkey in response.data[key] ) {

    //                 if(this.state.formElements[subkey]) {
                        
    //                     const updatedFieldObj = {
    //                         ...this.state.formElements[subkey],
    //                         elementConfig: {
    //                             ...this.state.formElements[subkey].elementConfig
    //                         },
    //                         validation: {
    //                             ...this.state.formElements[subkey].validation
    //                         },
    //                         value: response.data[key][subkey]
    //                     };

    //                     updatedformElements[subkey] = updatedFieldObj;
    //                 }

    //             }
    //         }

    //         this.setState( 
    //             {   formElements: updatedformElements,
    //                 pageLoading: false,
    //                 serviceKey: Object.keys(obj)[0]
    //             }
    //         );
    //     })
    //     .catch( error => {
    //         console.log('error: ' + error);
    //         this.setState({ pageError: error, pageLoading: false });
    //     });
        
    // }


    // updateServiceHandler = (event) => {
    //     event.preventDefault();

    //     const formData = {};
    //     for (let formElementIdentifier in this.state.formElements) {
    //         formData[formElementIdentifier] = this.state.formElements[formElementIdentifier].value;
    //     }

    //     const updatedService = {
    //         ...formData,
    //         tenantId: this.props.selectedTenant,
    //         canBeRemoved: true
    //     };

    //     this.props.updateService(this.props.userToken, this.props.selectedTenant, this.state.serviceKey, updatedService);
    // }


    render () {
       
        // let data = <p>Please select a service to manage.</p>;
        
        // if ( this.props.isAuthorizationLoading || this.props.isServicesLoading ) {
        //     data = <Spinner />
        // }

        // if (this.props.selectedService != null && this.props.selectedTenant != null && !this.props.isServicePageDataLoading) {
        //     data = <ServiceGeneralDefinition 
        //         formElements={this.state.formElements}
        //         serviceId={this.props.selectedService} 
        //         inputChangedHandler={this.inputChangedHandler}
        //         updateServiceHandler={this.updateServiceHandler}/>;
        // }



        return (
            <div>
            Tenant Administration
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        // userToken: state.authentication.authentication.token,
        // isAuthenticated: state.authentication.authentication.token !== null,
        // isAuthorized: state.authentication.authorized_tenants !== null,
        // selectedTenant: state.authentication.selected_tenant,
        // selectedService: state.services.selectedService,
        // isAuthorizationLoading: state.authentication.loading,
        // isServicesLoading: state.services.loading,        
        // isAuthorizationError: state.authentication.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //updateService: (token, tenant, serviceKey, serviceObj) => dispatch( actions.updateServiceDefinitionData(token, tenant, serviceKey, serviceObj) ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(TenantAdministration));