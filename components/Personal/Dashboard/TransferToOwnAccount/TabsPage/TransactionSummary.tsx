import { DetailRow } from '@/components/ui/Custom/DetailsRow'
import React from 'react'

interface TransactionData {
  fromAccount: string
  toAccount: string
  amount: number | string
  beneficiaryName?: string
  narration?: string // made optional to avoid type error
}

interface TransactionSummaryProps {
  data: TransactionData
}

const TransactionSummary: React.FC<TransactionSummaryProps> = ({ data }) => {
  return (
    <div className="mx-auto bg-white p-6 space-y-6">
      <DetailRow label="From" value={`Current Account - ${data.fromAccount}`} />
      <DetailRow label="Beneficiary Name" value={data.beneficiaryName ?? 'Olasupo'} />
      <DetailRow label="Beneficiary Account Number" value={data.toAccount} />
      <DetailRow label="Amount" value={`NGN${data.amount}`} isAmount />
      <DetailRow label="Narration" value={data.narration ?? '-'} isLast />
    </div>
  )
}

export default TransactionSummary
