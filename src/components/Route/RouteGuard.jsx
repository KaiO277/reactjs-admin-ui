import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteGuard = () => {
    const hasJWT = !!localStorage.getItem("accessToken"); // Kiểm tra token có hay không

    return hasJWT ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RouteGuard;