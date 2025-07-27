import React from 'react'
import { assets } from '../assets/assets'
import './Delivery.css'

const Delivery = () => {
  return (
    <div>
      <div className="checkout-container">

        <div className="checkout-form-section padded-section">
          <div className="checkout-section-header">
            <img src={assets.location} alt="location icon" />
            Delivery Information
          </div>

          <div className="checkout-form-group">
            <label>First Name</label>
            <input type="text" />
          </div>

          <div className="checkout-form-group">
            <label>Last Name</label>
            <input type="text" />
          </div>

          <div className="checkout-form-group">
            <label>Phone Number</label>
            <input type="tel" />
          </div>

          <div className="checkout-form-group">
            <label>Email Address</label>
            <input type="email" />
          </div>

          <div className="checkout-form-group">
            <label>Complete Address</label>
            <textarea></textarea>
          </div>

          <div className="checkout-form-group">
            <label>City</label>
            <select>
              <option value="">Select a city</option>
              <option value="ktm">Kathmandu</option>
              <option value="pkr">Pokhara</option>
            </select>
          </div>

          <div className="checkout-form-group">
            <label>Payment Method</label>
            <button className="checkout-payment-method" tabIndex="0">
              <img src={assets.cod} alt="cash on delivery" />
              <div className="checkout-payment-method-text">Cash on Delivery (COD)</div>
            </button>
          </div>
        </div>

        <div className="checkout-summary-section padded-section">
          <div className="checkout-form-group special-instructions-group">
            <label><strong>Special Instructions (Optional)</strong></label>
            <textarea></textarea>
          </div>

          <div className="checkout-order-summary">
            <h3>
              <img src={assets.bill} alt="bill icon" />
              Order Summary
            </h3>

            <div className="checkout-item">
              <div>Orchid</div>
              <div>x1</div>
              <div className="checkout-price">Rs. 1500</div>
            </div>

            <div className="checkout-totals">
              <div>
                <span>Subtotal</span>
                <span>Rs. 1500</span>
              </div>
              <div>
                <span>Delivery Fee</span>
                <span>Rs. 120</span>
              </div>
              <div className="checkout-total">
                <span>Total:</span>
                <span>Rs. 1700</span>
              </div>
            </div>

            <button className="checkout-place-order-btn">PLACE ORDER</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Delivery
