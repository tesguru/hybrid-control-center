
import { ReusableTable, Column } from "@/components/ui/Tables/datatable";
import { URLS } from "@/lib/constants/url";
import { useRouter } from "next/navigation";



export const TransactionHistoryTable: React.FC = () => {
//  const BeneficiariesData: TableData[] = []


  const columns: Column[] = [
    // {
    //   key: 'action',
    //   label: '',
    //   render: (value, row) => (
    //     <button
    //       onClick={() => handleRowAction('view', row)}
    //       className="text-blue-600 hover:text-blue-800 text-sm font-medium"
    //     >
    //       View
    //     </button>
    //   )
    // },
    {
      key: 'accountname',
      label: 'Account Name',
    
    },
    {
      key: 'accountnumber',
      label: 'Account Number',
    
    },
    {
      key: 'accounttype',
      label: 'Account Type',
    
    },
    {
      key: 'currency',
      label: 'Currency',
     
    },
    {
      key: 'accountbalance',
      label: 'Account Balance',
    
    },
    {
      key: 'accountstatus',
      label: 'Account Status',
    
    }
  ];

  const router = useRouter();
  // const handleRowAction = (action: string, row: TableData) => {
  //   console.log(`Action: ${action}`, row);
  // };

  return (
    <div className="pt-2 ">
     
       <div className=" py-4 mb-4 border-b border-gray-200  font-bold">
        <p>View Transaction History</p>
      </div>
      <div className="">
        <ReusableTable
        data={[]} 
     columns={columns}
       emptyStateText="No Transaction History"
      emptyStateButtonText="Make Transfer"
      onEmptyStateAction={() => router.push(URLS.DASHBOARD.PERSONAL.TRANSFERTOOTHERBANKS)}
/>
      </div>x
    </div>
  );
};

export default TransactionHistoryTable;