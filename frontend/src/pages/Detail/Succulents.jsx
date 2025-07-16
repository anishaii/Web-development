import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Succulents = () => {
    const Navigate = useNavigate()
  return (
    <div>
      <div className="money-container">
      
                      <aside className="bar">
                          <img src={assets.menu} />
                          <img src={assets.home} onClick={() => Navigate('/dashboard')}/>
                          <img src={assets.basket} />
                          <img src={assets.heart} />
                          <img src={assets.care} />
                        </aside>
      
                        <div className="money-content">
      
                  <div className="money-top">
                    <div className="image-wrapper">
                      <img src={assets.succulents} className="money-img" />
                      <img src={assets.favorite} className="heart-icon" alt="Heart Icon" />
                    </div>
      
                    <div className="money-details">
                      <h2>Succulent Sets</h2>
                      <p className="pricep">NPr. 1200</p>
                      <p className="desc">
                        Whether you’re starting your plant family or adding to it, these hand-selected easy plants are perfect for 
                        less-than-ideal conditions. Each of these three plants is incredibly easy, will adapt to nearly any available 
                        light, and are extremely forgiving.Their easy-going nature makes them perfect for office spaces, dorm rooms, and beginners.
                      </p>
                      <button className="add-to-cart">Add to cart</button>
      
                      <div className="info-section">
                        <div>
                          <img src={assets.delivery}  />
                          <p><strong>Free Shipping</strong><br />Get free standard shipping when you spend $125 or more.</p>
                        </div>
                        <div>
                          <img src={assets.high_quality}  />
                          <p><strong>Guarantee</strong><br />If your plant dies within 30 days, we’ll replace it for free.</p>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="money-bottom">
                    <div className="benefits">
                      <h3>Benefits of the Money Tree</h3>
                      <p><strong>Unique, Sculptural Design</strong><br />
                        Its lush foliage create a bold, eye-catching focal point, perfect for entryways or modern interiors.</p>
      
                      <p><strong>Low Maintenance Appeal</strong><br />
                        With moderate care, it stays healthy and vibrant, ideal for those seeking an impressive plant with minimal fuss.</p>
      
                      <p><strong>Calming Effect</strong><br />
                        Its rich green leaves and structured form create a soothing, natural focal point that can help ease tension in busy spaces.</p>
      
                      <h4>Expert Care Guidelines</h4>
                      <ul>
                        <li><strong>Watering:</strong> Water every 1-2 weeks when the top inch of soil feels dry; avoid overwatering.</li>
                        <li><strong>Lighting:</strong> Place in bright, indirect light; tolerates lower light but thrives near filtered sunlight.</li>
                        <li><strong>Humidity:</strong> Prefers moderate humidity; mist occasionally.</li>
                      </ul>
                    </div>
      
                    <img src={assets.setss}  className="bottom-img" />
                  </div>
      
                </div>
      
      
            
            </div>
    </div>
  )
}

export default Succulents
