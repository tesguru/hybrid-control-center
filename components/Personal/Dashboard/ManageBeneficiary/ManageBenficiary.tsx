import React from 'react'
import BeneficiariesTable from './BeneficiariesTable'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'

const ManageBenficiary = () => {
  return (
     <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.MANAGEBENEFICIARY}>
        <BeneficiariesTable/>
     </DashboardLayout>
 
  )
}

export default ManageBenficiary