"use client"
import React, { useState } from 'react';
import { Sidebar } from './Sidebar/Sidebar';
import { DashboardCard } from '../ui/Custom/DashboardCard';
import { PromoCard } from '../ui/Custom/PromoCard';
import Header from './Header/Header';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 overflow-auto">
        <Header />
        <div className="p-6  pl-10">
          <h1 className="text-black text-2xl pb-6">Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <DashboardCard
              type="current"
              title="Current Account"
              accountName="Olasupo Tunde Clinton"
              balance="N200,000.00"
            />
            
            <DashboardCard
              type="investment"
              title="Investment Account"
              maturityAmount="N1,000,000.00"
              principalAmount="N500,000.00"
            />
            
            <DashboardCard
              type="mortgage"
              title="Mortgage Account"
              maturityAmount="N350,000.00"
              principalAmount="N500,000.00"
              interestRate="10%"
            />
            
            {/* <DashboardCard
              type="investment-action"
              title="Investment Account"
              className="flex items-center justify-center"
            /> */}
          </div>
          <PromoCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;