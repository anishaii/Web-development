import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { assets } from '../assets/assets'
import './Favorite.css'  // your existing CSS, plus new styles below

const Favorite = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) return

        const response = await axios.get('http://localhost:5000/api/favorites', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setFavorites(response.data)
      } catch (error) {
        console.error('Error fetching favorites:', error)
      }
    }

    fetchFavorites()
  }, [])

  return (
    <div>
      <aside className="bar">
        <img src={assets.menu} />
        <img src={assets.home} />
        <img src={assets.basket} />
        <img src={assets.heart} />
        <img src={assets.care} />
      </aside>

      <div className="hero">
        <img src={assets.back} />
        <div className="hero-text">Plant Care</div>
        <div className="contact">
          for any other Query<br />Contact us: +977 9823710035
        </div>
      </div>

      {/* New section to display favorites */}
      <div className="favorites-list">
        <h2>Your Favorites</h2>
        {favorites.length === 0 && <p>You have no favorite plants yet.</p>}

        {favorites.map((plant) => (
          <div key={plant.id} className="favorite-card">
            <img
              src={`http://localhost:5000/images/${plant.image}`}
              alt={plant.name}
              className="favorite-img"
            />
            <div className="favorite-info">
              <h3>{plant.name}</h3>
              <p>NPR. {plant.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorite
