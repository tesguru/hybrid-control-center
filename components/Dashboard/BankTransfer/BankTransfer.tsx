import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import BankTransferTable from './BankTransferTable'

const BankTransfer = () => {
  return (
  <DashboardLayout urlpath={URLS.DASHBOARD.BANKTRANSFER}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>Bank Transfer</h1>
<BankTransferTable/>
        </main>
    </DashboardLayout>
  )
}

export default BankTransfer;