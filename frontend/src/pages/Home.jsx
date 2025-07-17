import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import './Home.css'

const Home = () => {
  const [menu,setMenu] = useState("home");
  const navigate = useNavigate();
  return (
    <div>
        <div className='navbar'>
      <img src={assets.final_logo} alt="" className='logo' />
   <ul className='navbar-menu'>
    <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
    <li onClick={() => setMenu("outlet")} className={menu === "outlet" ? "active" : ""}>Outlets</li>
    <li onClick={() => setMenu("offer")} className={menu === "offer" ? "active" : ""}>Offer</li>
    <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact us</li>
  </ul>

      <div className='navbar-right'>
      
      <button onClick={() => navigate('/login')} >Login</button>
      <button onClick={() => navigate('/signup')} > Register</button> 
      </div>
    </div>
     <section className='main-img'>
        <img src={assets.plant} alt="" className="background-img"/>
         <div className="top-leftText">
           <h1>Delicious Food Delivered To Your <span class="door">Door</span> <span className="step">Step</span></h1>
          </div>

           <div className="top-leftText2">
            <p>"Order food from your favorite restaurants and track your delivery in real-time.Quick, easy, and delicious!"</p>
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
          <img src={assets.plant_icon}/>
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
  )
}

export default Home
