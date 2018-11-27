import React from 'react';
import cssClasses from './Button.css';

const button = (props) => (
    <button 
        onClick={props.clicked}
        disabled={props.disabled}
        className={[cssClasses.Button, cssClasses[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default button;