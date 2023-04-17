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
        setAllEmployees(allEmployees);
        setTotalEmployees(totalEmployees);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  console.log(allEmployees, totalEmployees);

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

          {users.map((user) => {
            return (
              <Link
                key={user.id}
                to={`/employer/home/employees/${user.id}`}
                className="client-home-emps-child"
              >
                <span className="client-home-emps-number">{user.id}</span>
                <span className="client-home-emps-name">{user.name}</span>
                <span className="client-home-emps-sex">{user.gender}</span>
                <span className="client-home-emps-days">{user.totalDays}</span>
                <span className="client-home-emps-missed">
                  {user.daysMissed}
                </span>
                <span className="client-home-emps-gross">
                  {user.totalGrossEarnings}
                </span>
                <span className="client-home-emps-net">
                  {user.totalNetEarnings}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}
