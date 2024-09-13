import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import i18n (needs to be bundled ;))
import "./i18n.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback="loading">
    <Router>
      <App />
    </Router>
  </Suspense>
);
