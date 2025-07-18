import { DetailRow } from '@/components/ui/Custom/DetailsRow'
import React from 'react'

const TransactionSummary = () => {
  return (
   <div className=" mx-auto bg-white p-6">
      <div className="space-y-6">
        
        <DetailRow 
          label="From" 
          value="Current Account - 0234668765" 
        />

        <DetailRow 
          label="Beneficiary Name" 
          value="Olasupo Tunde" 
        />

        <DetailRow 
          label="Beneficiary Account Number" 
          value="Current Account - 0234668765" 
        />

        <DetailRow 
          label="Amount" 
          value="NGN50,000.00" 
          isAmount={true}
        />

        <DetailRow 
          label="Narration" 
          value="ATM Money" 
          isLast={true}
        />

      </div>
    </div>
  )
}

export default TransactionSummary