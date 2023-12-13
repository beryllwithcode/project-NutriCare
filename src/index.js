import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

const skipLink = document.createElement("a");
skipLink.href = "#content";
skipLink.className = "skip-link";
skipLink.textContent = "Skip to content";
document.body.insertBefore(skipLink, document.body.firstChild);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
