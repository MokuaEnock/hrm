import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./employees.css";

import EmployerNav from "../components/Nav";
import EmployerHead from "../components/head";
import RatingGraph from "../../../Components/charts/rating";

export default function EmployerEmployee() {
  let [rating, setRating] = useState();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const [data] = await Promise.all([
          fetch(`http://localhost:3000/rating/${id}`).then((response) =>
            response.json()
          ),
        ]);
        setRating(data.average_rating);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  console.log(rating);

  function handlePayslips() {
    console.log("Payslips for all pay periods");
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
