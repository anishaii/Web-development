import React, { useState, useEffect } from "react";
import axios from "axios";
import './Admin.css';
import { assets } from '../assets/assets';

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("✅ Product added successfully!");
      setName("");
      setPrice("");
      setQuantity("");
      setImage(null);
      fetchProducts(); // Refresh product list
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert("Failed to add product");
    }
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <img src={assets.final_logo} alt="Bloom Logo" />
        </div>
        <h2>Admin Panel</h2>

        <form className="admin-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <label>Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label>Quantity</label>
          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <button type="submit">ADD</button>
        </form>
      </aside>

      <main className="admin-main-content">
        <header className="admin-header">
          <div>
            <p>Welcome to Bloom Shop</p>
            <h3>Admin Dashboard</h3>
          </div>
          <div className="admin-user">
            <div>
              <p className="admin-user-name">John Doe</p>
              <p className="admin-user-role">Admin</p>
            </div>
            <img src={assets.user_icon} alt="User Icon" />
          </div>
        </header>

        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.name}
                    height="40"
                  />
                </td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <img src={assets.updated} className="admin-icon" alt="Update" />
                  <img src={assets.trash} className="admin-icon" alt="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Admin;
