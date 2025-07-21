import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import  { AccountOfficerDetailsInfoTable } from './AccountOfficerDetailsInfoTable'

const AccountOfficerDetailsInfo = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.SELFSERVICE_ACCOUNTOFFICERDETAILS}>
     <h1 className="font-bold text-xl">Account Officer Details</h1>
            <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl py-4">
        <AccountOfficerDetailsInfoTable/>
              </div>   
    </DashboardLayout>
  )
}

export default AccountOfficerDetailsInfo