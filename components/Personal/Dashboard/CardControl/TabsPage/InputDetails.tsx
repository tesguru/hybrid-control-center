import { Dropdown } from "@/components/ui/Forms/Dropdown";
import React, { useState } from "react";

const InputDetails = () => {
  const accountNumber = [
    { value: "accountnumber", label: "Current Account - 025467890900" },
    { value: "accountnumbers", label: "Current Account - 025467890900" },
  ];
  const [selectedAccount, setSelectedAccount] = useState("");
  return (
    <div className="md:flex md:gap-30 my-4">
      <div className="md:space-y-6">
        <div className="">
            <Dropdown
          width="xl"
          label="Account Debit"
          id="account-number"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          options={accountNumber}
        />
        </div>
          <div>
             <Dropdown
          width="xl"
          label="Account Debit"
          id="account-number"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          options={accountNumber}
        />
        
        </div>
      </div>
      <div className="md:space-y-5">
        <div>
          <Dropdown
            width="xl"
            label="Network"
            id="account-number"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            options={accountNumber}
          />


        </div>

     
          <div>
             <Dropdown
          width="xl"
          label="Account Debit"
          id="account-number"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          options={accountNumber}
        />
          </div>
    
      </div>
    </div>
  );
};

export default InputDetails;
