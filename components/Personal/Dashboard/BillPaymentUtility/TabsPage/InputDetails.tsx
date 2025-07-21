import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
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
             width="responsive"
          label="Account Debit"
          id="account-number"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          options={accountNumber}
        />
        </div>
          <div>
            <InputField
              label="Package"
              id="accountNumber"
              name="amount"
              placeholder="Enter Amount"
              value={"Amount"}
              required
            />
        
        </div>
      </div>
      <div className="md:space-y-5">
        <div>
          <Dropdown
               width="responsive"
            label="Utility Provider"
            id="account-number"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            options={accountNumber}
          />


        </div>

     
          <div>
            <InputField
              label="Account id"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter Narration"
              value={"Account"}
              required
            />
          </div>
    
      </div>
    </div>
  );
};

export default InputDetails;
