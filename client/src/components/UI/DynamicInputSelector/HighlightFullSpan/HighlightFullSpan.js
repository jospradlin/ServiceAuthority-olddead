import React from 'react';
import './HighlightFullSpan.css';

const highlightFull = (props) => (
    <div
        onClick={props.clicked}
        disabled={props.disabled}
        className="HighlightFullSpan">
        {props.children}
        {(props.role === 'admin') ? <i className="ion-ios-star"></i> : null }
    
    </div>
);

export default highlightFull;