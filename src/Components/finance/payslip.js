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

    doc.text();
    // add employee data table

    doc.output("dataurlnewwindow");
  };

  return (
    <button onClick={generatePayslip}>
      <FaDownload style={{ height: "100%", fontSize: "1.5rem" }} />
      <span>Download Payslip</span>
    </button>
  );
}
