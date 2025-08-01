import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import Swal from 'sweetalert2'; 
import './Home.css';

const Home = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  return (
    <div>
      <div className='navbar'>
        <img src={assets.final_logo} alt="" className='logo' />
        <ul className='navbar-menu'>
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
          <li
            onClick={() => {
              setMenu("outlet");
              Swal.fire({
                title: 'Our Outlets 🌿',
                text: 'Explore our nearest plant outlets across the city!',
                icon: 'info',
                confirmButtonColor: '#66c35c',
              });
            }}
            className={menu === "outlet" ? "active" : ""}
          >
            Outlets
          </li>
          <li
            onClick={() => {
              setMenu("offer");
              Swal.fire({
                title: 'Special Offers 🎉',
                text: 'Exciting Shrawan offers available now!',
                icon: 'success',
                confirmButtonColor: '#66c35c',
              });
            }}
            className={menu === "offer" ? "active" : ""}
          >
            Offer
          </li>
          <li
            onClick={() => {
              setMenu("contact");
              Swal.fire({
                title: 'Contact Us 💬',
                text: 'Reach out via email bloom@gmail.com or call us at 01-4152347',
                icon: 'question',
                confirmButtonColor: '#66c35c',
              });
            }}
            className={menu === "contact" ? "active" : ""}
          >
            Contact us
          </li>
        </ul>

        <div className='navbar-right'>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Register</button>
        </div>
      </div>

      <section className='main-img'>
        <img src={assets.plant} alt="" className="background-img" />
        <div className="top-leftText">
          <h1>Fresh plants delivered To Your <span className="door">Door</span> <span className="step">Step</span></h1>
        </div>

        <div className="top-leftText2">
          <p>"Bring nature home with handpicked plants delivered to your door. Fast, fresh, and hassle-free!"</p>
        </div>
      </section>

      <section className="categories-section">
        <h3>Explore Categories</h3>
        <p>Discover food from your favorite cuisines</p>

        <div className="categories">
          <div className="category-card">
            <img src={assets.delivery_icon} />
            <span>Fast Delivery</span>
          </div>
          <div className="category-card">
            <img src={assets.service_icon} />
            <span>24/7 Support</span>
          </div>
          <div className="category-card">
            <img src={assets.plant_icon} />
            <span>Plant care</span>
          </div>
          <div className="category-card">
            <img src={assets.payment_icon} />
            <span>Secure Payment</span>
          </div>
          <div className="category-card">
            <img src={assets.gift_icon} />
            <span>More</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
