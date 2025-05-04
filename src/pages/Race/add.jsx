import React, { useState, useEffect } from "react";
import "../../styles/CreateUserForm.css";
import axios from "axios";

const CreateRaceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    start_time: "",
    end_time: "",
    winner_nft: "",
  });

  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        const response = await axios.get(
          "https://dagamebc-production.up.railway.app/api/nfts/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setNfts(response.data);
      } catch (err) {
        console.error("Error fetching NFTs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("Token not found. Please log in.");
      }

      const response = await axios.post(
        "https://dagamebc-production.up.railway.app/api/race/",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Race created successfully!");
      console.log("Response:", response.data);

      // Reset form
      setFormData({
        name: "",
        status: "",
        start_time: "",
        end_time: "",
        winner_nft: "",
      });
    } catch (err) {
      console.error("Error creating race:", err);
      alert("Failed to create race. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="right-content w-100">
      <div className="user-form-container">
        {/* Header */}
        <div className="user-form-header">
          <h3 className="user-form-title">Create New Race</h3>
          <p className="user-form-subtitle">
            Fill in the details below to add a new race to the system
          </p>
        </div>

        {/* Form content */}
        <div className="user-form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
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
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="started">Started</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="start_time">Start Time</label>
                <input
                  type="datetime-local"
                  id="start_time"
                  name="start_time"
                  value={formData.start_time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="end_time">End Time</label>
                <input
                  type="datetime-local"
                  id="end_time"
                  name="end_time"
                  value={formData.end_time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="winner_nft">Winner NFT</label>
                <select
                  id="winner_nft"
                  name="winner_nft"
                  value={formData.winner_nft}
                  onChange={handleChange}
                >
                  <option value="">Select Winner NFT</option>
                  {nfts.map((nft) => (
                    <option key={nft.id} value={nft.id}>
                      {nft.name} (ID: {nft.id})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                <i className="fas fa-plus"></i> Create Race
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRaceForm;
