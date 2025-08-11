import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import FlaggedAccountTable from './FlaggedAccountTable'

const FlaggedAccount = () => {
  return (
  <DashboardLayout urlpath={URLS.DASHBOARD.FLAGGEDACCOUNT}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>Flagged Accounts</h1>
<FlaggedAccountTable/>
        </main>
    </DashboardLayout>
  )
}

export default FlaggedAccount