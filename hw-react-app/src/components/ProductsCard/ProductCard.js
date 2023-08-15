import React from "react";
import "./ProductCard.css";
import cart from "../../assets/image/cart.svg";

const ProductCard = ({ product }) => {
  return (
      <div className="product-card" key={product.id}>
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
