import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import MainFrame from '../../../components/General/MainFrame/MainFrame';
//import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../components/General/withErrorHandler/withErrorHandler';
import ServiceGeneralDefinition from '../../../components/Strategy/ServiceGeneralDefinition/ServiceGeneralDefinition';


// import * as burgerBuilderActions from '../../store/actions/index';


// const INGREDIENT_PRICES = {
//     salad: 0.5,
//     bacon: 0.7,
//     meat: 1.3,
//     cheese: 0.4
// }
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

class ServiceDashboard extends Component {

    state = {
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
                    valid: false,
                    touched: false
                },
                id: {
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
                    valid: false,
                    touched: false
                }
        },
        isSignUp: true
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

    // submitHandler = (event) => {
    //     event.preventDefault();
    //     this.props.onAuth(this.state.loginControls.email.value, this.state.loginControls.password.value, this.state.loginOption);
    // }


    helpClickHandler = (e) => {
        e.preventDefault();

    }

    componentDidMount() {
        // this.props.initIngredients();
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

        let data = <p>Please select a service to manage.</p>;
        
        if ( this.props.isAuthorizationLoading || this.props.isServicesLoading ) {
            data = <Spinner />
        }

        if (this.props.selectedService != null && this.props.selectedTenant != null) {
            data = <ServiceGeneralDefinition 
                formElements={this.state.formElements} 
                serviceId={this.props.selectedService} 
                inputChangedHandler={this.inputChangedHandler}/>;
        }

        // let authRedirect = null;
        // if (this.state.signUp) {
        //     authRedirect = <Redirect to="/auth"/>;
        // }

        

        return (
            <MainFrame 
                title="My Service Dashboard"
                helpClickHandler={this.helpClickHandler}
            >
                <div className="ServiceDashboard">
                    <div className="col span-3-of-4">
                        {data}
                    </div>

                </div>
            </MainFrame>
        );
    };
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authentication.authentication.token !== null,
        isAuthorized: state.authentication.authorized_tenants !== null,
        selectedTenant: state.authentication.selected_tenant,
        selectedService: state.services.selectedService,
        // isAuthorizationLoading: true,
        isAuthorizationLoading: state.authentication.loading,
        isServicesLoading: state.services.loading,        
        isAuthorizationError: state.authentication.error,
        isServicesError: state.services.error
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default withErrorHandler(ServiceDashboard);
// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ServiceDashboard));