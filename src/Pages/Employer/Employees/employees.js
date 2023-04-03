import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./employees.css";

export default function EmployerEmployees() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-employees-cont">
        <EmployerHead message={"Add employees to your organisation"} />
      </section>
    </section>
  );
}
