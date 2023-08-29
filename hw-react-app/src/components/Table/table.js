import React, { useState, useEffect } from "react";
import "./Table.css";
import { BsArrowDownUp } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { TbArchiveFilled } from "react-icons/tb";
import { API_URL } from "../../constants/index";
import ModalDelete from "../../components/ModalDelete/ModalDelete";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleted, setisDeleted] = useState(false);

  useEffect(() => {
    if (!isDeleted) {
      fetchProducts();
    }
  }, [isDeleted]);

  const fetchProducts = async () => {
    try {
      const apiUrl = `${API_URL}/products`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
    setisDeleted(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async (event) => {
    event.preventDefault();
    if (selectedProduct) {
      try {
        const apiUrl = `${API_URL}/products/${selectedProduct.id}`;
        const response = await fetch(apiUrl, { method: "DELETE" });

        if (response.status === 200) {
          setisDeleted(false);
        }
      } catch (error) {
        console.error("Error while deleting product:", error);
      }

      setSelectedProduct(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setSelectedProduct(null);
    setIsDeleteModalOpen(false);
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
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={index % 2 === 0 ? "green-row" : "grey-row"}
            >
              <td
                className={
                  index % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.id}
              </td>
              <td
                className={
                  index % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.category}
              </td>
              <td
                className={
                  index % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.name}
              </td>
              <td
                className={
                  index % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.quantity}
              </td>
              <td
                className={
                  index % 2 === 0 ? "table-green-row" : "table-grey-row"
                }
              >
                {product.price}
              </td>
              <td
                className={
                  index % 2 === 0 ? "table-grey-row" : "table-green-row"
                }
              >
                <BsFillPencilFill className="icons" />
                <TbArchiveFilled
                  className="icons"
                  onClick={() => handleDeleteClick(product)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalDelete
        isOpen={isDeleteModalOpen}
        isClose={handleDeleteCancel}
        isDelete={handleDeleteConfirm}
      />
    </div>
  );
};

export default Table;
