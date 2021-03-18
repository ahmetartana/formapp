import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

ReactDOM.render(
    <App history={history}  />,
    document.querySelector('#root')
);
