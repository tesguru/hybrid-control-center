import React from 'react';
import { 
  UserCheck,
  DollarSign,
  AlertTriangle,
  Clock,
  RefreshCw,
  Activity
} from 'lucide-react';
export type ActivityType = {
  id: number;
  type: string;
  user: string;
  time: string;
  status: 'success' | 'flagged' | 'warning' | 'pending';
  amount?: string;
};export type ActivityItemProps = {
  activity: ActivityType;
};

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'account_created': return <UserCheck size={16} className="text-green-600" />;
      case 'large_transaction': return <DollarSign size={16} className="text-orange-600" />;
      case 'login_failure': return <AlertTriangle size={16} className="text-red-600" />;
      case 'account_verification': return <Clock size={16} className="text-yellow-600" />;
      case 'password_reset': return <RefreshCw size={16} className="text-blue-600" />;
      default: return <Activity size={16} />;
    }
  };

  const getStatusColor = (status: 'success' | 'flagged' | 'warning' | 'pending') => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'flagged': return 'bg-red-100 text-red-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-3">
        {getIcon(activity.type)}
        <div>
          <p className="font-medium text-gray-900">{activity.user}</p>
          {activity.amount && <p className="text-sm text-gray-600">{activity.amount}</p>}
        </div>
      </div>
      <div className="text-right">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
          {activity.status}
        </span>
        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;