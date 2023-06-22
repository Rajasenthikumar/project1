import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 400,
    pv: 240,
    amt: 200,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3108,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 1100,
    amt: 1181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 4000,
    pv: 4000,
    amt: 4100,
  },
  {
    name: 'Aug',
    uv: 2410,
    pv: 2300,
    amt: 2100,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 7404,
    amt: 2105,
  },
  {
    name: 'Oct',
    uv: 3100,
    pv: 4308,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 2490,
    pv: 2005,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 349,
    pv: 400,
    amt: 218,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
