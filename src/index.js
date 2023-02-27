import { createRoot } from "react-dom/client";
import App from "./App";

// import browser router
import { BrowserRouter as Router } from "react-router-dom";

// import styles
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Router>
    <App />
  </Router>
);
