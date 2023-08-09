import React from "react";
import "./ProductsCard.css";
import cart from "../../assets/image/cart.svg";

const ProductsCard = ({ products }) => {
  return (
    <div className="container">
      {products.map((product) => (
        <div>
          <div className="productsCard" key={product.id}>
            <img src={product.product} alt="product" className="imgProduct" />
            <h2 className="titleProduct">{product.name}</h2>
            <div className="cost">
              <span className="price">
                {product.price}
                <span className="ua">₴</span>
              </span>
              <span className="quantity">{product.quantity}</span>
            </div>
            <div className="buy">
              <img src={cart} alt="cart" className="cartProduct " />
              <span className="send">{product.send}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
