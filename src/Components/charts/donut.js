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
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverOffset: 4,
    },
  ],
};

export default function DonutGraph() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Doughnut
        data={data}
        options={{
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            mode: "single",
            callbacks: {
              label: (tooltipItems, data) => {
                return `${data.labels[tooltipItems.index]}: ${data.datasets[0].data[tooltipItems.index]}`;
              },
            },
          },
        }}
      />
    </div>
  );
}
