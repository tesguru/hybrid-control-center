// File: /pages/api/transfer.ts
import { NextResponse } from 'next/server';

type TransferRequestBody = {
  fromAccount: string;
  beneficiaryName: string;
  toAccount: string;
  amount: number;
  narration: string;
};



export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      {
        success: false,
        message: 'Method Not Allowed',
      },
      { status: 405 }
    );
  }

  const {
    fromAccount,
    toAccount,
    amount,
  }: TransferRequestBody = await request.json();

  if (
    !fromAccount ||
    !toAccount ||
    !amount ||
    amount <= 0
  ) {
    return NextResponse.json(
      {
        success: false,
        message: 'Missing or invalid transfer details',
      },
      { status: 400 }
    );
  }

  const transactionId = `TXN-${Date.now()}`;

  return NextResponse.json({
    success: true,
    message: 'Transfer submitted successfully',
    transactionId,
  });
}