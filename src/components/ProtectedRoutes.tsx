import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem("authToken");
  
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  return <Outlet />;
};

export default ProtectedRoute;
