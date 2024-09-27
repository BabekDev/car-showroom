import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import HeaderComponent from "./components/main/Header/Header";
import FooterComponent from "./components/main/Footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeaderComponent />

    <App />

    <FooterComponent />
  </React.StrictMode>
);
