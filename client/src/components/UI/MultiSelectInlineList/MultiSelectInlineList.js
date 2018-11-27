import React from 'react';
import './MultiSelectInlineList.css';
import Highlight from './Highlight/Highlight';

const multiSelectInlineList = (props) => {
    
    let elements = null;
    elements = props.userList.map( formElement => (
            <Highlight 
                key={formElement.userId} role={formElement.role}
                clicked={ (event) => props.removeUserClickHandler(event, formElement.userId)} >
            {formElement.name}
            </Highlight>
    ));

    return (

        <div className="MultiSelectInlineList">
            {elements}
        </div>
    );

}

export default multiSelectInlineList;


// changed={ (event) => props.removeUserClickHandler(event, formElement.userId)} 