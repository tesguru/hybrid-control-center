import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface PersonalTransactionData {
  id: string;
  transactionId: string;
  date: string;
  accountNumber: string;
  accountName: string;
  transactionType: 'Deposit' | 'Withdrawal' | 'Transfer' | 'Bill Payment' | 'Card Transaction';
  amount: string;
  balanceAfter: string;
  beneficiary: string;
  reference: string;
  status: 'Completed' | 'Pending' | 'Failed';
  channel: 'Mobile App' | 'ATM' | 'Branch' | 'Web';
  category: 'Shopping' | 'Utilities' | 'Savings' | 'Salary' | 'Other';
}

export const PersonalBankingTransactionsTable: React.FC = () => {
  const transactionsData: PersonalTransactionData[] = [
    {
      id: '1',
      transactionId: 'TX-2023-0789',
      date: '2025-07-18 14:30:45',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Transfer',
      amount: '₦250,000',
      balanceAfter: '₦350,000',
      beneficiary: 'Self',
      reference: 'July Salary',
      status: 'Completed',
      channel: 'Mobile App',
      category: 'Salary'
    },
    {
      id: '2',
      transactionId: 'TX-2023-0790',
      date: '2025-07-18 16:15:22',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Bill Payment',
      amount: '₦45,000',
      balanceAfter: '₦305,000',
      beneficiary: 'IKEDC',
      reference: 'Electricity Bill',
      status: 'Pending',
      channel: 'Web',
      category: 'Utilities'
    },
    {
      id: '3',
      transactionId: 'TX-2023-0791',
      date: '2025-07-17 09:05:18',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      transactionType: 'Card Transaction',
      amount: '₦12,500',
      balanceAfter: '₦292,500',
      beneficiary: 'Amazon NG',
      reference: 'Online Shopping',
      status: 'Completed',
      channel: 'Web',
      category: 'Shopping'
    },
  ];

  const columns: Column<PersonalTransactionData>[] = [
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
          case 'Salary': 
            color = 'text-green-500'; break;
          case 'Withdrawal': 
          case 'Bill Payment': 
          case 'Card Transaction': 
            color = 'text-red-500'; break;
          default: color = 'text-blue-500';
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
      key: 'beneficiary',
      label: 'Beneficiary',
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
          case 'Utilities': bgColor = 'bg-blue-100 text-blue-800'; break;
          case 'Shopping': bgColor = 'bg-purple-100 text-purple-800'; break;
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

export default PersonalBankingTransactionsTable;