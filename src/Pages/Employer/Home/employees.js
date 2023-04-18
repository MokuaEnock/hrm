import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./employees.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import RatingGraph from "../../../Components/charts/rating";
import logo from "../../../Assets/logoHRTech .jpg";

export default function EmployerEmployee() {
  let [rating, setRating] = useState();
  let [payslips, setPayslips] = useState();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const [data, pays] = await Promise.all([
          fetch(`http://localhost:3000/rating/${id}`).then((response) =>
            response.json()
          ),
          fetch(`http://localhost:3000/employee_payslip/${id}`).then(
            (response) => response.json()
          ),
        ]);
        setRating(data.average_rating);
        setPayslips(pays.payslips);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  console.log(rating);

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

  function handlePerformance() {
    console.log("Performance report for all pay periods");
  }

  return (
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-home">
        <EmployerHead message={"Welcome to Enock's profile"} />
        <section id="employer-employe-cont">
          <div id="employer-employee-cont-main">
            <div id="employee-main-header">
              <h3>Enock Mokua</h3>
              <Link to="/employer/home">Back</Link>
            </div>
          </div>

          <aside id="employer-employee-cont-aside">
            <div id="employee-aside-rating">
              <h5>Rating</h5>
              <div>
                <RatingGraph rating={rating} deficit={100 - rating} />
              </div>
              <p>Average Rating: {rating}</p>
            </div>

            <div id="employee-aside-docs">
              <h5>Download documents</h5>
              <button onClick={handlePayslips}>Payslips</button>
              <button onClick={handlePerformance}>Performance report</button>
            </div>
          </aside>
        </section>
      </section>
    </section>
  );
}
