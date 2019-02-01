import React from 'react';
import './Input.css';

import SelectInput from '../SelectInput/SelectInput';

const input = (props) => {
 
    let inputElement = null;
    const inputClasses = ["Input-InputElement"];
    const inputImageClasses = ["Input-ValueElement"];
    const textareaClasses = ["Input-TextareaElement"];
    const selectClasses = ["Input-SelectElement"];
    const labelClasses = ["Input-LabelElement"];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Input-Invalid");
        inputImageClasses.unshift("Input-Invalid");
        textareaClasses.push("Input-Invalid"); 
        selectClasses.push("Input-Invalid"); 
        labelClasses.push("Input-Invalid"); 
    }

    if(props.disabled) {
        inputClasses.push("Input-Disabled");
        inputImageClasses.unshift("Input-Disabled");
        textareaClasses.push("Input-Disabled"); 
        selectClasses.push("Input-Disabled"); 
        labelClasses.push("Input-Disabled");   
    }

    // Input Image Rendering
    let selectImage = null;
    if (props.elementConfig && props.elementConfig.image) {
        selectImage = (
                <i onClick={this.selectClickHandler} className="ion-person Input-ImageElement"></i>
        );
    }

    if (props.elementType && props.elementConfig) {
        switch (props.elementType) {
            case ('input'):
                inputElement = (
                    <div className={inputClasses.join(' ')} style={{display: 'block'}}>
                        {selectImage}
                        <input className={inputImageClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} disabled={props.disabled}/>
                    </div>
                );
                break;
            case('email'):
                inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} disabled={props.disabled}/>;
                break;
            case('select'):
                inputElement = <SelectInput {...props} />
                break;
            case('textarea'):
                inputElement = <textarea className={textareaClasses.join(' ')} {...props.elementConfig} onChange={props.changed} disabled={props.disabled} value={props.value} />;
                break;
            default:
                inputElement = <input onChange={props.changed} className="Input-InputElement" {...props.elementConfig} disabled={props.disabled} value={props.value}/>
        }
    }
 
    return (
        <div className="Input">
            <label className="Input-Label">{props.elementConfig.label}</label>
            { (props.shouldValidate && props.shouldValidate.required) ? <span className="Input-RequiredAsterick">*</span> : null}
            {inputElement}
        </div>
    );

};

export default input;