import Button from '@/components/ui/Button/Button'
import React from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'

const SecurityQuestion = () => {
  return (
        <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.SELFSERVICE_SECURITYQUESTION}>
      <h1 className="font-bold text-xl">Self Service</h1>
      <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl py-4">
        <div className="py-4 border-b border-gray-300 font-bold">
          <p>Security Question</p>
        </div>
  <div className="flex justify-center p-4 mt-4">
      <div className="bg-white">
        <h2 className="text-xl font-semibold text-center mb-4">
          Would you like to retrieve your security questions and answers?
        </h2>
        
        <p className="text-gray-600 text-center mb-6">
          Please note that your security questions and answers will be sent to your registered email address
        </p>
        
        <div className="flex justify-center">
            <div className="flex flex-col gap-4">
                <Button
            className="w-50 py-2 px-4 rounded-md font-medium text-white bg-primary-01 hover:bg-primary-01 transition-colors"
          >
            Retrieve
          </Button>
          
          <Button
            className="w-50 py-2 px-4 border border-primary-01 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-300 transition-colors"
          >
            Cancel
          </Button>
            </div>
          
        </div>
      </div>
    </div>
      </div>
    </DashboardLayout>
  
  )
}

export default SecurityQuestion