import React, { useState } from "react";
import "./ProductsTable.css";
import logo from "../../assets/image/logo2.png";
import { BsPerson } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";
import ButtonProducts from "../../components/ButtonProducts/ButtonProducts";
import Table from "../../components/Table/Table";
import ModalAddEdit from "../../components/ModalAddEdit/ModalAddEdit";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
  const navigate = useNavigate();
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);

  const handlePreviewClick = () => {
    navigate("/products-preview");
  };

  const handleAddProduct = () => {
    setIsAddEditModalOpen(true);
  };

  return (
    <>
      <div className="products-container">
        <header>
          <img src={logo} alt="logo2" className="logo" />
        </header>
        <div className="btn-container">
          <ButtonProducts
            icon={<BsPerson className="btn-icon" />}
            text="Preview"
            clickAction={handlePreviewClick}
          />
          <ButtonProducts
            icon={<PiPlusBold className="btn-icon" />}
            text="Add product"
            clickAction={handleAddProduct}
          />
        </div>
        <h1 className="title">Products</h1>
        <Table setIsAddEditModalOpen={setIsAddEditModalOpen} />
      </div>
      <ModalAddEdit
        isOpen={isAddEditModalOpen}
        isClose={() => setIsAddEditModalOpen(false)}
        title={"Add product"}
      />
    </>
  );
};

export default ProductsTable;
