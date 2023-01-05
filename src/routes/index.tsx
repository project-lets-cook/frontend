import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardDonor } from "../pages/DashboardDonor";
import { DashboardReceiver } from "../pages/DashboardReceiver";
import { InitialPage } from "../pages/InitialPage";
import { ProfilePage } from "../pages/ProfilePage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />
      <Route path="/DashboardDonor" element={<DashboardDonor />} />
      <Route path="/DashboardReceiver" element={<DashboardReceiver />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="*" element={ <Navigate to="/"/>} />
    </Routes>
  );
};
