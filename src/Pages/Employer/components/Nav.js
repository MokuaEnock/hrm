import { Link } from "react-router-dom";
import "./nav.css";

export default function EmployerNav() {
  return (
    <aside id="employer-nav">
      <span id="employer-nav-head">Tech Int.</span>
      <span id="employer-nav-body">
        <Link to="/employer/apps">Home</Link>
        <Link to="/employer/home">Dashboard</Link>
        <Link to="/employer/money">Money</Link>
        <Link to="/employer/profile">Profile</Link>
        <Link to="/employer/projects">Projects</Link>
        <Link to="/employer/employees">Employees</Link>
      </span>
      <span id="employer-nav-foot">
        <Link to="/">Logout</Link>
      </span>
    </aside>
  );
}
