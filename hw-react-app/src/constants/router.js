import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "../privateRoute";
// import * as routes from "./constants/routes"; 
import Login from "../containers/Login/Login";
import ProductsTable from "../containers/ProductsTable/ProductsTable";
import ProductsPreview from "../containers/ProductsPreview/ProductsPreview";
import PreviewCard from "../containers/PreviewCard/PreviewCard";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="/products" element={<ProductsTable />} />
        <Route path="/products-preview" element={<ProductsPreview />} />
        <Route path="/products-preview/:id" element={<PreviewCard />} />
      </Route>
      <Route path="*" element={<div>404 | Page is not found</div>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
