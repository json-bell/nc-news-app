import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./contexts/NavContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NavProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </NavProvider>
    </BrowserRouter>
  </StrictMode>
);
