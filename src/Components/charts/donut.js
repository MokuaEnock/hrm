import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, ArcElement);

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(0, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(99, 132, 0, 0.8)",
      ],
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      enabled: true,
      backgroundColor: "rgba(255,255,255,0.8)",
      bodyColor: "rgba(0,0,0,0.8)",
    },
  },
};

export default function DonutGraph() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
