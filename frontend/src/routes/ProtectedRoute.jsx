import { Navigate, Outlet } from "react-router-dom";
import AuthTokenManager from "../services/AuthTokenManager";

const ProtectedRoute = () => {
  const authManager = new AuthTokenManager();
  const token = authManager.hasToken();

  return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
