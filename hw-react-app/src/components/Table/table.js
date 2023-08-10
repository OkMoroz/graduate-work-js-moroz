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
    <div className="tableContainer">
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th className="tableName">
              ID {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Категорія {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Назва {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Кількість {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Ціна (₴) {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className={product.id % 2 === 0 ? "greenRow" : "greyRow"}
            >
              <td
                className={
                  product.id % 2 === 0 ? "tableGreenRow" : "tableGreyRow"
                }
              >
                {product.id}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "tableGreenRow" : "tableGreyRow"
                }
              >
                {product.category}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "tableGreenRow" : "tableGreyRow"
                }
              >
                {product.name}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "tableGreenRow" : "tableGreyRow"
                }
              >
                {product.quantity}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "tableGreenRow" : "tableGreyRow"
                }
              >
                {product.price}
              </td>
              <td
                className={
                  product.id % 2 === 0 ? "tableGreyRow" : "tableGreenRow"
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
