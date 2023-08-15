import React, { useState, useEffect } from "react";
import "./Table.css";
import { BsArrowDownUp } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { TbArchiveFilled } from "react-icons/tb";


const Table = () => {
  const [products, setProducts] = useState([]);
 
   useEffect(() => {
     fetchProducts();
   }, []);
  
   const fetchProducts = async () => {
     try {
       const response = await fetch(
         "https://64db4a40593f57e435b0bcab.mockapi.io/products"
       );
       const data = await response.json();
       setProducts(data);
     } catch (error) {
       console.error("Error while fetching products:", error);
     }
   };

  return (
    <div className="table-сontainer">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="table-name">
              ID {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Category {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Name {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Quantity {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Price (₴) {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className={product.id % 2 === 0 ? "green-row" : "grey-row"}
            >
              <td
                className={
                  product.id % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.id}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.category}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.name}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.quantity}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.price}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "table-grey-row" : "table-green-row"
                }
              >
                <BsFillPencilFill className="icons" />
                <TbArchiveFilled className="icons" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
