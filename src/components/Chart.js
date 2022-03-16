import React from "react";
import { PieChart, Pie } from "recharts";

const Chart = () => {
  const data = [
    { name: "Low", bugs: 4 },
    { name: "Medium", bugs: 7 },
    { name: "High", bugs: 2 },
  ];

  return (
    <PieChart width={700} height={700}>
      <Pie data={data} dataKey="bugs" outerRadius={250} fill="teal" />
    </PieChart>
  );
};

export default Chart;
