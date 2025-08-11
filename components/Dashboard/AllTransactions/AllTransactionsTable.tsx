import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface TransactionData {
  id: string;
  transactionId: string;
  date: string;
  accountNumber: string;
  accountName: string;
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer' | 'Payment' | 'Fee' | 'Interest';
  amount: string;
  balanceAfter: string;
  counterparty: string;
  reference: string;
  status: 'Completed' | 'Pending' | 'Failed';
  channel: 'Mobile' | 'Web' | 'Branch' | 'ATM' | 'Direct Debit';
  category: 'Salary' | 'Shopping' | 'Bills' | 'Food' | 'Transport' | 'Entertainment' |'Cash';
}

export const AllTransactionTable: React.FC = () => {
  const transactionsData: TransactionData[] = [
    {
      id: '1',
      transactionId: 'TX-2023-0789',
      date: '2025-07-18 09:45:23',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Deposit',
      amount: '₦250,000',
      balanceAfter: '₦350,000',
      counterparty: 'Macrotel Ltd',
      reference: 'Salary July',
      status: 'Completed',
      channel: 'Direct Debit',
      category: 'Salary'
    },
    {
      id: '2',
      transactionId: 'TX-2023-0790',
      date: '2025-07-18 11:20:15',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Payment',
      amount: '₦45,000',
      balanceAfter: '₦305,000',
      counterparty: 'IKEDC',
      reference: 'Electricity Bill',
      status: 'Pending',
      channel: 'Web',
      category: 'Bills'
    },
    {
      id: '3',
      transactionId: 'TX-2023-0791',
      date: '2025-07-17 14:30:45',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Withdrawal',
      amount: '₦12,500',
      balanceAfter: '₦292,500',
      counterparty: 'ATM 123456',
      reference: 'Cash Withdrawal',
      status: 'Completed',
      channel: 'ATM',
      category: 'Cash'
    },
    {
      id: '4',
      transactionId: 'TX-2023-0792',
      date: '2025-07-17 16:15:22',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Transfer',
      amount: '₦50,000',
      balanceAfter: '₦242,500',
      counterparty: 'Jane Smith',
      reference: 'Family Support',
      status: 'Completed',
      channel: 'Mobile',
      category: 'Cash'
    },
  ];

  const columns: Column<TransactionData>[] = [
    {
      key: 'date',
      label: 'Date/Time',
      sortable: true,
      render: (date) => <span className="whitespace-nowrap">{date}</span>
    },
    {
      key: 'transactionType',
      label: 'Type',
      sortable: true,
      render: (type) => {
        let color = '';
        switch(type) {
          case 'Deposit': 
          case 'Interest': 
            color = 'text-green-500'; break;
          case 'Withdrawal': 
          case 'Payment': 
          case 'Fee': 
            color = 'text-red-500'; break;
          case 'Transfer':
            color = 'text-blue-500'; break;
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
      key: 'category',
      label: 'Category',
      sortable: true,
      render: (category) => {
        let bgColor = '';
        switch(category) {
          case 'Salary': bgColor = 'bg-green-100 text-green-800'; break;
          case 'Bills': bgColor = 'bg-blue-100 text-blue-800'; break;
          case 'Shopping': bgColor = 'bg-purple-100 text-purple-800'; break;
          case 'Food': bgColor = 'bg-yellow-100 text-yellow-800'; break;
          default: bgColor = 'bg-gray-100 text-gray-800';
        }
        return <span className={`px-2 py-1 rounded-full text-xs ${bgColor}`}>{category}</span>;
      }
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
        }
        return <span className={`font-medium ${color}`}>{status}</span>;
      }
    },
    {
      key: 'channel',
      label: 'Channel',
      sortable: true
    },
    {
      key: 'reference',
      label: 'Reference',
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
          // showActions={false}
        />
      </div>
    </div>
  );
};

export default AllTransactionTable;