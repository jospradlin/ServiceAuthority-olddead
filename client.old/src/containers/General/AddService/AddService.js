import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import { connect } from 'react-redux';
//import AxiosDatastore from '../../../../store/datasources/axios-datastore';

import MainFrame from '../../../components/General/MainFrame/MainFrame';
//import Modal from '../../../../components/UI/Modal/Modal';
//import Spinner from '../../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../components/General/withErrorHandler/withErrorHandler';
import AddNewService from '../../../components/Strategy/AddNewService/AddNewService';

// Redux Actions
// import * as actions from '../../../store/actions/index';



class AddService extends Component {

    pageId = 'addService';

    state = {
        formIsValid: false,
        pageLoading: false,
        pageError: false,
        pageData: [],
        formElements: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        label: 'Service Name',
                        placeholder: 'Service Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 8
                    },
                    disabled: false,
                    valid: false,
                    touched: false
                },
                serviceId: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        label: 'Service ID',
                        placeholder: 'Service ID'
                    },
                    value: '',
                    validation: {
                        required: true,
                        maxLength: 16
                    },
                    disabled: false,
                    valid: false,
                    touched: false
                },
                type: {
                    elementType: 'select',
                    elementConfig: {
                        label: 'Service Type',
                        placeholder: 'Service Type',
                        image: 'person',
                        options: [ {value: 'core', displayValue: 'Core Service'},
                            {value: 'support', displayValue: 'Support Service'},
                            {value: 'infrastructure', displayValue: 'Infrastructure Service'},
                            {value: 'delegated', displayValue: 'Delegated Service'}]
                    },
                    value: 'core',
                    validation: {
                        required: true
                    },
                    disabled: false,
                    valid: true,
                    touched: false
                },
                status: {
                    elementType: 'select',
                    elementConfig: {
                        label: 'Status',
                        placeholder: 'Status',
                        options: [ {value: 'requirements', displayValue: 'Requirements'},
                        {value: 'defined', displayValue: 'Defined'},
                        {value: 'analyzed', displayValue: 'Analyzed'},
                        {value: 'approved', displayValue: 'Approved'},
                        {value: 'designed', displayValue: 'Designed'},
                        {value: 'implemented', displayValue: 'Implemented'},
                        {value: 'tested', displayValue: 'Tested'},
                        {value: 'released', displayValue: 'Released'},
                        {value: 'operational', displayValue: 'Operational'},
                        {value: 'retired', displayValue: 'Retired'}
                        ]
                    },
                    value:  'defined',
                    validation: {
                        required: true
                    },
                    disabled: false,
                    valid: true,
                    touched: false
                },
                description: {
                    elementType: 'textarea',
                    elementConfig: {
                        type: 'textarea',
                        label: 'Description',
                        placeholder: 'Description',
                        rows: 10    ,
                        columns: 50
                    },
                    value: '',
                    validation: {},
                    valid: false,
                    touched: false
                },
                owner: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        image: 'person',
                        label: 'Owner',
                        placeholder: 'Service Owner'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    disabled: false,
                    valid: false,
                    touched: false
                },
                version: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        label: 'Release Version',
                        placeholder: 'Release Version'
                    },
                    value: '',
                    validation: {},
                    disabled: false,
                    valid: false,
                    touched: false
                }
        }
    };

    inputChangedHandler = (event, controlName, optionValue) => {
        
        // INPUT vs. SELECT fields have their 'values' in different places currently.
        let newValue = optionValue;
        if( controlName === 'type' || controlName === 'status') {
            newValue = optionValue;
        } else {
            newValue = event.target.value;
        }


        const updatedControls = {
            ...this.state.formElements,
            [controlName]: {
                ...this.state.formElements[controlName],
                value: newValue,
                valid: this.checkValidity(newValue, this.state.formElements[controlName].validation),
                touched: true
            }
        }

        this.setState( {formElements: updatedControls} );  
    }

    inputClickHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.formElements,
            [controlName]: {
                ...this.state.formElements[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.formElements[controlName].validation),
                touched: true
            }
        }

        this.setState( {formElements: updatedControls} );  
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    addServiceHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.formElements) {
            formData[formElementIdentifier] = this.state.formElements[formElementIdentifier].value;
        }

        const newService = {
            ...formData,
            tenantId: this.props.selectedTenant,
            canBeRemoved: true
        };

        this.props.addNewService(this.props.userToken, this.props.selectedTenant, newService);
        this.props.history.replace('/');
    }


    helpClickHandler = (e) => {
        e.preventDefault();

    }

    componentDidMount() {
        //this.loadPageFormData(this.props.userToken, this.props.selectedService, this.pageId);
        //this.props.loadPageData(this.props.userToken, this.props.selectedService, this.pageId);
    }



    loadPageFormData = (token, serviceId, pageId) => {

        // Set State to Page Loading
        this.setState( {pageLoading: true});
        console.log(this.state.pageLoading);

        // Configure Query Parameters for Page Request
        const queryParams = '?auth=' + token + '&orderBy="serviceId"&equalTo="' + serviceId + '"';
        //+ '&orderBy="tenantId"&equalTo="' + tenantId + '"';

    //     AxiosDatastore.get('services.json' + queryParams )
    //     .then( response => {

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

    //         this.setState( { formElements: updatedformElements } );
    //     })
    //     .catch( error => {
    //         console.log('error: ' + error);
    //         this.setState({ pageError: error, pageLoading: false });
    //     });
        
     }

    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];

    //     if (oldCount <= 0) {
    //         return;
    //     }

    //     const updatedCount = oldCount - 1;
    //     const updatedIngredients = { 
    //         ...this.state.ingredients 
    //     };
        
    //     updatedIngredients[type] = updatedCount;

    //     const priceSubtraction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice - priceSubtraction;

    //     this.setState( { 
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     } );
        
    //     this.updatePurchaseState(updatedIngredients);
    // }

    render () {
        // const disabledInfo = {
        //     ...this.props.ings
        // };

        // for (let key in disabledInfo) {
        //     disabledInfo[key] = disabledInfo[key] <= 0
        // }

        // let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
        // let modalContents = null;

        // if ( this.props.ings ) {

        //     modalContents = 
        //         <OrderSummary
        //         ingredients={this.props.ings} 
        //         cancelOrder={this.purchaseCancelHandler}
        //         continueOrder={this.purchaseContinueHandler}
        //         price={this.props.price}/>;

        //     burger =
        //         <Aux>             
        //             <Burger ingredients={this.props.ings}/>
        //             <BuildControls 
        //                 ingredientAdded={ this.props.onIngredientAdded}
        //                 ingredientRemoved={this.props.onIngredientRemoved}
        //                 disabled={disabledInfo}
        //                 price={this.props.price}
        //                 purchasable={() =>this.state.purchasable()}
        //                 ordered={this.purchaseHandler}
        //                 isAuth={this.props.isAuthenticated}/>
        //         </Aux>;
        // }

        let data = <p>Please select a tenant to manage.</p>;
        
        // if ( this.props.isAuthorizationLoading || this.props.isServicesLoading ) {
        //     data = <Spinner />
        // }

        if (this.props.selectedTenant != null) {
            data = <AddNewService 
                formElements={this.state.formElements}
                serviceId={this.props.selectedService} 
                inputChangedHandler={this.inputChangedHandler}
                addServiceHandler={this.addServiceHandler}
                formIsValid={true} />;
        }

        // let authRedirect = null;
        // if (this.state.signUp) {
        //     authRedirect = <Redirect to="/auth"/>;
        // }

        

        return (
            <MainFrame 
                title="Add New Service"
                helpClickHandler={this.helpClickHandler}
            >
                <div className="AddService">
                    <div className="col span-3-of-4">
                        {data}
                    </div>

                </div>
            </MainFrame>
        );
    };
}

// const mapStateToProps = state => {
//     return {
//         userToken: state.authentication.authentication.token,
//         isAuthenticated: state.authentication.authentication.token !== null,
//         isAuthorized: state.authentication.authorized_tenants !== null,
//         selectedTenant: state.authentication.selected_tenant,
//         selectedService: state.services.selectedService,
//         isAuthorizationLoading: state.authentication.loading,
//         isServicesLoading: state.services.loading,        
//         isAuthorizationError: state.authentication.error
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         //addNewService: (token, tenant, serviceObj) => dispatch( actions.addNewService(token, tenant, serviceObj) ) 
        
//         // chooseTenantHandler: (tenantId) => dispatch( actions.selectTenant(tenantId)),
//     }
// }

export default withErrorHandler(AddService);
// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(AddService));