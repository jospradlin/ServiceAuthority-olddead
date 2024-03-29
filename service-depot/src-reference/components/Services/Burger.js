import React from 'react';

// If we want Routing on a nonRoutable Component
//import { withRouter } from 'react-router-dom';

import cssClasses from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map( (_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            }); 
        })
        .reduce( (arr, el) => {
            return arr.concat(el);
        }, []);

    //console.log(transformedIngredients);
    if( transformedIngredients.length === 0 ) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    

    return(
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;

// If we want Routing on a nonRoutable Component
//export default withRouter(burger);