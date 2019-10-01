import scReducer from '../reducers/scReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log("dispatching", action);
    next(action);
};

export default createStore(scReducer, applyMiddleware(thunk, logger));
