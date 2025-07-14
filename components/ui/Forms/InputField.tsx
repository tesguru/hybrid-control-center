// components/ui/InputField.tsx
import { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  containerClass?: string;
  labelClass?: string;
  inputClass?: string;
}

export function InputField({
  label,
  id,
  containerClass = '',
  labelClass = '',
  inputClass = '',
  ...inputProps
}: InputFieldProps) {
  return (
    <div className={`${containerClass}`}>
      <label 
        htmlFor={id} 
        className={`block text-sm font-medium text-gray-700 mb-2 ${labelClass}`}
      >
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${inputClass}`}
        {...inputProps}
      />
    </div>
  );
}