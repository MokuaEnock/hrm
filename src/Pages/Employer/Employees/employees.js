import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import "./employees.css";
import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import * as XLSX from "xlsx";

export default function EmployerEmployees() {
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
    }).then((sheetData) => {
      let extractedData = {};
      Object.keys(sheetData).forEach((sheetName) => {
        let sheetDataArray = sheetData[sheetName];
        let headers = sheetDataArray[0];
        let rows = sheetDataArray.slice(1);
        let sheetObjects = rows
          .filter((row) => row.some((cell) => cell !== ""))
          .map((row) => {
            let obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          });
        extractedData[sheetName] = sheetObjects;
      });

      // Create array of row dictionaries for each sheet
      let sheets = {};
      Object.keys(extractedData).forEach((sheetName) => {
        let sheetDataArray = extractedData[sheetName];
        let rows = sheetDataArray.map((obj) => obj);
        sheets[sheetName] = rows;
      });

      const employerId = localStorage.getItem("employerId");

      let departments = extractedData[Object.keys(extractedData)[0]].map(
        (dept) => {
          let { moderator, Name, ...rest } = dept; // use object destructuring to remove moderator attribute and rename Name attribute to name
          return {
            ...rest,
            name: dept.Name, // rename Name attribute to name
            password: dept.email,
            password_confirmation: dept.email,
            employer_id: employerId,
          };
        }
      );

      let employees = extractedData[Object.keys(extractedData)[1]].map(
        (emp) => {
          return {
            ...emp,
            employer_id: employerId,
          };
        }
      );

      fetch("http://localhost:3000/departments_all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departments),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      fetch("http://localhost:3000/employees_all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(departments),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      return employees;
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
    <section className="employer-container">
      <EmployerNav />
      <section id="employer-employees-cont">
        <EmployerHead message={"Add employees to your organisation"} />
        <div id="client-money-section1">
          <h2>{/* Add new employee to your organisation */}</h2>
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
              <p>Email Address</p>
              <input type="text" placeholder="Email address" />
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
          </div>

          <span className="client-money-section3-head">
            <h4>Work details</h4>
            <p>Add the employees work details</p>
          </span>

          <div>
            <label>
              <p>Employee basic salary</p>
              <input type="number" placeholder="Basic salary" min="0" />
            </label>

            <label>
              <p>Employee role</p>
              <input type="text" placeholder="Employee role" />
            </label>

            <label>
              <p>Employee number</p>
              <input type="number" placeholder="Employee number" />
            </label>

            <label>
              <p>Department</p>
              <input type="number" placeholder="Employee number" />
            </label>
          </div>

          <span className="client-money-section3-head">
            <h4>Contact details</h4>
            <p>Add the employees contact details.</p>
          </span>

          <div>
            <label>
              <p>Phone number</p>
              <input type="number" placeholder="Phone number" />
            </label>

            <label>
              <p>Whatsapp number</p>
              <input type="number" placeholder="Whatsapp number" />
            </label>

            {/* <label>
              <p>Phone number</p>
              <input type="number" placeholder="Phone number" />
            </label>

            <label>
              <p>Phone number</p>
              <input type="number" placeholder="Phone number" />
            </label> */}
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

          <span className="client-money-section3-head">
            <h4>Sacco details</h4>
            <p>Add the employees sacco details if any</p>
          </span>

          <div>
            <label>
              <p>Sacco Name</p>
              <input type="text" placeholder="Sacco name" />
            </label>

            <label>
              <p>Sacco registration number</p>
              <input type="text" placeholder="Registration number" />
            </label>

            <label>
              <p>Sacco bank name</p>
              <input type="text" placeholder="Sacco bank name" />
            </label>

            <label>
              <p>Sacco bank branch</p>
              <input type="text" placeholder="Sacco bank branch" />
            </label>

            <label>
              <p>Sacco bank account name</p>
              <input type="text" placeholder="Sacco bank account name" />
            </label>

            <label>
              <p>Sacco bank account number</p>
              <input type="text" placeholder="Sacco bank account number" />
            </label>

            <label>
              <p>Sacco membership number</p>
              <input type="text" placeholder="Membership Number" />
            </label>

            <label>
              <p>Contribution Amount</p>
              <input type="number" placeholder="Contribution amount" />
            </label>

            <label>
              <p>Contibution start date</p>
              <input type="date" placeholder="Contribution start date" />
            </label>

            <label>
              <p>Contribution end date (if applicabble)</p>
              <input type="date" placeholder="Contribution end date" />
            </label>
          </div>

          <span className="client-money-section3-head">
            <h4>Insurance details</h4>
            <p>Add the insurance details if any</p>
          </span>

          <div>
            <label>
              <p>Issuarance company Name</p>
              <input type="text" placeholder="Issuarance company name" />
            </label>

            <label>
              <p>Insuarance registration number</p>
              <input type="text" placeholder="Insuarance registration number" />
            </label>

            <label>
              <p>Insuarance company bank name</p>
              <input type="text" placeholder="Bank name" />
            </label>

            <label>
              <p>Insuarance bank branch</p>
              <input type="text" placeholder="Bank branch" />
            </label>

            <label>
              <p>Insuarance company bank account name</p>
              <input type="text" placeholder="Bank account name" />
            </label>

            <label>
              <p>Insuarance company bank account number</p>
              <input type="text" placeholder="Bank account number" />
            </label>

            <label>
              <p>Premium type</p>
              <input type="text" placeholder="Premium type" />
            </label>

            <label>
              <p>Insuarance policy number</p>
              <input type="text" placeholder="Policy Number" />
            </label>

            <label>
              <p>Insuarance premium Amount</p>
              <input type="number" placeholder="Premium amount" />
            </label>

            <label>
              <p>Contibution start date</p>
              <input type="date" placeholder="Contribution start date" />
            </label>

            <label>
              <p>Contribution end date (if applicabble)</p>
              <input type="date" placeholder="Contribution end date" />
            </label>
          </div>

          <button type="submit">Register employee</button>
        </form>
      </section>
    </section>
  );
}
