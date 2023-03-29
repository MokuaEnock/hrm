import React, { useState } from "react";

import ClientHeader from "../home/header";
import ClientBar from "../navbar/navbar";
import "./money.css";
import { FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function ClientMoney() {
  let [employeeData, setEmployeeData] = useState({
    name: "",
  });
  let [excelData, setExcelData] = useState([]);

  // function to download excel sheet
  let handleDownload = () => {
    let fileUrl = "/workers.xlsx";
    let link = document.createElement("a");
    link.href = fileUrl;
    link.download = "workers.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //  function to post employee data
  function handleEmployeeData(event) {
    event.preventDefault();
    fetch("http://localhost:3000/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: employeeData.name,
        employer_id: localStorage.getItem("employerId"),
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Success");
          console.log(response);
        } else {
          response.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch((error) => console.log(error));
  }
  // function to handle change
  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };
  // function to extract data from excel sheet
  function extractData(file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = (event) => {
        let data = new Uint8Array(event.target.result);
        let workbook = XLSX.read(data, { type: "array" });
        let sheetData = {};
        workbook.SheetNames.forEach((sheetName) => {
          let worksheet = workbook.Sheets[sheetName];
          let sheetDataArray = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
          });
          sheetData[sheetName] = sheetDataArray;
        });
        resolve(sheetData);
      };
      reader.onerror = (event) => {
        reject(event);
      };
      reader.readAsArrayBuffer(file);
    });
  }

  // function to handle change in the file input
  let handleFileChange = async (event) => {
    event.preventDefault();
    let file = event.target.files[0];
    let data = await extractData(file);
    setExcelData(data);
  };

  // function to submit and post exceldata
  function handleFileSubmit(event) {
    event.preventDefault();
    console.log(excelData);
  }

  return (
    <section id="client-cont">
      <ClientBar />
      <section id="client-money">
        <ClientHeader message="Add new employees to your organisation" />

        <div id="client-money-section1">
          <h2>Add new employee to your organisation</h2>
          <button onClick={handleDownload}>
            <FaDownload />
            <p>Download Sheet</p>
          </button>
        </div>

        <form id="client-money-section2" onSubmit={handleFileSubmit}>
          <h4>Mass add employees to your organisation.</h4>
          <p>
            Download the excel sheet, fill out your employees details then
            upload it.
          </p>
          <input
            type="file"
            accept=".xlsx"
            className="file-upload-input"
            onChange={handleFileChange}
          />
          <button type="submit">Add employees</button>
        </form>

        {/* <h4>Add a single employee</h4> */}

        <form id="client-money-section3" onSubmit={handleEmployeeData}>
          <span className="client-money-section3-head">
            <h4>Personal details</h4>
            <p>Add the employees personal data</p>
          </span>

          <div>
            <label>
              <p>First name</p>
              <input
                ype="text"
                name="name"
                value={employeeData.name}
                onChange={handleChange}
                placeholder="First name"
              />
            </label>

            <label>
              <p>Second name</p>
              <input type="text" placeholder="Second name" />
            </label>

            <label>
              <p>Third name</p>
              <input type="text" placeholder="Third name" />
            </label>

            <label>
              <p>Gender</p>
              <select>
                <option value="male">Male</option>
                <option value="male">Female</option>
              </select>
            </label>

            <label>
              <p>National I.D</p>
              <input type="number" placeholder="Id number" />
            </label>

            <label>
              <p>Employee number</p>
              <input type="number" placeholder="Employee number" />
            </label>
          </div>

          <span className="client-money-section3-head">
            <h4>Financial details</h4>
            <p>Add the employee's financial data</p>
          </span>

          <div>
            <label>
              <p>NSSF member number</p>
              <input type="text" placeholder="NSSF number" />
            </label>

            <label>
              <p>NHIF number</p>
              <input type="text" placeholder="NHIF number" />
            </label>

            <label>
              <p>KRA pin</p>
              <input type="text" placeholder="KRA pin" />
            </label>

            <label>
              <p>Other number</p>
              <input type="number" placeholder="Other number" />
            </label>
          </div>

          <span className="client-money-section3-head">
            <h4>Bank details</h4>
            <p>Add the employees bank details</p>
          </span>

          <div>
            <label>
              <p>Bank name</p>
              <input type="text" placeholder="bank name" />
            </label>

            <label>
              <p>Bank code</p>
              <input type="text" placeholder="bank code" />
            </label>

            <label>
              <p>Branch name</p>
              <input type="text" placeholder="branch name" />
            </label>

            <label>
              <p>Branch code</p>
              <input type="text" placeholder="branch code" />
            </label>

            <label>
              <p>Bank account number</p>
              <input type="number" placeholder="Bank account number" />
            </label>

            <label>
              <p>Preferred currency</p>
              <select>
                <option value="k-shilling">Kenyan Shilling</option>
                <option value="us-dollar">U.S dollar</option>
                <option value="euro">Euro</option>
                <option value="b-pound">British Pound</option>
              </select>
            </label>
          </div>

          <span className="client-money-section3-head">
            <h4>Location details</h4>
            <p>Add the employees location details</p>
          </span>

          <div>
            <label>
              <p>Country</p>
              <input type="text" placeholder="Country of residence" />
            </label>

            <label>
              <p>County</p>
              <input type="text" placeholder="County of residence" />
            </label>

            <label>
              <p>Sub-County</p>
              <input type="text" placeholder="Sub-County of residence" />
            </label>

            <label>
              <p>Location</p>
              <input type="text" placeholder="Location of residence" />
            </label>
          </div>

          <button type="submit">Register employee</button>
        </form>
      </section>
    </section>
  );
}
