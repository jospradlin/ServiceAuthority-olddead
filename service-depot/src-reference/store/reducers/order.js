import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    error: false,
    loading: false,
    purchased: false
};


const purchaseBurgerSuccess = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId
    };
    const updatedState = {
        orders: state.orders.concat(newOrder ),
        loading: false,
        purchased: true
    };
    return updateObject(state, updatedState);
};

const fetchOrdersSuccess = (state, action) => {
    const updatedState = {
        orders: action.orders,
        loading: false
    };
    return updateObject(state, updatedState);
};

const fetchOrdersFailed = (state, action) => {
    const updatedState = {
        error: true,
        loading: false
    };
    return updateObject(state, updatedState);
};






const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case(actionTypes.PURCHASE_BURGER_SUCCESS): return purchaseBurgerSuccess(state, action);

            // return {
            //     ...state,
            //     orders: state.orders.concat(newOrder ),
            //     loading: false,
            //     purchased: true
            // };
        case(actionTypes.PURCHASE_BURGER_FAILED):
            return updateObject( state, {error: true} );
            // return {
            //     ...state,
            //     error: true
            // };
        case(actionTypes.PURCHASE_BURGER_START):
            return updateObject( state, {loading: true} );
            // return {
            //     ...state,
            //     loading: true
            // };
        case(actionTypes.PURCHASE_INIT):
            return updateObject( state, {purchased: false} );
            // return {
            //     ...state,
            //     purchased: false
            // };

        case(actionTypes.FETCH_ORDERS_SUCCESS): return fetchOrdersSuccess(state, action);

            // return {
            //     ...state,
            //     orders: action.orders,
            //     loading: false
            // };
        case(actionTypes.FETCH_ORDERS_FAILED): return fetchOrdersFailed(state, action);

            // return {
            //     ...state,
            //     error: true,
            //     loading: false
            // };
        case(actionTypes.FETCH_ORDERS_START):
            return updateObject( state, {loading: true} );
            // return {
            //     ...state,
            //     loading: true
            // };
        default:
            return state;
    }
    //return state;
};

export default reducer;