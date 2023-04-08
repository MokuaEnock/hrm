import React from "react";
import "./EmployeeHeader.css";
import { FaSearch } from "react-icons/fa";
import userImage from "../../../Assets/useravatar.png";
import { Link } from "react-router-dom";

const EmployeeHeader = () => {
  let navigation = document.querySelector(".navigation");

  return (
    <div>
      <header className="employee-menubar">
        <span>
          <h3>Hello there Enock Mokua</h3>
          <p>Lets check your progress</p>
        </span>

        <form>
          <FaSearch />
          <input type="text" />
        </form>
      </header>
    </div>
  );
};

export default EmployeeHeader;
