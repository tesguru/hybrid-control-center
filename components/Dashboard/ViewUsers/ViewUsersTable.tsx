import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface AdminUserData {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  role: 'Super Admin' | 'Admin' | 'Support' | 'Auditor';
  department: string;
  lastLogin: string;
  status: 'Active' | 'Suspended' | 'Pending' | 'Disabled';
  permissions: string[];
  dateCreated: string;
}

export const ViewUsersTable: React.FC = () => {
  const usersData: AdminUserData[] = [
    {
      id: '1',
      userId: 'ADM-001',
      fullName: 'John Smith',
      email: 'john.smith@bank.com',
      role: 'Super Admin',
      department: 'IT',
      lastLogin: '2025-07-18 09:45:23',
      status: 'Active',
      permissions: ['Full Access'],
      dateCreated: '2024-01-15'
    },
    {
      id: '2',
      userId: 'ADM-002',
      fullName: 'Sarah Johnson',
      email: 'sarah.j@bank.com',
      role: 'Admin',
      department: 'Operations',
      lastLogin: '2025-07-17 14:30:45',
      status: 'Active',
      permissions: ['User Management', 'Transaction Approval'],
      dateCreated: '2024-03-22'
    },
    {
      id: '3',
      userId: 'ADM-003',
      fullName: 'Michael Brown',
      email: 'michael.b@bank.com',
      role: 'Support',
      department: 'Customer Service',
      lastLogin: '2025-07-10 11:20:15',
      status: 'Pending',
      permissions: ['Ticket Management'],
      dateCreated: '2025-06-05'
    },
    {
      id: '4',
      userId: 'ADM-004',
      fullName: 'Emily Davis',
      email: 'emily.d@bank.com',
      role: 'Auditor',
      department: 'Compliance',
      lastLogin: '2025-06-28 16:15:22',
      status: 'Disabled',
      permissions: ['Audit Logs', 'Reports'],
      dateCreated: '2023-11-30'
    },
  ];

  const columns: Column<AdminUserData>[] = [
    {
      key: 'userId',
      label: 'User ID',
      sortable: true
    },
    {
      key: 'fullName',
      label: 'Full Name',
      sortable: true,
      render: (name) => <span className="font-medium">{name}</span>
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      render: (role) => {
        let color = '';
        switch(role) {
          case 'Super Admin': color = 'text-purple-600'; break;
          case 'Admin': color = 'text-blue-600'; break;
          case 'Support': color = 'text-green-600'; break;
          case 'Auditor': color = 'text-orange-600'; break;
        }
        return <span className={`font-medium ${color}`}>{role}</span>;
      }
    },
    {
      key: 'department',
      label: 'Department',
      sortable: true
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (status) => {
        let color = '';
        switch(status) {
          case 'Active': color = 'bg-green-100 text-green-800'; break;
          case 'Suspended': color = 'bg-yellow-100 text-yellow-800'; break;
          case 'Pending': color = 'bg-blue-100 text-blue-800'; break;
          case 'Disabled': color = 'bg-red-100 text-red-800'; break;
        }
        return <span className={`px-2 py-1 rounded-full text-xs ${color}`}>{status}</span>;
      }
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true,
      render: (date) => <span className="whitespace-nowrap">{date}</span>
    },
    {
      key: 'dateCreated',
      label: 'Date Created',
      sortable: true
    }
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={usersData} 
          columns={columns}
          emptyStateText="No Admin Users Found"
          // showActions={false}
        />
      </div>
    </div>
  );
};

export default ViewUsersTable;