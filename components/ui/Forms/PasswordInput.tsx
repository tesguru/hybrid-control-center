// components/ui/PasswordInput.tsx
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export function PasswordInput({
  label,
  id,
  containerClass = '',
  labelClass = '',
  inputClass = '',
  ...inputProps
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${containerClass}`}>
      <label 
        htmlFor={id} 
        className={`block text-sm font-medium text-gray-700 mb-2 ${labelClass}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className={`w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-01 focus:border-transparent ${inputClass}`}
          {...inputProps}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}