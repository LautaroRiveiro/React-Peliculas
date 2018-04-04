import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import reducers from "./redux/reducers";
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Chicle');
    body{
        margin: 0;
    }
`;

const store = createStore( reducers, {}, applyMiddleware(promise(),thunk,logger) );

console.info("store",store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
