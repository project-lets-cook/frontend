import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, loadingUser } = useContext(UserContext);
  const location = useLocation();

  if (loadingUser) {
    return null;
  }

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />
  } else if (user.donor) {
    return <Navigate to="/DashboardDonor" />
  }
  return <Navigate to="/DashboardReceiver" />
};
