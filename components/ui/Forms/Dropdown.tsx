import { SelectHTMLAttributes, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { DetailedHTMLProps } from 'react';

interface DropdownProps extends Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'size'> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  containerClass?: string;
  labelClass?: string;
  selectClass?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  width?: 'auto' | 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'default' | 'outline' | 'filled';
  error?: string;
  helperText?: string;
  disabled?: boolean;
  placeholder?: string;
}

export function Dropdown({
  label,
  id,
  options,
  containerClass = '',
  labelClass = '',
  selectClass = '',
  size = 'md',
  width = 'auto',
  variant = 'default',
  error,
  helperText,
  disabled = false,
  placeholder,
  ...selectProps
}: DropdownProps) {
  const [isFocused, setIsFocused] = useState(false);

  const sizeClasses = {
    sm: 'pl-3 pr-10 py-2 text-sm min-h-[2.25rem]',
    md: 'pl-4 pr-12 py-3 text-base min-h-[2.75rem]',
    lg: 'pl-5 pr-14 py-4 text-lg min-h-[3.25rem]',
    xl: 'pl-6 pr-16 py-5 text-xl min-h-[3.75rem]',
  };

  const widthClasses = {
    auto: 'w-auto min-w-[8rem]',
    full: 'w-full',
    xs: 'w-32',
    sm: 'w-48',
    md: 'w-64',
    lg: 'w-80',
    xl: 'w-96',
    xxl: 'w-[24rem]',
  };

  const variantClasses = {
    default: 'bg-white border-gray-300 text-gray-900',
    outline: 'bg-transparent border-gray-400 text-gray-900',
    filled: 'bg-gray-50 border-gray-200 text-gray-900',
  };

  const getSelectClasses = () => `
    border rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    transition-all duration-200 ease-in-out
    appearance-none cursor-pointer
    ${sizeClasses[size]} 
    ${widthClasses[width]} 
    ${variantClasses[variant]}
    ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
    ${isFocused && !error ? 'ring-2 ring-blue-500 border-blue-500' : ''}
    ${disabled ? 'opacity-60 cursor-not-allowed bg-gray-100' : 'hover:border-gray-400'}
  `;

  const getIconClasses = () => {
    const baseIconSize = {
      sm: 'h-4 w-4 right-3',
      md: 'h-5 w-5 right-4',
      lg: 'h-6 w-6 right-5',
      xl: 'h-7 w-7 right-6',
    };

    return `
      absolute top-1/2 -translate-y-1/2 
      ${baseIconSize[size]}
      transition-transform duration-200 pointer-events-none
      flex-shrink-0
      ${error ? 'text-red-500' : disabled ? 'text-gray-400' : 'text-gray-500'}
    `;
  };

  const getLabelClasses = () => `
    block text-sm font-medium mb-2 ${labelClass}
    ${error ? 'text-red-700' : disabled ? 'text-gray-500' : 'text-gray-700'}
  `;

  return (
    <div className={`relative ${containerClass}`}>
      <label htmlFor={id} className={getLabelClasses()}>
        {label}
      </label>
      
      <div className="relative inline-block">
        <select
          id={id}
          className={`${getSelectClasses()} ${selectClass}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...selectProps}
        >
          <option value="" disabled>
            {placeholder || `Select ${label}`}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <ChevronDown className={getIconClasses()} aria-hidden="true" />
        </div>
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={`${id}-helper`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Dropdown;