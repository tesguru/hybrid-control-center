"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { doctor, IvantageLogo } from '@/lib/constants/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InputField } from '@/components/ui/Forms/InputField';
import Button from '@/components/ui/Button/Button';


export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    password: '',
    rememberMe: false
  });


  const router = useRouter();
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/reset-password")
 
  };

  return (
    <div className="bg-white h-screen">
      <div className="grid lg:grid-cols-2 h-full">
    
        <div className="relative hidden lg:block h-full bg-gradient-to-br from-blue-50 to-primary-04">
          <Image 
            src={doctor} 
            alt="Doctor illustration"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>

  
        <div className="flex items-center justify-center p-8 bg-white h-full overflow-y-auto">
          <div className="w-full max-w-md">
     
           
               <div className="flex justify-end mb-4">
            <Image src={IvantageLogo} alt="Logo" />
          </div>
          

        
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Forgot Password
              </h1>
              <p className="text-gray-600">
               Enter your account number to get a password reset link sent to your registered email address 
              </p>
            </div>

       
            <form className="space-y-6" onSubmit={handleSubmit}>
           
              <div>
               <InputField
  label="Account Number"
  id="accountNumber"
  name="accountNumber"
       placeholder="Enter Your Email"
  value={formData.accountNumber}
  onChange={handleInputChange}
  required
/>
              </div>


              <Button
                type="submit"
                className="w-full bg-primary-01 hover:bg-primary-02 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                Send Link
              </Button>

           
              <div className="text-center">
                <p className="text-sm text-gray-600">
                 
                  <Link href={"/login"} className="text-primary-01 hover:text-primary-02 font-medium">
                    Back to Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}