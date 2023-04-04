import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";
import "./embers.css";
import Table from "./table";

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
];

const columns = ["name", "email"];

export default function DepartmentMembers() {
  return (
    <section className="department-cont" class="department-member-cont">
      <DepartmentNav />
      <section id="department-member">
        <DepartmentHeader
          message={"You can see all the information about your members"}
        />

        <form id="member-search">
          <h3>Search for members in your department</h3>
          <p>Use either their name or employee number</p>
          <span>
            <input type="text" placeholder="Search by name or employee no." />
            <button type="submit">Search</button>
          </span>
        </form>

        {/* <Table data={users} columns={columns} /> */}
      </section>
    </section>
  );
}
