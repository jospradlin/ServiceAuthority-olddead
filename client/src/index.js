import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Keycloak from "keycloak-js";
import axios from "axios";
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

// Application Component Imports
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { CookiesProvider, Cookies } from 'react-cookie';

// Authentication Configuration
import { AUTH_TOKEN } from './constants';

// CSS Global Imports
import './index.css';
import './assets/css/grid.css';
import './assets/css/ionicons.min.css';

// Libraries necessary for Apollo Boost - GraphQL 
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, split } from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


// // Setup and Configure Redux for Global Application
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     //burgerBuilder: burgerBuilderReducer,
//     //orders: orderReducer,
//     //authentication: authenticationReducer,
//     //services: servicesReducer
// });

// // Register the Root Reducer for Redux and all Middleware
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// Setup React Application Cookie Link for Secure Cookies
const cookies = new Cookies();

// Configure GraphQL and WebSockets Links to Servers
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const middlewareAuthLink = new ApolloLink((operation, forward) => {

    // const tokenCookie = cookies.get(AUTH_TOKEN);
    // const token = sessionStorage.getItem(AUTH_TOKEN);
    const token = localStorage.getItem('kc_token');
    //const token = localStorage.getItem(AUTH_TOKEN)
    const authorizationHeader = token ? `Bearer ${token}` : null
    operation.setContext({
        headers: {
            authorization: authorizationHeader
        }
    })
    return forward(operation)
})

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink)


//
const wsLink = new WebSocketLink({
    uri: `ws://localhost:4000`,
    options: {
        reconnect: true,
        connectionParams: {
            authToken: localStorage.getItem(AUTH_TOKEN),
        }
    }
})

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLinkWithAuthToken,
)


// Create Apollo Client to wrap the React App
const client = new ApolloClient({
    link,
    credentials: "include",
    cache: new InMemoryCache()
})



// Setup React Application
const app = (
        <BrowserRouter>
                <ApolloProvider client={client}>
                    <CookiesProvider cookies={cookies}>
                        <App />
                    </CookiesProvider>
                </ApolloProvider>
        </BrowserRouter>
);


const kc = Keycloak({
    url: 'http://localhost:8080/auth',
    realm: 'sadev',
    clientId: 'sadevclient'
});
const token = localStorage.getItem('kc_token');
const refreshToken = localStorage.getItem('kc_refreshToken');

kc.init({ onLoad: 'login-required', token, refreshToken })
    .then(authenticated => {
        if (authenticated) {

            //store.getState().keycloak = kc;
            updateLocalStorage();
            ReactDOM.render(app, document.getElementById('root'));
        }
    });

// axios.interceptors.request.use(config => (
//     kc.updateToken(5)
//         .then(refreshed => {
//             if (refreshed) {
//                 updateLocalStorage()
//             }
//             config.headers.Authorization = 'Bearer ' + kc.token;
//             return Promise.resolve(config)
//         })
//         .catch(() => {
//             kc.login();
//         })
// ));

const updateLocalStorage = () => {
    console.log('set')
    localStorage.setItem('kc_token', kc.token);
    localStorage.setItem('kc_refreshToken', kc.refreshToken);
};


// ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();
