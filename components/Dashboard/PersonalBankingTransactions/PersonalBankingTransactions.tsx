import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import PersonalBankingTransactionsTable from './PersonalBankingTransactionsTable'

const PersonalBankingTransactions = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONALBANKINGTRANSACTIONS}>
        <main className='p-4'>
       <h1 className='py-3 font-extrabold text-2xl '>Personal Banking Accounts</h1>
<PersonalBankingTransactionsTable/>
        </main>
    </DashboardLayout>
  )
}

export default PersonalBankingTransactions