import Axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngredients = (ings) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ings
    }
}

export const setError = () => {
    return {
        type: actionTypes.SET_ERROR
    }
}

export const initIngredients = () => {
    return dispatch => {
        Axios.get('ingredients.json')
            .then( response => {
                dispatch(setIngredients(response.data));
            }) 
            .catch( error => {
                dispatch(setError());
            });
    };
};