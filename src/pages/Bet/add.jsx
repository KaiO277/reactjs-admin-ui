import React, { useState, useEffect } from "react";
import "../../styles/CreateUserForm.css";
import axios from "axios";

const CreateBetForm = () => {
  const [formData, setFormData] = useState({
    amount: "",
    user: "",
    nft: "",
    race: "",
  });

  const [users, setUsers] = useState([]);
  const [nfts, setNfts] = useState([]);
  const [races, setRaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error("Token not found. Please log in.");
        }

        // Fetch users, nfts, and races
        const [usersResponse, nftsResponse, racesResponse] = await Promise.all([
          axios.get("https://dagamebc-production.up.railway.app/api/users/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://dagamebc-production.up.railway.app/api/nfts/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("https://dagamebc-production.up.railway.app/api/race/", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setUsers(usersResponse.data);
        setNfts(nftsResponse.data);
        setRaces(racesResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        "https://dagamebc-production.up.railway.app/api/bets/",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Bet created successfully!");
      console.log("Response:", response.data);

      // Reset form
      setFormData({
        amount: "",
        user: "",
        nft: "",
        race: "",
      });
    } catch (err) {
      console.error("Error creating bet:", err);
      alert("Failed to create bet. Please try again.");
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
          <h3 className="user-form-title">Create New Bet</h3>
          <p className="user-form-subtitle">
            Fill in the details below to add a new bet to the system
          </p>
        </div>

        {/* Form content */}
        <div className="user-form-content">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user">User</label>
                <select
                  id="user"
                  name="user"
                  value={formData.user}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.username} (ID: {user.id})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="nft">NFT</label>
                <select
                  id="nft"
                  name="nft"
                  value={formData.nft}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select NFT</option>
                  {nfts.map((nft) => (
                    <option key={nft.id} value={nft.id}>
                      {nft.name} (ID: {nft.id})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="race">Race</label>
                <select
                  id="race"
                  name="race"
                  value={formData.race}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Race</option>
                  {races.map((race) => (
                    <option key={race.id} value={race.id}>
                      {race.name} (ID: {race.id})
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
                <i className="fas fa-plus"></i> Create Bet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBetForm;
