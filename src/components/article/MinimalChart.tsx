import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Article } from "../../types/types";

type MinimalChartProps = {
  chartData: Article["chart"];
};

const MinimalChart: React.FC<MinimalChartProps> = ({ chartData }) => {
  return (
    <div className="mt-6 aspect-[2]">
      <ResponsiveContainer>
        <LineChart data={chartData} className="">
          <XAxis
            dataKey="x"
            tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
          />
          <YAxis />
          <Tooltip formatter={(value) => value.toString()} />
          <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MinimalChart;
