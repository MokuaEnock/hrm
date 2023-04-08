import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const yearlyData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Amount paid in Ksh",
      data: [82, 74, 54, 59, 77, 85, 78, 75, 70, 80, 90, 100],
      borderColor: "black",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function EmployeeMoney() {
  return (
    <Bar
      data={yearlyData}
      options={{
        responsive: true,
      }}
    />
  );
}

export default EmployeeMoney;
