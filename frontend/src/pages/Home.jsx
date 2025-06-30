import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='navbar'>
      <img src={assets.final_logo} alt="" className='logo' />
      <ul className='navbar-menu'>
            <li>Home</li>
            <li>Outlets</li>
            <li>Offfer</li>
            <li>Contact us</li>

        </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
            <div className='nav-search-icon'>
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
            </div>
      <button onClick={() => navigate('/login')} >Login</button>
      <button onClick={() => navigate('/signup')} > Register</button> 
      </div>
    </div>
     <section className='main-img'>
        <img src={assets.plant} alt="" class="background-img"/>
         <div class="top-leftText">
           <h1>Delicious Food Delivered To Your <span class="door">Door</span> <span class="step">Step</span></h1>
          </div>

           <div class="top-leftText2">
            <p>"Order food from your favorite restaurants and track your delivery in real-time.Quick, easy, and delicious!"</p>
          </div>

          <button className='shop-now'><Link to ={"/dashboard"}>Shop now</Link></button>
      </section>
      <section class="categories-section">
      <h3>Explore Categories</h3>
      <p>Discover food from your favorite cuisines</p>

      <div class="categories">
        <div class="category-card">
          <img src={assets.delivery_icon} />
          <span>Fast Delivery</span>
        </div>
        <div class="category-card">
          <img src={assets.service_icon} />
          <span>24/7 Support</span>
        </div>
        <div class="category-card">
          <img src={assets.plant_icon}/>
          <span>Plant care</span>
        </div>
        <div class="category-card">
          <img src={assets.payment_icon} />
          <span>Secure Payment</span>
        </div>
        <div class="category-card">
          <img src={assets.gift_icon} />
          <span>More</span>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home
