import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./money.css";

export default function EmployerMoney() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-money-cont">
        <EmployerHead message={"Manage your finances today."} />
      </section>
    </section>
  );
}
