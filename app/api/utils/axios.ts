import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://161.35.56.41/zippy_world_live_api/buz/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-api-key': '6012451',
  },
});

