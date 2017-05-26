/* module */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
/*containers and components*/
import App from './containers';
import RouterMap from './router/RouterMap.jsx'
/*style*/
import './index.css';

ReactDOM.render(

    <RouterMap />, 
    document.getElementById('root'));
registerServiceWorker();
