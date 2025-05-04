import React, { useState, useEffect } from "react";
import "../../styles/userView.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ViewNFTPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    token_id: "",
    image_url: "",
    staked: false,
    created_at: "",
    user: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); // Lấy giá trị của query parameter "id"

  useEffect(() => {
    const fetchNFT = async () => {
      try {
        const response = await axios.get(
          `https://dagamebc-production.up.railway.app/api/nfts/get_ntfs_by_id_api/${id}/`
        );
  
        // Kiểm tra nếu API trả về một mảng
        if (Array.isArray(response.data) && response.data.length > 0) {
          const data = response.data[0]; // Lấy đối tượng đầu tiên từ mảng
          console.log("NFT Data:", data);
  
          setFormData({
            name: data.name || "",
            token_id: data.token_id || "",
            image_url: data.image_url || "",
            staked: data.staked || false,
            created_at: data.created_at || "",
            user: data.user || "",
          });
        } else {
          console.error("No NFT data found.");
        }
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      }
    };
  
    if (id) {
      fetchNFT();
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
          <h3 className="user-form-title">View/Edit NFT</h3>
          <p className="user-form-subtitle">
            View or edit the details of the selected NFT
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
                <label htmlFor="image_url">Image URL</label>
                <input
                  type="text"
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="staked">Staked</label>
                <select
                  id="staked"
                  name="staked"
                  value={formData.staked ? "true" : "false"}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      staked: e.target.value === "true",
                    }))
                  }
                  required
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
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

export default ViewNFTPage;