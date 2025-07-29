

export type TransferPayload = {
  fromAccount: string;
  toAccount: string;
  beneficiaryName: string;
  amount: number;
  narration: string;
};

export const TransferService = {
  transfertowonaccount: async (payload: TransferPayload) => {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const {
      fromAccount,
      toAccount,
      beneficiaryName,
      amount,
      narration,
    } = payload;

   
    if (!fromAccount || !toAccount || !beneficiaryName || !amount || amount <= 0) {
      throw new Error('Missing or invalid transfer details');
    }


    return {
      success: true,
      message: 'Transfer submitted successfully',
      transactionId: `TXN-${Date.now()}`,
      data: {
        fromAccount,
        toAccount,
        beneficiaryName,
        amount,
        narration,
        status: 'pending',
      },
    };
  },
};
