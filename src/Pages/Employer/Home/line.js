import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'January', value: 65 },
  { month: 'February', value: 59 },
  { month: 'March', value: 80 },
  { month: 'April', value: 81 },
  { month: 'May', value: 56 },
  { month: 'June', value: 55 },
  { month: 'July', value: 40 },
];

const LineChartComponent = () => (
  <div>
    <h2>Line Chart</h2>
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  </div>
);

export default LineChartComponent;
