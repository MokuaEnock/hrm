import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, ArcElement);

export default function RatingGraph({ rating }) {
  const data = {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [rating, 100 - rating],
        backgroundColor: ["#007bff", "#e2e2e2"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: `Employee Rating: ${rating}`,
      },
    },
    cutout: "80%",
    maintainAspectRatio: false,
    circumference: 1 * Math.PI,
    rotation: 1 * Math.PI,
    tooltips: {
      enabled: true,
      mode: "single",
      callbacks: {
        label: (tooltipItems, data) => {
          return `${data.labels[tooltipItems.index]}: ${
            data.datasets[0].data[tooltipItems.index]
          }%`;
        },
      },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5rem",
        }}
      >
        {`${rating}%`}
      </div>
    </div>
  );
}
