import React, { useState, useEffect } from "react";
import "../../styles/userView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const location = useLocation();
  const [user, setUser] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); // Lấy giá trị của query parameter "id"

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://dagamebc-production.up.railway.app/api/users/${id}/`
        );
        setUser(response.data); // Lưu dữ liệu người dùng vào state
        console.log("User Data:", response.data); // Hiển thị dữ liệu trong console
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (id) {
      fetchUser(); // Gọi API nếu có id
    }
  }, [id]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <h1>Product List</h1>
      <div className="right-content w-100">
        <div className="card shadow border-0 p-3 mt-3">
          {/* Profile header */}
          <div className="card-header">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img
                  className="profile-image"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MzY5OTh8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8fHx8MTc0NTgyODg5MXww&ixlib=rb-4.0.3&q=85"
                  alt="User Profile"
                  loading="lazy"
                />
                <button className="edit-photo-btn">
                  <i className="camera-icon">📷</i>
                </button>
              </div>
              <div className="profile-info">
                <h3>{user?.username || "null"}</h3>
                <p>{user?.email || "null"}</p>
                <p className="joined-date">
                  Wallet Address: {user?.profile?.wallet_address || "null"}
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => handleTabClick("profile")}
            >
              Profile
            </button>
          </div>

          {/* Profile Content */}
          {activeTab === "profile" && (
            <div className="tab-content">
              <form className="form-grid">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    defaultValue={user?.first_name || "null"}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    defaultValue={user?.last_name || "null"}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue={user?.email || "null"} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    defaultValue={user?.phone || "null"}
                  />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <select defaultValue={user?.country || "null"}>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <select defaultValue={user?.language || "null"}>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Chinese</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Bio</label>
                  <textarea
                    rows="3"
                    defaultValue={user?.bio || "null"}
                  />
                </div>
                <div className="button-group">
                  <button type="button" className="btn cancel">
                    Cancel
                  </button>
                  <button type="submit" className="btn save">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
