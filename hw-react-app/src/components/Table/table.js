import React, { useState } from "react";
import "./Table.css";
import { BsArrowDownUp } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { TbArchiveFilled } from "react-icons/tb";
import { API_URL } from "../../constants/index";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalAddEdit from "../ModalAddEdit/ModalAddEdit";

const Table = ({
  fetchProducts,
  products,
  setIsAddEditModalOpen,
  isAddEditModalOpen,
  handleFormSubmit,
  setFormData,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

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
          fetchProducts();
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

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsAddEditModalOpen(true);
    setIsEdited(true);
    setFormData({
      id: product.id,
      category: product.category,
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      description: product.description,
    });
  };

  const handleAddEditCancel = () => {
    if (!isEdited) {
      setSelectedProduct(null);
    }
    setIsAddEditModalOpen(false);
    setIsEdited(false);
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
                <BsFillPencilFill
                  className="icons"
                  onClick={() => handleEditProduct(product)}
                />
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
      <ModalAddEdit
        isOpen={isAddEditModalOpen}
        isClose={handleAddEditCancel}
        title={isEdited ? "Edit product" : "Add product"}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Table;
