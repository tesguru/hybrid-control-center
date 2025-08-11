import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";


interface CustomerData {
  id: string;
  name: string;
  age: number;
  accountNumber: string;
  accountType: string;
  accountStatus: 'Active' | 'Dormant' | 'Closed';
  balance: string;
  lastActivity: string;
  email: string;
  phone: string;
}

export const PersonalBankingDetailsTable: React.FC = () => {
  // const router = useRouter();
  
  const customersData: CustomerData[] = [
    {
      id: '1',
      name: 'John Doe',
      age: 32,
      accountNumber: '1234567890',
      accountType: 'Savings',
      accountStatus: 'Active',
      balance: '₦250,000',
      lastActivity: '2025-07-15',
      email: 'john.doe@example.com',
      phone: '08012345678'
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 28,
      accountNumber: '0987654321',
      accountType: 'Current',
      accountStatus: 'Active',
      balance: '₦1,450,000',
      lastActivity: '2025-07-10',
      email: 'jane.smith@example.com',
      phone: '08087654321'
    },
    {
      id: '3',
      name: 'Michael Johnson',
      age: 45,
      accountNumber: '1122334455',
      accountType: 'Corporate',
      accountStatus: 'Dormant',
      balance: '₦5,000',
      lastActivity: '2024-12-01',
      email: 'michael.j@example.com',
      phone: '08011223344'
    },
  ];

  const columns: Column<CustomerData>[] = [
    {
      key: 'name',
      label: 'Customer Name',
      sortable: true
    },
    {
      key: 'age',
      label: 'Age',
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
      label: 'Phone Number',
      sortable: false
    }
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={customersData} 
          columns={columns}
          emptyStateText="No Customer Records Found"
          emptyStateButtonText="Add New Customer"
          // onEmptyStateAction={() => router.push(URLS.DASHBOARD.PERSONAL.ADD_CUSTOMER)}
        />
      </div>
    </div>
  );
};

export default PersonalBankingDetailsTable;