import DepartmentHeader from "../header/header";
import DepartmentNav from "../navbar/navbar";
import "./embers.css";
import Table from "./table";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    employeeNumber: "E001",
    age: 32,
    gender: "Male",
    employeeRole: "Software Engineer",
    daysPresent: 20,
    daysAbsent: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    employeeNumber: "E002",
    age: 28,
    gender: "Female",
    employeeRole: "Designer",
    daysPresent: 18,
    daysAbsent: 7,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    employeeNumber: "E003",
    age: 45,
    gender: "Male",
    employeeRole: "Project Manager",
    daysPresent: 22,
    daysAbsent: 3,
  },
  {
    id: 4,
    name: "Alice Lee",
    email: "alice.lee@example.com",
    employeeNumber: "E004",
    age: 27,
    gender: "Female",
    employeeRole: "Software Engineer",
    daysPresent: 21,
    daysAbsent: 4,
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    employeeNumber: "E005",
    age: 36,
    gender: "Male",
    employeeRole: "Data Analyst",
    daysPresent: 19,
    daysAbsent: 6,
  },
  {
    id: 6,
    name: "Mary Taylor",
    email: "mary.taylor@example.com",
    employeeNumber: "E006",
    age: 31,
    gender: "Female",
    employeeRole: "UI/UX Designer",
    daysPresent: 20,
    daysAbsent: 5,
  },
  {
    id: 7,
    name: "Peter Chen",
    email: "peter.chen@example.com",
    employeeNumber: "E007",
    age: 29,
    gender: "Male",
    employeeRole: "Software Engineer",
    daysPresent: 18,
    daysAbsent: 7,
  },
  {
    id: 8,
    name: "Linda Wang",
    email: "linda.wang@example.com",
    employeeNumber: "E008",
    age: 33,
    gender: "Female",
    employeeRole: "Data Scientist",
    daysPresent: 22,
    daysAbsent: 3,
  },
  {
    id: 9,
    name: "Tom Smith",
    email: "tom.smith@example.com",
    employeeNumber: "E009",
    age: 38,
    gender: "Male",
    employeeRole: "Software Engineer",
    daysPresent: 21,
    daysAbsent: 4,
  },
  {
    id: 10,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    employeeNumber: "E010",
    age: 26,
    gender: "Female",
    employeeRole: "Product Manager",
    daysPresent: 19,
    daysAbsent: 6,
  },
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
        <h3>Statistics this month</h3>
        <div id="department-employees-header">
          <span>Employee No.</span>
          <span>Name</span>
          <span>Email</span>
          <span>Age</span>
          <span>Gender</span>
          <span>Role</span>
          <span>Days Present</span>
          <span>Days Absent</span>
        </div>
        <section id="department-employees">
          {users.map((user) => (
            <div key={user.id} className="department-employees-list">
              <span>{user.employeeNumber}</span>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.age}</span>
              <span>{user.gender}</span>
              <span>{user.employeeRole}</span>
              <span>{user.daysPresent}</span>
              <span>{user.daysAbsent}</span>
            </div>
          ))}
        </section>

        {/* <Table data={users} columns={columns} /> */}
      </section>
    </section>
  );
}
