import "./fin.css";
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaDownload } from "react-icons/fa";
import logo from "../../Assets/logoHRTech .jpg";

export default function Payslip({ headers, bodies, headers2, bodies2 }) {
  let generatePayslip = () => {
    let doc = new jsPDF("landscape");
    doc.setFontSize(10);

    // add logo at top right corner
    doc.addImage(logo, "PNG", 220, -15, 70, 70);

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
      head: [headers],
      body: [bodies],
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

    doc.output("dataurlnewwindow");
  };

  return (
    <button onClick={generatePayslip}>
      <FaDownload style={{ height: "100%", fontSize: "1.5rem" }} />
      <span>Download Payslip</span>
    </button>
  );
}
