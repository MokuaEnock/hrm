import React from "react";
import { Chart as ChartJS, LinearScale, LineElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LinearScale, LineElement, Tooltip);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
    },
  ],
};

export default function OnelineChart() {
  return <Line options={options} data={data} height="100%" />;
}
