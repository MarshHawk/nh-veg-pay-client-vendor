import { combineReducers } from 'redux'
import { theState } from './theReducer.js';

const combinedReducer = combineReducers({
    theState
})

export default combinedReducer;