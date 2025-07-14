"use client";
import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Eye, 
  EyeOff,
  TrendingUp,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Sidebar } from '../Sidebar/Sidebar';

const MyAccounts = () => {
  const [showBalances, setShowBalances] = useState(true);

  const currentAccounts = [
    {
      name: "Olasupo Tunde Clinton",
      number: "0235446897",
      type: "Current Account",
      currency: "NGN",
      balance: "200,000.00",
      status: "Active"
    },
    {
      name: "Olasupo Tunde Clinton", 
      number: "0235446845",
      type: "Current Account",
      currency: "NGN",
      balance: "500,000.00",
      status: "Active"
    }
  ];
 const [activeItem, setActiveItem] = useState('myaccounts');
  const investmentAccounts = [
    {
      number: "0235446891",
      maturityDate: "20/09/2022",
      maturityAmount: "2,500,000.00",
      interestRate: "15%",
      principalAmount: "200,000.00",
      tenor: "3 years"
    },
    {
      number: "0235473491",
      maturityDate: "20/09/2022", 
      maturityAmount: "1,500,000.00",
      interestRate: "15%",
      principalAmount: "400,000.00",
      tenor: "2 years"
    }
  ];

  const formatAmount = (amount) => {
    return showBalances ? `N${amount}` : "****";
  };

  return (
    <div className="flex h-screen bg-gray-50">
    

       <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 overflow-auto">
     
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Accounts</h1>
              <p className="text-gray-600 mt-1">Welcome back, Tunde</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowBalances(!showBalances)}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {showBalances ? <EyeOff size={18} /> : <Eye size={18} />}
                <span className="text-sm">{showBalances ? 'Hide' : 'Show'} Balances</span>
              </button>
              <div className="relative">
                <Bell size={24} className="text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="p-6">
        
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">View Account Information</h2>
            <p className="text-gray-600">Access detailed information about all your accounts</p>
          </div>

       
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Current Account(s)</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Account Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Account Number</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Account Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Currency</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Account Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Account Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentAccounts.map((account, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{account.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{account.number}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{account.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{account.currency}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                        {formatAmount(account.balance)}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {account.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

     
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Investment Account</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Account Number</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Maturity Date</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Maturity Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Interest Rate</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Principal Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Tenor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {investmentAccounts.map((account, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{account.number}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        {account.maturityDate}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                        {formatAmount(account.maturityAmount)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          <TrendingUp size={12} className="mr-1" />
                          {account.interestRate}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 font-semibold">
                        {formatAmount(account.principalAmount)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">{account.tenor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccounts;