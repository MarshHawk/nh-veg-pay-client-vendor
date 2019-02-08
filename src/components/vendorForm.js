import React from 'react';
import {Link} from 'react-router-dom';

import { vendorConstants as constants } from '../constants/vendorConstants.js';
import { default as vendorTypes } from '../models/vendorTypes.js';
import 'bootstrap/dist/css/bootstrap.css';

let VendorForm = ({vendor,prices, handleVendorPropertyChange, handleVendorTypePropertyChange }) => (
  <div className="container bg-success">
  <form>
    <div className="form-group">
    <label>Vendor type:</label>
    <select className="form-control" id="businessType" value={vendor.vendorType}
      onChange={(e) => handleVendorTypePropertyChange(e.target.value)} >
      <option value={vendorTypes[0].name}>Exhibitor/Restaurant ${prices[0]}.00</option>
      <option value={vendorTypes[1].name}>Non-Profit ${prices[1]}.00</option>
    </select>
    <small className="form-text">Prices reflect early registration by 3/15/19</small>
    <small className="form-text">Additional $15 for
temporary food permit (separate check required and made out to the city of Manchester) for exhibitor/restaurant.</small>
  </div>
  <div className="form-group">
    <label>Business name:</label>
    <input className="form-control" id="businessName" value={vendor.businessName} onChange={(e) => handleVendorPropertyChange({[constants.BUSINESS_NAME]: e.target.value})} />
  </div>
  <div className="form-group">
    <label>Contact person:</label>
    <input className="form-control" id="contact" value={vendor.contactPerson} onChange={(e) => handleVendorPropertyChange({[constants.CONTACT_PERSON]: e.target.value})} />
  </div>
  <div className="form-group">
    <label>Street address:</label>
    <input className="form-control" id="streetAddress" value={vendor.streetAddress} onChange={(e) => handleVendorPropertyChange({[constants.STREET_ADDRESS]: e.target.value})} />
  </div>
  <div className="form-group">
    <label>City:</label>
    <input className="form-control" id="city" value={vendor.city} onChange={(e) => handleVendorPropertyChange({[constants.CITY]: e.target.value})} />
  </div>
  <div className="form-group">
    <label>State:</label>
    <input className="form-control" id="state" value={vendor.state} onChange={(e) => handleVendorPropertyChange({[constants.STATE]: e.target.value})}/>
  </div>
  <div className="form-group">
    <label>Zip:</label>
    <input className="form-control" id="zip" value={vendor.zipcode} onChange={(e) => handleVendorPropertyChange({[constants.ZIPCODE]: e.target.value})}/>
  </div>
  <div className="form-group">
    <label>Telephone #:</label>
    <input className="form-control" id="telephone" value={vendor.telephone} onChange={(e) => handleVendorPropertyChange({[constants.TELEPHONE]: e.target.value})} />
  </div>
  <div className="form-group">
    <label>Website:</label>
    <input className="form-control" id="website" value={vendor.website} onChange={(e) => handleVendorPropertyChange({[constants.WEBSITE]: e.target.value})} />
  </div>
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={vendor.email} onChange={(e) => handleVendorPropertyChange({[constants.EMAIL]: e.target.value})}  />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Business type:</label>
    <select className="form-control" id="businessType">
      <option>Food</option>
      <option>Service (yoga, Pilates, meditation, massage, etc.)</option>
      <option>Social awareness group</option>
      <option>Health</option>
      <option>Grocery or natural foods</option>
      <option>Other</option>
    </select>
  </div>
  <div className="form-group">
    <label>Product Description:</label>
    <textarea className="form-control" id="productDescription" rows="5" value={vendor.productDescription} onChange={(e) => handleVendorPropertyChange({[constants.PRODUCT_DESCRIPTION]: e.target.value})} ></textarea>
    <small id="foodProductHelp" className="form-text text-muted">Describe all food items to be sold or sampled (City of Manchester Temp. Food Permit required). Describe non-food products or services to be promoted.</small>
  </div>
  <Link to="/payment" className="btn btn-primary" role="button">Submit and Pay</Link>
  </form>
  </div>
)

export default VendorForm