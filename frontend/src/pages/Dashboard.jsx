import React from 'react'
import './Dashboard.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {

  const navigation = useNavigate()


  const logoutHandler = () => {
    localStorage.removeItem("token")
    navigation("/login")

  }
  return (
    <div>
    <header className='dash'>
    
      <img src={assets.final_logo} alt="" className='logo' />
  
    <input type="text" placeholder="Search for plants" className="search-box"/>
    <div className="icons">
      <button  className="signup-btn">Sign up</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  </header>
    </div>
  )
}

export default Dashboard
    