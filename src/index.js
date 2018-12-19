import React from 'react';
import { render, } from 'react-dom';
import { createStore, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import { reducer as formReducer, } from 'redux-form';
import { customersReducer } from './CustomersReducer';


import App from './App';

require('./index.css');
const reducer = combineReducers({
  form: formReducer,
  customers: customersReducer, 
});

function configureStore(initialState) {
  return createStore(reducer, initialState);
}

const store = configureStore({});

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
