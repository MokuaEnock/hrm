import React from "react";

import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./home.css";
import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LineChart from "../../../Components/charts/line";
import DonutGraph from "../../../Components/charts/donut";

export default function EmployerHome() {
  const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ];

  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-home">
        <EmployerHead message={"Welcome home"} />
        <div id="client-home-employees">
          <span className="client-home-employees">
            <p>Total Employees</p>
            <span>
              <p>1000</p>
              <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total Payout</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total attendance</p>
            <span>
              <p>1000</p>
              <p className="sts-down">
                <RiArrowDownSLine />
                8.5%
              </p>
            </span>
          </span>

          <span className="client-home-employees">
            <p>Total deductions</p>
            <span>
              <p>1000</p>
              <p className="sts-up">
                <RiArrowUpSLine />
                8.5%
              </p>
            </span>
          </span>
        </div>

        <div id="client-home-chart">
          <div id="client-home-bar">
            <p className="client-home-chart-title">Deductions and Net pay</p>
            <div className="chart-container">
              <LineChart />
            </div>
          </div>
          <div id="client-home-pie">
            <p className="client-home-chart-title">Employee Attendance</p>
            <div>
              <DonutGraph />
            </div>
          </div>
        </div>

        <div id="client-home-emps">
          <div id="client-home-emps-header">
            <h3>Employees</h3>
            <form id="client-home-emps-form">
              <FaSearch style={{ fontSize: "16px" }} className="icon" />
              <input type="text" placeholder="search" />
            </form>
          </div>

          <div id="client-home-emps-head">
            <span className="client-home-emps-number">Employee no.</span>
            <span className="client-home-emps-name">Employee Name</span>
            <span className="client-home-emps-sex">Gender</span>
            <span className="client-home-emps-days">Total days</span>
            <span className="client-home-emps-missed">Days Missed</span>
            <span className="client-home-emps-gross">Total gross Earnings</span>
            <span className="client-home-emps-net">Total Net Earnings</span>
          </div>

          <Link
            to={`/client/home/employees/${users.id}`}
            className="client-home-emps-child"
          >
            <span className="client-home-emps-number">22</span>
            <span className="client-home-emps-name">Enock Mokua</span>
            <span className="client-home-emps-sex">Male</span>
            <span className="client-home-emps-days">123</span>
            <span className="client-home-emps-missed">9</span>
            <span className="client-home-emps-gross">10900</span>
            <span className="client-home-emps-net">7000</span>
          </Link>
        </div>
      </section>
    </section>
  );
}
