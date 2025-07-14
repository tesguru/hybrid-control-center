import { Column, ReusableTable, TableData } from "@/components/ui/Tables/datatable";
import { ExportReusableTable } from "@/components/ui/Tables/exporttable";


export const TransactionTable: React.FC = () => {
  const sampleData: TableData[] = [
    {
      id: '1',
      batchId: '98765510',
      uploadedBy: 'Seyi Onibudo',
      dateUploaded: '08-09-2022',
      transactionCount: 1,
      transactionTotal: 'N 800,000.00'
    },
    {
      id: '2',
      batchId: '98765510',
      uploadedBy: 'Sholanke Ada',
      dateUploaded: '08-09-2022',
      transactionCount: 2,
      transactionTotal: 'N 5,80.00'
    },
    {
      id: '3',
      batchId: '98765510',
      uploadedBy: 'Muiz lagba',
      dateUploaded: '08-09-2022',
      transactionCount: 3,
      transactionTotal: 'N 30,000.00'
    },
    {
      id: '4',
      batchId: '98765510',
      uploadedBy: 'Murithado oni',
      dateUploaded: '08-09-2022',
      transactionCount: 4,
      transactionTotal: 'N 45,000.00'
    },
    {
      id: '5',
      batchId: '98765510',
      uploadedBy: 'Dunsin Oni',
      dateUploaded: '08-09-2022',
      transactionCount: 5,
      transactionTotal: 'N 6,300.00'
    }
  ];

  const columns: Column[] = [
    {
      key: 'action',
      label: '',
      render: (value, row) => (
        <button
          onClick={() => handleRowAction('view', row)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View
        </button>
      )
    },
    {
      key: 'batchId',
      label: 'Batch ID',
      sortable: true
    },
    {
      key: 'uploadedBy',
      label: 'Uploaded By',
      sortable: true
    },
    {
      key: 'dateUploaded',
      label: 'Date Uploaded',
      sortable: true
    },
    {
      key: 'transactionCount',
      label: 'Transaction Count',
      sortable: true
    },
    {
      key: 'transactionTotal',
      label: 'Transaction Total',
      sortable: true
    }
  ];

  const handleRowAction = (action: string, row: TableData) => {
    console.log(`Action: ${action}`, row);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <ExportReusableTable
          data={sampleData}
          columns={columns}
          showFilter={true}
          showSearch={true}
          filterOptions={['Date', 'Status', 'User']}
          onRowAction={handleRowAction}
        />
      </div>
    </div>
  );
};

export default TransactionTable;