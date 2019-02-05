import React from 'react';
import {Link} from 'react-router-dom';
import Payment from './payment';
import 'bootstrap/dist/css/bootstrap.css';

let VendorForm = () => (
  <div className="container bg-success">
  <form>
    <div class="form-group">
    <label>Vendor type:</label>
    <select class="form-control" id="businessType">
      <option>Exhibitor / Restaurant</option>
      <option>Non-Profit</option>
    </select>
    <small className="form-text">Early registration by 3/15/19</small>
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
  <div class="form-group">
    <label>Business type:</label>
    <select class="form-control" id="businessType">
      <option>Food</option>
      <option>Service (yoga, Pilates, meditation, massage, etc.)</option>
      <option>Social awareness group</option>
      <option>Health</option>
      <option>Grocery or natural foods</option>
      <option>Other</option>
    </select>
  </div>
  <div class="form-group">
    <label>Product Description:</label>
    <textarea class="form-control" id="productDescription" rows="5"></textarea>
    <small id="foodProductHelp" className="form-text text-muted">Describe all food items to be sold or sampled (City of Manchester Temp. Food Permit required). Describe non-food products or services to be promoted.</small>
  </div>
  <Link to="/payment" className="btn btn-primary" role="button">Submit and Pay</Link>
  </form>
  </div>
)

export default VendorForm