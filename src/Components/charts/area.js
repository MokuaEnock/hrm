import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [250, 500, 750, 300, 600, 200, 900, 450, 800, 350, 700, 400],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: 2,
      borderRadius: 10, // Add borderRadius to round edges
      fill: true,
      tension: 0.4, // Add tension to make the line smooth
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Set maintainAspectRatio to false
  aspectRatio: 2, // Set aspectRatio to 2
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 20, // Add boxWidth to increase legend symbol size
      },
    },
    title: {
      display: true,
      text: "Chart.js Area Chart",
      font: {
        size: 18,
      },
    },
  },
  elements: {
    line: {
      tension: 0.2, // Add tension to make the line smooth
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      backgroundColor: "rgba(0,0,0,0.2)", // Add backgroundColor to make the area faded
      borderRadius: 10, // Add borderRadius to round edges
    },
    point: {
      radius: 0, // Remove point symbols
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function ChartArea() {
  return <Line options={options} data={data} />;
}
