import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import PreviewCard from "./containers/PreviewCard/PreviewCard";
import { ROUTING } from "./constants/index";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTING.login} element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTING.products} element={<ProductsTable />} />
        <Route path={ROUTING.productsPreview} element={<ProductsPreview />} />
        <Route path={ROUTING.previewCard} element={<PreviewCard />} />
      </Route>

      <Route path="*" element={<div>404 | Page is not found</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
