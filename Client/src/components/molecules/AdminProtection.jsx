// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const AdminProtection = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("userToken");
  const role = localStorage.getItem("role");
  console.log(role, allowedRoles)
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AdminProtection;
