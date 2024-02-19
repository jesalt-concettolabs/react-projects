import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function RequireAuth({ children }) {
  const location = useLocation();
  const auth = useAuthContext();

  if (!auth.user) {
    return <Navigate to="/" state={{ from: location.pathname }} />;
  }
  return children;
}

export default RequireAuth;
