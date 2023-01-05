import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user, loadingUser } = useContext(UserContext);
  const location = useLocation();

  console.log(user);

  if (loadingUser) {
    return null;
  }
  //   switch (key) {
  //     case value:

  //         break;

  //     default:
  //         break;
  //   }
  return user ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};