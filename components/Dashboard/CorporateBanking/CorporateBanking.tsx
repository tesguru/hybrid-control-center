import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import CorporateBankingDetailsTable from './CorporateBankingTable'
import { URLS } from '@/lib/constants/url'


const CorporateBanking = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.CORPORATEBANKING}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>Coporate Banking Accounts</h1>
<CorporateBankingDetailsTable/>
        </main>
    </DashboardLayout>
  )
}

export default CorporateBanking