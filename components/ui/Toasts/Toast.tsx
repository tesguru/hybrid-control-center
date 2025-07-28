import React, { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { ToastType } from '@/lib/providers/Toast';

interface ToastProps {
  toast: ToastType;
  onRemove: (id: string) => void;
}

interface VariantConfig {
  bgColor: string;
  borderColor: string;
  iconBg: string;
  iconColor: string;
  titleColor: string;
  descColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(true);

  useEffect(() => {
  
    const showTimer = setTimeout(() => setIsVisible(true), 10);
    

    const duration = toast.duration || 5000;
    const hideTimer = setTimeout(() => {
      handleRemove();
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [toast.duration]);

  const handleRemove = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShouldRender(false);
      onRemove(toast.id);
    }, 300);
  };

  const variants: Record<string, VariantConfig> = {
    default: {
      bgColor: 'bg-white',
      borderColor: 'border-gray-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-gray-900',
      descColor: 'text-gray-600',
      icon: Info
    },
    success: {
      bgColor: 'bg-white',
      borderColor: 'border-green-200',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      descColor: 'text-green-700',
      icon: CheckCircle
    },
    error: {
      bgColor: 'bg-white',
      borderColor: 'border-red-200',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
      descColor: 'text-red-700',
      icon: XCircle
    },
    warning: {
      bgColor: 'bg-white',
      borderColor: 'border-yellow-200',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      titleColor: 'text-yellow-900',
      descColor: 'text-yellow-700',
      icon: AlertTriangle
    },
    info: {
      bgColor: 'bg-white',
      borderColor: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      descColor: 'text-blue-700',
      icon: Info
    }
  };

  const variant = variants[toast.variant || 'default'] || variants.default;
  const IconComponent = variant.icon;

  if (!shouldRender) return null;

  return (
    <div
      className={`transform transition-all duration-300 ease-in-out mb-2 sm:mb-4 w-full px-4 sm:px-0 ${
        isVisible 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ${variant.bgColor} shadow-lg rounded-lg border ${variant.borderColor} pointer-events-auto overflow-hidden mx-auto sm:mx-0`}
      >
        <div className="p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className={`p-1 sm:p-1.5 rounded-full ${variant.iconBg}`}>
                <IconComponent className={`w-3 h-3 sm:w-4 sm:h-4 ${variant.iconColor}`} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-xs sm:text-sm font-medium ${variant.titleColor} leading-tight`}>
                {toast.title}
              </p>
              {toast.description && (
                <p className={`mt-1 text-xs sm:text-sm ${variant.descColor} leading-relaxed break-words hyphens-auto`}>
                  {toast.description}
                </p>
              )}
            </div>
            <div className="flex-shrink-0">
              <button
                onClick={handleRemove}
                className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 p-1 -mt-0.5"
                aria-label="Close toast"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="h-0.5 sm:h-1 bg-gray-100">
          <div 
            className={`h-full transition-all ease-linear ${
              toast.variant === 'success' ? 'bg-green-500' :
              toast.variant === 'error' ? 'bg-red-500' :
              toast.variant === 'warning' ? 'bg-yellow-500' :
              'bg-blue-500'
            }`}
            style={{
              animation: `shrink ${toast.duration || 5000}ms linear forwards`
            }}
          />
        </div>
      </div>
    </div>
  );
};