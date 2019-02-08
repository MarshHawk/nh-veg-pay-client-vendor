import { connect } from 'react-redux';

import VendorForm from '../components/vendorForm.js';
import { vendorConstants as constants } from '../constants/vendorConstants.js';
import { default as vendorTypes } from '../models/vendorTypes.js';
import { vendorPropertyChanged } from '../actions/vendorActions.js';

const earlyBirdDate = Date.parse('3/15/19');
const getPaymentAmount = (x,y) => { let now = Date.now(); return now < earlyBirdDate ? x : y };
const getPrice = (v) => { return v ===  vendorTypes[0].name ? getPaymentAmount(85,100) : getPaymentAmount(50, 65) };

const mapStateToProps = (state) => {
    return {
        vendor: state.vendor,
        prices: getPaymentAmount([85,50], [100,65])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleVendorPropertyChange(data) {
            dispatch(vendorPropertyChanged(data))
        },
        handleVendorTypePropertyChange(vendorTypeName) {
            dispatch(vendorPropertyChanged({[constants.VENDOR_TYPE]: vendorTypeName}));
            dispatch(vendorPropertyChanged({[constants.PAYMENT_AMOUNT]: getPrice(vendorTypeName)}));
        }
    }
}

const VendorFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(VendorForm)

export default VendorFormContainer;