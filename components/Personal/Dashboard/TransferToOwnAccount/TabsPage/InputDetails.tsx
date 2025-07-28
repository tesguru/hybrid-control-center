import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import { useFormContext } from "react-hook-form";

const accountNumberOptions = [
  { value: "023456789", label: "Current Account - 023456789" },
  { value: "23456709", label: "Saving Account - 023456709" },
];

const accountNumber2Options = [
  { value: "023456799", label: "Current Account - 023456799" },
  { value: "023456700", label: "Saving Account - 023456700" },
];

const InputDetails = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const fromAccount = watch("fromAccount");
  const toAccount = watch("toAccount");

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full my-4">
   
      <div className="flex flex-col gap-6 w-full">
        <Dropdown
          label="Transfer From"
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
           error={errors.amount?.message}
          {...register("amount")}
         
        />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 w-full">
        <Dropdown
          label="Transfer To"
          id="toAccount"
          value={toAccount}
          onChange={(e) =>
            setValue("toAccount", e.target.value, { shouldValidate: true })
          }
          options={accountNumber2Options}
          error={errors.toAccount?.message as string}
        />

        <InputField
          label="Narration"
          id="narration"
          placeholder="Enter Narration"
          {...register("narration")}
          error={errors.narration?.message}
        />
      </div>
    </div>
  );
};

export default InputDetails;
