import React from 'react'
import { assets } from '../../assets/assets'
import './MoneyPlant.css'

const MoneyPlant = () => {
  return (
    <div>
      <div className="money-container">

                <aside className="bar">
                    <img src={assets.menu}  />
                    <img src={assets.home} />
                    <img src={assets.basket} />
                    <img src={assets.heart} />
                    <img src={assets.care} />
                  </aside>

        <div className="money-main">
          <div className="money-top">
            <div className="money-image-box">
              <img src={assets.money_tree} className="money-plant-img" />
            </div>

            <div className="money-details">
              <h1>Money Tree</h1>
              <p className="money-price">NPr. 800</p>
              <p className="money-desc">
                Popular for its use in Feng Shui, the Money Tree is a pet-friendly and air-purifying plant with large star-shaped leaves and a braided trunk to give your home a tropical feel.
              </p>

              <div className="money-btn-container">
                <button className="money-add-btn">Add to cart</button>
              </div>

              <div className="money-shipping">
                <div className="money-info-box">
                  <img src={assets.delivery} />
                  <p><strong>Free Shipping</strong><br /><span>Get free standard shipping when you spend $125 or more.</span></p>
                </div>
                <div className="money-info-box">
                  <img src={assets.high_quality}  />
                  <p><strong>Guarantee</strong><br /><span>If your plant dies within 30 days, we’ll replace it for free</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="money-bottom">
            <div className="money-benefits">
              <h2>Benefits of the Money Tree</h2>

              <h3>Unique, Sculptural Design</h3>
              <p>Its lush foliage create a bold, eye-catching focal point, perfect for entryways or modern interiors.</p>

              <h3>Low Maintenance Appeal</h3>
              <p>With moderate care, it stays healthy and vibrant, ideal for those seeking an impressive plant with minimal fuss.</p>

              <h3>Calming Effect</h3>
              <p>Its rich green leaves and structured form create a soothing, natural focal point that can help ease tension in busy spaces.</p>

              <h3>Expert Care Guidelines</h3>
              <ul>
                <li><strong>Watering:</strong> Water every 1–2 weeks when the top inch of soil feels dry; avoid overwatering.</li>
                <li><strong>Lighting:</strong> Place in bright, indirect light; tolerates lower light but thrives near filtered sunlight.</li>
                <li><strong>Humidity:</strong> Prefers moderate humidity; mist occasionally.</li>
              </ul>
            </div>

            <div className="money-close-up-img">
              <img src={assets.mtree} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyPlant;
