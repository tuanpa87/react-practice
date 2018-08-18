import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga"

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./store/reducers/rootReducer";
import {watchAuth, watchBurgerBuilder ,watchOrder} from "./store/sagas/rootSaga"

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;



const sagaMiddlewate = createSagaMiddleware()


const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddlewate )
));

sagaMiddlewate.run(watchAuth);
sagaMiddlewate.run(watchBurgerBuilder);
sagaMiddlewate.run(watchOrder);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
