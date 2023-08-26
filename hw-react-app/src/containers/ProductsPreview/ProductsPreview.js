import React, { useEffect, useState } from "react";
import "./ProductsPreview.css";
import logo from "../../assets/image/logo2.png";
import ProductCard from "../../components/ProductCard/ProductCard";
import { API_URL } from "../../constants/index";

const ProductsPreview = () => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiUrl = `${API_URL}/products`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProductItems(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="preview-container">
      <img src={logo} alt="logo2" className="logo" />
      <div className="container">
        {productItems.map((p) => (
          <ProductCard product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPreview;
