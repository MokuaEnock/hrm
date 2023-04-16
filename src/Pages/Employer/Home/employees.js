import React from "react";
import { useParams } from "react-router-dom";
import "./employees.css";
import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";

const users = [
  {
    id: 1,
    name: "Enock Mokua",
    gender: "Male",
    totalDays: 123,
    daysMissed: 9,
    totalGrossEarnings: 10900,
    totalNetEarnings: 7000,
  },
  {
    id: 2,
    name: "Jane Doe",
    gender: "Female",
    totalDays: 120,
    daysMissed: 10,
    totalGrossEarnings: 10500,
    totalNetEarnings: 6800,
  },
  {
    id: 3,
    name: "Bob Johnson",
    gender: "Male",
    totalDays: 130,
    daysMissed: 5,
    totalGrossEarnings: 12000,
    totalNetEarnings: 7800,
  },
  {
    id: 4,
    name: "Sarah Williams",
    gender: "Female",
    totalDays: 125,
    daysMissed: 8,
    totalGrossEarnings: 11500,
    totalNetEarnings: 7500,
  },
  {
    id: 5,
    name: "Michael Lee",
    gender: "Male",
    totalDays: 128,
    daysMissed: 7,
    totalGrossEarnings: 11200,
    totalNetEarnings: 7300,
  },
];

export default function EmployerEmployee() {
  let { id } = useParams();

  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-home">
        <EmployerHead message={"Welcome to Enock's profile"} />
        <section id="employer-employe-cont">
          <div id="employer-employee-cont-main"></div>
          <aside id="employer-employee-cont-aside">
            <div id="employee-aside-rating">
              <h5>Rating</h5>
              <div></div>
              <p>Average Employee</p>
            </div>

            <div id="employee-aside-docs">
              <h5>Download documents</h5>
              <button>Payslips</button>
              <button>Performance report</button>
            </div>
          </aside>
        </section>
      </section>
    </section>
  );
}
