import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import { useFormContext } from "react-hook-form";

const InputDetails = () => {

  const {
     register,
     setValue,
     watch,
     formState: { errors },
   } = useFormContext();
 const accountNumberOptions = [
   { value: "023456789", label: "Current Account - 023456789" },
   { value: "23456709", label: "Saving Account - 023456709" },
 ];
 
 const beneficiaryAccount = [
   { value: "023456799", label: "Olaogun Teslim - 023456799" },
   { value: "023456700", label: "Yaya Bello - 023456700" },
 ];
 
  
   const fromAccount = watch("fromAccount");
   const selectBeneficiary = watch("beneficiary");
 
  return (
    <div className="space-y-4 w-full">
   <div className="flex ">
      <Dropdown
               label="Transfer From"
               width="responsive"
               id="toAccount"
               value={fromAccount}
               onChange={(e) =>
                 setValue("fromAccount", e.target.value, { shouldValidate: true })
               }
               options={accountNumberOptions}
               error={errors.fromAccount?.message as string}
             />         
</div>
    <div className="grid md:space-y-6">
      <div className="md:flex md:gap-8">
        <div className="md:w-1/2">
         <InputField
          label="Account Number"
          id="accountNumber"
          placeholder="Enter Account Number"
           error={errors.accountNumber?.message}
          {...register("accountNumber")}
         
        />
          
        </div>
          
         <div className="md:pt-6">
          <p>or</p>
         </div>
  
          <div className="md:w-1/2">
            <Dropdown
               label="Select Beneficiary"
               id="beneficiary"
               value={selectBeneficiary}
               onChange={(e) =>
                 setValue("beneficiary", e.target.value, { shouldValidate: true })
               }
               options={beneficiaryAccount}
               error={errors.beneficiary?.message as string}
             />           
        
        </div>
      </div>
      <div className="grid md:grid-cols-2  md:gap-20 w-full">
        
    

     
          <div>
            <InputField
              label="Account Name"
              id="accountName"
              placeholder="Enter Account Name"
              error={errors.accountName?.message}
          {...register("accountName")}
            />
          </div>
             <div>
            <InputField
              label="Enter Amount"
              id="amount"
              placeholder="Enter Amount"
              error={errors.amount?.message}
          {...register("amount")}
            />
          </div>
    
      </div>
       
    </div>
    <div className="md:w-[46%]">
 
    <InputField
  
              label="Narration"
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
