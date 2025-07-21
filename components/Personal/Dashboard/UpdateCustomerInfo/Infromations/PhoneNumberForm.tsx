import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/Forms/InputField";
import React from "react";

export default function PhoneNumberForm() {
 

  return (
    <form>
    <div className="grid grid-cols-2 gap-10 ">
      <div>
        <InputField
          label="Old Tel PhoneNumber"
          id="old-name"
          name="old-name"
          placeholder="Old Tel Phone Number"
          value={"Old Tel Phone Number"}
          required
        />
      </div>
      <div>
        <InputField
          label="New Tel Phone Number"
          id="accountNumber"
          name="amount"
          placeholder="New Tel Phone Number"
          value={"New Tel Phone Number"}
          required
        />
      </div>    
    </div>
    <Button  className="bg-primary-01 text-white mt-6">Continue</Button>
    </form>
  );
}
