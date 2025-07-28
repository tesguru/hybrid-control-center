import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { message: 'Hello from Next.js API!' },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const requestData = await request.json();

    const { accountNumber, password } = requestData;


    if (!accountNumber || !password) {
      return NextResponse.json(
        { statusCode: 400, error: 'accountNumber and password are required' },
        { status: 400 }
      );
    }

   
    if (password === 'personal') {
      return NextResponse.json(
        {
          statusCode: 17,
          message: 'Personal account detected',
          accountNumber
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          statusCode: 16,
          message: 'Corporate or unknown account detected',
          accountNumber
        },
        { status: 200 }
      );
    }

  } catch (error) {
    return NextResponse.json(
      {
        error: 'Invalid JSON data',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 400 }
    );
  }
}
