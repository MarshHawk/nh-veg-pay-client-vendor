import { constants } from '../constants/constants.js';

export const vendorPropertyChanged = data => ({
    type: constants.VENDOR_PROPERTY_CHANGED, payload: data,
})