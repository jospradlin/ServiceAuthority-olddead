import React from 'react';
import cssClasses from './Order.css';

const order = (props) => {

    const ingredients = [];
    console.log('PROPS: ', props.ingredients);
    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName] });
    }

    console.log('ING: ', ingredients);
    const ingredientsOutput = ingredients.map( ig => {
        return  <span key={ig.name} 
                style={{textTransform: 'capitalize',
                        display: 'inline-block', 
                        margin: '0 8px',
                        border: '1px solid #ccc',
                        padding: '5px'
                        }}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={cssClasses.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong> USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    );
}

export default order;