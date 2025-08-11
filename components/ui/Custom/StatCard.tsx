import React from 'react';
import { TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: number;
  color?: string;
  subtitle?: string;
};

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  color = "blue", 
  subtitle 
}) => (
  <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
      </div>
      <div className={`p-3 rounded-xl bg-${color}-50`}>
        <Icon className={`text-${color}-600`} size={24} />
      </div>
    </div>
    {trend !== undefined && (
      <div className={`flex items-center mt-4 text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
        <TrendingUp size={16} className="mr-1" />
        <span>{Math.abs(trend)}% from last month</span>
      </div>
    )}
  </div>
);

export default StatCard;