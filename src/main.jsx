import "./index.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

// import App from './App.jsx'
import Dashboard from "./pages/dashboard";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Dashboard />
  </StrictMode>,
);
