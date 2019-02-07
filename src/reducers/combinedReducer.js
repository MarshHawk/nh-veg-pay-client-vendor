import { combineReducers } from 'redux'
import { vendor } from './vendorReducer.js';

const combinedReducer = combineReducers({
    vendor
})

export default combinedReducer;