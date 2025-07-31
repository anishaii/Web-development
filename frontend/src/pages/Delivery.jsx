import React from 'react';
import { assets } from '../assets/assets';
import './Delivery.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Delivery = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/api/delivery', data);
      navigate('/confirm');
    } catch (error) {
      console.error('Failed to save delivery info:', error);
      alert('Failed to save delivery information. Please try again.');
    }
  };

  return (
    <div>
      <div className="checkout-container">

        {/* LEFT SIDE: Only this part is a form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="checkout-form-section padded-section"
          style={{ maxWidth: "50%" }}
        >
          <div className="checkout-section-header">
            <img src={assets.location} alt="location icon" />
            Delivery Information
          </div>

          <div className="checkout-form-group">
            <label>First Name</label>
            <input
              type="text"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
          </div>

          <div className="checkout-form-group">
            <label>Last Name</label>
            <input
              type="text"
              {...register('lastName', { required: 'Last Name is required' })}
            />
            {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
          </div>

          <div className="checkout-form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              {...register('phoneNumber', { required: 'Phone Number is required' })}
            />
            {errors.phoneNumber && <p className="form-error">{errors.phoneNumber.message}</p>}
          </div>

          <div className="checkout-form-group">
            <label>Email Address</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
            />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>

          <div className="checkout-form-group">
            <label>Complete Address</label>
            <textarea {...register('address', { required: 'Address is required' })}></textarea>
            {errors.address && <p className="form-error">{errors.address.message}</p>}
          </div>

          <div className="checkout-form-group">
            <label>City</label>
            <select {...register('city', { required: 'City is required' })}>
              <option value="">Select a city</option>
              <option value="Kathmandu">Kathmandu</option>
              <option value="Pokhara">Pokhara</option>
            </select>
            {errors.city && <p className="form-error">{errors.city.message}</p>}
          </div>

          <div className="checkout-form-group">
            <label>Payment Method</label>
            <button
              type="button"
              className="checkout-payment-method"
              tabIndex="0"
              onClick={() => alert('Only Cash on Delivery accepted for now')}
            >
              <img src={assets.cod} alt="cash on delivery" />
              <div className="checkout-payment-method-text">Cash on Delivery (COD)</div>
            </button>
            <input
              type="hidden"
              value="Cash on Delivery"
              {...register('paymentMethod', { required: true })}
            />
            {errors.paymentMethod && <p className="form-error">Payment Method is required</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="checkout-place-order-btn"
          >
            {isSubmitting ? 'Placing Order...' : 'PLACE ORDER'}
          </button>
        </form>

        {/* RIGHT SIDE: outside the form to keep flex layout */}
        <div className="checkout-summary-section padded-section" style={{ maxWidth: "40%" }}>
          <div className="checkout-form-group special-instructions-group">
            <label><strong>Special Instructions (Optional)</strong></label>
            <textarea {...register('instruction')}></textarea>
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
          </div>
        </div>

      </div>
    </div>
  );
};

export default Delivery;
