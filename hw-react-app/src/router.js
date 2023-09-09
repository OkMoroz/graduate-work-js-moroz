import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Login from "./containers/Login/Login";
import ProductsTable from "./containers/ProductsTable/ProductsTable";
import ProductsPreview from "./containers/ProductsPreview/ProductsPreview";
import ProductPreview from "./containers/ProductPreview/ProductPreview";
import NotFound from "./containers/NotFound/NotFound";
import { ROUTING } from "./constants/index";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path={ROUTING.products} element={<ProductsTable />} />
        <Route path={ROUTING.productsPreview} element={<ProductsPreview />} />
        <Route path={ROUTING.productPreview} element={<ProductPreview />} />
      </Route>
      <Route path={ROUTING.notFound} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
