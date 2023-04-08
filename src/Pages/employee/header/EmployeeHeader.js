import React from "react";
import "./EmployeeHeader.css";
import { FaSearch } from "react-icons/fa";

const EmployeeHeader = () => {

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
