import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { AUTH_USER } from './actions/authenticationTypes';
import Token from './utils/token';

//const store = createStore(reducers, {}, applyMiddleware(reduxThunk)); // 2nd arg: default state
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = Token.getToken();
// If we have a token, consider the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
