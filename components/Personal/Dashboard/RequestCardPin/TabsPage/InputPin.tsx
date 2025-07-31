import React, { useState, useRef, useEffect, KeyboardEvent, ChangeEvent, ClipboardEvent } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface OTPInputProps {
  length?: number;
  onComplete?: (otp: string) => void;
  onOtpChange?: (otp: string) => void;
  className?: string;
}

const OTPInput: React.FC<OTPInputProps> = ({ 
  length = 4, 
  onComplete = () => {}, 
  onOtpChange = () => {},
  className = "" 
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number): void => {
    if (isNaN(Number(element.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onOtpChange(newOtp.join(""));

    if (element.value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
        onOtpChange(newOtp.join(""));
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        onOtpChange(newOtp.join(""));
        inputRefs.current[index - 1]?.focus();
      }
    }
    
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const pastedArray = pastedData.slice(0, length).split('');
    
    if (pastedArray.every(char => !isNaN(Number(char)) && char !== '')) {
      const newOtp = new Array(length).fill("");
      pastedArray.forEach((char, index) => {
        if (index < length) newOtp[index] = char;
      });
      
      setOtp(newOtp);
      onOtpChange(newOtp.join(""));
      
      const focusIndex = Math.min(pastedArray.length, length - 1);
      inputRefs.current[focusIndex]?.focus();
      
      if (newOtp.every(digit => digit !== "")) {
        onComplete(newOtp.join(""));
      }
    }
  };

  const toggleVisibility = (): void => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`flex flex-col items-center space-y-8  ${className}`}>
      {/* OTP Input Fields - exactly like in the image */}
      <div className="flex space-x-4">
        {otp.map((digit, index) => (
          <div key={index} className="relative">
            <input
              ref={(ref) => { inputRefs.current[index] = ref; }}
              type={isVisible ? "text" : "password"}
              maxLength={1}
              value={digit}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target, index)}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all duration-200 bg-white"
            />
            {/* Show asterisk when not visible and has value */}
            {!isVisible && digit && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-gray-800">*</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Toggle Button - circular like in the image */}
      <button
        onClick={toggleVisibility}
        className="w-14 h-14 flex items-center justify-center bg-teal-500 hover:bg-teal-600 rounded-full text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-300 shadow-lg"
        title={isVisible ? "Hide OTP" : "Show OTP"}
        type="button"
      >
        {isVisible ? <EyeOff size={24} /> : <Eye size={24} />}
      </button>
    </div>
  );
};

// Demo component with TypeScript
interface OTPDemoProps {}

const OTPDemo: React.FC<OTPDemoProps> = () => {
  const [completedOtp, setCompletedOtp] = useState<string>("");

  const handleOtpComplete = (otp: string): void => {
    setCompletedOtp(otp);
    console.log("OTP Complete:", otp);
  };

  const handleOtpChange = (otp: string): void => {
    // Handle OTP changes
    console.log("OTP Changed:", otp);
  };

  return (
    <div className=" flex pt-4 justify-center ">
      <div className="bg-white  max-w-lg w-full mb-8">
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Enter Your Card Pin</h2>
        </div>
        
        <OTPInput 
          length={4}
          onComplete={handleOtpComplete}
          onOtpChange={handleOtpChange}
        />
        
        {completedOtp && (
          <div className="p-4 mt-4 mb-6 bg-green-50 border border-green-200 rounded-xl text-center">
            <div className="text-green-600 text-lg font-semibold">✓ Pin Saved Successfully!</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OTPDemo;