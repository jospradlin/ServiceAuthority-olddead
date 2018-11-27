import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button';
//import cssClasses from './Modal.css';

class OrderSummary extends Component {

    /* Should actually be a functional component.  Doesn't have to be a class.
    componentWillUpdate() {
        console.log('[OrderSummary] Will Update.');
    }
    */

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map( igKey => {
                return <li key={igKey}>
                            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                        </li>
                });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.cancelOrder}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.continueOrder}>CONTINUE</Button>
            </Aux>
        );
    }
}


export default OrderSummary;