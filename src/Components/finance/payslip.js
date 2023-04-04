import "./fin.css";
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaDownload } from "react-icons/fa";

export default function Payslip({ employee }) {
  let generatePayslip = () => {
    let doc = new jsPDF("landscape");
    doc.setFontSize(14);
    doc.text(`Payslip for ${employee.name}`, 10, 10, { fontWeight: "bold" });
    doc.setFontSize(12);
    doc.text("Earnings", 10, 20, { fontWeight: "bold" });
    const earningsData = employee.earnings.map((e) => [
      e.description,
      e.amount,
    ]);
    doc.autoTable({
      startY: 25,
      head: [["Description", "Amount"]],
      body: earningsData,
    });
    doc.text("Deductions", 10, doc.autoTable.previous.finalY + 10, {
      fontWeight: "bold",
    });
    const deductionsData = employee.deductions.map((d) => [
      d.description,
      d.amount,
    ]);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 20,
      head: [["Description", "Amount"]],
      body: deductionsData,
    });
    // Open the generated PDF in a separate browser tab
    doc.output("dataurlnewwindow");
  };

  return (
    <button
      onClick={generatePayslip}
      style={{
        fontSize: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "60%",
        padding: "4px 10px",
        backgroundColor: "#024751",
        color: "white",
        justifyContent: "space-between",
        borderRadius: "4px",
        border: "1px solid #024751",
      }}
    >
      <FaDownload style={{ height: "100%", fontSize: "1.5rem" }} />
      <span>
        Download <br /> Payslip
      </span>
    </button>
  );
}
