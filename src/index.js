import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* 
1 state declare
2 action - increment => decrement, reset
3 reducers - increment --> count --> count +1 
4 -reset --> count --> 0
5 store
6 providing store in react 
7 usen store 
 */
reportWebVitals();
