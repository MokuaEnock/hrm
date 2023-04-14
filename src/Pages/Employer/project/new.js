import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./new.css";

export default function NewEmployerProject() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-project">
        <EmployerHead message={"Manage your projects"} />
        <section id="employer-project-cont">
          <div id="employer-projects-main">
            <h3>Your current projects</h3>
          </div>
        </section>
      </section>
    </section>
  );
}
