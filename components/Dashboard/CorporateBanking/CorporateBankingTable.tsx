import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";


interface CorporateCustomerData {
  id: string;
  companyName: string;
  registrationNumber: string;
  industry: string;
  contactPerson: string;
  accountNumber: string;
  accountType: 'Business' | 'Corporate' | 'Enterprise';
  accountStatus: 'Active' | 'Dormant' | 'Closed' | 'Restricted';
  balance: string;
  creditLimit: string;
  lastActivity: string;
  email: string;
  phone: string;
  companySize: 'Small' | 'Medium' | 'Large';
}

export const CorporateBankingDetailsTable: React.FC = () => {
  // const router = useRouter();
  
  const corporateCustomersData: CorporateCustomerData[] = [
    {
      id: '1',
      companyName: 'Acme Corporation',
      registrationNumber: 'RC123456',
      industry: 'Manufacturing',
      contactPerson: 'John Smith',
      accountNumber: 'CORP123456',
      accountType: 'Corporate',
      accountStatus: 'Active',
      balance: '₦5,250,000',
      creditLimit: '₦10,000,000',
      lastActivity: '2025-07-18',
      email: 'accounts@acme.com',
      phone: '08012345678',
      companySize: 'Large'
    },
    {
      id: '2',
      companyName: 'Tech Solutions Ltd',
      registrationNumber: 'RC654321',
      industry: 'Technology',
      contactPerson: 'Sarah Johnson',
      accountNumber: 'CORP654321',
      accountType: 'Enterprise',
      accountStatus: 'Active',
      balance: '₦8,750,000',
      creditLimit: '₦15,000,000',
      lastActivity: '2025-07-15',
      email: 'finance@techsolutions.com',
      phone: '08087654321',
      companySize: 'Medium'
    },
    {
      id: '3',
      companyName: 'Green Energy Co',
      registrationNumber: 'RC112233',
      industry: 'Energy',
      contactPerson: 'Michael Brown',
      accountNumber: 'CORP112233',
      accountType: 'Business',
      accountStatus: 'Restricted',
      balance: '₦1,200,000',
      creditLimit: '₦2,500,000',
      lastActivity: '2024-11-30',
      email: 'm.brown@greenenergy.com',
      phone: '08011223344',
      companySize: 'Small'
    },
  ];

  const columns: Column<CorporateCustomerData>[] = [
    {
      key: 'companyName',
      label: 'Company Name',
      sortable: true
    },
    {
      key: 'registrationNumber',
      label: 'Reg. Number',
      sortable: true
    },
    {
      key: 'industry',
      label: 'Industry',
      sortable: true
    },
    {
      key: 'contactPerson',
      label: 'Contact Person',
      sortable: true
    },
    {
      key: 'accountNumber',
      label: 'Account Number',
      sortable: false
    },
    {
      key: 'accountType',
      label: 'Account Type',
      sortable: true
    },
    {
      key: 'accountStatus',
      label: 'Status',
      sortable: true,
      render: (status) => {
        let color = '';
        switch(status) {
          case 'Active': color = 'text-green-500'; break;
          case 'Dormant': color = 'text-yellow-500'; break;
          case 'Closed': color = 'text-red-500'; break;
          case 'Restricted': color = 'text-orange-500'; break;
        }
        return <span className={color}>{status}</span>;
      }
    },
    {
      key: 'balance',
      label: 'Balance',
      sortable: true
    },
    {
      key: 'creditLimit',
      label: 'Credit Limit',
      sortable: true
    },
    {
      key: 'companySize',
      label: 'Company Size',
      sortable: true
    },
    {
      key: 'lastActivity',
      label: 'Last Activity',
      sortable: true
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true
    },
    {
      key: 'phone',
      label: 'Phone',
      sortable: false
    }
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={corporateCustomersData} 
          columns={columns}
          emptyStateText="No Corporate Customer Records Found"
          emptyStateButtonText="Add New Corporate Customer"
          // onEmptyStateAction={() => router.push(URLS.DASHBOARD.CORPORATE.ADD_CUSTOMER)}
        />
      </div>
    </div>
  );
};

export default CorporateBankingDetailsTable;