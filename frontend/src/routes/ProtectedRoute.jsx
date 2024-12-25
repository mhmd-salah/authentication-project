import { Navigate, Outlet } from "react-router-dom";
import AuthTokenManager from "../global/AuthTokenManager";

const ProtectedRoute = () => {
  const authManager = AuthTokenManager.getInstance();
  const token = authManager.hasToken();

  return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
