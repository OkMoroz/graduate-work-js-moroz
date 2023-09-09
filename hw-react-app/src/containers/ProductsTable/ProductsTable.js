import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import Logo from "../../components/Logo/Logo"; 
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
  const [isEditing, setIsEditing] = useState(false);
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
    setFormData(productToAdd);
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

  const handleFormSubmit = async (formData, isEditing) => {
    try {
      let apiUrl, method;
      if (isEditing) {
        apiUrl = `${API_URL}/products/${formData.id}`;
        method = "PUT";
      } else {
        apiUrl = `${API_URL}/products`;
        method = "POST";
      }
      const cleanFormData = {
        category: formData.category,
        name: formData.name,
        quantity: formData.quantity,
        price: formData.price,
        description: formData.description,
      };

      const response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanFormData),
      });

      if (response.status === 200 || response.status === 201) {
        fetchProducts();
        setIsAddEditModalOpen(false);
        setFormData({
          category: "",
          name: "",
          quantity: "",
          price: "",
          description: "",
        });
        setIsEditing(true);
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
          <Logo />
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
          formData={formData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </div>
      <ModalAddEdit
        isOpen={isAddEditModalOpen}
        isClose={() => setIsAddEditModalOpen(false)}
        title={formData.id ? "Edit product" : "Add product"}
        initialFormData={formData}
        handleFormSubmit={handleFormSubmit}
        isEditing={formData.id ? true : false}
        isEdit={isEditing}
      />
    </>
  );
};

export default ProductsTable;
