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
      
      <button className="logout" onClick={logoutHandler}>Logout</button>
    </div>
  </header>
  <aside class="sidebar">
    <img src={assets.menu}  />
    <img src={assets.home} />
    <img src={assets.basket} />
    <img src={assets.heart} />
    <img src={assets.care}  onClick={() => navigation('/plantcare')}  />
  </aside>
    <main className="main-content">
        <section>
      <h2>Best Seller</h2>
      <div className="product-grid">
        <div className="product-card">
          <span className="badge">BESTSELLER</span>
          <img src={assets.neon} onClick={ () => navigation('/neonplant')}/>
          <div className="product-details">
            <span className="name">Neon Prayer Plant</span>
            <span className="price">NPR. 800</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge">BESTSELLER</span>
          <img src={assets.orchid} onClick={ () => navigation('/orchid')}/>
          <div className="product-details">
            <span className="name">White Orchid</span>
            <span className="price">NPR. 1500</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge green">NEW</span>
          <img src={assets.spider} onClick={() => navigation('/spiderplant')}/>
          <div className="product-details">
            <span className="name">Spider Plant</span>
            <span className="price">NPR. 500</span>
          </div>
        </div>

        <div className="product-card">
          <img src={assets.palm} onClick={() => navigation('/palm')}/>
          <div className="product-details">
            <span className="name">Cat Palm</span>
            <span className="price">Npr. 1100</span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2>New Arrivals</h2>
      <div className="product-grid">
        <div className="product-card">
          <span className="badge green">SUMMER EXCLUSIVE</span>
          <img src={assets.pineapple} onClick={() => navigation('/pineapple')} />
          <div className="product-details">
            <span className="name">Bromeliad Pineapple</span>
            <span className="price">NPR. 2000</span>
          </div>
        </div>

        <div className="product-card">
          <img src={assets.money_tree } onClick={() => navigation('/moneyplant')}/>
          <div className="product-details">
            <span className="name">Money Tree</span>
            <span className="price">$169 - $199</span>
          </div>
        </div>

        <div className="product-card">
          <img src={assets.mosntera}  onClick={() => navigation('/monstera')} />
          <div className="product-details">
            <span className="name">Monstera Deliciosa</span>
            <span className="price">$99</span>
          </div>
        </div>

        <div className="product-card">
          <img src={assets.succulents} onClick={() => navigation ('/succulent')} />
          <div className="product-details">
            <span className="name">Tough Stuff Collection</span>
            <span className="price"><span className="strikethrough">$117</span> $79</span>
          </div>
        </div>
      </div>
    </section>


  </main>
    </div>
  )
}

export default Dashboard
    