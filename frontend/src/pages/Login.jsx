import React from 'react'
import { assets } from '../assets/assets'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
             <div className='navbar'>
            <img src={assets.final_logo} alt="" className='logo' />
            <ul className='navbar-menu1'>
                  <li><Link to="/">Home</Link></li>
                  <li>Outlets</li>
                  <li>Offfer</li>
                  <li>Contact us</li>
      
              </ul>

          </div>

             <p className='welcome'>Welcome to Quick Bite !!!</p>

    <div className="container">
    <div className="form-box">
      <h3>Sign in to your account</h3><br/>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="abc@gmail.com"/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="*********"/>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div className="btn-container">
          <button className="register-btn">Sign in</button>
        </div>
        <div className="register-link">
          Don't have an account? <Link to="/signup">Register here</Link>
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Login;
