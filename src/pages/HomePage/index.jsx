import React from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../helpers/setAuthToken";

function HomePage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuthToken(null);
        navigate("/login"); // Điều hướng về trang login
    };

    return (
        <div>
            <h2>Welcome to HomePage</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default HomePage;
