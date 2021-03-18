import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import userLoginReducer from './reducers/userLoginReducer';

const history = createBrowserHistory();
const store = createStore(userLoginReducer);

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>
    , document.querySelector('#root')
);
