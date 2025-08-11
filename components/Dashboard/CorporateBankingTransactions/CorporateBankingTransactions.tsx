import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import CorporateBankingTransactionsTable from './CorporateBankingTransactionsTable'

const CorporateBankingTransactions = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.CORPORATEBANKINGTRANSACTIONS}>
        <main className='p-4'>
       <h1 className='py-3 font-extrabold text-2xl '>Personal Banking Accounts</h1>
   <CorporateBankingTransactionsTable/>
        </main>
    </DashboardLayout>
  )
}

export default CorporateBankingTransactions