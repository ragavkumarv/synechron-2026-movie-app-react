import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Default import - no curly braces - only one default import
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
