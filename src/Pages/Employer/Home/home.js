import React, { useState, useEffect } from "react";

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
  let [allEmployees, setAllEmployees] = useState();
  let [totalEmployees, setTotalEmployees] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [allEmployees, totalEmployees] = await Promise.all([
          fetch("http://localhost:3000/all_employees/1").then((response) =>
            response.json()
          ),
          fetch("http://localhost:3000/total_employees/1").then((response) =>
            response.json()
          ),
        ]);
        setAllEmployees(allEmployees.employees);
        setTotalEmployees(totalEmployees);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(totalEmployees);

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
            <span className="client-home-emps-days">Days Present</span>
            <span className="client-home-emps-missed">Days Absent</span>
            <span className="client-home-emps-gross">Total gross Earnings</span>
            <span className="client-home-emps-net">Total Net Earnings</span>
          </div>
          {allEmployees ? (
            allEmployees.map((user) => (
              <Link
                key={user.employee_number}
                to={`/employer/home/employees/${user.id}`}
                className="client-home-emps-child"
              >
                <span className="client-home-emps-number">
                  {user.employee_number}
                </span>
                <span className="client-home-emps-name">{user.name}</span>
                <span className="client-home-emps-sex">{user.gender}</span>
                <span className="client-home-emps-days">
                  {user.total_present_days}
                </span>
                <span className="client-home-emps-missed">
                  {user.total_absent_days}
                </span>
                <span className="client-home-emps-gross">
                  {user.total_gross_pay}
                </span>
                <span className="client-home-emps-net">
                  {user.total_net_pay}
                </span>
              </Link>
            ))
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </section>
    </section>
  );
}
