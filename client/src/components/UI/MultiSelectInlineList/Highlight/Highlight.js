import React from 'react';
import './Highlight.css';

const highlight = (props) => (
    <span
        onClick={props.clicked}
        disabled={props.disabled}
        className="Highlight">
        {props.children}
        {(props.role === 'admin') ? <i className="ion-ios-star"></i> : null }
    
    </span>
);

export default highlight;