
import { ReusableNormalTable, Column, TableData } from "@/components/ui/Tables/normaltable";


export const AccountOfficerDetailsInfoTable: React.FC = () => {
  const sampleData: TableData[] = [
   {
      id: '1',
      name: 'Olasupo',
      emailaddress: 'olaogunteslim@gmail.com',
      mobilenumber: '08131654524',
      branch: 'Lagos'
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
      key: 'name',
      label: 'Name',
    
    },
    {
      key: 'mobilenumber',
      label: 'Mobile Number',
    
    },
    {
      key: 'emailaddress',
      label: 'Email',
    
    },
    {
      key: 'branch',
      label: 'Branch',
     
    }
  ];


  return (
    <div className="pt-2 ">
      <div className="border-b py-4 border-gray-300 font-bold">
        <p>Customer Profile</p>
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

export default AccountOfficerDetailsInfoTable;