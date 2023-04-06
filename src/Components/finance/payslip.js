import "./fin.css";
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaDownload } from "react-icons/fa";

export default function Payslip() {
  let generatePayslip = () => {
    let doc = new jsPDF("landscape");
    doc.setFontSize(12);
    // employer heading

    doc.text(
      "Transatal consulting limited P.o Box 12-40200 Nairobi PaySlip week 45-46",
      5,
      10
    );

    doc.text("Pay No: 251 007", 10, 17);
    doc.text("Getiro Asamcco Makori", 10, 24);

    // add employee data table
    doc.autoTable({
      startY: 30,
      // fontSize: 10,
      head: [
        [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      ],
      body: [
        [
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
          "1000",
          "2000",
          "3000",
          "4000",
          "5000",
          "6000",
          "7000",
          "8000",
          "9000",
          "10000",
          "20000",
          "30000",
        ],
      ],
    });

    // add employee data table 2
    doc.autoTable({
      startY: 50,
      // fontSize: 10,
      head: [["", "", "", "", "", "", "", "", ""]],
      body: [["10", "20", "30", "40", "50", "60", "70", "80", "90"]],
    });

    doc.output("dataurlnewwindow");
  };

  return (
    <button onClick={generatePayslip}>
      <FaDownload style={{ height: "100%", fontSize: "1.5rem" }} />
      <span>Download Payslip</span>
    </button>
  );
}
