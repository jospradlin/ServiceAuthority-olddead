import React from 'react';
import './ValidationIcon.css';

const validationIcon = (props) => {

    let iconType = <i className="ion-close-round"></i>;
    if (props.validationType === 'Success') {
        iconType = <i className="ion-checkmark-round"></i>
    }

    return (
        <div className={["ValidationIcon", props.validationType].join(' ')}
            disabled={props.disabled}>
            {iconType}
        </div>
    );

}
export default validationIcon;