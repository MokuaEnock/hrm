import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./home.css";

export default function EmployerHome() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-home">
        <EmployerHead message={"Welcome home"} />
      </section>
    </section>
  );
}
