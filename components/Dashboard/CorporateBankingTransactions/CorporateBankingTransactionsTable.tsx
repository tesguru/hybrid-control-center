import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface CorporateTransactionData {
  id: string;
  transactionId: string;
  date: string;
  accountNumber: string;
  accountName: string;
  transactionType: 'Credit' | 'Debit' | 'Transfer' | 'FX' | 'Payment';
  amount: string;
  balanceAfter: string;
  counterparty: string;
  reference: string;
  status: 'Completed' | 'Pending' | 'Failed' | 'Reversed' | 'Hold';
  channel: 'Online' | 'Mobile' | 'Branch' | 'API';
  initiatedBy: string;
  approvalStatus: 'Approved' | 'Pending Approval' | 'Rejected';
}

export const CorporateBankingTransactionsTable: React.FC = () => {
  const transactionsData: CorporateTransactionData[] = [
    {
      id: '1',
      transactionId: 'TX-2023-0567',
      date: '2025-07-18 09:45:23',
      accountNumber: 'CORP123456',
      accountName: 'Acme Corporation',
      transactionType: 'Credit',
      amount: '₦15,250,000',
      balanceAfter: '₦45,750,000',
      counterparty: 'Macrotel Ltd',
      reference: 'INV-7890 Payment',
      status: 'Completed',
      channel: 'API',
      initiatedBy: 'System Auto',
      approvalStatus: 'Approved'
    },
    {
      id: '2',
      transactionId: 'TX-2023-0568',
      date: '2025-07-18 11:20:15',
      accountNumber: 'CORP654321',
      accountName: 'Tech Solutions Ltd',
      transactionType: 'Transfer',
      amount: '₦8,500,000',
      balanceAfter: '₦22,300,000',
      counterparty: 'Green Energy Co',
      reference: 'Monthly Subscription',
      status: 'Pending',
      channel: 'Online',
      initiatedBy: 'Sarah Johnson',
      approvalStatus: 'Pending Approval'
    },
    {
      id: '3',
      transactionId: 'TX-2023-0569',
      date: '2025-07-17 14:30:45',
      accountNumber: 'CORP112233',
      accountName: 'Quick Cash Enterprises',
      transactionType: 'FX',
      amount: '$50,000',
      balanceAfter: '₦3,750,000',
      counterparty: 'Global Forex',
      reference: 'USD Purchase',
      status: 'Completed',
      channel: 'Mobile',
      initiatedBy: 'Michael Brown',
      approvalStatus: 'Approved'
    },
  ];

  const columns: Column<CorporateTransactionData>[] = [
    {
      key: 'date',
      label: 'Date/Time',
      sortable: true,
      render: (date) => <span className="whitespace-nowrap">{date}</span>
    },
    {
      key: 'accountNumber',
      label: 'Account No.',
      sortable: true
    },
    {
      key: 'accountName',
      label: 'Account Name',
      sortable: true
    },
    {
      key: 'transactionType',
      label: 'Type',
      sortable: true,
      render: (type) => {
        let color = '';
        switch(type) {
          case 'Credit': color = 'text-green-500'; break;
          case 'Debit': color = 'text-red-500'; break;
          case 'Transfer': color = 'text-blue-500'; break;
          default: color = 'text-gray-600';
        }
        return <span className={`font-medium ${color}`}>{type}</span>;
      }
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (amount) => <span className="font-bold">{amount}</span>
    },
    {
      key: 'balanceAfter',
      label: 'Balance',
      sortable: true
    },
    {
      key: 'counterparty',
      label: 'Counterparty',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (status) => {
        let color = '';
        switch(status) {
          case 'Completed': color = 'text-green-500'; break;
          case 'Pending': color = 'text-yellow-500'; break;
          case 'Failed': color = 'text-red-500'; break;
          case 'Reversed': color = 'text-orange-500'; break;
          case 'Hold': color = 'text-purple-500'; break;
        }
        return <span className={`font-medium ${color}`}>{status}</span>;
      }
    },
    {
      key: 'approvalStatus',
      label: 'Approval',
      sortable: true,
      render: (status) => {
        let color = '';
        switch(status) {
          case 'Approved': color = 'bg-green-100 text-green-800'; break;
          case 'Pending Approval': color = 'bg-yellow-100 text-yellow-800'; break;
          case 'Rejected': color = 'bg-red-100 text-red-800'; break;
        }
        return <span className={`px-2 py-1 rounded-full text-xs ${color}`}>{status}</span>;
      }
    },
    {
      key: 'channel',
      label: 'Channel',
      sortable: true
    }
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={transactionsData} 
          columns={columns}
          emptyStateText="No Transactions Found"
          // showActions={false} // Disabled actions
        />
      </div>
    </div>
  );
};

export default CorporateBankingTransactionsTable;