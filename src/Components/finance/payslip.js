import "./fin.css";
import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { FaDownload } from "react-icons/fa";

export default function Payslip({ employee }) {
  let generatePayslip = () => {
    let doc = new jsPDF("landscape");
    doc.setFontSize(14);

    // add employee data table
    let employeeData = [
      ["Employee ID", employee.id],
      ["Name", employee.name],
      ["Department", employee.department],
      ["Designation", employee.designation],
      ["Start Date", employee.start_date],
      ["End Date", employee.end_date],
      ["Gross Salary", employee.gross_salary],
      ["NHIF", employee.nhif],
      ["NSSF", employee.nssf],
      ["PAYE", employee.paye],
      ["Net Salary", employee.net_salary],
    ];
    doc.text("Employee Data", 10, 20);
    doc.autoTable({
      startY: 25,
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 12 },
      body: employeeData,
    });

    // add attendance data table
    let attendanceData = [
      ["Date", ...employee.attendance_data.dates],
      ["Hours Worked", ...employee.attendance_data.hours_worked],
      ["Pay", ...employee.attendance_data.pay],
    ];
    doc.text("Attendance Data", 10, doc.autoTable.previous.finalY + 10);
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 12 },
      bodyStyles: { fontSize: 10 },
      body: attendanceData,
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
