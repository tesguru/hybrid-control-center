import React, { useState } from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import InputField from '@/components/ui/Forms/InputField'
import Button from '@/components/ui/Button/Button'
import TextArea from '@/components/ui/Forms/TextArea'
import Dropdown from '@/components/ui/Forms/Dropdown'

const ComplaintForm = () => {

   const Information = [
    { value: "name", label: "Name" },
    { value: "email", label: "Email Address" },
    { value: "haddress", label: "House Address" },
    { value: "phonenumber", label: "Phone Number" },
     { value: "nextofkin", label: "Next of Kin" },
  ];
    const [selectedAccount, setSelectedAccount] = useState("");
    const [message, setMessage] = useState("");
   return (
        <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.SELFSERVICE_SECURITYQUESTION}>
      <h1 className="font-bold text-xl">Self Service</h1>
      <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl py-4">
        <div className="py-4 border-b border-gray-300 font-bold">
          <p>Complaint Form</p>
        </div>
  <div className="pt-6">
     <form className="space-y-6">
        <div className="grid grid-cols-2 gap-10 ">
          <div>
            <InputField
              label="Customer Name"
              id="old-name"
              name="old-name"
              placeholder="Enter name"
              value={"Customer Name"}
              required
            />
          </div>
          <div>
            <InputField
              label="Tel Phone Number"
              id="accountNumber"
              name="amount"
              placeholder="Enter Amount"
              value={"New House Address"}
              required
            />
          </div>
            <div>
            <InputField
              label="Email Address"
              id="accountNumber"
              name="amount"
              placeholder="Enter Amount"
              value={"New House Address"}
              required
            />
          </div>  
            <div>
            <Dropdown
                         width="responsive"
                     label="Subject "
                     id="account-number"
                     placeholder="Select Subject"
                     value={selectedAccount}
                     onChange={(e) => setSelectedAccount(e.target.value)}
                     options={Information}
                   /> 
          </div>  

        </div>
         <TextArea
        label="Your Message (Mon 250 characters)"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={250}
        placeholder="Type your message here..."
        className="mb-4"
      />
        <Button  className="bg-primary-01 text-white ">Submit</Button>
        </form>
    </div>
      </div>
    </DashboardLayout>
  
  )
}

export default ComplaintForm