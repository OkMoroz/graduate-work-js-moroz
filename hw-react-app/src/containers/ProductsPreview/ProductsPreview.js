import React from "react";
import "./ProductsPreview.css";
import ClickLogo from "../../components/ClickLogo/ClickLogo";
import ProductCard from "../../components/ProductsCard/ProductCard";
import productImage from "../../assets/image/product.jpg";

const ProductsPreview = () => {
  const productItems = [
    {
      id: 1,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 2,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 3,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 4,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 5,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 6,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
  ];

  return (
    <div className="preview-container">
      <ClickLogo to="/products-preview" />
      <div className="container">
        {productItems.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
