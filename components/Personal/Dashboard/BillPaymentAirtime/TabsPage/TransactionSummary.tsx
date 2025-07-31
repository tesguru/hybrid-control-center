import { DetailRow } from '@/components/ui/Custom/DetailsRow'
import React from 'react'

interface TransactionData {
  fromAccount: string
  network: string
  amount: number | string
  mobileNumber: number | string
}

interface TransactionSummaryProps {
  data: TransactionData
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({ data }) => {
  return (
    <div className="mx-auto bg-white p-6 space-y-6">
      <DetailRow label="From" value={`Current Account - ${data.fromAccount}`} />
      <DetailRow label="Network" value={data.network } />
      <DetailRow label="Amount" value={`NGN${data.amount}`} />
      <DetailRow label="Mobile Number" value={data.mobileNumber}  />
    </div>
  )
}

export default TransactionSummary
