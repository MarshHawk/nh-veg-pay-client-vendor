import { constants } from '../constants/constants.js';
import { default as initialVendorState } from '../models/vendor.js';

export const vendor = (state = {}, action) => {
    switch (action.type) {
        case constants.VENDOR_PROPERTY_CHANGED:
            return {...state, ...action.payload}
        default:
            return state;
    }
};