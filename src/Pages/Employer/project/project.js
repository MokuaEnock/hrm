import { useState } from "react";
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
      name: "Product Launch",
      department: "Product Development",
      progress: 20,
      start_date: "2023-02-15",
      end_date: "2023-05-31",
      budget: 500000,
      expenses: 250000,
      status: "In Planning",
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
            <h3>Your current projects</h3>
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
