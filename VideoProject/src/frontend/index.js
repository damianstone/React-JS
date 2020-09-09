// ESTE ES EL ARCHIVO PRINCIPAL DONDE SE JUNTAN LOS COMPONENTES Y SE LLEVA HACIA EL DOM = WEB

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import App from './routes/App';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, preloadedState, composeEnhancers());

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate( // => router desde el lado del cliente
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('app'),

); // metodo render es lo que lleva todo al navegador

