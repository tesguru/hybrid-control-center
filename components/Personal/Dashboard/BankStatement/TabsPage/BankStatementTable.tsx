import { Column, ExportReusableTable } from "@/components/ui/Tables/exporttable";
import { URLS } from "@/lib/constants/url";
import { useRouter } from "next/navigation";

interface TableData {
  id: string; 
  date: string;
  description: string;
  beneficiary: string;
  debit: string;
  credit: string;
  balance: string;
}

export const BankStatementTable: React.FC = () => {
  const router = useRouter();
  
  const BeneficiariesData: TableData[] = [
    {
      id: '1', 
      date: '2025-07-01',
      description: 'ATM Withdrawal',
      beneficiary: 'Self',
      debit: '₦10,000',
      credit: '',
      balance: '₦90,000'
    },
    {
      id: '2',
      date: '2025-07-03',
      description: 'Salary Credit',
      beneficiary: 'Macrotel Ltd',
      debit: '',
      credit: '₦150,000',
      balance: '₦240,000'
    },
  ];

  const columns: Column<TableData>[] = [
    {
      key: 'date',
      label: 'Date',
      sortable: true
    },
    {
      key: 'description',
      label: 'Description',
      sortable: true
    },
    {
      key: 'beneficiary',
      label: 'Beneficiary',
      sortable: true
    },
    {
      key: 'debit',
      label: 'Debit',
      sortable: true
    },
    {
      key: 'credit',
      label: 'Credit',
      sortable: true
    },
    {
      key: 'balance',
      label: 'Balance',
      sortable: true
    }
  ];

  return (
    <div className="pt-2">
     
      <div className="">
        <ExportReusableTable
          data={BeneficiariesData} 
          columns={columns}
          emptyStateText="No Transaction History"
          emptyStateButtonText="Make Transfer"
          onEmptyStateAction={() => router.push(URLS.DASHBOARD.PERSONAL.TRANSFERTOOTHERBANKS)}
        />
      </div>
    </div>
  );
};

export default BankStatementTable;