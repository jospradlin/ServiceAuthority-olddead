import * as actionTypes from './actionTypes';
import Axios from 'axios';
import AxiosDatastore from '../datasources/axios-datastore';

//Initialize Vault
// const vaultconfig = {
//     hostname: 'vault',
//     port: 8200
// };

const fbconfig = {
    apiKey: "AIzaSyA85onYHfYmJwNOLEgJIpORSeOO69fxb-k",
    authDomain: "service-depot.firebaseapp.com",
    databaseURL: "https://service-depot.firebaseio.com",
    projectId: "service-depot",
    storageBucket: "service-depot.appspot.com",
    messagingSenderId: "510556158681"
  };

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};


export const authSuccess = (token, userId, tenantId) => {
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

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout( () => {
            dispatch( logout() )
        }, expirationTime * 1000);
    };
};

export const fetchUserAuthorizationStart = () => {
    return {
        type: actionTypes.FETCH_USER_AUTHORIZATION_START
    };
};

export const fetchUserAuthorizationFailed= (error) => {
    return {
        type: actionTypes.FETCH_USER_AUTHORIZATION_FAILED,
        error: error
    };
};

export const fetchUserAuthorizationSuccess = (authorizationToken) => {
    return {
        type: actionTypes.FETCH_USER_AUTHORIZATION_SUCCESS,
        authorizationToken: authorizationToken
    };
};

export const selectTenant = (tenantId) => {
    return {
        type: actionTypes.SELECT_TENANT,
        tenant: tenantId
    };
}

export const getUserAuthorizationData = (token, userId) => {
    return dispatch => {

        dispatch(fetchUserAuthorizationStart());
        const queryParams = '?auth=' + token;
        // + '&orderBy="userId"&equalTo="' + userId + '"';

        AxiosDatastore.get('users/' + userId + '/tenants.json' + queryParams )
        .then( response => {

            const fetchedUserAuthorization = [];
            for( let key in response.data ) {
                fetchedUserAuthorization.push({ 
                    ...response.data[key],
                    id: key
                });
            }

            dispatch(fetchUserAuthorizationSuccess(fetchedUserAuthorization));
            
        }) 
        .catch( error => {
            dispatch(fetchUserAuthorizationFailed(error));
        });






        // return dispatch => {
        //     Axios.get('ingredients.json')
        //         .then( response => {
        //             dispatch(setIngredients(response.data));
        //         }) 
        //         .catch( error => {
        //             dispatch(setError());
        //         });
        // };




        
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
                dispatch( getUserAuthorizationData(token, userId) );
                dispatch( authSuccess(token, userId ));
                dispatch( checkAuthTimeout( (new Date(expirationDate).getTime() - new Date().getTime()) / 1000 ));
            }
            
        }
    };
};

export const auth = (email, password, isLogin) => {
    return dispatch => {
        dispatch( authStart() );

        // Sign-Up
        if(!isLogin) {
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


                // Get User Authorization Data Prior to Auth Success
                // const queryParams = '?auth=' + response.data.idToken;
                // // + '&orderBy="userId"&equalTo="' + userId + '"';
                // AxiosDatastore.get('users/' + response.data.localId + '.json' + queryParams )
                // .then( response2 => {
                //     const fetchedUserAuthorization = [];
                //     for( let key in response2.data ) {
                //         fetchedUserAuthorization.push({ 
                //             ...response2.data[key],
                //             id: key
                //         });
                //     }
                //     console.log(fetchedUserAuthorization);
                //     dispatch(fetchUserAuthorizationSuccess(fetchedUserAuthorization));
                // }) 
                // .catch( error2 => {
                //     console.log(error2);
                //     dispatch( authFail(error2.response.data.error) );
                // });

                // console.log('again: :' + fetchedUserAuthorization);
                dispatch( getUserAuthorizationData(response.data.idToken, response.data.localId) );
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




/* VAULT TESTING 
export const auth = (userNtenant, password, isLogin) => {
    return dispatch => {
        dispatch( authStart() );

        // Sign-Up
        if(!isLogin) {
            // const authPayload = {
            //     email: email,
            //     password: password,
            //     returnSecureToken: true
            // }
            // //Axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + fbconfig.apiKey, authPayload)
            // .then( response => {
            //     console.log(response);
            //     const expirationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000);
            //     localStorage.setItem('token', response.data.idToken);
            //     localStorage.setItem('userId', response.data.localId);
            //     localStorage.setItem('expirationDate', expirationDate);
            //     dispatch( authSuccess(response.data.idToken, response.data.localId) );
            //     dispatch( checkAuthTimeout(response.data.expiresIn) );
            // })
            // .catch(error => {
            //     console.log(error);
            //     dispatch( authFail(error.response.data.error) );
            // });
        } else {
        
        //Sign-In
            // const authPayload = {
            //     email: email,
            //     password: password,
            //     returnSecureToken: true
            // }
            //Axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + fbconfig.apiKey, authPayload)
            const [username, tenant] = userNtenant.split('@');
            const vaultPayload = { password: password };
            Axios.post("https://" + vaultconfig.hostname + ":" + vaultconfig.port + "/v1/auth/" + tenant + "/login/" + username, vaultPayload)
            .then( response => {
                console.log(response);
                const expirationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000);
                localStorage.setItem('token', response.data.auth.client_token);
                localStorage.setItem('username', username);
                localStorage.setItem('tenant', tenant)
                localStorage.setItem('expirationDate', expirationDate);
                dispatch( authSuccess(response.data.auth.client_token, response.data.localId) );
                dispatch( checkAuthTimeout(response.data.expiresIn) );
            })
            .catch(error => {
                console.log(error);
                dispatch( authFail(error.response.data.error) );
            });

        }
    };
}
*/