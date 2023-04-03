import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./home.css";

import { RiArrowUpSLine } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { Pie } from "@nivo/pie";
import { ThemeProvider, SvgWrapper } from "@nivo/core";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let data = [
  {
    id: "Item1",
    value: 410,
    color: "#618B25",
  },
  {
    id: "Item2",
    value: 175,
    color: "#C0F8D1",
  },
  {
    id: "Item3",
    value: 128,
    color: "hsl(140, 18%, 16%)",
  },
];

export default function EmployerHome() {
  function handleSearch() {
    let employerId = parseInt(localStorage.getItem("employerId"));
    fetch(`http://localhost:3000/employers/${employerId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  const datal = {
    labels: ["Item 1", "Item 2"],
    datasets: [
      {
        label: "Item 1",
        data: [82, 100],
        borderColor: "black",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Item 2",
        data: [40, 80],
        borderColor: "black",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

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
              <Bar
                data={datal}
                options={{
                  responsive: true,
                }}
              />
            </div>
          </div>
          <div id="client-home-pie">
            <p className="client-home-chart-title">Gender balance</p>
            <div>
              <Pie
                width={300}
                height={300}
                data={data}
                margin={{
                  top: 40,
                  right: 80,
                  bottom: 80,
                  left: 80,
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                borderColor="inherit:darker(0.6)"
                className="nivo-pie"
              />

              <ThemeProvider>
                <SvgWrapper
                  height={100}
                  width={400}
                  margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                ></SvgWrapper>
              </ThemeProvider>
            </div>
          </div>
        </div>

        <div id="client-home-emps">
          <div id="client-home-emps-header">
            <h3>Employee Status</h3>
            <form id="client-home-emps-form">
              <FaSearch />
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
            <span className="client-home-emps-name">Enock MOkua</span>
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
