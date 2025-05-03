import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Alert } from "react-bootstrap";
import "../../styles/LoginPage.css";
import BackgroundImage from "../../assets/images/background.png";
import Logo from "../../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../helpers/setAuthToken"; // Giúp set token vào header axios

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");  // Đặt lại lỗi mỗi khi gửi form
  
    try {
      const response = await axios.post("https://dagamebc-production.up.railway.app/api/admin-login/", {
        username: email,
        password: password,
      });
  
      console.log("Response:", JSON.stringify(response, null, 2));
  
      // Lấy token từ response (các trường 'access' và 'refresh')
      const { access, refresh } = response.data;
      if (!access) throw new Error("Không có token trong response!");
  
      // Lưu token vào localStorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      localStorage.setItem("username", email); 
      // localStorage.setItem("email", JSON.stringify(response.data.user.email)); 
  
      // Cài đặt token vào header của axios
      setAuthToken(access);
  
      console.log("🎯 Token đã lưu:", localStorage.getItem("accessToken"));
      navigate("/");  // Chuyển hướng về trang chính sau khi đăng nhập thành công
    } catch (err) {
      console.error("Lỗi API:", err.response ? err.response.data : err);
      
      // Xử lý lỗi và hiển thị thông báo người dùng
      setError(err.response?.data?.message || "Đăng nhập thất bại! Vui lòng thử lại.");
    } finally {
      setLoading(false);  // Đặt lại trạng thái loading khi hoàn thành
    }
  };
  

  const handlePassword = () => {
    toast.info("Password recovery isn't available right now.");
  };

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="sign-in__backdrop"></div>
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        <img className="img-thumbnail mx-auto d-block mb-2" src={Logo} alt="logo" />
        <div className="h4 mb-2 text-center">Sign In</div>

        {/* Hiển thị lỗi nếu có */}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-2" controlId="text">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}  // 🔥 Fix lỗi nhập sai
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Log In"}
        </Button>

        <div className="d-grid justify-content-end">
          <Button className="text-muted px-0" variant="link" onClick={handlePassword}>
            Forgot password?
          </Button>
        </div>
      </Form>

      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by KaiO | &copy;2024
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
