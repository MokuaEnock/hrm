/* eslint-disable no-lone-blocks */
import "./dept.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import OnelineChart from "../../../Components/charts/oneline";

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
            <button id="client-payment-button">Release Salary</button>
          </aside>
        </section>
      </section>
    </section>
  );
}
