import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    serviceList: [],
    recentServices: [],
    selectedService: null,
    error: false,
    loading: false,
    pageData: [],
    pageDataLoading: false,
    pageDataError: false
};

const addNewServiceSuccess = (state, action) => {
    let updatedRecentServices = [action.newServiceName];
    if (state.recentServices) {
        for (let serviceId in state.recentServices) {
            if (state.recentServices[serviceId] !== action.selectedService && updatedRecentServices.length < 3) {
                updatedRecentServices.push(state.recentServices[serviceId]);
            }   
        }
    }

    const updatedState = {
        recentServices: updatedRecentServices,
        selectedService: action.newServiceName,
        loading: false
    };
    return updateObject(state, updatedState);
};

const addNewServiceFailed = (state, action) => {
    const updatedState = {
        error: true,
        loading: false
    };
    return updateObject(state, updatedState);
};


const updateServiceSuccess = (state, action) => {
    // let updatedRecentServices = [action.newServiceName];
    // if (state.recentServices) {
    //     for (let serviceId in state.recentServices) {
    //         if (state.recentServices[serviceId] !== action.selectedService && updatedRecentServices.length < 3) {
    //             updatedRecentServices.push(state.recentServices[serviceId]);
    //         }   
    //     }
    // }

    const updatedState = {
        loading: false
        // recentServices: updatedRecentServices,
        // selectedService: action.newServiceName
    };
    return updateObject(state, updatedState);
};

const updateServiceFailed = (state, action) => {
    const updatedState = {
        error: true,
        loading: false
    };
    return updateObject(state, updatedState);
};



const loadServicePageDataSuccess = (state, action) => {
    const updatedState = {
        pageData: action.pageData,
        pageDataLoading: false
    };
    return updateObject(state, updatedState);
};

const loadServicePageDataFailed = (state, action) => {
    const updatedState = {
        pageDataError: true,
        pageDataLoading: false
    };
    return updateObject(state, updatedState);
};


const selectService = (state, action) => {
    let updatedRecentServices = [action.selectedService];
    if (state.recentServices) {
        for (let serviceId in state.recentServices) {
            if (state.recentServices[serviceId] !== action.selectedService && updatedRecentServices.length < 3) {
                updatedRecentServices.push(state.recentServices[serviceId]);
            }   
        }
    }
     
    const updatedState = {
        selectedService: action.selectedService,
        recentServices: updatedRecentServices
    };

    return updateObject(state, updatedState);
};

const fetchServiceListSuccess = (state, action) => {
    
    let selectedService = state.selectedService;
    if (action.selectedService) {
        selectedService = action.selectedService;
    }
    
    const updatedState = {
        serviceList: action.services,
        selectedService: selectedService,
        loading: false
    };
    return updateObject(state, updatedState);
};

const fetchServiceListFailed = (state, action) => {
    const updatedState = {
        error: true,
        loading: false
    };
    return updateObject(state, updatedState);
};


const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case(actionTypes.LOAD_SERVICE_PAGE_DATA_SUCCESS): return loadServicePageDataSuccess(state, action);
        case(actionTypes.LOAD_SERVICE_PAGE_DATA_FAILED): return loadServicePageDataFailed(state, action);
        case(actionTypes.LOAD_SERVICE_PAGE_DATA_START):
            return updateObject( state, {pageDataLoading: true} );
        case(actionTypes.FETCH_SERVICELIST_SUCCESS): return fetchServiceListSuccess(state, action);
        case(actionTypes.FETCH_SERVICELIST_FAILED): return fetchServiceListFailed(state, action);
        case(actionTypes.FETCH_SERVICELIST_START):
            return updateObject( state, {loading: true} );
        case(actionTypes.SELECT_SERVICE): return selectService(state, action);
        case(actionTypes.ADD_NEW_SERVICE_SUCCESS): return addNewServiceSuccess(state, action);
        case(actionTypes.ADD_NEW_SERVICE_FAILED): return addNewServiceFailed(state, action);
        case(actionTypes.ADD_NEW_SERVICE_START):
            return updateObject( state, {loading: true} );
        case(actionTypes.UPDATE_SERVICE_SUCCESS): return updateServiceSuccess(state, action);
        case(actionTypes.UPDATE_SERVICE_FAILED): return updateServiceFailed(state, action);
        case(actionTypes.UPDATE_SERVICE_START):
                return updateObject( state, {loading: true} );
        default:
            return state;
    }
    //return state;
};

export default reducer;