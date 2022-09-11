/*
 * @Author: mengbing mengbingg@outlook.com
 * @Date: 2022-09-09 16:13:57
 * @LastEditors: mengbing mengbingg@outlook.com
 * @LastEditTime: 2022-09-09 17:11:58
 * @Descripttion: 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
