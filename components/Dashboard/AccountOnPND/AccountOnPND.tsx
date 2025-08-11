import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import AccountOnPNDTable from './AccountOnPNDTable'


const AccountOnPND = () => {
  return (
  <DashboardLayout urlpath={URLS.DASHBOARD.ACCOUNTONPND}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>Accounts On PND</h1>
<AccountOnPNDTable/>
        </main>
    </DashboardLayout>
  )
}

export default AccountOnPND