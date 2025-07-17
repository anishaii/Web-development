import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import './Dashboard.css';

const plantList = [
  {
    id: 1,
    name: 'Neon Prayer Plant',
    price: 'NPR. 800',
    badge: 'BESTSELLER',
    image: assets.neon,
    route: '/neonplant',
  },
  {
    id: 2,
    name: 'White Orchid',
    price: 'NPR. 1500',
    badge: 'BESTSELLER',
    image: assets.orchid,
    route: '/orchid',
  },
  {
    id: 3,
    name: 'Spider Plant',
    price: 'NPR. 500',
    badge: 'NEW',
    image: assets.spider,
    route: '/spiderplant',
  },
  {
    id: 4,
    name: 'Cat Palm',
    price: 'NPR. 1100',
    image: assets.palm,
    route: '/palm',
  },
  {
    id: 5,
    name: 'Bromeliad Pineapple',
    price: 'NPR. 2000',
    badge: 'SUMMER EXCLUSIVE',
    image: assets.pineapple,
    route: '/pineapple',
  },
  {
    id: 6,
    name: 'Money Tree',
    price: 'NPR. 800',
    image: assets.money_tree,
    route: '/moneyplant',
  },
  {
    id: 7,
    name: 'Monstera Deliciosa',
    price: 'NPR. 2500',
    image: assets.mosntera,
    route: '/monstera',
  },
  {
    id: 8,
    name: 'Tough Stuff Collection',
    price: 'NPR. 1000',
    strikePrice: 'NPR.1500',
    image: assets.succulents,
    route: '/succulent',
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [filteredPlants, setFilteredPlants] = useState(plantList);

  const { register, watch, handleSubmit } = useForm();
  const search = watch('search') || '';

  useEffect(() => {
    const filtered = plantList.filter(plant =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPlants(filtered);
  }, [search]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <header className='dash'>
        <img src={assets.final_logo} alt="" className="logo" />

        {/* Search Input using react-hook-form */}
        <form onSubmit={handleSubmit(() => {})}>
          <input
            type="text"
            placeholder="Search for plants"
            className="search-box"
            {...register('search')}
          />
        </form>

        <div className="icons">
          <button className="logout" onClick={logoutHandler}>Logout</button>
        </div>
      </header>

      <aside className="sidebar">
        <img src={assets.menu} />
        <img src={assets.home} />
        <img src={assets.basket} />
        <img src={assets.heart} />
        <img src={assets.care} onClick={() => navigate('/plantcare')} />
      </aside>

      <main className="main-content">
        <section>
          <h2>{search ? `Search Results for "${search}"` : 'All Plants'}</h2>
          <div className="product-grid">
            {filteredPlants.map((plant) => (
              <div className="product-card" key={plant.id}>
                {plant.badge && (
                  <span className={`badge ${plant.badge.includes('NEW') || plant.badge.includes('SUMMER') ? 'green' : ''}`}>
                    {plant.badge}
                  </span>
                )}
                <img src={plant.image} onClick={() => navigate(plant.route)} />
                <div className="product-details">
                  <span className="name">{plant.name}</span>
                  <span className="price">
                    {plant.strikePrice && <span className="strikethrough">{plant.strikePrice}</span>} {plant.price}
                  </span>
                </div>
              </div>
            ))}
            {filteredPlants.length === 0 && <p>No plants found.</p>}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
