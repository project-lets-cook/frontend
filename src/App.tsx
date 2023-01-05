import { ToastContainer } from "react-toastify";
import { MainRoutes } from "./routes";

export const App = () => {
  return (
    <div>
      <MainRoutes />
      <ToastContainer />
    </div>
  );
};
