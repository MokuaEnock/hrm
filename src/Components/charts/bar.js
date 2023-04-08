import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

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
      backgroundColor: "#024751",
    },
  ],
};

export default function BarPlot() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Bar
        data={yearlyData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
