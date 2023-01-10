import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { DonationProvider } from "./contexts/DonationContext";
import { UserProvider } from "./contexts/UserContext";
import { Global } from "./Styles/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DonationProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </DonationProvider>
      <Global />
    </BrowserRouter>
  </React.StrictMode>
);
