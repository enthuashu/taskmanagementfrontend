import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Completed", value: 30 },
  { name: "In Progress", value: 20 },
  { name: "Pending", value: 10 },
];

const COLORS = ["green", "blue", "red"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TaskDashboard = () => {
  return (
    <>
      <div class="container">
        <div class="row taskrow">
          <h1 className="heading1"> YOUR TASK DASHBOARD</h1>
          <div class="col leftcolumn">Total Tasks</div>
          <div class="col rightcolumn">30</div>
          <div class="w-100"></div>
          <div class="col leftcolumn">Tasks in Progress</div>
          <div class="col rightcolumn">10</div>
          <div class="w-100"></div>
          <div class="col leftcolumn">Tasks Completed</div>
          <div class="col rightcolumn">30</div>
        </div>
        <br />
        <div className="row taskrow">
          <div className="col-6">
            <h1 className="heading1"> TASK DISTRIBUTION</h1>

            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </div>
          <div className="col-6">Line Chart</div>
        </div>
      </div>
    </>
  );
};

export default TaskDashboard;
