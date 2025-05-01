import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RouteGuard from "./components/Route/RouteGuard";

// Pages
import Dashboard from "./pages/Dashboard";
import ProductList from "./pages/Product/index";
import BetList from "./pages/Bet/index";
import NFTList from "./pages/NFT/index";
import UserDetailView from "./pages/Product/view";
// import UserDetailView from "./pages/Product/view";
import LoginPage from "./pages/Login";
import { Outlet } from "react-router-dom";

// Context
const MyContext = createContext();

// ✅ Layout chính chứa Header & Sidebar
const MainLayout = () => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  return (
    <MyContext.Provider value={{ isToggleSidebar, setIsToggleSidebar }}>
      <Header />
      <div className="main d-flex">
        <div className={`sidebarWrapper ${isToggleSidebar ? "toggle" : ""}`}>
          <Sidebar />
        </div>
        <div className={`content ${isToggleSidebar ? "toggle" : ""}`}>
          <Outlet /> {/* Outlet giúp render nội dung động */}
        </div>
      </div>
    </MyContext.Provider>
  );
};

function App() {
  console.log("App component is rendering..."); 
  return (
    <Router>
      <Routes>
        {/* ✅ Trang Login (Không có Sidebar & Header) */}
        <Route path="/login" element={<LoginPage />} />

        {/* ✅ Các trang cần đăng nhập (có Header & Sidebar) */}
        <Route element={<RouteGuard />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/list" element={<ProductList />} />
            <Route path="/user/view" element={<UserDetailView />} />
            <Route path="/nfts/list" element={<NFTList />} />
            {/* <Route path="/nfts/view" element={<NFTView />} /> */}
            <Route path="/stake/list" element={<BetList />} />
            <Route path="/stake/view" element={<UserDetailView />} />
          </Route>
        </Route>

        {/* ✅ Redirect nếu route không tồn tại */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
export { MyContext };
