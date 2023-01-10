import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, loadingUser } = useContext(UserContext);

  if (loadingUser) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};
