import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const App = () => {
  const data = [
    { name: "Jan", Client:1.5},
    { name: "Feb", Client:2.2},
    { name: "Mar", Client:4 },
    { name: "Apr", Client:3 },
    { name: "May", Client:8 },
    { name: "Jun", Client:8.2 },
    { name: "Jul", Client:3 },
    { name: "Aug", Client:3.5 },
    { name: "Sep", Client:4.5 },
    { name: "Oct", Client:3.5 },
    { name: "Nov", Client:2 },
    { name: "Dec",  Client:3.8},


  ];
  return (
    <div style={{ textAlign: "left", color: "primary" }}>
      <div className="App">
        <BarChart
          width={850}
          height={350}
          data={data}
          margin={{
            top: 60,
            right: 1,
            left: 1,
            bottom: 5,
          }}
          barSize={13}
        >
                  title="Recent Client "

          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Client" fill="#3eced7" background={{ fill: '#ffffff' }} />

        </BarChart>
      </div>
    </div>
  );
};
export default App;