import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import FlaggedTransactionTable from './FlaggedTransactionTable'


const FlaggedTransaction = () => {
  return (
  <DashboardLayout urlpath={URLS.DASHBOARD.FLAGGEDTRANSACTIONS}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>Flagged Transactions</h1>
<FlaggedTransactionTable/>
        </main>
    </DashboardLayout>
  )
}

export default FlaggedTransaction;