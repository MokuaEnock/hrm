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
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderWidth: 2,
      pointRadius: 0,
      tension: 0.4,
      fill: true,
      fillOpacity: 0.2,
    },
  ],
};

export default function AreaChart() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line options={options} data={data} />
    </div>
  );
}
