import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./apps.css";
import { Link } from "react-router-dom";
import {
  FaChartArea,
  FaMoneyBillAlt,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";

export default function EmployerApps() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-apps">
        <EmployerHead message={"Where would you like to navigate to?"} />
        <div id="employer-apps-cont">
          <Link to="/employer/home">
            <span><FaChartArea /></span>
            <p>Dashboard</p>
          </Link>

          <Link to="/employer/money">
            <span>
              <FaMoneyBillAlt />
            </span>
            <p>Payroll</p>
          </Link>

          <Link to="/employer/profile">
            <span>
              <FaUserCircle />
            </span>
            <p>Profile</p>
          </Link>

          <Link to="/employer/employees">
            <span>
              <FaUsers />
            </span>
            <p>Add employees</p>
          </Link>
        </div>
      </section>
    </section>
  );
}
