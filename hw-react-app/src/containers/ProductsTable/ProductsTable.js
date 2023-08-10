import "./ProductsTable.css";
import logo from "../../assets/image/logo2.png";
import { BsPerson } from "react-icons/bs";
import { PiPlusBold } from "react-icons/pi";
import ButtonProducts from "../../components/ButtonProducts/ButtonProducts";
import Table from "../../components/Table/Table";

const ProductsTable = () => {
  return (
    <div className="productsContainer">
      <img src={logo} alt="logo2" className="logo" />
      <div className="btnContainer">
        <ButtonProducts
          icon={<BsPerson className="btnIcon" />}
          text="Preview"
        />
        <ButtonProducts
          icon={<PiPlusBold className="btnIcon" />}
          text="Add product"
        />
      </div>
      <h1 className="title">Products</h1>
      <Table />
    </div>
  );
};

export default ProductsTable;
