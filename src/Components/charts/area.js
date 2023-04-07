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
      data: [250, 500, 350, 300, 200, 200, 150, 450, 800, 350, 700, 400],
      borderColor: "#23d16b",
      backgroundColor: "rgba(35, 209, 107, 0.5)",
      borderWidth: 2,
      borderRadius: 10,
      fill: true,
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  elements: {
    line: {
      tension: 0.2,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      backgroundColor: "rgba(0,0,0,0.2)",
      borderRadius: 10,
    },
    point: {
      radius: 0,
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
