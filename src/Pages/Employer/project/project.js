import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./project.css";

export default function EmployerProject() {
  return (
    <section id="employer-container">
      <EmployerNav />
      <section id="employer-project">
        <EmployerHead />
      </section>
    </section>
  );
}
