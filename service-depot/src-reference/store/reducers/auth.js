import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
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
        token: action.idToken,
        userId: action.userId,
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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.AUTH_START): return authStart(state, action);
        case(actionTypes.AUTH_SUCCESS): return authSuccess(state, action);
        case(actionTypes.AUTH_FAIL): return authFail( state, action);
        case(actionTypes.AUTH_LOGOUT): return authLogout( state, action);
        case(actionTypes.SET_AUTH_REDIRECT_PATH): return setAuthRedirectPath( state, action);
        default:
            return state;
    }
    //return state;
};

export default reducer;