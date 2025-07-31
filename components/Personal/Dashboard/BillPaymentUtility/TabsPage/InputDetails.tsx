import { Dropdown } from "@/components/ui/Forms/Dropdown";
import { InputField } from "@/components/ui/Forms/InputField";
import { useFormContext } from "react-hook-form";


const InputDetails = () => {
  const accountNumberOptions = [
    { value: "accountnumber", label: "Current Account - 025467890900" },
    { value: "accountnumbers", label: "Current Account - 025467890900" },
  ];
    const utilityProviders = [
    { value: "Dstv", label: "Dstv" },
    { value: "Gotv", label: "Gotv" },
  ];
     const packages = [
    { value: "Premium package", label: "Premium Package" },
    { value: "Starplus package", label: "Starplus Package" },
  ];
   const {
      register,
      setValue,
      watch,
      formState: { errors },
    } = useFormContext();
    const fromAccount = watch('fromAccount');
     const packageselected = watch('package');
      const utilityProvider = watch('utilityProvider');
  return (
    <div className="md:flex md:gap-30 my-4">
      <div className="md:space-y-6">
        <div className="">
            <Dropdown
             width="responsive"
          label="Account Debit"
          id="account-number"
          value={fromAccount}
          onChange={(e) =>
            setValue("fromAccount", e.target.value, { shouldValidate: true })
          }
          options={accountNumberOptions}
          error={errors.fromAccount?.message as string}
        />
        </div>
          <div>
             <Dropdown
             width="responsive"
          label="Package"
          id="package"
          value={packageselected}
          onChange={(e) =>
            setValue("package", e.target.value, { shouldValidate: true })
          }
          options={packages}
          error={errors.packageselected?.message as string}
        />
        
        </div>
          <div>
            <InputField
              label="Amount"
              id="amount"
              placeholder="Enter Amount"
             {...register("amount")}
          error={errors.amount?.message}
            />
        
        </div>
      </div>
      <div className="md:space-y-5">
        <div>
          <Dropdown
               width="responsive"
            label="Utility Provider"
            id="utilityprovider"
            value={utilityProvider}
          onChange={(e) =>
            setValue("utilityProvider", e.target.value, { shouldValidate: true })
          }
          options={utilityProviders}
          error={errors.utilityProvider?.message as string}
          />
        </div>
          <div>
            <InputField
              label="Account id"
              id="accountId"
           
             placeholder="Enter Account Id"
               {...register("accountId")}
          error={errors.accountId?.message}
            />
          </div>

            <div>
            <InputField
              label="Remarks"
              id="remarks"
              placeholder="Enter Remarks"
               {...register("remarks")}
          error={errors.remarks?.message}
            />
        
        </div>
    
      </div>
      
    </div>
  );
};

export default InputDetails;


