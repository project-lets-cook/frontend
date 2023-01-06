import { ToastContainer } from "react-toastify";
import { MainRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <MainRoutes />
      <ToastContainer />
    </div>
  );
};
