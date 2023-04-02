import "./signup.css";
import ClientBar from "../navbar/navbar";
import ClientHeader from "../home/header";
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

export default function ClientSignup() {
  return (
    <section id="client-cont-signup">
      <ClientBar />
      <section id="client-signup">
        <ClientHeader message="Its payday approve payments" />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h3>Release Employees Salaries</h3>
            {data.map((department) => (
              <Link
                className="payment-list"
                key={department.department_id}
                to={`/client/signup/${department.department_id}`}
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
          <aside id="client-payment-cont2"></aside>
        </section>
      </section>
    </section>
  );
}
