import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./apps.css";
import { Link } from "react-router-dom";
import {
  FaDashboard,
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
            <span>{/* <FaDashboard /> */}</span>
            <p>Dashboard</p>
          </Link>

          <Link to="/employer/home">
            <span>
              <FaMoneyBillAlt />
            </span>
            <p>Payroll</p>
          </Link>

          <Link to="/employer/home">
            <span>
              <FaUserCircle />
            </span>
            <p>Profile</p>
          </Link>

          <Link to="/employer/home">
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
