import React from 'react'
import { assets } from '../assets/assets'


const Favorite = () => {
  return (
    <div>
          <aside className="bar">
                    <img src={assets.menu}  />
                    <img src={assets.home} />
                    <img src={assets.basket} />
                    <img src={assets.heart} />
                    <img src={assets.care} />
                  </aside>

                    <div className="hero">
                        <img src={assets.back}  />
                        <div className="hero-text">Plant Care</div>
                        <div className="contact">
                          for any other Query<br/>Contact us: +977 9823710035</div>
                          </div>
    </div>
  )
}

export default Favorite
