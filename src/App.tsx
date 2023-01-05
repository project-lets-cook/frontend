import { MainRoutes } from "./routes";
import { Global } from "./Styles/GlobalStyles";

export const App = () => {
  return (
    <div>
      <Global/>
      <MainRoutes />
    </div>
  );
};
