import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import PersonalBankingDetailsTable from './PersonalBankingTable'
import { URLS } from '@/lib/constants/url'

const PersonalBanking = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONALBANKING}>
        <main className='p-4'>
       <h1 className='py-3 font-extrabold text-2xl '>Personal Banking Accounts</h1>
    <PersonalBankingDetailsTable/>
        </main>
    </DashboardLayout>
  )
}

export default PersonalBanking