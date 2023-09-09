import React, { useEffect, useState } from "react";
import "./ProductsPreview.css";
import Logo from "../../components/Logo/Logo"; 
import arrow from "../../assets/image/arrow.svg";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="preview-container">
      <Logo />
      <div>
        <button
          className="btn-arow-table"
          type="submit"
          onClick={() => navigate(-1)}
        >
          <img src={arrow} alt="arrow"></img>
        </button>
        <div className="container">
          {productItems.map((p) => (
            <ProductCard product={p} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default ProductsPreview;
