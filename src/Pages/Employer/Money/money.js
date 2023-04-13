import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./money.css";
import { Link } from "react-router-dom";

let data = [
  {
    department_id: "1001",
    department_name: "Sales",
  },
  {
    department_id: "1002",
    department_name: "Marketing",
  },
  {
    department_id: "1003",
    department_name: "Finance",
  },
  {
    department_id: "1004",
    department_name: "Human Resources",
  },
  {
    department_id: "1005",
    department_name: "Information Technology",
  },
];

export default function EmployerMoney() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-money-cont">
        <EmployerHead message={"Manage your finances today."} />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h3>Release Employees Salaries</h3>
            {data.map((department) => (
              <Link
                className="payment-list"
                key={department.department_id}
                to={`/employer/money/department/${department.department_id}`}
              >
                <span className="payment-list-head">
                  {department.department_id}
                </span>
                <span className="payment-list-body">
                  <p>{department.department_name}</p>
                </span>
              </Link>
            ))}
          </div>
          <aside id="client-payment-cont2">
            <h3>Downoad all employee information</h3>
            <span>
              <p>Next pay Date</p>
              <p>12/05/2023</p>
              <p>20 days 10 hours</p>
            </span>

            <span>
              <p>Total Net pay so far</p>
              <p>KES 12,500</p>
            </span>

            <span>
              <h3>Dwonload documents</h3>
              <button>Download Payslips</button>
              <button>Download Attendance Sheets</button>
            </span>
          </aside>
        </section>
      </section>
    </section>
  );
}
