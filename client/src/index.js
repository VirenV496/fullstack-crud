import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

import {Provider} from 'react-redux'
import {createStore , applyMiddleware }  from 'redux'
import reducers from './redux/reducers/index';


// const store = createStore(reducers, compose(applyMiddleware(thunk)))

const store = createStore(
  reducers,
  composeWithDevTools( 
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);




