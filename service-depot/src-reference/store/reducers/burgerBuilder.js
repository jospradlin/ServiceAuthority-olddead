import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    meat: 1.3,
    cheese: 0.4
}

const initialState = {
    // ingredients: {
    //     salad: 0,
    //     bacon: 0,
    //     cheese: 0,
    //     meat: 0
    // },
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients, 
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true 
    };
    return updateObject( state, updatedState );
};

const removeIngredient = (state, action) => {
    const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
    const updatedIngs = updateObject(state.ingredients, updatedIng);
    const updatedSt = {
        ingredients: updatedIngs, 
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true  
    };
    return updateObject( state, updatedSt );
};

const setIngredients = (state, action) => {
    const updateState = {
        ingredients: action.ingredients,
        totalPrice: 4,
        building: false
    };
    return updateObject( state, updateState );
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.ADD_INGREDIENT): return addIngredient(state, action);
            
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            //     },
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            // };
        case(actionTypes.REMOVE_INGREDIENT): return removeIngredient(state, action);

            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            //     },
            //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            // };
        case(actionTypes.SET_INGREDIENTS): return setIngredients( state, action);

            // return {
            //     ...state,
            //     ingredients: action.ingredients,
            //     totalPrice: 4
            // };
        case(actionTypes.SET_ERROR):
            return updateObject( state, {error: true} );
            // return {
            //     ...state,
            //     error: true
            // };
        default:
            return state;
    }
    //return state;
};

export default reducer;