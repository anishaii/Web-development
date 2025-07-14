import React from 'react'
import { assets } from '../assets/assets'
import './PlantCare.css'


const PlantCare = () => {
  return (
    <div>
          <aside className="bar">
            <img src={assets.menu}  />
            <img src={assets.home} />
            <img src={assets.basket} />
            <img src={assets.heart} />
            <img src={assets.care} />
          </aside>

      <div className='main'>

        <div className="hero">
      <img src={assets.back}  />
      <div className="hero-text">Plant Care</div>
      <div className="contact">
        for any other Query<br/>Contact us: +977 9823710035</div>
        </div>

          <div className="section">
      <div className="flex-row">
        <img src={assets.unpackingg} />
        <div>
          <h2>After Unpacking Your Plant</h2>
          <ul>
            <li>Handle with care: Gently remove the plant from its packaging. Be careful not to damage leaves or roots.</li>
            <li>Check for any damage: A few yellow leaves or loose soil is normal during shipping.</li>
            <li>Let it settle: Place the plant in a shaded, warm spot indoors for 1–2 days to help it recover from the journey.</li>
            <li>Do not repot immediately: Allow your plant to adjust for about 7–10 days before repotting (unless the pot is clearly damaged or too small).</li>
          </ul>
        </div>
      </div>
    </div>

   
    <div className="section">
      <div className="flex-row">
        <div>
          <h2>Light Requirements</h2>
          <ul>
            <li><strong>Bright, indirect light:</strong> Most houseplants prefer this. Near a sunny window but not in direct sun.</li>
            <li><strong>Low-light plants:</strong> Can survive in corners or offices with artificial lighting.</li>
          </ul>
        </div>
        <img src={assets.sunlight} alt="Light for Plants" />
      </div>
    </div>

   
    <div className="section">
      <div className="flex-row">
        <img src={assets.WAtering}  />
        <div>
          <h2>Watering Tips</h2>
          <ul>
            <li>Check soil moisture first: Stick your finger 1–2 inches into the soil. If it feels dry, it’s time to water.</li>
            <li>Avoid overwatering: Most houseplants hate soggy roots. Make sure your pot has good drainage.</li>
            <li>Water gently: Use room temperature water and pour until you see it drain from the bottom.</li>
          </ul>
        </div>
      </div>
    </div>

        </div>

    
      
    </div>
  )
}

export default PlantCare
