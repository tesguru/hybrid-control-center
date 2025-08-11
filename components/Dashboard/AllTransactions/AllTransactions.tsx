import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import AllTransactionTable from './AllTransactionsTable'

const AllTransactions = () => {
  return (
  <DashboardLayout urlpath={URLS.DASHBOARD.ALLTRANSACTIONS}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>All Transactions</h1>
<AllTransactionTable/>
        </main>
    </DashboardLayout>
  )
}

export default AllTransactions;