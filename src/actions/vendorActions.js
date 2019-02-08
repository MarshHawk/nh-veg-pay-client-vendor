import { actionConstants as constants } from '../constants/actionConstants.js';

export const vendorPropertyChanged = data => ({
    type: constants.VENDOR_PROPERTY_CHANGED, payload: data,
})