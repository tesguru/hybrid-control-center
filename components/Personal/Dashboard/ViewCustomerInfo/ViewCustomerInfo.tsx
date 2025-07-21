import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import ViewCustomerTable from './ViewCustomerTable'

const ViewCustomerInfo = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.SELFSERVICE_VIEWCUSTOMERINFO}>
     <h1 className="font-bold text-xl">Self Service</h1>
            <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl py-4">
                <ViewCustomerTable/>
              </div>   
    </DashboardLayout>
  )
}

export default ViewCustomerInfo