import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/Forms/InputField";
import React from "react";

export default function NextOfKinForm() {
 

  return (
    <form>
    <div className="grid grid-cols-2 gap-10 ">
      <div>
        <InputField
          label="Old Next Of Kin "
          id="old-name"
          name="old-name"
          placeholder="Old Tel Phone Number"
          value={"Old Next Of Kin"}
          required
        />
      </div>
      <div>
        <InputField
          label="New Next Of Kin "
          id="old-next-of-kin"
          name="amount"
          placeholder="New Tel Phone Number"
          value={"New Next Of Kin"}
          required
        />
      </div>    
    </div>
    <Button  className="bg-primary-01 text-white mt-6">Continue</Button>
    </form>
  );
}
