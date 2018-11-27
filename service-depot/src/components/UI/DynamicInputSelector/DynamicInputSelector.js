import React, { Component } from 'react';
import './DynamicInputSelector.css';

import Highlight from '../DynamicInputSelector/HighlightFullSpan/HighlightFullSpan';

class DynamicInputSelector extends Component {
 
    state = {
        filter: ''
    }

    addUser = (userObj) => {
        this.props.addUserClickHandler(userObj);
        this.setState( {filter: ''} );
    }


    // onChange(event, { newValue, method }) {
    //     this.setState({
    //       value: (method === 'click' || method === 'enter') ? '' : newValue
    //     });
    //   }
    filterChangedHandler = (event) => {
        this.setState( {filter: event.target.value} ); 
    }


    render () {
        //let inputElement = null;
        const inputClasses = ["DynamicInputSelector-InputElement"];
        // const inputImageClasses = ["Input-ValueElement"];
        // const textareaClasses = ["Input-TextareaElement"];
        // const selectClasses = ["Input-SelectElement"];
        // const labelClasses = ["Input-LabelElement"];

        // if (props.invalid && props.shouldValidate && props.touched) {
        //     inputClasses.push("Input-Invalid");
        //     inputImageClasses.unshift("Input-Invalid");
        //     textareaClasses.push("Input-Invalid"); 
        //     selectClasses.push("Input-Invalid"); 
        //     labelClasses.push("Input-Invalid"); 
        // }

        if(this.props.disabled) {
            inputClasses.push("DynamicInputSelector-Disabled");
        //     inputImageClasses.unshift("Input-Disabled");
        //     textareaClasses.push("Input-Disabled"); 
        //     selectClasses.push("Input-Disabled"); 
        //     labelClasses.push("Input-Disabled");   
        }

        // Input Image Rendering
        // let selectImage = null;
        // if (props.elementConfig && props.elementConfig.image) {
        //     selectImage = (
        //             <i onClick={this.selectClickHandler} className="ion-person Input-ImageElement"></i>
        //     );
        // }

        // if (props.elementType && props.elementConfig) {
        //     switch (props.elementType) {
        //         case ('input'):
                    // inputElement = (
                    //     <div className={inputClasses.join(' ')} style={{display: 'block'}}>
                    //         {selectImage}
                    //         <input className={inputImageClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} disabled={props.disabled}/>
                    //     </div>
        //             );
        //             break;
        //         case('email'):
        //             inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} disabled={props.disabled}/>;
        //             break;
        //         case('select'):
        //             inputElement = <SelectInput {...props} />
        //             break;
        //         case('textarea'):
        //             inputElement = <textarea className={textareaClasses.join(' ')} {...props.elementConfig} onChange={props.changed} disabled={props.disabled} value={props.value} />;
        //             break;
        //         default:
        //             inputElement = <input onChange={props.changed} className="Input-InputElement" {...props.elementConfig} disabled={props.disabled} value={props.value}/>
        //     }
        // }
    
        let elements = null;

        if(this.props.filteredResults) {
            elements = this.props.filteredResults.map( formElement => (
                    <Highlight 
                        key={formElement.userId} role={formElement.role}
                        clicked={(event) => this.addUser(formElement)}
                    >
                    {formElement.name}
                    </Highlight>
            ));
        }

        let submenu = null;
        if (this.state.filter !== '') {
            submenu = (
                <div className="DynamicInputSelector-DynamicMenu"> 
                    {elements}
                </div>
            );
        }



        return (
            <div className="DynamicInputSelector">
                <input value={this.props.value} onChange={this.filterChangedHandler}  disabled={this.props.disabled}/>
                {submenu}
            </div>
        );
    }

};

export default DynamicInputSelector;