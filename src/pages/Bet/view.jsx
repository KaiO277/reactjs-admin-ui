import React, { useState, useEffect } from "react";
import "../../styles/userView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewBetPage = () => {
  const [formData, setFormData] = useState({
    amount: "",
    created_at: "",
    user: "",
    nft: "",
    race: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); // Lấy giá trị của query parameter "id"

  useEffect(() => {
    const fetchBet = async () => {
      try {
        const response = await axios.get(
          `https://dagamebc-production.up.railway.app/api/bets/${id}/`
        );

        const data = response.data;

        setFormData({
          amount: data.amount || "",
          created_at: data.created_at || "",
          user: data.user || "",
          nft: data.nft || "",
          race: data.race || "",
        });
        console.log("Bet Data:", data);
      } catch (error) {
        console.error("Error fetching bet data:", error);
      }
    };

    if (id) {
      fetchBet();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="right-content w-100">
      <div className="user-form-container">
        <div className="user-form-header">
          <h3 className="user-form-title">View/Edit Bet</h3>
          <p className="user-form-subtitle">
            View or edit the details of the selected bet
          </p>
        </div>

        <div className="user-form-content">
          <form>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="created_at">Created At</label>
                <input
                  type="text"
                  id="created_at"
                  name="created_at"
                  value={new Date(formData.created_at).toLocaleString()}
                  readOnly
                />
              </div>

              <div className="form-group">
                <label htmlFor="user">User ID</label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="nft">NFT ID</label>
                <input
                  type="text"
                  id="nft"
                  name="nft"
                  value={formData.nft}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="race">Race ID</label>
                <input
                  type="text"
                  id="race"
                  name="race"
                  value={formData.race}
                  onChange={handleChange}
                  required
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

export default ViewBetPage;