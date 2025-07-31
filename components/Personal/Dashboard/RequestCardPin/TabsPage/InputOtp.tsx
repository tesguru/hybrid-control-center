import Button from "@/components/ui/Button/Button";
import { OTPInput } from "@/components/ui/Forms/InputOtp";

export const InputOtp = ({
  value,
  onChange,
  isSubmitting,
  onSubmit,
  onCancel
}: {
  value: string
  onChange: (val: string) => void
  isSubmitting: boolean
  onSubmit: () => void
  onCancel: () => void
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
         <p className="text-gray-600 text-center mb-8">
         Enter  the OTP sent to your mobile number
        </p>
        
        <div className="flex justify-center mb-6">
          <OTPInput
            length={4}
            onComplete={onChange}
            onChange={onChange}
            value={value}
            autoFocus
          />
        </div>
        
        <div className="space-y-3">
          <Button
            onClick={onSubmit}
            disabled={value.length !== 4 || isSubmitting}
            className={`
              w-full py-3 px-2 rounded-lg font-medium text-white
              transition-colors duration-200
              ${value.length === 4 && !isSubmitting
                ? 'bg-primary-01 hover:bg-primary-02 cursor-pointer'
                : 'bg-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          
          <Button
            onClick={onCancel}
            className="w-full py-2 px-2 rounded-lg font-medium bg-gray-200 text-gray-700 border-2 border-gray-300 hover:bg-gray-50"
          >
            Cancel
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          Didn't receive the code? <button className="text-primary-04 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};
