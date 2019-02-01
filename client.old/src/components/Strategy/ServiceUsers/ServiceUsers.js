import React, {Component} from 'react';
import './ServiceUsers.css';
import './ServiceUsers-theme.css';

//import Input from '../../UI/Input/Input';
//import Highlight from '../../UI/Highlight/Highlight';
import MultiSelectInlineList from '../../UI/MultiSelectInlineList/MultiSelectInlineList';
import ValidationIcon from '../../UI/ValidationIcon/ValidationIcon';
//import DynamicInputSelector from '../../UI/DynamicInputSelector/DynamicInputSelector';
//import Button from '../../UI/Button/Button';
import Autosuggest from 'react-autosuggest';


class ServiceUsers extends Component {
    
    state = {
        value: '',
        suggestions: []
    }

    // Teach Autosuggest how to calculate suggestions for any given input value.
       getUserObject = value => {

            console.log('value: ' + value);

            return this.props.filteredUsersResult.filter(user =>
                user.name === value
            );
    };

    stopFormSubmit = (event) => {
        event.preventDefault();
    }

    handleKeyPress = (event) => {

        if(event.key === 'Enter'){
            event.preventDefault();
            const userObjSubmitted = this.getUserObject(this.state.value);
            if (userObjSubmitted.length === 1) {
                this.props.addUserClickHandler(userObjSubmitted[0]);
            }
            
        }
    };

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
            
       // Teach Autosuggest how to calculate suggestions for any given input value.
        getSuggestions = value => {
            const inputValue = value.trim().toLowerCase();
            const inputLength = inputValue.length;
    
            return inputLength === 0 ? [] : this.props.filteredUsersResult.filter(lang =>
            lang.name.toLowerCase().slice(0, inputLength) === inputValue
            );
        };
    
    getSuggestionValue = suggestion => suggestion.name;

    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
        <div className="ServiceUsers-DynamicMenu-Suggestion"> 
            {suggestion.name}
        </div>
    );


    // onChange = (event, { newValue }) => {
    //     this.setState({
    //       value: newValue
    //     });
    // };
    



    render() {
        //const value = this.props.filterUser;

        const inputProps = {
            placeholder: 'Type a Tenant User',
            value: this.state.value,
            onChange: this.onChange,
            onKeyPress: this.handleKeyPress
        };
        // const formElementsArray = [];
        // for (let key in props.formElements) {



        // if(props.formElements /*&& props.pageData && props.pageData[0]*/ ) {

        //         //const dataValue = props.pageData[0][key];
                
        //         let configObj = props.formElements[key];
        //         //configObj.value = props.pageData[key];

        //         formElementsArray.push({
        //             id: key,
        //             config: configObj
        //         });
        //     }
        // }

        // let loginForm = formElementsArray.map( formElement => {
                
        //         if( formElement.config.elementType === 'select') {
        //             return <SelectInput key={formElement.id}
        //                 formId={formElement.id}  
        //                 elementType={formElement.config.elementType} 
        //                 elementConfig={formElement.config.elementConfig}
        //                 value={formElement.config.value}
        //                 invalid={!formElement.config.valid}
        //                 disabled={formElement.config.disabled}
        //                 shouldValidate={formElement.config.validation}
        //                 touched={formElement.config.touched}
        //                 changed={props.inputChangedHandler} 
        //             />;
        //         }
        //         else {
        //             return <Input key={formElement.id} 
        //                 elementType={formElement.config.elementType} 
        //                 elementConfig={formElement.config.elementConfig}
        //                 value={formElement.config.value}
        //                 invalid={!formElement.config.valid}
        //                 shouldValidate={formElement.config.validation}
        //                 disabled={formElement.config.disabled}
        //                 touched={formElement.config.touched}
        //                 changed={ (event) => props.inputChangedHandler(event, formElement.id, null)} 
        //             />;
        //         }
        
        //     }

        // );
        
        return (
            <div className="ServiceUsers">
                <div className="ServiceUsers-Header">
                    <label>Users</label>
                    <p>This is descriptive text for this particular portlet.   This text can
                        provide useful functional information as to the context of what the user
                        needs to provide in terms of data inside the application.   The more UX
                        inside the application the better, usability is key to business applications.
                    </p>
                </div>
                <div className="ServiceUsers-Body">
                    <form onSubmit={this.stopFormSubmit}>

                        <label className="Input-Label">Service Team Members</label>
                        <MultiSelectInlineList userList={this.props.userList} 
                            removeUserClickHandler={this.props.removeUserClickHandler} />

                        <label className="Input-Label">Add Team Members</label>
                        <div>
                            <Autosuggest
                                suggestions={this.state.suggestions}
                                highlightFirstSuggestion={true}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={this.getSuggestionValue}
                                renderSuggestion={this.renderSuggestion}
                                inputProps={inputProps}
                            />
                            <ValidationIcon/>
                        </div>
                        
                        
                        {/* <DynamicInputSelector filterUser={props.filterUser} 
                            filteredResults={props.filteredUsersResult}
                            filterChangedHandler={props.filterChangedHandler}
                            addUserClickHandler={props.addUserClickHandler}/> */}
                    </form>  
                </div>
            </div>
        );
    }
};

export default ServiceUsers;
