import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import { useFormContext } from "react-hook-form";

const accountNumberOptions = [
  { value: "023456789", label: "Current Account - 023456789" },
  { value: "23456709", label: "Saving Account - 023456709" },
];

const networks = [
  { value: "MTN", label: "MTN" },
  { value: "GLO", label: "GLO" },
];

const InputDetails = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const fromAccount = watch("fromAccount");
  const network = watch("network");

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full my-4">
   
      <div className="flex flex-col gap-6 w-full">
        <Dropdown
          label="Account to Debit"
          id="fromAccount"
          value={fromAccount}
          onChange={(e) =>
            setValue("fromAccount", e.target.value, { shouldValidate: true })
          }
          options={accountNumberOptions}
          error={errors.fromAccount?.message as string}
        />
  <InputField
          label="Amount"
          id="amount"
          placeholder="Enter Amount"
          {...register("amount")}
          error={errors.amount?.message}
        />
        

      
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 w-full">
      <Dropdown
          label="Network"
          id="network"
          value={network}
          onChange={(e) =>
            setValue("network", e.target.value, { shouldValidate: true })
          }
          options={networks}
          error={errors.networks?.message as string}
        />

        <InputField
          label="Mobile Number"
          id="mobileNumber"
          placeholder="Enter Mobile Number"
          {...register("mobileNumber")}
          error={errors.mobileNumber?.message}
        />
      </div>
    </div>
  );
};

export default InputDetails;
