import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { useFormContext } from "react-hook-form";

const accountNumberOptions = [
  { value: "023456789", label: "Current Account - 023456789" },
  { value: "23456709", label: "Saving Account - 023456709" },
];
const accountToLinks = [
  { value: "023456789", label: "Current Account - 023456789" },
  { value: "23456709", label: "Saving Account - 023456709" },
];

const selectReason = [
  { value: "Transfer", label: "Transfer" },
  { value: "Withdrawal", label: "For Withdrawal" },
];

const pickUpBranches = [
  { value: "Keffi Street", label: "Keffi Street" },
  { value: "Ojodu Beger", label: "Ojodu Beger" },
];

const InputDetails = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const fromAccount = watch("fromAccount");
  const accountToLink = watch("accountToLink");
  const reason = watch("reason");
  const pickUpBranch = watch("pickUpBranch");

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
        
         <Dropdown
          label="Account to Link"
          id="accountToLink"
          value={accountToLink}
          onChange={(e) =>
            setValue("accountToLink", e.target.value, { shouldValidate: true })
          }
          options={accountToLinks}
          error={errors.accountToLink?.message as string}
        />
         
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-6 w-full">
      <Dropdown
          label="Select Reason"
          id="selectreason"
          value={reason}
          onChange={(e) =>
            setValue("reason", e.target.value, { shouldValidate: true })
          }
          options={selectReason}
          error={errors.accountToLink?.message as string}
        />

       <Dropdown
          label="Pick Up Branch"
          id="accountToLink"
          value={pickUpBranch}
          onChange={(e) =>
            setValue("pickUpBranch", e.target.value, { shouldValidate: true })
          }
          options={pickUpBranches}
          error={errors.pickUpBranch?.message as string}
        />
      </div>
    </div>
  );
};

export default InputDetails;
