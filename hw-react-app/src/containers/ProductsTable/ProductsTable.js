import "./ProductsTable.css";
import ClickLogo from "../../components/ClickLogo/ClickLogo";
import { BsPerson } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";
import ButtonProducts from "../../components/ButtonProducts/ButtonProducts";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";


const ProductsTable = () => {
  const navigate = useNavigate();

  const handlePreviewClick = () => {
    navigate("/products-preview");
  };

  return (
    <div className="products-container">
      <ClickLogo to="/products-preview"/>
      <div className="btn-container">
        <ButtonProducts
          icon={<BsPerson className="btn-icon" />}
          text="Preview"
          onClick={handlePreviewClick}
        />

        <ButtonProducts
          icon={<PiPlusBold className="btn-icon" />}
          text="Add product"
        />
      </div>
      <h1 className="title">Products</h1>
      <Table />
    </div>
  );
};

export default ProductsTable;
