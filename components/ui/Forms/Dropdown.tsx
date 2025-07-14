// components/ui/Dropdown.tsx
import { SelectHTMLAttributes, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  containerClass?: string;
  labelClass?: string;
  selectClass?: string;
}

export function Dropdown({
  label,
  id,
  options,
  containerClass = '',
  labelClass = '',
  selectClass = '',
  ...selectProps
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${containerClass}`}>
      <label 
        htmlFor={id} 
        className={`block text-sm font-medium text-gray-700 mb-2 ${labelClass}`}
      >
        {label}
      </label>
      
      <div className="relative">
        <select
          id={id}
          className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none ${selectClass}`}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          {...selectProps}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown 
          className={`absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}