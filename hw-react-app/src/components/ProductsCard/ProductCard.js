import React from "react";
import "./ProductCard.css";
import cart from "../../assets/image/cart.svg";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate("/products-preview/:productId");
  };

  return (
    <div className="product-card" key={product.id} onClick={handlePreviewClick}>
      <img src={product.product} alt="product" className="img-product" />
      <h2 className="title-product">{product.name}</h2>
      <div className="cost">
        <span className="price">
          {product.price}
          <span className="ua">₴</span>
        </span>
        <span className="quantity">{product.quantity}</span>
      </div>
      <div className="buy">
        <img src={cart} alt="cart" className="cart-product-img " />
        <span className="send">{product.send}</span>
      </div>
    </div>
  );
};

export default ProductCard;
