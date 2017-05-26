/* module */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
/*containers and components*/
import App from './containers';
import RouterMap from './router/RouterMap.jsx'

/*store */
import configureStore from './store/configureStore'

/*style*/
import './index.css';


let initState = {}
const store = configureStore(initState)

ReactDOM.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
