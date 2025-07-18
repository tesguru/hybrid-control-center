import React, { useState, useRef, useEffect } from 'react';

interface OTPInputProps {
  length?: number;
  onComplete?: (value: string) => void;
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  inputClassName?: string;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}

export const OTPInput: React.FC<OTPInputProps> = ({ 
  length = 4, 
  onComplete, 
  onChange,
  value = '',
  className = '',
  inputClassName = '',
  disabled = false,
  placeholder = '',
  autoFocus = true
}) => {
  const [otp, setOtp] = useState<string[]>(value.split('').slice(0, length));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    setOtp(value.split('').slice(0, length));
  }, [value, length]);

  const handleChange = (index: number, val: string) => {
    if (disabled) return;
    
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    
    if (onChange) {
      onChange(newOtp.join(''));
    }
    
    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    
    if (newOtp.every(digit => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    if (e.key === 'Backspace') {
      if (otp[index] === '' && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        handleChange(index, '');
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
    const newOtp = [...otp];
    
    for (let i = 0; i < Math.min(pastedData.length, length); i++) {
      newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
    
    if (onChange) {
      onChange(newOtp.join(''));
    }
    
    const nextEmptyIndex = newOtp.findIndex(digit => digit === '');
    const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex;
    inputRefs.current[focusIndex]?.focus();
    
    if (newOtp.every(digit => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  // Correct ref callback type
  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  return (
    <div className={`flex gap-3 ${className}`}>
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={setInputRef(index)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={otp[index] || ''}
          onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ''))}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            w-12 h-12 text-center text-lg font-medium
            border-2 border-gray-300 rounded-lg
            focus:border-primary-01 focus:outline-none focus:ring-2 focus:ring-teal-200
            disabled:bg-gray-100 disabled:cursor-not-allowed
            transition-colors duration-200
            ${inputClassName}
          `}
        />
      ))}
    </div>
  );
};