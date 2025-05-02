import React, { useState, useEffect } from "react";
import "../../styles/CreateUserForm.css";
import axios from "axios";

const CreateNFTForm = () => {
  const [formData, setFormData] = useState({
    token_id: "",
    name: "",
    image_url: "",
    staked: false,
    user: "",
  });

  const [users, setUsers] = useState([]); // State để lưu danh sách người dùng
  const [loadingUsers, setLoadingUsers] = useState(true); // Trạng thái loading cho danh sách người dùng

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // Lấy token từ localStorage
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        const response = await axios.get(
          "https://dagamebc-production.up.railway.app/api/users/",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Gửi token trong header
            },
          }
        );
        setUsers(response.data); // Lưu danh sách người dùng vào state
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoadingUsers(false); // Dừng trạng thái loading
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("accessToken"); // Lấy token từ localStorage
        if (!token) {
            throw new Error("Token not found. Please log in.");
        }

        const response = await axios.post(
            "https://dagamebc-production.up.railway.app/api/nfts/mint/",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Gửi token trong header
                },
            }
        );
        console.log("NFT created successfully:", response.data);
        alert("NFT created successfully!");

        // Clear form sau khi thêm thành công
        setFormData({
            token_id: "",
            name: "",
            image_url: "",
            staked: false,
            user: "",
        });
    } catch (err) {
        console.error("Error creating NFT:", err);
        alert("Failed to create NFT. Please try again.");
    }
};

  return (
    <div className="right-content w-100">
      <div className="user-form-container">
        {/* Header */}
        <div className="user-form-header">
          <h3 className="user-form-title">Create New NFT</h3>
          <p className="user-form-subtitle">
            Fill in the details below to add a new NFT to the system
          </p>
        </div>

        {/* Form content */}
        <div className="user-form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="token_id">Token ID</label>
                <input
                  type="text"
                  id="token_id"
                  name="token_id"
                  value={formData.token_id}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="image_url">Image URL</label>
                <input
                  type="url"
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="staked">Staked</label>
                <input
                  type="checkbox"
                  id="staked"
                  name="staked"
                  checked={formData.staked}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="user">User</label>
                {loadingUsers ? (
                  <p>Loading users...</p>
                ) : (
                  <select
                    id="user"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a user</option>
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.username} (ID: {user.id})
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <i className="fas fa-plus"></i> Create NFT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNFTForm;
