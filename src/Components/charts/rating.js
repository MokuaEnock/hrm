import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, ArcElement);

export default function RatingGraph({ rating, deficit }) {
  const data = {
    labels: ["Rating", "Deficit"],
    datasets: [
      {
        label: "My First Dataset",
        data: [rating, deficit],
        backgroundColor: [ "#f8fafc", "#024751",],
        hoverOffset: 4,
        border: false,
        borderWidth: 0,
      },
    ],
  };

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
                return `${data.labels[tooltipItems.index]}: ${
                  data.datasets[0].data[tooltipItems.index]
                }`;
              },
            },
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}
