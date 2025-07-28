import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://internet-banking-solution-f-e-ljls-4zpuuje43.vercel.app/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json', // Changed to JSON
    'x-api-key': '6012451',
  },
});

