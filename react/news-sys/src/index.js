/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-10-19 09:55:40
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-11-01 11:58:20
 * @Descripttion: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import './index.css';
import './utils/http';
import { persistor, store } from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App /> 
        </PersistGate>
    </Provider>
);