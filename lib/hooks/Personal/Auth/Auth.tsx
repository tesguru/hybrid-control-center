import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/lib/services/AuthServices';
import { useAuthStore } from '@/lib/store/Authstore';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const router = useRouter();
  const { setUser, clearUser } = useAuthStore();

  const login = useMutation({
  mutationFn: AuthService.login,
  onSuccess: (data: any) => {
    if(data.data.status_code === "16"){
  alert("invalid username or password")
    }
  },
  onError: (error: any) => {
    let errorMessage = "Login failed. Please try again.";
    
    if (error.response) {
   
      errorMessage = error.response.data?.message || 
                   `Server error: ${error.response.status}`;
    } else if (error.request) {
    
      errorMessage = "Network error. Check your connection.";
    }
    alert(errorMessage);
    
  }
});

  const verifyOtp = useMutation({
    mutationFn: AuthService.verifyOtp,
    onSuccess: (data) => {
      setUser(data.email);
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