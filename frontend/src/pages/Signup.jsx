import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Signup.css';
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
} = useForm();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name: data.name,
        userId: data.userId,
        email: data.email,
        phone: data.phone,
        password: data.password,
        gender: data.gender,
     });

      if (res.status === 201) {
        alert("Registration successful!");
        reset(); // clear form
      } else {
        alert(res.data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("Error:", err);
      alert(err.response?.data?.message || "Server error!");
    }
  };

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

      <div className="container1">
        <div className="form-box1">
          <h2>Registration</h2>
          <form className='form1' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-fields1">
              <div className="form-group1">
                <label>Full Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group1">
                <label>Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group1">
                <label>Phone Number</label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Enter your number"
                />
              </div>

              <div className="form-group1">
                <label>Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group1">
                <label>Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="gender-group1">
            <label>Gender:</label>
            <label className="gender-option">
              <input
                type="radio"
                value="Male"
                {...register("gender", { required: true })}
              /> Male
            </label>
            <label className="gender-option">
              <input
                type="radio"
                value="Female"
                {...register("gender", { required: true })}
              /> Female
            </label>
            <label className="gender-option">
              <input
                type="radio"
                value="Other"
                {...register("gender", { required: true })}
              /> Other
            </label>
          </div>


            <div className="btn-container1">
              <button type="submit" className="register-btn1">Register</button>
            </div>

            <div className="signup-link">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
