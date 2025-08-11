import React from 'react';
import { 
  Users, 
  Activity,
  CreditCard, 
  DollarSign,
  AlertTriangle,
  Ban,
  Eye,
  ShieldBanIcon
} from 'lucide-react';
import ActivityItem, { ActivityType } from '@/components/ui/Custom/ActivityItem';
import StatCard from '@/components/ui/Custom/StatCard';
import TransactionChart from '@/components/ui/Charts/TransactionChart';
import AccountDistributionChart from '@/components/ui/Charts/AccountDistributionChart';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { URLS } from '@/lib/constants/url';


const  Index = () => {
 
  const overviewStats = {
    totalAccounts: 234567,
    activeUsers: 189423,
    totalTransactions: 5672890,
    totalRevenue: 87654321,
    pendingApprovals: 156,
    flaggedAccounts: 23,
    systemHealth: 99.8,
    dailyActiveUsers: 45678
  };

  const transactionData = [
    { name: 'Jan', personal: 4000, corporate: 2400, mobile: 3200, web: 2800 },
    { name: 'Feb', personal: 3000, corporate: 1398, mobile: 2800, web: 2200 },
    { name: 'Mar', personal: 2000, corporate: 9800, mobile: 4200, web: 3800 },
    { name: 'Apr', personal: 2780, corporate: 3908, mobile: 3600, web: 3200 },
    { name: 'May', personal: 1890, corporate: 4800, mobile: 4100, web: 3700 },
    { name: 'Jun', personal: 2390, corporate: 3800, mobile: 4500, web: 4000 },
  ];

  const accountTypeData = [
    { name: 'Personal Savings', value: 120000, color: '#3B82F6' },
    { name: 'Corporate', value: 45000, color: '#10B981' },
  ];

  const recentActivities: ActivityType[] = [
    { id: 1, type: 'account_created', user: 'John Doe', time: '2 mins ago', status: 'success' },
    { id: 2, type: 'large_transaction', user: 'Corporate ABC', amount: '$50,000', time: '5 mins ago', status: 'flagged' },
    { id: 3, type: 'login_failure', user: 'jane.smith@email.com', time: '8 mins ago', status: 'warning' },
    { id: 4, type: 'account_verification', user: 'Mike Johnson', time: '12 mins ago', status: 'pending' },
    { id: 5, type: 'password_reset', user: 'sarah.wilson@email.com', time: '15 mins ago', status: 'success' }
  ];

  return (
      <DashboardLayout urlpath={URLS.DASHBOARD.INDEX}>
          <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Accounts"
              value={overviewStats.totalAccounts.toLocaleString()}
              icon={Users}
              trend={12}
              color="blue"
              subtitle="All account types"
            />
            <StatCard
              title="Active Users (24h)"
              value={overviewStats.dailyActiveUsers.toLocaleString()}
              icon={Activity}
              trend={8}
              color="green"
              subtitle="Currently online"
            />
            <StatCard
              title="Total Transactions"
              value={overviewStats.totalTransactions.toLocaleString()}
              icon={CreditCard}
              trend={15}
              color="purple"
              subtitle="This month"
            />
            <StatCard
              title="Revenue"
              value={`N${(overviewStats.totalRevenue / 1000000).toFixed(1)}M`}
              icon={DollarSign}
              trend={23}
              color="orange"
              subtitle="Monthly revenue"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
                <AlertTriangle className="text-yellow-500" size={20} />
              </div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{overviewStats.pendingApprovals}</div>
              <p className="text-gray-600 text-sm">Accounts awaiting verification</p>
              <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Review All
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Flagged Accounts</h3>
                <Ban className="text-red-500" size={20} />
              </div>
              <div className="text-3xl font-bold text-red-600 mb-2">{overviewStats.flaggedAccounts}</div>
              <p className="text-gray-600 text-sm">Suspicious activities detected</p>
              <button className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Investigate
              </button>
            </div>

             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Accounts on (PND)</h3>
                <ShieldBanIcon className="text-indigo-500" size={20} />
              </div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">{overviewStats.flaggedAccounts}</div>
              <p className="text-gray-600 text-sm">Cannot make transaction for now</p>
              <button className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Check all
              </button>
            </div>

          
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Transaction Trends</h3>
              <TransactionChart data={transactionData} />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Distribution</h3>
              <AccountDistributionChart data={accountTypeData} />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                <Eye size={16} className="mr-1" />
                View All
              </button>
            </div>
            <div className="space-y-2">
              {recentActivities.map((activity) => (
                <ActivityItem key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </main>
       </DashboardLayout>
      
      
  );
};

export default Index;