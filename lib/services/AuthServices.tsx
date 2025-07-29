import {  OtpInput, SignupInput } from '../schemas/authschema';
import { apiClient } from '../../app/api/utils/axios';


export const AuthService = {

  login: async (details:any) => {
    console.log(details);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(details.password)
        if (details.password === "personal") {
          resolve({
            data: {
              statusCode: 17, // success
              token: "fake-jwt-token",
            },
            
          });
 
        } else {
          resolve({
            data: {
              statusCode: 16, // login error
            },
          });
        }
      }, 1000); // simulate network delay
    });
  },

  signup: (data: SignupInput) => apiClient.post('/auth/signup', data),
  verifyOtp: (data: OtpInput & { email: string }) => 
    apiClient.post('/auth/verify-otp', data),
  logout: () => apiClient.post('/auth/logout'),
};