import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// CSS Global Imports
import './index.css';
import './assets/css/grid.css';
import './assets/css/ionicons.min.css';

// Application Component Imports
import registerServiceWorker from './registerServiceWorker';
import App from './App';

// Redux Reducer Imports
import authenticationReducer from './store/reducers/auth';
import servicesReducer from './store/reducers/services';




// Setup and Configure Redux for Global Application
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers ({
    //burgerBuilder: burgerBuilderReducer,
    //orders: orderReducer,
    authentication: authenticationReducer,
    services: servicesReducer 
});

// Register the Root Reducer for Redux and all Middleware
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
