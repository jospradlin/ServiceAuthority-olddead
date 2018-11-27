import React from 'react';
import cssClasses from './BuildControl.css';

const buildcontrol = (props) => {


    return(
        <div className={cssClasses.BuildControl}> 
            <div className={cssClasses.Label}>{props.label}</div>
            <button onClick={props.removed} className={cssClasses.Less} disabled={props.disabled}>Less</button>
            <button onClick={props.added} className={cssClasses.More}>More</button>
        </div>
    );
};

export default buildcontrol ;