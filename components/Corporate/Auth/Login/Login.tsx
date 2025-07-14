"use client"
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { doctor, IvantageLogo } from '@/lib/constants/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InputField } from '@/components/ui/Forms/InputField';
import { URLS } from '@/lib/constants/url';

export default function Login() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard")
 
  };

  return (
    <div className="bg-white h-screen">
      <div className="grid lg:grid-cols-2 h-full">
     
        <div className="relative hidden lg:block h-full bg-gradient-to-br from-blue-50 to-teal-50">
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
                Welcome
              </h1>
              <p className="text-gray-600">
                Log in to iVantage Corperate Banking
              </p>
            </div>

          
            <form className="space-y-6" onSubmit={handleSubmit}>
          

              <div>
               <InputField
  label="Access Code"
  id="accesscode"
  name="access code"
       placeholder="Enter Access code"
  value={formData.accountNumber}
  onChange={handleInputChange}
  required
/>
              </div>
              <div>
               <InputField
  label="Account Number"
  id="accountNumber"
  name="accountNumber"
       placeholder="Enter Account number"
  value={formData.accountNumber}
  onChange={handleInputChange}
  required
/>
              </div>

        
              <div>
                         <InputField
  label="Password"
  id="password"
  name="Password"
    placeholder="Enter Password"
  value={formData.password}
  onChange={handleInputChange}
  required
/>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"

                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a href={'/forgot-password'} className="text-sm text-teal-500 hover:text-teal-600">
                  Forgot Password?
                </a>
              </div>

            
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
              >
                Log in
              </button>

           
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link href={URLS.AUTH.CORPORATE.REGISTER} className="text-teal-500 hover:text-teal-600 font-medium">
                    Register
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