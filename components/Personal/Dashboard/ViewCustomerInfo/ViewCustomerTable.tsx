
import { ReusableNormalTable, Column, TableData } from "@/components/ui/Tables/normaltable";


export const ViewCustomerTable: React.FC = () => {
  const sampleData: TableData[] = [
   {
      id: '1',
      firstname: 'Olasupo',
      lastname: 'Clinton',
      emailaddress: 'olaogunteslim@gmail.com',
      phonenumber: '08131654524',
      homeaddress: '32, Oni Street Ibadan'
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
      key: 'firstname',
      label: 'First Name',
    
    },
    {
      key: 'lastname',
      label: 'Last Name',
    
    },
    {
      key: 'emailaddress',
      label: 'Email Address',
    
    },
    {
      key: 'phonenumber',
      label: 'Phone Number',
     
    },
    {
      key: 'homeaddress',
      label: 'Home Address',
    
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

export default ViewCustomerTable;