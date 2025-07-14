import React, { useState } from 'react'
import TransactionTable from './TransactionTable'
import { Sidebar } from '../../../Dashboard/Sidebar/Sidebar'
import Header from '../../../Dashboard/Header/Header'

const TransactionReport = () => {
     const [activeItem, setActiveItem] = useState('dashboard');
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex-1 overflow-auto">
        <Header />
        <div className="p-6  pl-10">   
      <TransactionTable/>
        </div>
      </div>
    </div>
    
  )
}

export default TransactionReport