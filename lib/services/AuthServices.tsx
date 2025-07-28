import { LoginInput, OtpInput, SignupInput } from '../schemas/authschema';
import { apiClient } from '../../app/api/utils/axios';


export const AuthService = {
  login: (data: LoginInput) => apiClient.post('hello', data),
  signup: (data: SignupInput) => apiClient.post('/auth/signup', data),
  verifyOtp: (data: OtpInput & { email: string }) => 
    apiClient.post('/auth/verify-otp', data),
  logout: () => apiClient.post('/auth/logout'),
};