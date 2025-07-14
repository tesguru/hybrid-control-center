import React, { useState } from 'react';
import { Filter, Search, ChevronDown, Download, CheckCircle, X } from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

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
  showExport?: boolean;
  filterOptions?: string[];
  onRowAction?: (action: string, row: TableData) => void;
  className?: string;
}

export const ExportReusableTable: React.FC<ReusableTableProps> = ({
  data,
  columns,
  showFilter = true,
  showSearch = true,
  showExport = true,
  filterOptions = ['Date', 'Status', 'User'],
  onRowAction,
  className = ""
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Date');
  const [sortConfig, setSortConfig] = useState<{key: string, direction: 'asc' | 'desc'} | null>(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportStatus, setExportStatus] = useState<{
    show: boolean;
    type: 'pdf' | 'csv' | null;
    success: boolean;
  }>({ show: false, type: null, success: false });


  const filteredData = data.filter(row => {
    if (!searchTerm) return true;
    return Object.values(row).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });


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

  const handleExport = (type: 'pdf' | 'csv') => {
    try {
      if (type === 'csv') {
        // CSV Export
        const headers = columns.map(col => col.label);
        const dataRows = sortedData.map(row => 
          columns.map(col => row[col.key as keyof TableData])
        );
        
        const csvContent = [
          headers.join(','),
          ...dataRows.map(row => 
            row.map(cell => `"${cell}"`).join(',')
          )
        ].join('\n');
        
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'table-export.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setExportStatus({ show: true, type: 'csv', success: true });
      } else {
       
        const doc = new jsPDF();
        
        doc.text('Table Export', 14, 16);
        
        autoTable(doc, {
          head: [columns.map(col => col.label)],
          body: sortedData.map(row => 
            columns.map(col => row[col.key as keyof TableData])
          ),
          startY: 20,
          styles: {
            cellPadding: 4,
            fontSize: 8,
            valign: 'middle'
          },
          headStyles: {
            fillColor: [241, 243, 245],
            textColor: [55, 65, 81],
            fontStyle: 'bold'
          }
        });
        
        doc.save('table-export.pdf');
        setExportStatus({ show: true, type: 'pdf', success: true });
      }
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus({ show: true, type, success: false });
    } finally {
      setShowExportModal(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {/* Header with Filter and Search */}
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

      {/* Table */}
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
      
      {sortedData.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">No data found</p>
        </div>
      ) : showExport && (
        <div className="p-4 border-t border-gray-200 mt-20">
          <button
            onClick={() => setShowExportModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
          >
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      )}
      
      {showExportModal && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center  z-50">
          <div className="bg-white border-1 border-gray-400 rounded-lg p-6 w-96">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Export Data</h3>
            <p className="text-sm text-gray-500 mb-6">Choose the format you want to export the data in.</p>
            
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => handleExport('pdf')}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                PDF
              </button>
              <button
                onClick={() => handleExport('csv')}
                className="flex-1 py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                CSV
              </button>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {exportStatus.show && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {exportStatus.success ? 'Export Successful' : 'Export Failed'}
              </h3>
              <button
                onClick={() => setExportStatus({ show: false, type: null, success: false })}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              {exportStatus.success ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p className="text-sm text-gray-600">
                    {exportStatus.type?.toUpperCase()} file has been exported successfully.
                  </p>
                </>
              ) : (
                <>
                  <X className="h-5 w-5 text-red-500" />
                  <p className="text-sm text-gray-600">
                    Failed to export {exportStatus.type?.toUpperCase()} file. Please try again.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-20 flex justify-e">
              <button
                onClick={() => setExportStatus({ show: false, type: null, success: false })}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};