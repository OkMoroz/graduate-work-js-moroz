import React, { useEffect, useState } from "react";
import "./ProductPreview.css";
import Logo from "../../components/Logo/Logo"; 
import arrow from "../../assets/image/arrow.svg";
import check from "../../assets/image/check.svg";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { API_URL } from "../../constants/index";

const ProductPreview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `${API_URL}/products/${id}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const navigate = useNavigate();

  return (
    <>
      <header className="header-preview">
        <Logo />
      </header>
      <div className="preview-card-container">
        {product ? (
          <div className="card-container">
            <div>
              <div className="product-name flex">
                <button
                  className="btn-arow"
                  type="submit"
                  onClick={() => navigate(-1)}
                >
                  <img src={arrow} alt="arrow"></img>
                </button>
                <h1 className="card-title">{product.name}</h1>
              </div>
              <div className="product-info flex">
                <img
                  src={product.image}
                  alt={product}
                  className="product-image"
                />
                <div className="details flex">
                  <div className="check flex">
                    <img src={check} alt="Check"></img>
                    <span className="check-image">In stock.</span>
                  </div>
                  <div className="product-details flex">
                    <p className="product-price">
                      {product.price}
                      <span className="ua-preview">₴</span>
                    </p>
                    <p className="product-quantity">
                      Quantity: {product.quantity}
                    </p>
                  </div>
                </div>
              </div>
              <div className="wrap flex">
                <span className="wrapper">Description</span>
                <h2 className="card-title-wrap">{product.name}</h2>
              </div>
              <div className="product-description">
                <h3 className="product-description-subtitle">
                  {product.description.headerFirstP}
                </h3>
                <p className="description">{product.description.firstP}</p>

                <h3 className="product-description-subtitle">
                  {product.description.headerSecondP}
                </h3>
                <p className="description">{product.description.secondP}</p>

                <h3 className="product-description-subtitle">
                  {product.description.headerThirdP}
                </h3>
                <p className="description">{product.description.thirdP}</p>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
        <Outlet />
      </div>
    </>
  );
};

export default ProductPreview;
