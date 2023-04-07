import EmployeeNavBar from "../navbar/navbar";
import "./oney.css";
import React from "react";
import EmployeeHeader from "../header/EmployeeHeader";
import { FaDownload } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import Payslip from "../../../Components/finance/payslip";
import EmployeePerformanceReport from "../../../Components/finance/report";
import ChartArea from "../../../Components/charts/area";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function EmployeeMoney() {
  const data = {
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

  const yearlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Amount paid in Ksh",
        data: [82, 74, 54, 59, 77, 85, 78, 75, 70, 80, 90, 100],
        borderColor: "black",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const employee = [
    {
      payslip: {
        id: 2,
        employee_id: 2,
        start_date: "2023-01-29",
        end_date: "2023-02-11",
        nhif: "400.0",
        nssf: "200.0",
        paye: "1026.4",
        taxable_income: "10264.0",
        payslip_period: 14,
        gross_salary: 10864,
        net_salary: 9237,
        created_at: "2023-04-04T16:33:47.276Z",
        updated_at: "2023-04-04T16:33:47.276Z",
      },
      attendance_data: {
        dates: [
          "2023-01-29",
          "2023-01-30",
          "2023-01-31",
          "2023-02-01",
          "2023-02-02",
          "2023-02-03",
          "2023-02-04",
          "2023-02-05",
          "2023-02-06",
          "2023-02-07",
          "2023-02-08",
          "2023-02-09",
          "2023-02-10",
          "2023-02-11",
        ],
        hours_worked: [
          0,
          "9.0",
          "8.0",
          "8.0",
          "10.0",
          "9.0",
          "16.0",
          0,
          "9.0",
          "10.0",
          "7.0",
          "8.0",
          "10.0",
          "20.0",
        ],
        pay: [
          0,
          "776.0",
          "776.0",
          "776.0",
          "776.0",
          "776.0",
          "1552.0",
          0,
          "776.0",
          "776.0",
          "776.0",
          "776.0",
          "776.0",
          "1552.0",
        ],
      },
    },
  ];

  let employee1 = {
    Employee_Id: 1234,
    Name: "John Doe",
    Department: "Sales",
    Designation: "Sales Manager",
    Start_Date: "2022-01-01",
    End_Date: null,
    Gross_Salary: 5000,
    NHIF: 500,
    NSSF: 600,
    PAYE: 800,
    Net_Salary: 3100,
  };

  return (
    <section id="employee-cont">
      <EmployeeNavBar />
      <section id="employee-money">
        <EmployeeHeader />

        <div id="employee-money-cont1">
          <p>This week</p>
          <div id="employee-money-week">
            <span className="employee-money-week-stats">
              Days present
              <br />
              4/5
            </span>
            <span className="employee-money-week-stats">
              Money Made <br />
              Ksh 13500
            </span>
            <span className="employee-money-week-stats">
              Deductions <br />
              Ksh 350
            </span>
            <span className="employee-money-week-stats">
              Performance Rewiew <br /> 85%
            </span>
          </div>
        </div>

        <div id="employee-money-cont2">
          <div id="employee-money-cont2-1">
            <p>Last week's overview</p>
            {/* <Bar
              data={data}
              options={{
                responsive: true,
              }}
            /> */}
            <ChartArea />
          </div>

          <div id="employee-money-cont2-2">
            <p>Wages comparison</p>
          </div>
        </div>
        <div id="employee-money-cont3">
          <div id="employee-money-cont3-2">
            <p>Monthly payroll</p>
            <Bar
              data={yearlyData}
              options={{
                responsive: true,
              }}
            />
          </div>
        </div>
      </section>
      <aside id="employee-payroll">
        <div id="employee-aside-info">
          <h3>Your information</h3>
        </div>

        <div id="employee-aside-reports">
          <h3>Download your reports</h3>

          <Payslip />
          <EmployeePerformanceReport />
        </div>
      </aside>
      <br />
    </section>
  );
}
