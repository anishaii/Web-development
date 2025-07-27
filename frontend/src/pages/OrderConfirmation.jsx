import React from 'react';
import './OrderConfirmation.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // update path as per your structure

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="order-confirmation">
      <header className="bloom-header">
        <img src={assets.final_logo}  className="bloom-logo" />
      </header>

      <main className="confirmation-main">
        <div className="confirmation-box">
          <img src={assets.confetti} alt="Celebration" className="confirmation-icon" />
          <p>
            We are getting started on your order right away and you will receive an order confirmation
            email shortly. In the meantime, explore the new plants. Just head over to Bloom Shop.
          </p>
          <button onClick={() => navigate('/dashboard')} className="confirmation-btn">Home</button>
        </div>
      </main>

      <footer className="confirmation-footer">
        <p>Keep Shopping with us !!!</p>
      </footer>
    </div>
  );
};

export default OrderConfirmation;
