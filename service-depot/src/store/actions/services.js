import Axios from '../datasources/axios-datastore';
import * as actionTypes from './actionTypes';


export const loadPageDataSuccess = (pageData) => {
    return {
        type: actionTypes.LOAD_SERVICE_PAGE_DATA_SUCCESS,
        pageData: pageData
    };
};

export const loadPageDataFailed = (error) => {
    return {
        type: actionTypes.LOAD_SERVICE_PAGE_DATA_FAILED,
        error: error
    };
};

export const loadPageDataStart = () => {
    return {
        type: actionTypes.LOAD_SERVICE_PAGE_DATA_START
    };
};

export const getServicePageData = (token, serviceId, page) => {
    return dispatch => {
        dispatch( loadPageDataStart() );

        const queryParams = '?auth=' + token + '&orderBy="serviceId"&equalTo="' + serviceId + '"';
        //+ '&orderBy="tenantId"&equalTo="' + tenantId + '"';

        Axios.get('services.json' + queryParams )
        .then( response => {

            // Returned Data Object Initialization
            // let newServiceLists = {
            //     core: [],
            //     coreServiceCount: 0,
            //     supporting: [],
            //     supportingServiceCount: 0,
            //     infrastructure: [],
            //     infrastructureServiceCount: 0,
            //     delegated: [],
            //     delegatedServiceCount: 0,
            // }

            let servicePageData = [];
            for( let key in response.data ) {
                servicePageData.push({ 
                    ...response.data[key],
                    id: key
                });
            }

            dispatch(loadPageDataSuccess(servicePageData));
            
        }) 
        .catch( error => {
            console.log('error: ' + error);
            dispatch(loadPageDataFailed(error));
        });

    };
};

export const fetchServiceListSuccess = (services) => {
    return {
        type: actionTypes.FETCH_SERVICELIST_SUCCESS,
        services: services//    ,
        //selectedService: services[0].id
    };
};

export const fetchServiceListFailed = (error) => {
    return {
        type: actionTypes.FETCH_SERVICELIST_FAILED,
        error: error
    };
};

export const fetchServiceListStart = () => {
    return {
        type: actionTypes.FETCH_SERVICELIST_START
    };
};

export const selectService = (serviceId) => {
    return {
        type: actionTypes.SELECT_SERVICE,
        selectedService: serviceId
    };

}

export const getAuthorizedServiceList = (token, selectedTenant) => {
    return dispatch => {
        dispatch( fetchServiceListStart() );

        const queryParams = '?auth=' + token + '&orderBy="tenantId"&equalTo="' + selectedTenant + '"';
        //+ '&orderBy="tenantId"&equalTo="' + tenantId + '"';

        Axios.get('services.json' + queryParams )
        .then( response => {

            // Returned Data Object Initialization
            let newServiceLists = {
                core: [],
                coreServiceCount: 0,
                supporting: [],
                supportingServiceCount: 0,
                infrastructure: [],
                infrastructureServiceCount: 0,
                delegated: [],
                delegatedServiceCount: 0,
            }

            // let selectedService = null;
            for( let key in response.data ) {
                
                // if (userServiceList.includes(key))
                if( response.data[key].type === 'core' ) {
                    newServiceLists.core.push({ 
                        ...response.data[key],
                        id: key
                    });
                } else if( response.data[key].type === 'support' ) {
                    newServiceLists.supporting.push({ 
                        ...response.data[key],
                        id: key
                    });
                } else if( response.data[key].type === 'infrastructure' ) {
                    newServiceLists.infrastructure.push({ 
                        ...response.data[key],
                        id: key
                    });
                } else if( response.data[key].type === 'delegated' ) {
                    newServiceLists.delegated.push({ 
                        ...response.data[key],
                        id: key
                    });
                } else {
                    // Nothing
                }

                
                // fetchedServices.push({ 
                //     ...response.data[key],
                //     id: key
                // });
            }

            // newServiceLists.coreServiceCount = newServiceLists.core.length;
            // newServiceLists.supportingServiceCount = newServiceLists.supporting.length;
            // newServiceLists.infrastructureServiceCount = newServiceLists.infrastructure.length;
            // newServiceLists.delegatedServiceCount = newServiceLists.codelegatedre.length;
            
            //console.log('hello: '+ newServiceLists);
            dispatch(fetchServiceListSuccess(newServiceLists));
            
        }) 
        .catch( error => {
            console.log('error: ' + error);
            dispatch(fetchServiceListFailed(error));
        });

    };
};








export const addNewService = (token, selectedTenant, serviceObject) => {
    return dispatch => {
        dispatch( addNewServiceStart() );

        // Configure Query Parameters for Page Request
        console.log('user token: ' + token);
        const queryParams = '?auth=' + token;
                
        Axios.post('services.json' + queryParams, serviceObject )
        .then( response => {
            dispatch(addNewServiceSuccess(serviceObject.serviceId));
            dispatch(getAuthorizedServiceList(token, selectedTenant));
        }) 
        .catch( error => {
            console.log('error: ' + error);
            dispatch(addNewServiceFailed(error));
        });

    };
};

export const updateServiceDefinitionData = (token, selectedTenant, serviceKey, serviceObject) => {
    return dispatch => {
        dispatch( updateServiceDefinitionDataStart() );

        // Configure Query Parameters for Page Request
        console.log('user token: ' + token);
        const queryParams = '?auth=' + token;
                
        Axios.put('services/' + serviceKey +'.json' + queryParams, serviceObject )
        .then( response => {
            dispatch(updateServiceDefinitionDataSuccess());
            dispatch(getAuthorizedServiceList(token, selectedTenant));
        }) 
        .catch( error => {
            console.log('error: ' + error);
            dispatch(updateServiceDefinitionDataFailed(error));
        });

    };
};

export const addNewServiceSuccess = () => {
    return {
        type: actionTypes.ADD_NEW_SERVICE_SUCCESS
        //selectedService: services[0].id
    };
};

export const addNewServiceFailed = (error) => {
    return {
        type: actionTypes.ADD_NEW_SERVICE_FAILED,
        error: error
    };
};

export const addNewServiceStart = () => {
    return {
        type: actionTypes.ADD_NEW_SERVICE_START
    };
};

export const updateServiceDefinitionDataSuccess = () => {
    return {
        type: actionTypes.UPDATE_SERVICE_SUCCESS  ,
        //selectedService: services[0].id
    };
};

export const updateServiceDefinitionDataFailed = (error) => {
    return {
        type: actionTypes.UPDATE_SERVICE_FAILED,
        error: error
    };
};

export const updateServiceDefinitionDataStart = () => {
    return {
        type: actionTypes.UPDATE_SERVICE_START
    };
};