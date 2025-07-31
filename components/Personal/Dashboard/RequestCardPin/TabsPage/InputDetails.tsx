import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import { useFormContext } from "react-hook-form";

const accountNumberOptions = [
  { value: "023456789", label: "Current Account - 023456789" },
  { value: "23456709", label: "Saving Account - 023456709" },
];


const secretQuestions = [
  { value: "Transfer", label: "Transfer" },
  { value: "Withdrawal", label: "For Withdrawal" },
];



const InputDetails = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const fromAccount = watch("fromAccount");
   const secretQuestion = watch("secretQuestion");

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full my-4">
   
      <div className="flex flex-col gap-6 w-full">
        <Dropdown
          label="Select Account"
          id="fromAccount"
          value={fromAccount}
          onChange={(e) =>
            setValue("fromAccount", e.target.value, { shouldValidate: true })
          }
          options={accountNumberOptions}
          error={errors.fromAccount?.message as string}
        />
     <Dropdown
          label="Secret Question "
          id="secretquestion"
          value={secretQuestion}
          onChange={(e) =>
            setValue("secretQuestion", e.target.value, { shouldValidate: true })
          }
          options={secretQuestions}
          error={errors.secretQuestion?.message as string}
        />
         
      </div>

  
      <div className="flex flex-col gap-6 w-full">
  
     
  <InputField
           label="Answer"
           id="answer"
           placeholder="Enter Answer"
           error={errors.answer?.message}
           {...register("answer")}
         />

         
      </div>
    </div>
  );
};

export default InputDetails;
