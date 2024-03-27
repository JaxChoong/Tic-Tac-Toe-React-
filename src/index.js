import React, { StrictMode } from "react";          // imports React
import { createRoot } from "react-dom/client";      // imports React's library to talk to web browsers (React-DOM)
import "./styles.css";                              // imports styles

import App from "./App";                           // imports componenets from App.js

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);