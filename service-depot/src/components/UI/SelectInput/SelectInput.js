import React, { Component } from 'react';
import './SelectInput.css';

class SelectInput extends Component {

    state = {
        selectOpen: false
    }
 
    selectClickHandler = () => {
        this.setState( { selectOpen: !this.state.selectOpen });
    }

    changeClickHandler = (optionValue) => {
        this.props.changed(null, this.props.formId, optionValue);
        this.selectClickHandler();
    }

    render() {

        let selectElement = null;
        const selectClasses = ["SelectInput-SelectElement"];
        const arrowClasses = ["SelectInput-SelectArrowElement"];
        const labelClasses = ["SelectInput-LabelElement"];
    
        if (this.props.invalid && this.props.shouldValidate && this.props.touched) {
            selectClasses.push("SelectInput-Invalid"); 
            arrowClasses.push("SelectInput-Invalid");
            labelClasses.push("SelectInput-Invalid"); 
        }

        // SELECT - PRIMARY - ELEMENT Rendering
        let selectImage = null;
        if (this.props.elementConfig.image != null) {
            selectImage = (
                <i onClick={this.selectClickHandler} className="ion-person SelectInput-SelectImageElement"></i>
            );
        }

        let selectedDisplayName = { displayValue: '', value: ''};
        if (this.props.value && this.props.elementConfig.options) {
            selectedDisplayName = this.props.elementConfig.options.find( option => option.value === this.props.value );
        }
        
        if (this.props.disabled) {
            selectClasses.push("SelectInput-Disabled"); 
            selectImage = (
                <i className="ion-person SelectInput-SelectImageElement SelectInput-Disabled"></i>
            );
            selectElement = (
                <div className={selectClasses.join(' ')} style={{display: 'block'}}>
                    {selectImage}
                    <div className="SelectInput-SelectValueElement SelectInput-Disabled">
                        { selectedDisplayName.displayValue }
                    </div> 
                </div>
            );
        } else {
            selectElement = (
                <div className={selectClasses.join(' ')} style={{display: 'block'}}>
                    {selectImage}
                    <div className="SelectInput-SelectValueElement" onChange={this.props.changed} onClick={this.selectClickHandler}>
                        { selectedDisplayName.displayValue }
                    </div> 
                    <i onClick={this.selectClickHandler} className="ion-arrow-down-b SelectInput-SelectArrowElement"></i> 
                </div>
            );
        }

        // SELECT - SUBMENU - ELEMENT Rendering
        let submenuElements = (
            <div className="SelectInput-Submenu">
                {   this.props.elementConfig.options.map( option => {

                    if( this.props.value === option.value ) {
                        return (
                            <div key={option.value} className="SelectInput-Submenu-Selected"
                                onClick={ () => this.changeClickHandler(option.value)}>
                                {option.displayValue}
                            </div>
                        );
                    }
                    else {
                        return (
                            <div key={option.value}
                                onClick={() => this.changeClickHandler(option.value)}>
                                {option.displayValue}
                            </div>
                        );
                        }
                    })
            }
            </div>
        );


        return (
            <div className="SelectInput">
                <label className={labelClasses.join(' ')}>{this.props.elementConfig.label}</label> 
                { (this.props.shouldValidate && this.props.shouldValidate.required) ? <span className="SelectInput-RequiredAsterick">*</span> : null }
                {selectElement}
                { (this.state.selectOpen) ? submenuElements : null }
            </div>
        );
    }

}

export default SelectInput;