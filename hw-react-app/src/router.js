import Login from "../src/containers/Login/Login";
import ProductsTable from "../src/containers/ProductsTable/ProductsTable";
import ProductsPreview from "../src/containers/ProductsPreview/ProductsPreview";
import PreviewCard from "./containers/PreviewCard/PreviewCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="/products" element={<ProductsTable />}></Route>
        <Route path="/products-preview" element={<ProductsPreview />}></Route>
        <Route path="/products-preview/:productId" element={<PreviewCard />}
        ></Route>
      </Route>
      <Route path="*" element={<div>404 | Page is not found</div>}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
