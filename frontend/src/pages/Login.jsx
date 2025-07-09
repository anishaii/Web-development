import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Login.css';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: data.email,
        password: data.password,
      });

      console.log(res.data.data.access_token)
      // Save token in localStorage
      localStorage.setItem('token', res.data.data.access_token);

      alert('Login successful!');
      navigate('/dashboard'); // redirect to a protected route or home page

    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div>
      <div className="navbar">
        <img src={assets.final_logo} alt="" className="logo" />
        <ul className="navbar-menu1">
          <li><Link to="/">Home</Link></li>
          <li>Outlets</li>
          <li>Offer</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="container">
        <div className="form-box">
          <h3>Sign in to your account</h3><br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input type="email" {...register('email', { required: true })} placeholder="abc@gmail.com" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" {...register('password', { required: true })} placeholder="*********" />
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            </div>

            <div className="btn-container">
              <button className="register-btn" type="submit">Sign in</button>
            </div>

            <div className="register-link">
              Don't have an account? <Link to="/signup">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
