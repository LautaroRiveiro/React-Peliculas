import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Chicle');
    body{
        margin: 0;
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
