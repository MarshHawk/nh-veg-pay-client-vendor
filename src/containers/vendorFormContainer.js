import { connect } from 'react-redux';

import VendorForm from '../components/vendorForm.js';
import { vendorPropertyChanged } from '../actions/vendorActions.js';

const mapDispatchToProps = (dispatch) => {
    return {
        handleVendorPropertyChange() {
            dispatch(vendorPropertyChanged())
        }
    }
}

const VendorFormContainer = connect(
    null,
    mapDispatchToProps
)(VendorForm)

export default VendorFormContainer;