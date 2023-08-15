import "./ProductsTable.css";
import logo from "../../assets/image/logo2.png";
import { BsPerson } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";
import ButtonProducts from "../../components/ButtonProducts/ButtonProducts";
import Table from "../../components/Table/Table";

const ProductsTable = () => {
  return (
    <div className="products-container">
      <img src={logo} alt="logo2" className="logo" />
      <div className="btn-container">
        <ButtonProducts
          icon={<BsPerson className="btn-icon" />}
          text="Preview"
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
