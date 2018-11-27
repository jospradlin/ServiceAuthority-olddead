import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    authentication: {
            token: null,
            userId: null
    },
    authorized_tenants: null,
    selected_tenant: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

// const addIngredient = (state, action) => {
//     const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
//     const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
//     const updatedState = {
//         ingredients: updatedIngredients, 
//         totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName] 
//     };
//     return updateObject( state, updatedState );
// };

// const removeIngredient = (state, action) => {
//     const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
//     const updatedIngs = updateObject(state.ingredients, updatedIng);
//     const updatedSt = {
//         ingredients: updatedIngs, 
//         totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName] 
//     };
//     return updateObject( state, updatedSt );
// };

const authStart = (state, action) => {
    const updateState = {
        error: null,
        loading: true
    };
    return updateObject( state, updateState);
};

const authSuccess= (state, action) => {
    const updateState = {
        authentication: {
                token: action.idToken,
                userId: action.userId
        },
        error: null,
        loading: false
    };
    return updateObject( state, updateState);
};

const authFail = (state, action) => {
    const updateState = {
        error: action.error,
        loading: false
    };
    return updateObject( state, updateState);
};

const setAuthRedirectPath = (state, action) => {
    const updateState = {
        authRedirectPath: action.path
    };
    return updateObject( state, updateState);
};

const authLogout = (state, action) => {
    return updateObject( state, initialState);
};

const fetchUserAuthorizationStart = (state, action) => {
    const updateState = {
        error: null
    };
    return updateObject( state, updateState);
};

const fetchUserAuthorizationSuccess= (state, action) => {
    let selectTenant = null;
    if(action.authorizationToken.length > 0) {
        selectTenant = action.authorizationToken[0].id;
    }
    
    const updateState = {
        authorized_tenants: action.authorizationToken,
        selected_tenant: selectTenant,
        error: null
    };
    return updateObject( state, updateState);
};

const fetchUserAuthorizationFail = (state, action) => {
    const updateState = {
        error: action.error
    };
    return updateObject( state, updateState);
};

const selectTenant = (state, action) => {
    const updatedState = {
        selected_tenant: action.tenant
    };
    return updateObject(state, updatedState);
};

// const getAuthUserAuthorization = (state, action) => {
//     const updateState = {
//         error: null,
//         loading: true
//     };
//     return updateObject( state, updateState);
// };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.AUTH_START): return authStart(state, action);
        case(actionTypes.AUTH_SUCCESS): return authSuccess(state, action);
        case(actionTypes.AUTH_FAIL): return authFail( state, action);
        case(actionTypes.AUTH_LOGOUT): return authLogout( state, action);
        case(actionTypes.SET_AUTH_REDIRECT_PATH): return setAuthRedirectPath( state, action);
        case(actionTypes.FETCH_USER_AUTHORIZATION_START): return fetchUserAuthorizationStart( state, action);
        case(actionTypes.FETCH_USER_AUTHORIZATION_SUCCESS): return fetchUserAuthorizationSuccess( state, action);
        case(actionTypes.FETCH_USER_AUTHORIZATION_FAILED): return fetchUserAuthorizationFail( state, action);
        case(actionTypes.SELECT_TENANT): return selectTenant(state, action);
        default:
            return state;
    }
    //return state;
};

export default reducer;