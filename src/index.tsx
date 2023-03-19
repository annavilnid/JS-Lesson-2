import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './redux/state';
import {Action, AnyAction} from "redux";

ReactDOM.render(
  <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('root')
);
