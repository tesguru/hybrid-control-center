import React from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieLabelRenderProps
} from 'recharts';

type AccountDistributionChartProps = {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
};

const AccountDistributionChart: React.FC<AccountDistributionChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <RechartsPieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent }: PieLabelRenderProps) =>
          `${name} ${((percent ?? 0) * 100).toFixed(0)}%`
        }
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </RechartsPieChart>
  </ResponsiveContainer>
);

export default AccountDistributionChart;
