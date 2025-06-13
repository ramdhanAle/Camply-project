import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function AuthenticatedRoute() {
  const location = useLocation();
  const user = useAuth();
  if (!user.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
}

function UnAuthenticatedRoute() {
  if (user.token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}

export { AuthenticatedRoute, UnAuthenticatedRoute };
