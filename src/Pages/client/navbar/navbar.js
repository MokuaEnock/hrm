import { Link } from "react-router-dom";
import "./navbar.css";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiMoney } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";

export default function ClientBar() {
  return (
    <aside id="client-nav-bar">
      <span id="client-bar-head">HrTech Int.</span>
      <span id="client-bar-info">
        <Link to="/client/home" class="tooltip" id="employee-menu">
          <AiOutlineHome />
          <span className="tooltiptext">Home</span>
        </Link>
        <Link to="/client/profile" className="tooltip" id="employee-menu">
          <FaUserCircle />
          <span className="tooltiptext">Profile</span>
        </Link>
        <Link to="/client/money" className="tooltip" id="employee-menu">
          <BiMoney />
          <span className="tooltiptext">Money</span>
        </Link>
        <Link to="/client/employee" className="tooltip" id="employee-menu">
          <BsPeople />
          <span className="tooltiptext">Employee</span>
        </Link>
        <Link to="/client/approvals" className="tooltip" id="employee-menu">
          <FiUserCheck />
          <span className="tooltiptext">Approvals</span>
        </Link>

        <Link to="/client/signup" className="tooltip">
          <FaUserPlus />
          <span className="tooltiptext">Salaries</span>
        </Link>
      </span>

      <Link to="/" className="tooltip" id="employee-menu">
        <RiLogoutBoxRLine />
        <span className="tooltiptext">Logout</span>
        <br />
      </Link>
    </aside>
  );
}
