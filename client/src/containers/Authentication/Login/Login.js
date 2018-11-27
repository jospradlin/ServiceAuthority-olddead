import React, { Component } from 'react';
//import { Redirect } from 'react-router-dom';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
//import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import { AUTH_TOKEN } from '../../../constants';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import Button from '../../../components/UI/Button/Button'; 
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Aux from '../../../components/General/Aux/Aux';


//import * as authActions from '../../../store/actions/index';
import './Login.css';
import serviceLogo from '../../../assets/images/logo-red.png';

class Login extends Component {

    state = {
        loginOption: true,
        loginControls: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        label: 'Email Address',
                        placeholder: 'Email Address'
                    },
                    value: '',
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    valid: false,
                    touched: false
                },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    };

    componentDidMount() {
        // if (!this.props.buildingBurger && this.props.redirectPath !== '/') {
        //     this.props.onSetAuthRedirectPath();
        // }
        console.log(this.props);
    }

    inputChangedHandler = (event, controlName) => {
        //console.log(event.target.value);
        // const updatedControls = {
        //     ...this.state.controls,
        // }
        // const updatedFormElement = {
        //     ...updatedControls[controlName]
        // };
        // updatedFormElement.value = event.target.value;
        // updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        // updatedFormElement.touched = true;
        // updatedControls[controlName] = updatedFormElement;
        
        // let fIsValid = true;
        // for (let controlNames in updatedControls) {
        //     fIsValid = updatedControls[controlNames].valid && fIsValid;
        // }

        const updatedControls = {
            ...this.state.loginControls,
            [controlName]: {
                ...this.state.loginControls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.loginControls[controlName].validation),
                touched: true
            }
        }

        this.setState( {loginControls: updatedControls} );
        
    }

    switchAuthStateHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp };
        });
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    loginClickHandler = () => {
        this.setState({loginOption: true});
    }

    signupClickHandler = () => {
        this.setState({loginOption: false});
    }


    submitHandler = (event) => {
        event.preventDefault();
        this._confirm();
    }
        //this.props.onAuth(this.state.loginControls.email.value, this.state.loginControls.password.value, this.state.loginOption);
    

    render() {

        const formElementsArray = [];
        for (let key in this.state.loginControls) {
            formElementsArray.push({
                id: key,
                config: this.state.loginControls[key]
            });
        }

        let loginForm = formElementsArray.map( formElement => (
                <Input key={formElement.id} 
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig} 
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={ (event) => this.inputChangedHandler(event, formElement.id)} />
        ));


        if (this.props.loading) {
            loginForm = <Spinner />;
        }
        
        // let errorMessage = null;
        // if (this.props.error) {
        //     errorMessage = (
        //         <p>{this.props.error.message}</p>
        //     );
        // }

        // let authRedirect = null;
        // if (this.props.isAuthenticated) {
        //     authRedirect = <Redirect to={this.props.redirectPath}/>;

        // }

        let loginMsg = ["loginMsg"];
        let login = ["login"];
        let signupMsg = ["signupMsg", "visibility"];
        let signup = ["signup", "hide"];
        let frontbox = ["Login-frontbox"];
      
        if (!this.state.loginOption) {
            //attachClasses = [cssClasses.SideDrawer, cssClasses.Open];
            loginMsg = ["loginMsg", "visibility"];
            login = ["login", "hide"];
            signupMsg = ["signupMsg"];
            signup = ["signup"];
            frontbox = ["Login-frontbox","moving"];
        }

        return (
            <Aux>
            <div className="Login-Background"> 
                <div className="Login-Logo">
                    <img src={serviceLogo} alt="Service Depot Logo"/>
                    <label>Service Authority</label>
                </div>
            </div>

            <div className="Login-container">
                <div className="Login-backbox">
                    <div className={loginMsg.join(' ')}>
                        <div className="textcontent">
                            <p className="title">Don't have an account?</p>
                            <p>Sign up to save all your graph.</p>
                            <button onClick={this.signupClickHandler}>Sign Up</button>
                        </div>
                    </div>
                    <div className={signupMsg.join(' ')}>
                        <div className="textcontent">
                            <p className="title">Have an account?</p>
                            <p>Log in to see all your collection.</p>
                            <button onClick={this.loginClickHandler}>LOG IN</button>
                        </div>
                    </div>
                </div>

                <div className={frontbox.join(' ')}>
                    <div className={login.join(' ')}>
                        <h2>LOG IN</h2>
                        <form onSubmit={this.submitHandler}>
                        <div className="inputbox">
                                {loginForm}
                        </div>
                        <p>FORGET PASSWORD?</p>
                        <Button btnType="Success">SUBMIT</Button>
                        </form>
                    </div>
                    <div className={signup.join(' ')}>
                        <h2>SIGN UP</h2>
                        <div className="inputbox">
                            <input type="text" name="fullname" placeholder="  FULLNAME"/>
                            <input type="text" name="email" placeholder="  EMAIL"/>
                            <input type="password" name="password" placeholder="  PASSWORD"/>
                        </div>
                        <button>SIGN UP</button>
                    </div>
                </div>
                
            </div>
            </Aux>
        );
    }

    _confirm = async () => {
        // const { name, email, password } = this.state
        const email = this.state.loginControls.email.value;
        const password = this.state.loginControls.password.value;
        const name = null;

        if (this.state.loginOption) {
            const result = await this.props.loginMutation({
                variables: {
                    email,
                    password,
                },
            })
            console.log(`Result: `, result)
            //const { token } = result.data.login
            const token = result.data.vmlogin
            this._saveUserData(token)
        } else {
            const result = await this.props.signupMutation({
                variables: {
                    name,
                    email,
                    password,
                },
            })
            const { token } = result.data.signup
            this._saveUserData(token)
        }
        this.props.history.push(`/`)
    }

    _saveUserData = token => {
        sessionStorage.setItem(AUTH_TOKEN, token);
        this.props.cookies.set('AUTH_TOKEN', token, { 
            path: '/',
            maxAge: 3600
        });
    }

}



// const mapStateToProps = state => {
//     return {
//         loading: state.authentication.loading,
//         error: state.authentication.error,
//         isAuthenticated: state.authentication.token !== null,
//         redirectPath: state.authentication.authRedirectPath
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAuth: (email, passwd, method) => dispatch(authActions.auth(email, passwd, method)),
//         onSetAuthRedirectPath: () => dispatch(authActions.setAuthRedirectPath('/'))
//     }
// }




// export default connect(mapStateToProps, mapDispatchToProps)(Auth);
// export default Auth;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation {
    vmlogin
  }
`


// const LOGIN_MUTATION = gql`
//   mutation LoginMutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//     }
//   }
// `

export default withCookies(compose(
    graphql(SIGNUP_MUTATION, { name: 'signupMutation' }),
    graphql(LOGIN_MUTATION, { name: 'loginMutation' }),
)(Login));

/* <div className={cssClasses.Auth}>
{authRedirect}
{ errorMessage }
<form onSubmit={this.submitHandler}>
    {form}
    <Button btnType="Success">SUBMIT</Button>
</form>
<Button btnType="Danger"
    clicked={this.switchAuthStateHandler}
    >SWITCH TO { this.state.isSignUp ? 'SIGNIN' : 'SIGNUP' }</Button>
</div> 


Trying to make this in NEW FORM
<input type="text" name="email" placeholder="  EMAIL" />                            
<input type="password" name="password" placeholder="  PASSWORD"/>
*/