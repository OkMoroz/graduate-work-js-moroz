import React from "react";
import "./ProductsPreview.css";
import logo from "../../assets/image/logo2.png";
import ProductCard from "../../components/ProductsCard/ProductCard";
import productImage from "../../assets/image/product.jpg";

function ProductsPreview() {
  const productItems = [
    {
      id: 1,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "$25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 2,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "$25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 3,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "$25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 4,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "$25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 5,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "$25000₴",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
    {
      id: 6,
      product: productImage,
      name: "Ноутбук Lenovo Y50-70 Aluminum Black",
      price: "$25000",
      quantity: "Кількість: 5",
      send: "Готовий до відправки",
    },
  ];

  return (
    <div className="previewContainer">
      <img src={logo} alt="logo2" className="logo" />
      <div className="container">
        {productItems.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPreview;