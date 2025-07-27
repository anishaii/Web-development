import React from 'react';
import './Cart.css';
import { useCart } from '../components/CartContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';  // <-- import useNavigate

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, subtotal, deliveryFee, total } = useCart();
  const navigate = useNavigate();  // <-- initialize navigate

  const handleCheckout = () => {
    navigate('/delivery');  // <-- navigate to delivery page
  };

  return (
    <div>
      <header className="bloom-header">
        <img src={assets.final_logo} className="bloom-logo" />
      </header>

      <main className="bloom-main">
        <div className="bloom-left">
          <section className="bloom-cart">
            <div className="bloom-cart-header">
              <h2>Your Cart</h2>
            </div>

            {cartItems.length === 0 ? (
              <p className="empty-cart-msg">Your cart is empty.</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Price: NPR. {item.price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, +1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>

        <div className="bloom-right">
          <section className="bloom-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: NPR. {subtotal}</p>
            <p>Delivery Fee: NPR. {deliveryFee}</p>
            <hr />
            <h4>Total: NPr. {total}</h4>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Cart;
