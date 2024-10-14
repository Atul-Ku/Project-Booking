// src/components/ProtectedRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"; // Import Navigate

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/admin" replace />; 
  }

  // If authenticated, render the requested component
  return children; 
};

export default ProtectedRoute;