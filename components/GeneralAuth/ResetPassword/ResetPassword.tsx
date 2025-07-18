"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { doctor } from '@/lib/constants/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button/Button';
import { PasswordInput } from '@/components/ui/Forms/PasswordInput';

export default function ResetPassword() {
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
    router.push("/dashboard")
 
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

    
        <div className="flex pt-20 justify-center p-8 bg-white h-full overflow-y-auto">
          <div className="w-full max-w-md">
           
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Change Default Password
              </h1>
            </div>

          
            <form className="space-y-6" onSubmit={handleSubmit}>
            
                <div>
                <PasswordInput
  label="Default Password"
  id="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  required
  placeholder="Enter your password"
  inputClass="custom-additional-classes" 
/>
              </div>
              <div>
                <PasswordInput
  label="New Password"
  id="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  required
  placeholder="Enter your password"
  inputClass="custom-additional-classes" // Optional
/>
              </div>

               <div>
                <PasswordInput
  label="Confirm New Password"
  id="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  required
  placeholder="Enter your password"
  inputClass="custom-additional-classes" 
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