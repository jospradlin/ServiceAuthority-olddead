import Axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFailed= (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    };
};

export const purchaseBurgerStart= () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const startPurchaseOrder = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        Axios.post("/orders.json?auth=" + token, orderData)
        .then( response => {
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        }) 
        .catch( error => {
            dispatch(purchaseBurgerFailed(error));
        });
    };
};

export const purchaseInit= () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};


export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch( fetchOrdersStart() );

        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';

        Axios.get('orders.json' + queryParams )
        .then( response => {

            const fetchedOrders = [];
            for( let key in response.data ) {
                fetchedOrders.push({ 
                    ...response.data[key],
                    id: key
                });
            }
            console.log(fetchedOrders);
            dispatch(fetchOrdersSuccess(fetchedOrders));
            
        }) 
        .catch( error => {
            dispatch(fetchOrdersFailed(error));
        });



    };
};