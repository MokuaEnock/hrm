import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./money.css";

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
