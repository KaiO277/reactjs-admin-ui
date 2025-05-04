import React, { useState, useEffect } from "react";
import "../../styles/userView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewRaceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    start_time: "",
    end_time: "",
    winner_nft: "",
  });

  // const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  console.log(id);
  

  useEffect(() => {
    const fetchRace = async () => {
      try {
        const response = await axios.get(
          `https://dagamebc-production.up.railway.app/api/race/${id}/`
        );

        const data = response.data;

        setFormData({
          name: data.name || "",
          status: data.status || "",
          start_time: data.start_time?.slice(0, 16) || "",
          end_time: data.end_time?.slice(0, 16) || "",
          winner_nft: data.winner_nft || "",
        });
        console.log(formData);
      } catch (error) {
        console.error("Error fetching race data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRace();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div className="right-content w-100">
      <div className="user-form-container">
        <div className="user-form-header">
          <h3 className="user-form-title">View/Edit Race</h3>
          <p className="user-form-subtitle">
            View or edit the details of the selected race
          </p>
        </div>

        <div className="user-form-content">
          <form>
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
                  <option value="Pending">Pending</option>
                  <option value="Started">Started</option>
                  <option value="Completed">Completed</option>
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
                <input
                  type="text"
                  id="winner_nft"
                  name="winner_nft"
                  value={formData.winner_nft || ""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewRaceForm;
