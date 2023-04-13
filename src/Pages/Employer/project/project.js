import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./project.css";

let data = {
  projects: [
    {
      id: 1,
      name: "Social Media Campaign",
      department: "Marketing",
      progress: 75,
      start_date: "2023-01-01",
      end_date: "2023-03-31",
      budget: 100000,
      expenses: 75000,
      status: "In Progress",
    },
    {
      id: 2,
      name: "Market Research",
      department: "Marketing",
      progress: 100,
      start_date: "2022-10-01",
      end_date: "2022-12-31",
      budget: 50000,
      expenses: 50000,
      status: "Completed",
    },
    {
      id: 3,
      name: "Website Redesign",
      department: "IT",
      progress: 50,
      start_date: "2023-01-01",
      end_date: "2023-06-30",
      budget: 150000,
      expenses: 75000,
      status: "In Progress",
    },
    {
      id: 4,
      name: "Software Upgrade",
      department: "IT",
      progress: 0,
      start_date: "2023-04-01",
      end_date: "2023-09-30",
      budget: 100000,
      expenses: 0,
      status: "Not Started",
    },
  ],
};

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
              {data.projects.map((project) => (
                <li className="employer-projects-items" key={project.id}>
                  <span className="employer-projects-items-head">
                    {project.id}
                  </span>
                  <span className="employer-projects-items-body">
                    {project.name}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <aside id="employer-projects-aside">
            <h3>Project Vanilla</h3>
            <div id="employer-projects-aside-info">
              <span>
                <p>Department: </p>
              </span>

              <span id="projects-progress-bar">
                <p>Project progress</p>
                <p>50%</p>
                <progress value={50} max={100} />
              </span>
            </div>
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
