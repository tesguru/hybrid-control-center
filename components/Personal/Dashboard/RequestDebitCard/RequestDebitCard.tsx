"use client";
import React, { useState } from "react";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import { URLS } from "@/lib/constants/url";
import InputDetails from "./TabsPage/InputDetails";
import Button from "@/components/ui/Button/Button";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../../ui/Transformation.css";
import { InputOtp } from "./TabsPage/InputOtp";
import { useTransfer } from "@/lib/hooks/Personal/Dashboard/Transfer/useTransfer";
import { requestDebitCardForm, requestDebitCardSchema } from "@/lib/schemas/cardschema";
import SuccessModal from "@/components/ui/modals/SucessfulModal";

const RequestDebitCard = () => {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [otpValue, setOtpValue] = useState("");

  const { transferToOwnAccount } = useTransfer();

 const methods = useForm<requestDebitCardForm>({
  resolver: zodResolver(requestDebitCardSchema),
  mode: "onChange",            
  reValidateMode: "onChange",
  defaultValues: {
  fromAccount:"",
  accountToLink: "",
  reason:"",
   pickUpBranch:"",
  },
});


  const nextStep = async () => {
    if (step === 1) {
      const isValid = await methods.trigger();
      if (!isValid) return;
    }

    if (step < 3) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const resetForm = () => {
    methods.reset();
    setOtpValue("");
    setStep(1);
  };

  const handleFinalSubmit = () => {
    const formData = methods.getValues();

    // transferToOwnAccount.mutate(
    //   {
    //     ...formData
    //     // otp: otpValue,
    //   }
    //   {
    //     onSuccess: () => {
    //       nextStep(); // Move to success step after successful transfer
    //     }
    //   }
    // );
    console.log(formData);

     nextStep();
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <InputDetails />;

      case 2:
        return (
          <InputOtp
            value={otpValue}
            onChange={setOtpValue}
            isSubmitting={transferToOwnAccount.isPending}
            onSubmit={handleFinalSubmit}
            onCancel={() => setOtpValue("")}
          />
        );
      case 3:
        return (
          <>
          <SuccessModal title={"Debit Card Requested Sucessfully"}/>
            <div className="py-4">
              <Button
                type="button"
                onClick={resetForm}
                className="text-black bg-gray-200 text-sm hover:bg-primary"
              >
                  Request Debit Card 
              </Button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.TRANSFER}>
      <h1 className="font-bold text-xl">Cards</h1>

      <div className="bg-white border mt-8 border-gray-200 px-14 rounded-xl transfer-form-container transfer-form">
        {step < 4 && (
          <div className="border-b py-6 border-gray-300 flex font-bold justify-between">
            <p className="step-title">
              {step === 1
                ? "Request Debit Card"
                : "Enter Transaction Pin"}
            </p>
            <p>Step {step} of 2</p>
          </div>
        )}

        <FormProvider {...methods}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              step < 2 ? nextStep() : handleFinalSubmit();
            }}
          >
            <div className="py-6">
              <div className={`step-content ${isTransitioning ? "transitioning" : ""}`}>
                {renderStepContent()}
              </div>
            </div>

            {step < 2 && (
              <div className="flex justify-between py-4">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                <Button
                  type="submit"
                  className="text-white bg-primary-02 hover:bg-primary"
                  disabled={transferToOwnAccount.isPending}
                >
                  {step < 2 ? "Continue" : "Proceed to OTP"}
                </Button>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </DashboardLayout>
  );
};

export default RequestDebitCard;