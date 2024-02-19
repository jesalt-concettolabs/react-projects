import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
