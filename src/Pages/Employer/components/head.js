import "./head.css";
import { FaBell } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function EmployerHead({ message }) {
  return (
    <header id="employer-head">
      <div>
        <h3>Good morning</h3>
        <p>{message}</p>
      </div>

      <span>
        <form id="header-search">
          <FaSearch id="search-icon" />
          <input type="text" placeholder="Search" />
        </form>

        <Link to="/client/notifications" className="notifications">
          <FaBell />
        </Link>

        <Link to="/client/messages" className="notifications">
          <FaComment />
        </Link>
        
      </span>
    </header>
  );
}
