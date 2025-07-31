import { DetailRow } from '@/components/ui/Custom/DetailsRow'
import React from 'react'

interface TransactionData {
  fromAccount: string
  utilityProvider: string
  package: string
  accountId: string
  amount: number | string
  remarks: string
}

interface TransactionSummaryProps {
  data: TransactionData
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({ data }) => {
  return (
    <div className="mx-auto bg-white p-6 space-y-6">
      <DetailRow label="From" value={`Current Account - ${data.fromAccount}`} />
      <DetailRow label="Utility Provider" value={data.utilityProvider} />
      <DetailRow label="Package" value={data.package} />
      <DetailRow label="Account ID" value={data.accountId} />
      <DetailRow label="Amount" value={`NGN${data.amount}`} />
      <DetailRow label="Remarks" value={data.remarks} />
    </div>
  )
}

export default TransactionSummary
