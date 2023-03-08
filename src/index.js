import React from "react";
import ReactDOM from "react-dom/client";
import AppTest from "./AppTest";
import "./index.css";
//import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/**<App/>  */}
    <AppTest />
  </React.StrictMode>
);
