
import { ReusableNormalTable, Column, TableData } from "@/components/ui/Tables/normaltable";


export const InvestmentAccountTable: React.FC = () => {
  const sampleData: TableData[] = [
   {
      id: '1',
      accountnumber: '02345679900',
      maturitydate: '20/09/2022',
      maturityamount: 'N2,500,000',
      interestrate: '15%',
      principalamount: 'N 200,000.00',
      tenor: '3 years'
    },
    {
      id: '2',
      accountnumber: '02345678900',
      maturitydate: '20/09/2022',
      maturityamount: 'N2,500,000',
      interestrate: '15%',
      principalamount: 'N 400,000.00',
      tenor: '3 years'
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
      key: 'accountnumber',
      label: 'Account Number',
    
    },
    {
      key: 'maturitydate',
      label: 'Maturity Date',
    
    },
    {
      key: 'maturityamount',
      label: 'Maturity Amount',
    
    },
    {
      key: 'interestrate',
      label: 'Interest Rate',
     
    },
    {
      key: 'principalamount',
      label: 'Principal Amount',
    
    },
    {
      key: 'tenor',
      label: 'Tenor',
    
    }
  ];

  // const handleRowAction = (action: string, row: TableData) => {
  //   console.log(`Action: ${action}`, row);
  // };

  return (
    <div className="py-4 ">
       <div className=" py-4 border-gray-900 font-bold">
        <p>Investment Account(s)</p>
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

export default InvestmentAccountTable;