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
    <div className="space-y-4 w-full">
   <div className=" md:grid-cols-2">
     <Dropdown
             width="responsive"
          label="Transfer From"
          id="account-number"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          options={accountNumber}
        />          
</div>
    <div className="grid md:space-y-4">
      <div className="md:flex md:gap-14">
        <div className="md:w-1/2">
           <InputField
              label="Enter Account Number"
              id="accountNumber"
              name="amount"
            
              placeholder="Enter Account Number"
              value={"Account Number"}
              required
            />
        </div>
          
         <div className="md:pt-6">
          <p>or</p>
         </div>
  
          <div className="md:w-1/2">
            <Dropdown
              width="responsive"
          label="Enter Benfeciary "
          id="account-number"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
          options={accountNumber}
        />          
        
        </div>
      </div>
      <div className="grid md:grid-cols-2  md:gap-30 w-full">
        
    

     
          <div>
            <InputField
              label="Account Name"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter Narration"
              value={"Account Name"}
              required
            />
          </div>
             <div>
            <InputField
              label="Enter Amount"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter Narration"
              value={"Amount"}
              required
            />
          </div>
    
      </div>
       
    </div>
    <div className="md:w-[44%]">
 
    <InputField
  
              label="Enter Amount"
              id="accountNumber"
              name="accountNumber"
              placeholder="Enter Narration"
              value={"Amount"}
              required
            />        
</div>
     </div>
  );
};

export default InputDetails;
