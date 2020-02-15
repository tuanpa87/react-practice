import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import App from './App';

// import FontAwesome from 'react-fontawesome';
// import Demo from './Demo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('page-wraper'));
registerServiceWorker();


