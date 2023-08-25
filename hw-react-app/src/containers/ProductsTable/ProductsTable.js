import "./ProductsTable.css";
import logo from "../../assets/image/logo2.png";
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
        />
      </div>
      <h1 className="title">Products</h1>
      <Table />
    </div>
  );
};

export default ProductsTable;
