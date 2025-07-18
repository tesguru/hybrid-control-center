import React from 'react'
import TransactionHistoryTable from './TransactionHistoryTable'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'

const TransactionHistory = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.TRANSACTIONHISTORY}>
      <TransactionHistoryTable/>
    </DashboardLayout>
    
  )
}

export default TransactionHistory