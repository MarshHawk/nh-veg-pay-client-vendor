import { actionConstants as constants } from '../constants/actionConstants.js';
import { default as initialVendorState } from '../models/vendor.js';

export const vendor = (state = initialVendorState, action) => {
    switch (action.type) {
        case constants.VENDOR_PROPERTY_CHANGED:
            return {...state, ...action.payload}
        default:
            return state;
    }
};