import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";

import "./money.css";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logoHRTech .jpg";

export default function EmployerMoney() {
  let [departments, setDepartments] = useState();
  let [payslips, setPayslips] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/employers/1"),
      fetch(`http://localhost:3000/employer_payslip/1`),
    ])
      .then(([employersRes, payslipsRes]) =>
        Promise.all([employersRes.json(), payslipsRes.json()])
      )
      .then(([employersData, payslipsData]) => {
        setDepartments(employersData.departments);
        setPayslips(payslipsData.payslips);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        setIsLoading(false);
      });
  }, []);

  function handlePayslips() {
    const doc = new jsPDF("landscape");
    doc.setFontSize(10);
    let currentPage = 1;

    for (const data of payslips) {
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

      if (currentPage > 1) {
        doc.addPage();
      }

      // add logo at top right corner
      doc.addImage(logo, "PNG", 240, 5, 45, 25);

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
        body: [[data.basic_salary, ...week_one_pay, 0, ...week_two_pay]],
        theme: "grid",
        styles: {
          textColor: [0, 0, 0],
          fillColor: [255, 255, 255],
          cellPadding: 2,
        },
      });

      // add employee data table 2
      doc.autoTable({
        startY: 50,
        head: [headers2],
        body: [
          [
            data.gross_salary,
            data.nssf_deduction,
            data.nhif,
            data.paye,
            data.sacco,
            data.net_salary,
          ],
        ],
        theme: "grid",
        styles: {
          textColor: [0, 0, 0],
          fillColor: [255, 255, 255],
          cellPadding: 2,
        },
        headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },
        tableLineWidth: 0,
      });

      currentPage++;
    }

    // Save the PDF and open it in a new tab
    // doc.save("payslips.pdf");
    window.open(doc.output("bloburl"), "_blank");
  }

  function handleAttendance() {
    console.log("Download Attendance");
  }

  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-money-cont">
        <EmployerHead message={"Manage your finances today."} />
        <section id="client-payment-cont">
          <div id="client-payment-cont1">
            <h3>Release Employees Salaries</h3>
            {isLoading ? (
              <p>Loading...</p> // Show loading indicator while data is being fetched
            ) : (
              departments.map((department) => (
                <Link
                  className="payment-list"
                  key={department.id}
                  to={`/employer/money/department/${department.id}`}
                >
                  <span className="payment-list-head">{department.id}</span>
                  <span className="payment-list-body">
                    <p>{department.name}</p>
                  </span>
                </Link>
              ))
            )}
          </div>

          <aside id="client-payment-cont2">
            <h3>Overview for week 35 and 36</h3>

            <span id="client-pay-date">
              <h3>Next pay Date</h3>
              <p>12/05/2023</p>
              <p>20 days 10 hours</p>
            </span>

            <span id="client-payment-total">
              <h3>Total Net pay so far</h3>
              <p>KES 12,500</p>
            </span>

            <span id="client-payment-downloads">
              <h3>Download data Sheets</h3>
              <button onClick={handlePayslips}>Payslips</button>
              <button onClick={handleAttendance}>Attendance Sheets</button>
              {/* <button onClick={handleAttendance}>Payroll</button> */}
            </span>
          </aside>
        </section>
      </section>
    </section>
  );
}
