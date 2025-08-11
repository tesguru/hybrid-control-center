import React, { useState } from 'react';
import Header from './Header';
import { Sidebar } from './Sidebar/Sidebar';


interface DashboardLayoutProps {
  children?: React.ReactNode;
  urlpath: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, urlpath}) => {
   const [sidebarOpen] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar  activePath={urlpath} />
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <Header />
        
          {children}
    
      </div>
    </div>
  );
};

export default DashboardLayout;