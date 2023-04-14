import { useState } from "react";
import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./project.css";
import { Link } from "react-router-dom";

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
      name: "Product Launch",
      department: "Product Development",
      progress: 20,
      start_date: "2023-02-15",
      end_date: "2023-05-31",
      budget: 500000,
      expenses: 250000,
      status: "In Planning",
    },
    {
      id: 3,
      name: "Website Redesign",
      department: "IT",
      progress: 50,
      start_date: "2023-03-01",
      end_date: "2023-06-30",
      budget: 200000,
      expenses: 100000,
      status: "In Development",
    },
    {
      id: 4,
      name: "New Product Line",
      department: "Product Development",
      progress: 10,
      start_date: "2023-04-01",
      end_date: "2023-12-31",
      budget: 1000000,
      expenses: 500000,
      status: "In Planning",
    },
    {
      id: 8,
      name: "Corporate Branding",
      department: "Marketing",
      progress: 80,
      start_date: "2023-01-15",
      end_date: "2023-04-30",
      budget: 50000,
      expenses: 40000,
      status: "In Progress",
    },
    {
      id: 9,
      name: "Customer Retention",
      department: "Sales",
      progress: 30,
      start_date: "2023-02-01",
      end_date: "2023-06-30",
      budget: 100000,
      expenses: 75000,
      status: "In Development",
    },
  ],
};

export default function EmployerProject() {
  const [currentProject, setCurrentProject] = useState(data.projects[0]);

  const handleProjectClick = (project) => {
    setCurrentProject(project);
  };

  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-project">
        <EmployerHead message={"Manage your projects"} />
        <section id="employer-project-cont">
          <div id="employer-projects-main">
            <span id="employer-projects-main-header">
              <h3>Your current projects</h3>
              <Link to="/employer/projects/new">New Project</Link>
            </span>
            <ol id="employer-projects-list">
              {data.projects.map((project) => (
                <li
                  className="employer-projects-items"
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                >
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
            <h3>{currentProject.name}</h3>
            <div id="employer-projects-aside-info">
              <span>
                <p>Department: {currentProject.department}</p>
              </span>

              <span id="projects-progress-bar">
                <p>Project progress</p>
                <p>{currentProject.progress}%</p>
                <progress value={currentProject.progress} max={100} />
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
