import * as actionTypes from './actionTypes';
import Axios from 'axios';

// Initialize Firebase
const fbconfig = {
    apiKey: "AIzaSyA_oHFJ0Jm1MSaFDaYsvHN5dRlCPl35oug",
    authDomain: "react-burgerproject.firebaseapp.com",
    databaseURL: "https://react-burgerproject.firebaseio.com",
    projectId: "react-burgerproject",
    storageBucket: "react-burgerproject.appspot.com",
    messagingSenderId: "1046792676719"
  };

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail= (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout= (expirationTime) => {
    return dispatch => {
        setTimeout( () => {
            dispatch( logout() )
        }, expirationTime * 1000);
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};


export const authCheckState= () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(!token || !userId) {
            dispatch( logout() );
        } else {
            const expirationDate = localStorage.getItem('expirationDate');
            if (expirationDate <= new Date() ) {
                dispatch( logout() );
            } else {
                dispatch( authSuccess(token, userId ));
                dispatch( checkAuthTimeout( (new Date(expirationDate).getTime() - new Date().getTime()) / 1000 ));
            }
            
        }
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch( authStart() );

        // Sign-Up
        if(isSignUp) {
            const authPayload = {
                email: email,
                password: password,
                returnSecureToken: true
            }
            Axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + fbconfig.apiKey, authPayload)
            .then( response => {
                console.log(response);
                const expirationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch( authSuccess(response.data.idToken, response.data.localId) );
                dispatch( checkAuthTimeout(response.data.expiresIn) );
            })
            .catch(error => {
                console.log(error);
                dispatch( authFail(error.response.data.error) );
            });
        } else {
        
        //Sign-In
            const authPayload = {
                email: email,
                password: password,
                returnSecureToken: true
            }
            Axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + fbconfig.apiKey, authPayload)
            .then( response => {
                console.log(response);
                const expirationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch( authSuccess(response.data.idToken, response.data.localId) );
                dispatch( checkAuthTimeout(response.data.expiresIn) );
            })
            .catch(error => {
                console.log(error);
                dispatch( authFail(error.response.data.error) );
            });

        }
    };
}