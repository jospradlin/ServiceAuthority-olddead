import React from 'react';
import cssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildcontrols = (props) => { 
    return(
        <div className={cssClasses.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            { controls.map(cntl => {
                return <BuildControl 
                            key={cntl.label} 
                            label={cntl.label} 
                            added={() => props.ingredientAdded(cntl.type)}
                            removed={() => props.ingredientRemoved(cntl.type)}
                            disabled={props.disabled[cntl.type]}/>
            }
            )}
            
            <button 
                onClick={props.ordered}
                disabled={!props.purchasable}
                className={cssClasses.OrderButton}
                        >{ props.isAuth ? 'ORDER NOW' : 'SIGN UP' }
                </button>
        </div>
    );
};

export default buildcontrols;