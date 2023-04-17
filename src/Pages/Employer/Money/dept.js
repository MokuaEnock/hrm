/* eslint-disable no-lone-blocks */
import "./dept.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import JSZip from "jszip";
import { saveAs } from 'file-saver';

import logo from "../../../Assets/logoHRTech .jpg";
import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import OnelineChart from "../../../Components/charts/oneline";

export default function EmployerDept() {
  let { id } = useParams();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let [data, setData] = useState();
  let [payslip, setPayslip] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/payslip/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPayslip(data.payslips);
      });
  }, [id]);

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

  const handlePay = () => {
    fetch(`http://localhost:3000//download_pay/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });

    const headers = [
      "Payroll No",
      "NAME",
      "ACCOUNT NO.",
      "BANK CODE",
      "Branch CODE",
      "Amount",
      "bank_name",
    ];

    const dat = data.map((pay) => [
      pay.payroll_no,
      pay.name,
      pay.bank_account,
      pay.bank_code,
      pay.branch_code,
      pay.amount,
      pay.bank_name,
    ]);

    try {
      // Create a new workbook object
      const workbook = XLSX.utils.book_new();

      // Create the sheet data
      const sheetData = [headers, ...dat];
      const sheet = XLSX.utils.aoa_to_sheet(sheetData);

      // Add the sheet to the workbook
      XLSX.utils.book_append_sheet(workbook, sheet, "Sheet 1");

      // Save the workbook as an Excel file
      XLSX.writeFile(workbook, "example.xlsx");
    } catch (error) {
      console.error("Failed to create Excel file:", error);
    }
  };

  console.log(payslip);

  function handleSlips() {
    const zip = new JSZip();
    const promises = [];

    for (const data of payslip) {
      const doc = new jsPDF("landscape");
      doc.setFontSize(10);

      let headers = [
        "Basic Pay",
        ...data.week_one,
        "Extra Pay 1",
        ...data.week_two,
      ];
      let headers2 = ["Gross Pay", "NSSF", "NHF", "PAYE", "SACCO", "Net Pay"];

      let week_pay = data.week_pay;
      let half = Math.ceil(week_pay.length / 2);
      let week_one_pay = week_pay.slice(0, half);
      let week_two_pay = week_pay.slice(-half);

      let bodies1 = [data.basic_salary, ...week_one_pay, ...week_two_pay];
      let bodies2 = [
        data.gross_salary,
        data.nssf_deduction,
        data.nhif,
        data.paye,
        data.sacco,
        data.net_salary,
      ];

      // add logo at top right corner
      doc.addImage(logo, "PNG", 220, -15, 70, 70);

      // employer heading
      doc.text(
        "Transatal consulting limited P.o Box 12-40200 Nairobi PaySlip week 45-46",
        5,
        10
      );

      doc.text(`Pay No: ${data.pay_no}`, 10, 17);
      doc.text(data.employee_name, 10, 24);

      // add employee data table
      doc.autoTable({
        startY: 30,
        head: [headers],
        body: [bodies1],
        theme: "grid",
        styles: {
          textColor: [0, 0, 0],
          fillColor: [255, 255, 255],
          cellPadding: 2,
        },
      });

      // add employee data table 2
      doc.autoTable({
        startY: 70,
        head: [headers2],
        body: [bodies2],
        theme: "grid",
        styles: {
          textColor: [0, 0, 0],
          fillColor: [255, 255, 255],
          cellPadding: 2,
        },
        headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        tableLineWidth: 0,
      });

      const pdfData = doc.output("arraybuffer");
      zip.file(`${data.employee_name}.pdf`, pdfData);
      promises.push(pdfData);
    }

    Promise.all(promises).then(() => {
      zip.generateAsync({ type: "blob" }).then((content) => {
        saveAs(content, "payslips.zip");
      });
    });
  }

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
            <button id="client-payment-button" onClick={handleSlips}>
              Download Payslips
            </button>
          </aside>
        </section>
      </section>
    </section>
  );
}
