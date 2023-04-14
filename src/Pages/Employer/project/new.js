import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./new.css";
import "./project.css";
import { Link } from "react-router-dom";
export default function NewEmployerProject() {
  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-project">
        <EmployerHead message={"Manage your projects"} />
        <section id="employer-project-cont">
          <div id="employer-projects-main">
            <span id="employer-projects-main-header">
              <h3>Create new project</h3>
              <Link to="/employer/projects">Back</Link>
            </span>

            <form id="project-form">
              <span className="project-form-header">
                <h4>Project Information</h4>
                <p>Set project refrence details</p>
              </span>

              <div class="category-1">
                <label for="project-name">
                  <p>Project Name:</p>
                  <input
                    type="text"
                    id="project-name"
                    name="project-name"
                    required
                  />
                </label>

                <label for="start-date">
                  <p>Start Date:</p>
                  <input
                    type="date"
                    id="start-date"
                    name="start-date"
                    required
                  />
                </label>

                <label for="end-date">
                  <p>End Date:</p>
                  <input type="date" id="end-date" name="end-date" required />
                </label>

                <label for="project-description">
                  <p>Project Description:</p>
                  <textarea
                    id="project-description"
                    name="project-description"
                    required
                  ></textarea>
                </label>
              </div>

              <span className="project-form-header">
                <h4>Department</h4>
                <p>Set the departments repsonsible</p>
              </span>

              <div class="category-2">
                <label for="organization-name">
                  <p>Organization Name:</p>
                  <input
                    type="text"
                    id="organization-name"
                    name="organization-name"
                    required
                  />
                </label>

                <label for="department-name">
                  <p>Department Name:</p>
                  <input
                    type="text"
                    id="department-name"
                    name="department-name"
                    required
                  />
                </label>
              </div>

              <span className="project-form-header">
                <h4>Project management</h4>
                <p>Management details</p>
              </span>

              <div class="category-3">
                <label for="project-manager">
                  <p>Project Manager:</p>
                  <input
                    type="text"
                    id="project-manager"
                    name="project-manager"
                    required
                  />
                </label>

                <label for="budget">
                  <p>Budget:</p>
                  <input type="number" id="budget" name="budget" required />
                </label>

                <label for="timeline">
                  <p>Timeline:</p>
                  <input type="text" id="timeline" name="timeline" required />
                </label>

                <label for="resources">
                  <p>Resources Required:</p>
                  <textarea id="resources" name="resources" required></textarea>
                </label>

                <label for="risks">
                  <p>Risks and Challenges:</p>
                  <textarea id="risks" name="risks" required></textarea>
                </label>
              </div>

              <span className="project-form-header">
                <h4>Performance metrics</h4>
                <p>Track metrics performance</p>
              </span>

              <div class="category-4">
                <label for="goals">
                  <p>Goals and Objectives:</p>
                  <textarea id="goals" name="goals" required></textarea>
                </label>

                <label for="stakeholders">
                  <p>Stakeholders Involved:</p>
                  <input
                    type="text"
                    id="stakeholders"
                    name="stakeholders"
                    required
                  />
                </label>

                <label for="success-metrics">
                  <p>Success Metrics:</p>
                  <textarea
                    id="success-metrics"
                    name="success-metrics"
                    required
                  ></textarea>
                </label>
              </div>

              <button>Submit</button>
            </form>
          </div>
        </section>
      </section>
    </section>
  );
}
