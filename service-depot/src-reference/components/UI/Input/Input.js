import React from 'react';
import cssClasses from './Input.css';

const input = (props) => {
 
    let inputElement = null;
    const inputClasses = [cssClasses.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(cssClasses.Invalid);  
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
         case('email'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        case('select'):
            inputElement = (
                <select onChange={props.changed}
                    className={inputClasses.join(' ')}  
                    value={props.value}>
                    {props.elementConfig.options.map( option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>   
            );
            break;
        default:
            inputElement = <input onChange={props.changed} className={cssClasses.InputElement} {...props.elementConfig} value={props.value}/>
    }
 
    return (
        <div className={cssClasses.Input}>
            <label className={cssClasses.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;