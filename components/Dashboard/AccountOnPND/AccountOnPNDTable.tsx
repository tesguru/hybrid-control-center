import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface PNDAccountData {
  id: string;
  accountNumber: string;
  accountName: string;
  accountType: 'Savings' | 'Current' | 'Corporate';
  pndStatus: 'Active' | 'Lifted' | 'Expired';
  pndReason: 'Court Order' | 'Fraud Investigation' | 'Regulatory Directive' | 'Bank Decision';
  pndStartDate: string;
  pndEndDate: string;
  balanceAtRestriction: string;
  currentBalance: string;
  initiatedBy: string;
  lastReviewDate: string;
  nextReviewDate: string;
}

export const AccountOnPNDTable: React.FC = () => {
  const pndAccountsData: PNDAccountData[] = [
    {
      id: '1',
      accountNumber: '1234567890',
      accountName: 'John Doe',
      accountType: 'Savings',
      pndStatus: 'Active',
      pndReason: 'Fraud Investigation',
      pndStartDate: '2025-06-15',
      pndEndDate: '2025-09-15',
      balanceAtRestriction: '₦250,000',
      currentBalance: '₦250,000',
      initiatedBy: 'Compliance Dept',
      lastReviewDate: '2025-07-01',
      nextReviewDate: '2025-08-01'
    },
    {
      id: '2',
      accountNumber: '0987654321',
      accountName: 'Acme Corporation',
      accountType: 'Corporate',
      pndStatus: 'Active',
      pndReason: 'Court Order',
      pndStartDate: '2025-05-20',
      pndEndDate: '2025-11-20',
      balanceAtRestriction: '₦5,250,000',
      currentBalance: '₦5,250,000',
      initiatedBy: 'Legal Dept',
      lastReviewDate: '2025-06-20',
      nextReviewDate: '2025-07-20'
    },
    {
      id: '3',
      accountNumber: '1122334455',
      accountName: 'Jane Smith',
      accountType: 'Current',
      pndStatus: 'Lifted',
      pndReason: 'Bank Decision',
      pndStartDate: '2025-04-10',
      pndEndDate: '2025-05-10',
      balanceAtRestriction: '₦1,200,000',
      currentBalance: '₦950,000',
      initiatedBy: 'Risk Management',
      lastReviewDate: '2025-05-05',
      nextReviewDate: 'N/A'
    },
  ];

  const columns: Column<PNDAccountData>[] = [
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
      key: 'pndStatus',
      label: 'PND Status',
      sortable: true,
      render: (status) => {
        let color = '';
        switch(status) {
          case 'Active': color = 'text-red-500'; break;
          case 'Lifted': color = 'text-green-500'; break;
          case 'Expired': color = 'text-yellow-500'; break;
        }
        return <span className={`font-medium ${color}`}>{status}</span>;
      }
    },
    {
      key: 'pndReason',
      label: 'Restriction Reason',
      sortable: true
    },
    {
      key: 'pndStartDate',
      label: 'Start Date',
      sortable: true
    },
    {
      key: 'pndEndDate',
      label: 'End Date',
      sortable: true
    },
    {
      key: 'balanceAtRestriction',
      label: 'Balance at Restriction',
      sortable: true
    },
    {
      key: 'currentBalance',
      label: 'Current Balance',
      sortable: true
    },
    {
      key: 'initiatedBy',
      label: 'Initiated By',
      sortable: true
    },
    {
      key: 'lastReviewDate',
      label: 'Last Review',
      sortable: true
    },
    {
      key: 'nextReviewDate',
      label: 'Next Review',
      sortable: true
    }
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={pndAccountsData} 
          columns={columns}
          emptyStateText="No Accounts on PND Restriction"
          emptyStateButtonText="Add New Restriction"
          // onEmptyStateAction={() => router.push('/pnd/add-restriction')}
        />
      </div>
    </div>
  );
};

export default AccountOnPNDTable;