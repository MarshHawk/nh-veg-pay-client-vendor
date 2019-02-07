import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

let VendorForm = ({ handleVendorPropertyChange }) => (
  <div className="container bg-success">
  <form>
    <div className="form-group">
    <label>Vendor type:</label>
    <select className="form-control" id="businessType">
      <option>Exhibitor/Restaurant</option>
      <option>Non-Profit</option>
    </select>
    <small className="form-text">Prices reflect early registration by 3/15/19</small>
    <small className="form-text">Additional $15 for
temporary food permit (separate check required and made out to the city of Manchester) for exhibitor/restaurant.</small>
  </div>
  <div className="form-group">
    <label>Business name:</label>
    <input className="form-control" id="businessName" />
  </div>
  <div className="form-group">
    <label>Contact person:</label>
    <input className="form-control" id="contact" />
  </div>
  <div className="form-group">
    <label>Street address:</label>
    <input className="form-control" id="streetAddress" />
  </div>
  <div className="form-group">
    <label>City:</label>
    <input className="form-control" id="city" />
  </div>
  <div className="form-group">
    <label>State:</label>
    <input className="form-control" id="state" />
  </div>
  <div className="form-group">
    <label>Zip:</label>
    <input className="form-control" id="zip" />
  </div>
  <div className="form-group">
    <label>Telephone #:</label>
    <input className="form-control" id="telephone" />
  </div>
  <div className="form-group">
    <label>Website:</label>
    <input className="form-control" id="website" />
  </div>
  <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
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
    <textarea className="form-control" id="productDescription" rows="5"></textarea>
    <small id="foodProductHelp" className="form-text text-muted">Describe all food items to be sold or sampled (City of Manchester Temp. Food Permit required). Describe non-food products or services to be promoted.</small>
  </div>
  <Link to="/payment" className="btn btn-primary" role="button">Submit and Pay</Link>
  </form>
  </div>
)

export default VendorForm