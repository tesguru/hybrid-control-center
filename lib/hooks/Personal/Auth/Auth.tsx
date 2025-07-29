import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/lib/services/AuthServices';
import { useAuthStore } from '@/lib/store/Authstore';
import { useRouter } from 'next/navigation';
import { useToast } from '../../UI/usetoast';
import { URLS } from '@/lib/constants/url';
import { handleApiError } from '@/app/api/utils/handleapierror';

export const useAuth = () => {
  const router = useRouter();
  const { setUser, clearUser } = useAuthStore();
const { toast } = useToast();
  const login = useMutation({
  mutationFn: AuthService.login,
  onSuccess: (data: any) => {
    
    if(data.data.statusCode === 16){
  toast.error("Error!", "Email or Password is not correct");
    }
    if(data.data.statusCode === 17){
        toast.success("Sucess!", "Login Successful");
        router.push(URLS.DASHBOARD.PERSONAL.DASHBOARD);
    }
  },
  onError: (error: any) => {
     handleApiError(error, "Login", toast);
  }
});

  const verifyOtp = useMutation({
    mutationFn: AuthService.verifyOtp,
    onSuccess: (data:any) => {
      setUser(data);
      router.push('/dashboard');
    },
  });

  const logout = useMutation({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      clearUser();
      localStorage.removeItem('authToken');
      router.push('/login');
    },
  });

//   const userProfileQuery = useQuery({
//   queryKey: ['userProfile', userId],
//   queryFn: () => UserService.getProfile(userId),
//   enabled: false, // wait for manual refetch
//   onSuccess: (response) => {
//     console.log('✅ User profile loaded:', response.data);
//     // Example: store user in global state, or redirect, etc.
//   },
//   onError: (error: any) => {
//     let errorMessage = "Failed to load profile.";
    
//     if (error.response) {
//       errorMessage = error.response.data?.message || `Server error: ${error.response.status}`;
//     } else if (error.request) {
//       errorMessage = "Network error. Please check your internet connection.";
//     }

//     alert(errorMessage);
//   }
// });


  return { login, verifyOtp, logout };
};