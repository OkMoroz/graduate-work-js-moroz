import React from "react";
import "./Table.css";
import { BsArrowDownUp } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { TbArchiveFilled } from "react-icons/tb";

const products = [
  {
    id: 1,
    category: "Комп'ютер",
    name: "Lenovo Y50-70",
    quantity: 5,
    price: 25000.0,
  },
  {
    id: 2,
    category: "Одяг",
    name: "Nike M Nk Df Acd21",
    quantity: 22,
    price: 4000.0,
  },
  {
    id: 3,
    category: "Сантехніка",
    name: "CERSANIT MITO 17",
    quantity: 1337,
    price: 5000.0,
  },
];

const Table = () => {
  return (
    <div className="table-сontainer">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th className="table-name">
              ID {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Категорія {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Назва {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Кількість {<BsArrowDownUp className="arrow-icon" />}
            </th>
            <th className="table-name">
              Ціна (₴) {<BsArrowDownUp className="arrow-icon" />}
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
