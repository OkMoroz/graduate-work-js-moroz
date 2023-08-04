import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    <ProductsTable />
  </React.StrictMode>
);
