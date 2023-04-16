/* eslint-disable no-lone-blocks */
import "./dept.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";

import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import OnelineChart from "../../../Components/charts/oneline";

let pay_data = [
  {
    "Payroll No": "001",
    "PF NO.": "PF001",
    NAME: "John Doe",
    "ACCOUNT NO.": "1234567890",
    "BANK CODE": "BNK001",
    "Branch CODE": "BR001",
    Amount: 5000,
    bank_name: "Bank of America",
  },
  {
    "Payroll No": "002",
    "PF NO.": "PF002",
    NAME: "Jane Smith",
    "ACCOUNT NO.": "2345678901",
    "BANK CODE": "BNK002",
    "Branch CODE": "BR002",
    Amount: 6000,
    bank_name: "Chase Bank",
  },
  {
    "Payroll No": "003",
    "PF NO.": "PF003",
    NAME: "Bob Johnson",
    "ACCOUNT NO.": "3456789012",
    "BANK CODE": "BNK003",
    "Branch CODE": "BR003",
    Amount: 7000,
    bank_name: "Wells Fargo",
  },
  {
    "Payroll No": "004",
    "PF NO.": "PF004",
    NAME: "Sarah Lee",
    "ACCOUNT NO.": "4567890123",
    "BANK CODE": "BNK004",
    "Branch CODE": "BR004",
    Amount: 8000,
    bank_name: "Citibank",
  },
  {
    "Payroll No": "005",
    "PF NO.": "PF005",
    NAME: "David Kim",
    "ACCOUNT NO.": "5678901234",
    "BANK CODE": "BNK005",
    "Branch CODE": "BR005",
    Amount: 9000,
    bank_name: "HSBC",
  },
  {
    "Payroll No": "006",
    "PF NO.": "PF006",
    NAME: "Emily Wong",
    "ACCOUNT NO.": "6789012345",
    "BANK CODE": "BNK006",
    "Branch CODE": "BR006",
    Amount: 10000,
    bank_name: "Barclays",
  },
  {
    "Payroll No": "007",
    "PF NO.": "PF007",
    NAME: "Michael Chen",
    "ACCOUNT NO.": "7890123456",
    "BANK CODE": "BNK007",
    "Branch CODE": "BR007",
    Amount: 11000,
    bank_name: "TD Bank",
  },
];

export default function EmployerDept() {
  let { id } = useParams();
  // const [employeeId, setEmployeeId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSetPay(e) {
    e.preventDefault();
    console.log(id);

    fetch("http://localhost:3000/payslips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        employee_id: 1,
        start_date: startDate,
        end_date: endDate,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  // function handlePay() {
  //   // Create a new workbook object
  //   const workbook = XLSX.utils.book_new();

  //   // Create the first sheet
  //   const sheet1Data = [
  //     ["Name", "Age", "City"],
  //     ["John", 25, "New York"],
  //     ["Jane", 30, "Los Angeles"],
  //     ["Bob", 40, "Chicago"],
  //   ];
  //   const sheet1 = XLSX.utils.aoa_to_sheet(sheet1Data);
  //   XLSX.utils.book_append_sheet(workbook, sheet1, "Sheet 1");

  //   // Save the workbook as an Excel file
  //   XLSX.writeFile(workbook, "example.xlsx");
  // }

  const handlePay = () => {
    const headers = [
      "Payroll No",
      "PF NO.",
      "NAME",
      "ACCOUNT NO.",
      "BANK CODE",
      "Branch CODE",
      "Amount",
      "bank_name",
    ];

    const data = pay_data.map((pay) => [
      pay["Payroll No"],
      pay["PF NO."],
      pay["NAME"],
      pay["ACCOUNT NO."],
      pay["BANK CODE"],
      pay["Branch CODE"],
      pay.Amount,
      pay.bank_name,
    ]);

    try {
      // Create a new workbook object
      const workbook = XLSX.utils.book_new();

      // Create the sheet data
      const sheetData = [headers, ...data];
      const sheet = XLSX.utils.aoa_to_sheet(sheetData);

      // Add the sheet to the workbook
      XLSX.utils.book_append_sheet(workbook, sheet, "Sheet 1");

      // Save the workbook as an Excel file
      XLSX.writeFile(workbook, "example.xlsx");
    } catch (error) {
      console.error("Failed to create Excel file:", error);
    }
  };

  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-money-cont">
        <EmployerHead message={"Manage your finances today."} />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h5>Engineering department</h5>
            <div id="client-payment-cont-1-1">
              <span className="client-payment-cont-1-1">
                <p>Net Pay</p>
                <div>
                  <OnelineChart />
                </div>
              </span>

              <span className="client-payment-cont-1-1">
                <p>Performance</p>
                <div>
                  <OnelineChart />
                </div>
              </span>

              <span className="client-payment-cont-1-1">
                <p>Attendance</p>
                <div>
                  <OnelineChart />
                </div>
              </span>

              <span className="client-payment-cont-1-1">
                <p>Absentism</p>
                <div>
                  <OnelineChart />
                </div>
              </span>
            </div>

            <form id="client-payment-cont-1-3" onSubmit={handleSetPay}>
              <h5>Set pay period</h5>
              <span>
                <label>
                  <p>Start date</p>
                  <input
                    type="date"
                    value={startDate}
                    onChange={handleStartDateChange}
                  />
                </label>

                <label>
                  <p>End date</p>
                  <input
                    type="date"
                    value={endDate}
                    onChange={handleEndDateChange}
                  />
                </label>
              </span>

              <button type="submit">Set pay period</button>
            </form>

            <h5>Top Earners</h5>
            <div id="client-payment-cont-1-2-head">
              <span>Name</span>
              <span>Days Present</span>
              <span>Rating</span>
              <span>Gross Pay</span>
            </div>
            <ol id="client-payment-cont-1-2">
              <li className="client-payment-cont-1-2">
                <span>Enock Mokua</span>
                <span>21</span>
                <span>8.5</span>
                <span>10,200</span>
              </li>
            </ol>
          </div>

          <aside id="client-payment-cont2">
            <h4>Summary for this week</h4>
            <button id="client-payment-button" onClick={handlePay}>
              Download Pay
            </button>
          </aside>
        </section>
      </section>
    </section>
  );
}
