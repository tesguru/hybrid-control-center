import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import { PasswordInput } from "@/components/ui/Forms/PasswordInput";
import React, { useState } from "react";

const InputDetails = () => {
  const accountNumber = [
    { value: "accountnumber", label: "Current Account - 025467890900" },
    { value: "accountnumbers", label: "Current Account - 025467890900" },
  ];
  const [selectedAccount, setSelectedAccount] = useState("");
  return (
    <div className="grid md:grid-cols-2 md:gap-30 my-4">
      <div className="md:space-y-6">
        <div className="">
            <Dropdown
            width="responsive"
            label="Select Bank"
            id="account-number"
            value={selectedAccount}
            onChange={(e) => setSelectedAccount(e.target.value)}
            options={accountNumber}
          />
        </div>
          <div>
             <PasswordInput
           
              label="Old Transaction Pin"
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
          <InputField
           
              label="Security Answer"
              id="accountNumber"
              name="amount"
              placeholder="Enter Amount"
              value={"Amount"}
              required
            />
        </div>
         <div>
          <PasswordInput
           
              label="New Transaction Pin"
              id="accountNumber"
              name="amount"
              placeholder="Enter Amount"
              value={"Amount"}
              required
            />
        </div>
      </div>
    </div>
  );
};

export default InputDetails;
