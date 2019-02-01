import React from 'react';
import cssClasses from './Backdrop.css';

const backdrop = (props) => (
    props.show ? 
        <div 
            onClick={props.clicked}
            className={cssClasses.Backdrop}>
        </div> : null
);

export default  backdrop;