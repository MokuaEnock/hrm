import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverOffset: 4,
    },
  ],
};

export default function DonutGraph() {
  return <Doughnut data={data} />;
}
