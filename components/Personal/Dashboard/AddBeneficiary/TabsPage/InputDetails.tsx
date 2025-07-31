import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import React from "react";
import { useFormContext } from "react-hook-form";

const InputDetails = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
 

  const bankAccounts = [
    { value: "Opay", label: "Opay" },
    { value: "Moniepoint", label: "Moniepoint" },
  ];


  const bank = watch("bank");

  return (
    <div className="space-y-4 w-full">
      <div className="grid grid-cols-2  gap-18 w-full">
          <div className="">
            <InputField
              label="Account Number"
              id="accountNumber"
              placeholder="Enter Account Number"
              error={errors.accountNumber?.message}
              {...register("accountNumber")}
            />
          </div>
<Dropdown
          label="Select Bank"
          id="bank"
          value={bank}
          onChange={(e) =>
            setValue("bank", e.target.value, { shouldValidate: true })
          }
          options={bankAccounts}
          error={errors.bank?.message as string}
        />
        
      </div>
      <div className="md:w-[46%]">
        <InputField
          label="Account Name"
          id="narration"
          placeholder="Enter Narration"
          error={errors.narration?.message}
          {...register("narration")}
        />
      </div>
    </div>
  );
};

export default InputDetails;
