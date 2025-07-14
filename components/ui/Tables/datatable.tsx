import React, { useState } from 'react';
import { Filter, Search, ChevronDown } from 'lucide-react';

// Sample data type
export interface TableData {
  id: string;
  batchId: string;
  uploadedBy: string;
  dateUploaded: string;
  transactionCount: number;
  transactionTotal: string;
}

export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: TableData) => React.ReactNode;
}

interface ReusableTableProps {
  data: TableData[];
  columns: Column[];
  showFilter?: boolean;
  showSearch?: boolean;
  filterOptions?: string[];
  onRowAction?: (action: string, row: TableData) => void;
  className?: string;
}

 export const ReusableTable: React.FC<ReusableTableProps> = ({
  data,
  columns,
  showFilter = true,
  showSearch = true,
  filterOptions = ['Date', 'Status', 'User'],
  onRowAction,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Date');
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);

  // Filter and search logic
  const filteredData = data.filter(row => {
    if (!searchTerm) return true;
    return Object.values(row).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Sort logic
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof TableData];
      const bValue = b[sortConfig.key as keyof TableData];
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleRowAction = (action: string, row: TableData) => {
    if (onRowAction) {
      onRowAction(action, row);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
     
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showFilter && (
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter By:</span>
                <div className="relative">
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-md px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {filterOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            )}
          </div>
          
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          )}
        </div>
      </div>

    
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.sortable ? 'cursor-pointer hover:bg-gray-200' : ''
                  }`}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-1">
                    {column.label}
                    {column.sortable && sortConfig?.key === column.key && (
                      <span className="text-gray-400">
                        {sortConfig.direction === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((row, index) => (
              <tr key={row.id || index} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.render 
                      ? column.render(row[column.key as keyof TableData], row)
                      : row[column.key as keyof TableData]
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {sortedData.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">No data found</p>
        </div>
      )}
    </div>
  );
};