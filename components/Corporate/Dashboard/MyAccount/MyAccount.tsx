import React from 'react'
import AccountInformationTable from './AccountInformationTable'
import { URLS } from '@/lib/constants/url'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import InvestmentAccountTable from './InvestmentAccountTable'

const MyAccount = () => {
  return (
    <div>
      <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.MYACCOUNT}> 
        <h1 className="font-bold text-xl">My Accounts</h1>
        <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl">
            <AccountInformationTable/>
            <InvestmentAccountTable/>
          </div>   

 </DashboardLayout>
    </div>
 
  )
}

export default MyAccount