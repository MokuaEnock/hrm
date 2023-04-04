import jsPDF from "jspdf";
import "./fin.css";
import React from "react";

export default function Reimbursement() {
  let generateReimburse = () => {
    let doc = new jsPDF("landscape");
    doc.setFontSize(14);

    doc.output("dataurlnewwindow");
  };
  return <button onClick={generateReimburse}>Download Reimbursement</button>;
}
