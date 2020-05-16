import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import {smurfReducer} from './reducers/smurfReducer'


const store = createStore(smurfReducer, applyMiddleware(thunk, logger))
    // console.log(store,getState(), 'What data are we getting in the store ????????')

const rootElement = document.getElementById('root');
    ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, rootElement);
