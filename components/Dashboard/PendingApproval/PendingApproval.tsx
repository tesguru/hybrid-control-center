import React from 'react'
import PendingApprovalTable from './PendingApprovalTable'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'

const PendingApproval = () => {
  return (
  <DashboardLayout urlpath={URLS.DASHBOARD.PENDINGAPPROVALACCOUNT}>
        <main className='p-4'>
                 <h1 className='py-3 font-extrabold text-2xl '>Awaiting Approval Accounts</h1>
<PendingApprovalTable/>
        </main>
    </DashboardLayout>
  )
}

export default PendingApproval