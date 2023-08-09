import React from "react";
import "./ProductsPreview.css";
import logo from "../../assets/image/logo2.png";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
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
    <div className="PreviewContainer">
      <img src={logo} alt="logo2" className="logo" />
        <ProductsCard products={productItems} />
    </div>
  );
}

export default ProductsPreview;
