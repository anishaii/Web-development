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
  const [editId, setEditId] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    if (image) formData.append("image", image);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✏️ Product updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("✅ Product added successfully!");
      }

      setName("");
      setPrice("");
      setQuantity("");
      setImage(null);
      setEditId(null);
      fetchProducts();
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      alert("🗑️ Product deleted successfully!");
      fetchProducts();
    } catch (err) {
      console.error("❌ Delete failed:", err);
      alert("Failed to delete product.");
    }
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setImage(null); // new image optional
    setEditId(product.id);
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
            required={!editId} // required only when adding
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

          <button type="submit">{editId ? "UPDATE" : "ADD"}</button>

          {editId && (
            <button
              type="button"
              onClick={() => {
                setName("");
                setPrice("");
                setQuantity("");
                setImage(null);
                setEditId(null);
              }}
            >
              Cancel Edit
            </button>
          )}
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
                  <img
                    src={assets.updated}
                    className="admin-icon"
                    alt="Update"
                    onClick={() => handleEdit(product)}
                  />
                  <img
                    src={assets.trash}
                    className="admin-icon"
                    alt="Delete"
                    onClick={() => handleDelete(product.id)}
                  />
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
