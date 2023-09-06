import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import logo from "../../assets/image/logo2.png";
import { BsPerson } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";
import ButtonProducts from "../../components/ButtonProducts/ButtonProducts";
import Table from "../../components/Table/Table";
import ModalAddEdit from "../../components/ModalAddEdit/ModalAddEdit";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constants/index";

const ProductsTable = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (!isLoaded) {
      fetchProducts();
    }
  }, [isLoaded]);

  const handlePreviewClick = () => {
    navigate("/products-preview");
  };

  const handleAddProduct = (productToAdd) => {
    setIsAddEditModalOpen(true);
    setFormData({
      id: productToAdd.id,
      category: productToAdd.category,
      name: productToAdd.name,
      quantity: productToAdd.quantity,
      price: productToAdd.price,
      description: productToAdd.description,
    });
  };

  const fetchProducts = async () => {
    try {
      const apiUrl = `${API_URL}/products`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error while fetching products:", error);
    }
    setIsLoaded(true);
  };

  const handleFormSubmit = async (formData) => {
    try {
      let apiUrl = `${API_URL}/products`;
      let method = "POST";

      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        fetchProducts();
        setIsAddEditModalOpen(false);
        setFormData({
          id: "",
          category: "",
          name: "",
          quantity: "",
          price: "",
        });
      } else {
        console.error("Failed to add/edit product:", response.statusText);
      }
    } catch (error) {
      console.error("Error while adding/editing product:", error);
    }
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
        <Table
          products={products}
          fetchProducts={fetchProducts}
          setIsAddEditModalOpen={setIsAddEditModalOpen}
          isAddEditModalOpen={isAddEditModalOpen}
          handleFormSubmit={handleFormSubmit}
          setFormData={setFormData}
        />
      </div>
      <ModalAddEdit
        isOpen={isAddEditModalOpen}
        isClose={() => setIsAddEditModalOpen(false)}
        title={formData.id ? "Edit product" : "Add product"}
        initialFormData={formData}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default ProductsTable;
