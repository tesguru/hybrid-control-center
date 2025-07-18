import Button from "@/components/ui/Button/Button";
import { OTPInput } from "@/components/ui/Forms/InputOtp";
import TransactionSuccessfulModal from "@/components/ui/modals/TransactionSucessfulModal";
import { useState } from "react";

const InputOtp = () => {
  const [otpValue, setOtpValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleOTPComplete = (value: string) => {
    console.log('OTP Complete:', value);
    setOtpValue(value);
  };

  const handleOTPChange = (value: string) => {
    setOtpValue(value);
  };

  const handleSubmit = () => {
    if (otpValue.length === 4) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1000);
    }
  };

  const handleCancel = () => {
    setOtpValue('');
  };

  if (submitSuccess) {
    return <TransactionSuccessfulModal />;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Verify Your Account</h2>
        <p className="text-gray-600 text-center mb-8">
          Enter the 4-digit code sent to your device
        </p>
        
        <div className="flex justify-center mb-6">
          <OTPInput
            length={4}
            onComplete={handleOTPComplete}
            onChange={handleOTPChange}
            value={otpValue}
            autoFocus={true}
          />
        </div>
        
        <div className="space-y-3">
          <Button
            onClick={handleSubmit}
            disabled={otpValue.length !== 4 || isSubmitting}
            className={`
              w-full py-3 px-4 rounded-lg font-medium text-white
              transition-colors duration-200
              ${otpValue.length === 4 && !isSubmitting
                ? 'bg-primary-01 hover:bg-primary-02 cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          
          <Button
            size="lg"
            onClick={handleCancel}
            className="w-full py-3 px-4 rounded-lg font-medium bg-gray-200 text-gray-700 border-2 border-gray-300 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          Didn't receive the code? <button className="text-primary-01 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default InputOtp;