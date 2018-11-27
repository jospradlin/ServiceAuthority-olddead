import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Aux from '../../hoc/Aux/Aux';
// import Burger from '../../components/Burger/Burger';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
// import Axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
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
        purchasing: false,
        signUp: false
        // loading: false,
        // error: false
    }

    // updatePurchaseState (ingredients) {

    //     const sum = Object.keys(ingredients)
    //         .map( igKey => {
    //             return ingredients[igKey];
    //         })
    //         .reduce( (sum, el) => {
    //             return sum + el;
    //         }, 0);   
            
    //     return sum > 0;
    // }

    // updatePurchaseState (ingredients) {

    //     const sum = Object.keys(ingredients)
    //         .map( igKey => {
    //             return ingredients[igKey];
    //         })
    //         .reduce( (sum, el) => {
    //             return sum + el;
    //         }, 0);   
            
    //     this.setState( {purchasable: sum > 0});
    // }

    // purchaseHandler = () => {
    //     if (this.props.isAuthenticated) {
    //         this.setState({purchasing: true});
    //     } else {
    //         this.props.onSignUpRedirect('/checkout');
    //         this.props.history.push("/auth");
    //     }
        
    // }

    // purchaseCancelHandler = () => {
    //     this.setState({purchasing: false});
    // }

    // purchaseContinueHandler = () => {
    //     this.props.onInitPurchase();
    //     this.props.history.push('/checkout');
    // }
        // this.setState( {loading: true} );
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Jeremiah Spradlin',
        //         address: {
        //             street: 'Teststreet 1',
        //             zipCode: '12345',
        //             country: 'US'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // };
        
        // Axios.post('/orders.json', order)
        //     .then( response => {
        //         this.setState( {loading: false, purchasing: false} );
        //     }) 
        //     .catch( error => {
        //         this.setState( {loading: false, purchasing: false} );
        //     });


        //this.props.history.push('/checkout');



        // REMOVED BY REDUX
        // const queryParams = [];
        // for (let i in this.state.ingredients) {
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        // }

        // queryParams.push('totalPrice=' + this.state.totalPrice);

        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' + queryString
        // })




    

    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = { 
    //         ...this.state.ingredients 
    //     };
    //     updatedIngredients[type] = updatedCount;

    //     const priceAddition = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;


    //     this.setState( { 
    //         ingredients: updatedIngredients,
    //         totalPrice: newPrice
    //     } );

    //     this.updatePurchaseState(updatedIngredients);
    // }

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

        /*if ( this.state.loading) {
            modalContents = <Spinner />
        }*/

        // let authRedirect = null;
        // if (this.state.signUp) {
        //     authRedirect = <Redirect to="/auth"/>;
        // }  

        return (
            <Aux>
                Service Dashboard
                {/* {authRedirect}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {modalContents}
                </Modal>
                {burger} */}
            </Aux>
        );
    };
}

// const mapStateToProps = state => {
//     return {
//         ings: state.burgerBuilder.ingredients,
//         price: state.burgerBuilder.totalPrice,
//         error: state.burgerBuilder.error,
//         isAuthenticated: state.auth.token !== null
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onIngredientAdded: (ingName) => dispatch(burgerBuilderActions.addIngredient(ingName)),
//         onIngredientRemoved: (ingName) => dispatch(burgerBuilderActions.removeIngredient(ingName)),
//         initIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
//         onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit()),
//         onSignUpRedirect: (path) => dispatch(burgerBuilderActions.setAuthRedirectPath(path))
//     }
// }



export default withErrorHandler(ServiceDashboard);
//export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, Axios));