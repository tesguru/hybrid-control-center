import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface FlaggedAccountData {
  id: string;
  accountNumber: string;
  accountName: string;
  accountType: 'Personal' | 'Business' | 'Corporate';
  flagReason: 'Suspicious Activity' | 'AML Alert' | 'KYC Expired' | 'High Risk' | 'Unusual Transactions';
  flagDate: string;
  flagLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  currentBalance: string;
  flaggedAmount: string;
  lastTransactionDate: string;
  flaggedBy: string;
  reviewStatus: 'Pending' | 'Under Review' | 'Resolved' | 'Escalated';
  daysFlagged: number;
}

export const FlaggedTransactionTable: React.FC = () => {
  const flaggedAccountsData: FlaggedAccountData[] = [
    {
      id: '1',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      accountType: 'Personal',
      flagReason: 'Unusual Transactions',
      flagDate: '2025-07-10',
      flagLevel: 'High',
      currentBalance: '₦2,500,000',
      flaggedAmount: '₦8,750,000',
      lastTransactionDate: '2025-07-09',
      flaggedBy: 'AML System',
      reviewStatus: 'Under Review',
      daysFlagged: 8
    },
    {
      id: '2',
      accountNumber: 'CORP654321',
      accountName: 'Tech Solutions Ltd',
      accountType: 'Corporate',
      flagReason: 'AML Alert',
      flagDate: '2025-07-05',
      flagLevel: 'Critical',
      currentBalance: '₦15,200,000',
      flaggedAmount: '₦32,500,000',
      lastTransactionDate: '2025-07-04',
      flaggedBy: 'Compliance Officer',
      reviewStatus: 'Escalated',
      daysFlagged: 13
    },
    {
      id: '3',
      accountNumber: '1122334455',
      accountName: 'Quick Cash Enterprises',
      accountType: 'Business',
      flagReason: 'Suspicious Activity',
      flagDate: '2025-06-28',
      flagLevel: 'Medium',
      currentBalance: '₦3,750,000',
      flaggedAmount: '₦12,300,000',
      lastTransactionDate: '2025-06-27',
      flaggedBy: 'Transaction Monitoring',
      reviewStatus: 'Pending',
      daysFlagged: 20
    },
  ];

  const columns: Column<FlaggedAccountData>[] = [
    {
      key: 'accountNumber',
      label: 'Account Number',
      sortable: true
    },
    {
      key: 'accountName',
      label: 'Account Name',
      sortable: true
    },
    {
      key: 'accountType',
      label: 'Account Type',
      sortable: true
    },
    {
      key: 'flagReason',
      label: 'Flag Reason',
      sortable: true,
      render: (reason) => <span className="font-medium">{reason}</span>
    },
    {
      key: 'flagLevel',
      label: 'Risk Level',
      sortable: true,
      render: (level) => {
        let color = '';
        switch(level) {
          case 'Low': color = 'text-green-500'; break;
          case 'Medium': color = 'text-yellow-500'; break;
          case 'High': color = 'text-orange-500'; break;
          case 'Critical': color = 'text-red-500'; break;
        }
        return <span className={`font-bold ${color}`}>{level}</span>;
      }
    },
    {
      key: 'currentBalance',
      label: 'Current Balance',
      sortable: true
    },
    {
      key: 'flaggedAmount',
      label: 'Flagged Amount',
      sortable: true,
      render: (amount) => <span className="text-red-500 font-medium">{amount}</span>
    },
    {
      key: 'reviewStatus',
      label: 'Review Status',
      sortable: true,
      render: (status) => {
        let color = '';
        switch(status) {
          case 'Pending': color = 'text-yellow-500'; break;
          case 'Under Review': color = 'text-blue-500'; break;
          case 'Resolved': color = 'text-green-500'; break;
          case 'Escalated': color = 'text-purple-500'; break;
        }
        return <span className={`font-medium ${color}`}>{status}</span>;
      }
    },
    {
      key: 'daysFlagged',
      label: 'Days Flagged',
      sortable: true,
      render: (days: string | number) => {
        const numDays = typeof days === 'string' ? parseInt(days, 10) : days;
        let color = numDays > 14 ? 'text-red-500' : numDays > 7 ? 'text-orange-500' : 'text-yellow-500';
        return <span className={color}>{numDays} days</span>;
      }
    },
    {
      key: 'flaggedBy',
      label: 'Flagged By',
      sortable: true
    },
    {
      key: 'lastTransactionDate',
      label: 'Last Transaction',
      sortable: true
    },
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={flaggedAccountsData} 
          columns={columns}
          emptyStateText="No Flagged Accounts Found"
          emptyStateButtonText="Run New Scan"
          // onEmptyStateAction={() => router.push('/compliance/scan')}
        />
      </div>
    </div>
  );
};

export default FlaggedTransactionTable;