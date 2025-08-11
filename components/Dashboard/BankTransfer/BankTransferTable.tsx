import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";

interface BankTransferData {
  id: string;
  reference: string;
  date: string;
  senderAccount: string;
  senderName: string;
  recipientAccount: string;
  recipientName: string;
  amount: string;
  fee: string;
  status: 'Pending' | 'Completed' | 'Failed' | 'Reversed';
  transferType: 'Internal' | 'Interbank' | 'International';
  initiationChannel: 'Mobile' | 'Web' | 'Branch' | 'API';
  purpose: string;
}

export const BankTransferTable: React.FC = () => {
  const transferData: BankTransferData[] = [
    {
      id: '1',
      reference: 'TF-2023-0789',
      date: '2025-07-18 14:30:45',
      senderAccount: '1234567890',
      senderName: 'John Doe',
      recipientAccount: '9876543210',
      recipientName: 'Jane Smith',
      amount: '₦250,000',
      fee: '₦50',
      status: 'Completed',
      transferType: 'Internal',
      initiationChannel: 'Mobile',
      purpose: 'Family Support'
    },
    {
      id: '2',
      reference: 'TF-2023-0790',
      date: '2025-07-18 16:15:22',
      senderAccount: '1234567890',
      senderName: 'John Doe',
      recipientAccount: '1122334455',
      recipientName: 'Acme Corporation',
      amount: '₦500,000',
      fee: '₦100',
      status: 'Pending',
      transferType: 'Interbank',
      initiationChannel: 'Web',
      purpose: 'Invoice Payment'
    },
    {
      id: '3',
      reference: 'TF-2023-0791',
      date: '2025-07-17 09:05:18',
      senderAccount: '1234567890',
      senderName: 'John Doe',
      recipientAccount: 'US123456789',
      recipientName: 'Global Services Inc',
      amount: '$1,000',
      fee: '₦2,500',
      status: 'Completed',
      transferType: 'International',
      initiationChannel: 'Branch',
      purpose: 'Service Payment'
    },
  ];

  const columns: Column<BankTransferData>[] = [
    {
      key: 'reference',
      label: 'Reference',
      sortable: true
    },
    {
      key: 'date',
      label: 'Date/Time',
      sortable: true,
      render: (date) => <span className="whitespace-nowrap">{date}</span>
    },
    {
      key: 'senderName',
      label: 'Sender',
      sortable: true,
      render: (name, row) => (
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-500">{row.senderAccount}</div>
        </div>
      )
    },
    {
      key: 'recipientName',
      label: 'Recipient',
      sortable: true,
      render: (name, row) => (
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-gray-500">{row.recipientAccount}</div>
        </div>
      )
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      render: (amount) => <span className="font-bold">{amount}</span>
    },
    {
      key: 'fee',
      label: 'Fee',
      sortable: true
    },
    {
      key: 'transferType',
      label: 'Type',
      sortable: true,
      render: (type) => {
        let color = '';
        switch(type) {
          case 'Internal': color = 'text-green-500'; break;
          case 'Interbank': color = 'text-blue-500'; break;
          case 'International': color = 'text-purple-500'; break;
        }
        return <span className={`font-medium ${color}`}>{type}</span>;
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
          case 'Reversed': color = 'text-orange-500'; break;
        }
        return <span className={`font-medium ${color}`}>{status}</span>;
      }
    },
    {
      key: 'initiationChannel',
      label: 'Channel',
      sortable: true
    },
    {
      key: 'purpose',
      label: 'Purpose',
      sortable: true
    }
  ];

  return (
    <div className="pt-2">
      <div className="">
        <ExportReusableTable
          data={transferData} 
          columns={columns}
          emptyStateText="No Transfers Found"
          emptyStateButtonText="New Transfer"
          // showActions={false}
        />
      </div>
    </div>
  );
};

export default BankTransferTable;