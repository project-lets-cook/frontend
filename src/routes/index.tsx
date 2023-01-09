import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";
import { About } from "../pages/About";
import { DashboardDonor } from "../pages/DashboardDonor";
import { DashboardReceiver } from "../pages/DashboardReceiver";
import { InitialPage } from "../pages/InitialPage";
import { ProfilePage } from "../pages/ProfilePage";
import { Teste } from "../pages/teste";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<InitialPage />} />

      {/* <Route element={<ProtectedRoutes />}> */}
      <Route path="/DashboardDonor" element={<DashboardDonor />} />
      <Route path="/DashboardReceiver" element={<DashboardReceiver />} />
      <Route path="/ProfilePage" element={<ProfilePage />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/teste" element={<Teste />} />

      {/* </Route> */}
    </Routes>
  );
};
