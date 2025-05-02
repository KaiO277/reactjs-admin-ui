import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";

// Tạo Context để quản lý trạng thái đăng nhập toàn cục
const AuthContext = createContext();

// Custom hook để sử dụng Context
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider sẽ bao bọc toàn bộ ứng dụng và cung cấp trạng thái đăng nhập
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Kiểm tra token khi ứng dụng khởi động
        const token = localStorage.getItem("accessToken");

        if (token) {
            setAuthToken(token);  // Thiết lập token vào header của axios

            // Lấy thông tin người dùng từ API hoặc từ token
            axios.get("https://dagamebc-production.up.railway.app/api/user-data/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                setUser(response.data); // Lưu thông tin người dùng
                setLoading(false); // Đánh dấu hoàn tất quá trình kiểm tra
            })
            .catch(error => {
                console.error("Lỗi khi lấy dữ liệu người dùng:", error);
                setLoading(false); // Hoàn tất kiểm tra dù có lỗi
                navigate("/login"); // Chuyển hướng về trang đăng nhập nếu có lỗi
            });
        } else {
            setLoading(false); // Nếu không có token, hoàn tất quá trình kiểm tra
            navigate("/login"); // Chuyển hướng về trang đăng nhập nếu không có token
        }
    }, [navigate]);

    // Cung cấp state user và các hàm liên quan tới xác thực
    const login = (token, userData) => {
        localStorage.setItem("accessToken", token); // Lưu token vào localStorage
        setAuthToken(token);  // Thiết lập token vào header axios
        setUser(userData);    // Lưu thông tin người dùng
        navigate("/");        // Chuyển hướng về trang chủ sau khi đăng nhập
    };

    const logout = () => {
        console.log("Logging out...");
        localStorage.clear(); // Xóa toàn bộ localStorage
        setAuthToken(null);  // Xóa token khỏi header axios
        setUser(null);       // Xóa thông tin người dùng
        navigate("/login");  // Chuyển hướng về trang đăng nhập
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
