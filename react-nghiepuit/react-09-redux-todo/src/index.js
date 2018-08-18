import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux' //tao store redux
import myReducer from './reducers'
import { Provider } from 'react-redux' //connect react redux


//tao store redux
const store = createStore(
    myReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //the redux dev tool
);


//connect react redux
ReactDOM.render(
    <Provider store = {store}>        
        <App />
    </Provider>,       
    document.getElementById('root'
    ));
registerServiceWorker();
