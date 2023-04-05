import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./project.css";

export default function EmployerProject() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-project">
        <EmployerHead message={"Manage your projects"} />
        <section id="employer-project-cont">
          <div id="employer-projects-main">
            <h3>Your current projects</h3>
            <ol id="employer-projects-list">
              <li className="employer-projects-items"></li>
            </ol>
          </div>
          <aside id="employer-projects-aside">
            <h3>Project Vanilla</h3>
            <span id="project-buttons">
              <button id="project-update-button">Update</button>
              <button id="project-delete-button">Delete</button>
            </span>
          </aside>
        </section>
      </section>
    </section>
  );
}
