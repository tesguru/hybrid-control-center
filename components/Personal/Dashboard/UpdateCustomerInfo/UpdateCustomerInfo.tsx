import React, { useState } from 'react'
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import { URLS } from '@/lib/constants/url'
import Dropdown from '@/components/ui/Forms/Dropdown'
import NameForm from './Infromations/NameForm'
import HouseAddressForm from './Infromations/HouseAddressForm'
import EmailAddressForm from './Infromations/EmailForm'
import PhoneNumberForm from './Infromations/PhoneNumberForm'
import NextOfKinForm from './Infromations/NextOfKinForm'
// Import other forms here if needed in the future
// import Email from './Infromations/EmailForm'
// import Address from './Infromations/AddressForm'
// import PhoneNumber from './Infromations/PhoneForm'

const UpdateCustomerInfo = () => {
  const Information = [
    { value: "name", label: "Name" },
    { value: "email", label: "Email Address" },
    { value: "haddress", label: "House Address" },
    { value: "phonenumber", label: "Phone Number" },
     { value: "nextofkin", label: "Next of Kin" },
  ];

  const [selectedAccount, setSelectedAccount] = useState("");

  const renderForm = () => {
    switch (selectedAccount) {
      case "name":
        return <NameForm />;
       case "email":
        return <EmailAddressForm />;
      case "haddress":
        return <HouseAddressForm />;
         case "nextofkin":
        return <NextOfKinForm />;
       case "phonenumber":
         return <PhoneNumberForm />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.SELFSERVICE_UPDATEINFO}>
      <h1 className="font-bold text-xl">Self Service</h1>
      <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl py-4">
        <div className="py-4 border-gray-300 font-bold">
          <p>Customer Profile</p>
        </div>

        <div>
          <Dropdown
            width="responsive"
            label="Select the information you would like to update?"
            id="account-number"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            options={Information}
            placeholder="Select Information"
          />
        </div>

        {selectedAccount && (
            <div>
                 <div className="py-4 border-b border-gray-300 font-bold">
            <p>Fill form</p>
              </div>
            <div className="mt-4">{renderForm()}</div>
        
            </div>
         
        )}
      </div>
    </DashboardLayout>
  );
};

export default UpdateCustomerInfo;
