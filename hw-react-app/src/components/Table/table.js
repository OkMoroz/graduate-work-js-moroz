import React from "react";
import "./table.css";
import { BsArrowDownUp } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { TbArchiveFilled } from "react-icons/tb";

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
              Category {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Name {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Quantity {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName">
              Price (₴) {<BsArrowDownUp className="arrowIcon" />}
            </th>
            <th className="tableName"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="greyRow">
            <td className="tableGreyRow">0</td>
            <td className="tableGreyRow">PC</td>
            <td className="tableGreyRow">Lenovo Y50-70</td>
            <td className="tableGreyRow">5</td>
            <td className="tableGreyRow">25,000.00</td>
            <td className="tableGreyRow">
              <BsFillPencilFill className="icons" />
              <TbArchiveFilled className="icons" />
            </td>
          </tr>
          <tr className="greenRow">
            <td className="tableGreenRow">1</td>
            <td className="tableGreenRow">Clothes</td>
            <td className="tableGreenRow">Nike M Nk Df Acd21</td>
            <td className="tableGreenRow">22</td>
            <td className="tableGreenRow">4,000.00</td>
            <td className="tableGreenRow">
              <BsFillPencilFill className="icons" />
              <TbArchiveFilled className="icons" />
            </td>
          </tr>
          <tr className="greyRow">
            <td className="tableGreyRow">2</td>
            <td className="tableGreyRow">Plumbing</td>
            <td className="tableGreyRow">CERSANIT MITO 17</td>
            <td className="tableGreyRow">1337</td>
            <td className="tableGreyRow">5,000.00</td>
            <td className="tableGreyRow">
              <BsFillPencilFill className="icons" />
              <TbArchiveFilled className="icons" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
