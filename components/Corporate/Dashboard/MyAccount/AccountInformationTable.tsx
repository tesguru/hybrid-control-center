
import { ReusableNormalTable, Column, TableData } from "@/components/ui/Tables/normaltable";


export const AccountInformationTable: React.FC = () => {
  const sampleData: TableData[] = [
   {
      id: '1',
      accountname: 'Olasupo Tunde Clinton',
      accountnumber: '023456789',
      accounttype: 'Current Account',
      currency: 'NGN',
      accountbalance: 'N 200,000.00',
      accountstatus: 'Active'
    },
    {
      id: '2',
      accountname: 'Olasupo Tunde Clinton',
      accountnumber: '023456789',
      accounttype: 'Current Account',
      currency: 'NGN',
      accountbalance: 'N 500,000.00',
      accountstatus: 'Active'
    }
   
  ];

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

  // const handleRowAction = (action: string, row: TableData) => {
  //   console.log(`Action: ${action}`, row);
  // };

  return (
    <div className="pt-2 ">
      <div className="border-b py-4 border-gray-300 font-bold">
        <p>View Account Information</p>
      </div>
       <div className=" py-4 border-gray-900 font-bold">
        <p>Current Account(s)</p>
      </div>
      <div className="">
        <ReusableNormalTable
          data={sampleData}
          columns={columns}
          // onRowAction={handleRowAction}
        />
      </div>
    </div>
  );
};

export default AccountInformationTable;