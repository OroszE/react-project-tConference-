import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {initialState, mainReducer} from './reducers'

const middleware = [thunk];

export const store = createStore(mainReducer, initialState, applyMiddleware(...middleware));