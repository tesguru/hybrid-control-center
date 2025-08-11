import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type TransactionChartProps = {
  data: {
    name: string;
    personal: number;
    corporate: number;
    mobile: number;
    web: number;
  }[];
};

const TransactionChart: React.FC<TransactionChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="personal" stroke="#3B82F6" strokeWidth={2} />
      <Line type="monotone" dataKey="corporate" stroke="#10B981" strokeWidth={2} />
      <Line type="monotone" dataKey="mobile" stroke="#F59E0B" strokeWidth={2} />
      <Line type="monotone" dataKey="web" stroke="#EF4444" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default TransactionChart;