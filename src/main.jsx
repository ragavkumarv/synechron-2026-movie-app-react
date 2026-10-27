import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Default import - no curly braces - only one default
import App from "./App.jsx";

// Bootstrap - Starting - App component inside div.root
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// StrictMode  - runs twice - verify components
