import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface DatePickerProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date | null;
  placeholder?: string;
  label?: string;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ 
  onDateSelect, 
  selectedDate = null, 
  placeholder = "End Date",
  label = "Select End Date",
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date): (number | null)[] => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const firstDay: Date = new Date(year, month, 1);
    const lastDay: Date = new Date(year, month + 1, 0);
    const daysInMonth: number = lastDay.getDate();
    const startingDayOfWeek: number = firstDay.getDay();

    const days: (number | null)[] = [];
    
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
 
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction: number): void => {
    const newDate: Date = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const selectDate = (day: number | null): void => {
    if (!day) return;
    
    const selectedDateObj: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onDateSelect(selectedDateObj);
    setIsOpen(false);
  };

  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isSelectedDate = (day: number | null): boolean => {
    if (!day || !selectedDate) return false;
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear();
  };

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{label}</h2>
      
   
      <div 
        className="relative cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={selectedDate ? formatDate(selectedDate) : ''}
          placeholder={placeholder}
          readOnly
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-05 focus:border-primary-05 cursor-pointer"
        />
        <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

    
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
    
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigateMonth(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              type="button"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <h3 className="text-lg font-semibold text-gray-900">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            
            <button
              onClick={() => navigateMonth(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              type="button"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

       
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekdays.map((day: string) => (
              <div key={day} className="text-center py-2 text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>

     
          <div className="grid grid-cols-7 gap-1">
            {getDaysInMonth(currentDate).map((day: number | null, index: number) => (
              <button
                key={index}
                onClick={() => selectDate(day)}
                disabled={!day}
                type="button"
                className={`
                  h-10 w-10 rounded-lg text-sm font-medium transition-colors
                  ${!day ? 'invisible' : ''}
                  ${isSelectedDate(day) 
                    ? 'bg-primary-02 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                  ${day ? 'cursor-pointer' : ''}
                `}
              >
                {day}
              </button>
            ))}
          </div>

      
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-primary-02 text-white rounded-lg hover:bg-primary-04 transition-colors font-medium"
              type="button"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


const DatePickerExample: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateSelect = (date: Date): void => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto">
        <DatePicker
          onDateSelect={handleDateSelect}
          selectedDate={selectedDate}
          placeholder="End Date"
          label="Select End Date"
        />
      </div>
    </div>
  );
};

export default DatePickerExample;