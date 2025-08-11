import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import  { ViewUsersTable } from './ViewUsersTable'
import Button from '@/components/ui/Button/Button'

const ViewUsers = () => {
  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.VIEWUSERS}>
        <main className='p-4'>
            <div className="flex justify-between">
                 <h1 className='py-3 font-extrabold text-2xl '>View Users</h1>
                 <Button className="bg-primary-02 text-white ">+ Create Users</Button>
            </div>
      
<ViewUsersTable/>
        </main>
    </DashboardLayout>
  )
}

export default ViewUsers;