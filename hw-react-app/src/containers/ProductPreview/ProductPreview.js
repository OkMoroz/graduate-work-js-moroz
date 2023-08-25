import React, { useEffect, useState } from "react";
import "./ProductPreview.css";
import logo from "../../assets/image/logo2.png";
import arrow from "../../assets/image/arrow.svg";
import check from "../../assets/image/check.svg";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const ProductPreview = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const apiUrl = `https://64db4a40593f57e435b0bcab.mockapi.io/products/${id}`;
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
    <div className="preview-card-container">
      <header>
        <img src={logo} alt="logo2" className="logo" />
      </header>
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
                  <span className="check-image">Є в наявності</span>
                </div>
                <div className="product-details flex">
                  <p className="product-price">
                    {product.price}
                    <span className="ua-preview">₴</span>
                  </p>
                  <p className="product-quantity">
                    Кількість: {product.quantity}
                  </p>
                </div>
              </div>
            </div>
            <div className="wrap flex">
              <span className="wrapper">Опис</span>
              <h2 className="card-title-wrap">{product.name}</h2>
            </div>
            <div className="product-description">
              <h3 className="product-description-subtitle">
                15.6-дюймовий дисплей стандарту
              </h3>
              <p className="description">
                Full HD Фільми, малюнки та ігри немов оживають на дисплеї
                стандарту Full HD (1920 x 1080).
              </p>
              <h3 className="product-description-subtitle">
                Динаміки преміум-класу
              </h3>
              <p className="description">
                Стереофонічні динаміки JBL, що забезпечують розкішне звучання з
                ефектом присутності, ідеально підходять для відео, ігор і
                музики.
              </p>
              <h3 className="product-description-subtitle">
                Dolby Advanced Audio
              </h3>
              <p className="description">
                Dolby Advanced Audio — це технологія, завдяки якій на ноутбуці
                можна відтворити кришталево чіткий просторовий звук за допомогою
                вбудованих динаміків.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
      <Outlet />
    </div>
  );
};

export default ProductPreview;
