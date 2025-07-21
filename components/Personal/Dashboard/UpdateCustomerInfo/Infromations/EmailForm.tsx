import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/Forms/InputField";
import React from "react";

export default function EmailAddressForm() {
 

  return (
    <form>
    <div className="grid grid-cols-2 gap-10 ">
      <div>
        <InputField
          label="Old Email Address"
          id="old-name"
          name="old-name"
          placeholder="Enter name"
          value={"Old House Address"}
          required
        />
      </div>
      <div>
        <InputField
          label="New Email Address"
          id="accountNumber"
          name="amount"
          placeholder="Enter Amount"
          value={"New House Address"}
          required
        />
      </div>    
    </div>
    <Button  className="bg-primary-01 text-white mt-6">Continue</Button>
    </form>
  );
}
