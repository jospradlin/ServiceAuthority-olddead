import React from 'react';
import './ServiceGeneralDefinition.css';

import Input from '../../UI/Input/Input';
import SelectInput from '../../UI/SelectInput/SelectInput';
import Button from '../../UI/Button/Button';


const serviceGeneralDefinition = (props) => {
    
    const formElementsArray = [];
    for (let key in props.formElements) {



    if(props.formElements /*&& props.pageData && props.pageData[0]*/ ) {

            //const dataValue = props.pageData[0][key];
            
            let configObj = props.formElements[key];
            //configObj.value = props.pageData[key];

            formElementsArray.push({
                id: key,
                config: configObj
            });
        }
    }

    let loginForm = formElementsArray.map( formElement => {
            
            if( formElement.config.elementType === 'select') {
                return <SelectInput key={formElement.id}
                    formId={formElement.id}  
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    disabled={formElement.config.disabled}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={props.inputChangedHandler} 
                />;
            }
            else {
                return <Input key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    disabled={formElement.config.disabled}
                    touched={formElement.config.touched}
                    changed={ (event) => props.inputChangedHandler(event, formElement.id, null)} 
                />;
            }
    
        }

    );
    
    return (
        <div className="ServiceGeneralDefinition">
            <div className="ServiceGeneralDefinition-Header">
                <label>General</label>
                <p>This is descriptive text for this particular portlet.   This text can
                    provide useful functional information as to the context of what the user
                    needs to provide in terms of data inside the application.   The more UX
                    inside the application the better, usability is key to business applications.
                </p>
            </div>
            <div className="ServiceGeneralDefinition-Body">
                <form onSubmit={props.updateServiceHandler}>
                {loginForm}
                    <Button btnType="Success">Update</Button>
                </form>  
            </div>
        </div>
    );
};

export default serviceGeneralDefinition;
