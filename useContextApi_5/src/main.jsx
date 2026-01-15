import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextMain from "../Context/ContextMain.jsx";
ContextMain;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextMain>
      <App />
    </ContextMain>
  </StrictMode>
);
