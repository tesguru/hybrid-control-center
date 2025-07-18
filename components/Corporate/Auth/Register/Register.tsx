"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IvantageLogo, Woman } from '@/lib/constants/image';
import Link from 'next/link';
import { InputField } from '@/components/ui/Forms/InputField'; 
import Button from '@/components/ui/Button/Button';
import { URLS } from '@/lib/constants/url';

export default function Register() {
  const [formData, setFormData] = useState({
    accountNumber: '',
    accountName: '',
    email: '',
    mobileNumber: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registration data:', formData);
  };

  return (
    <div className="bg-white min-h-screen grid lg:grid-cols-2">
    
      <div className="relative w-full h-screen">
        <Image
          src={Woman}
          alt="Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

   
      <div className="flex justify-center items-center p-2 bg-white">
        <div className="w-full max-w-lg">
       
          <div className="flex justify-end mb-6">
            <Image src={IvantageLogo} alt="Logo" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Register for Corporate  Banking
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
                inputClass="px-3 py-3 border rounded-lg focus:ring-primay-01 focus:border-primary-01"
                placeholder="Enter account number" id={''}              />
              <InputField
                label="Account Name"
                name="accountName"
                value={formData.accountName}
                onChange={handleInputChange}
                required
                inputClass="px-3 py-3 border rounded-lg focus:ring-primay-01 focus:border-primary-01"
                placeholder="Enter account name" id={''}              />
            </div>

      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Registered Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                inputClass="px-3 py-3 border rounded-lg focus:ring-primay-01 focus:border-primary-01"
                placeholder="Enter email address" id={''}              />
              <InputField
                label="Mobile Number"
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                required
                inputClass="px-3 py-3 border rounded-lg focus:ring-primay-01 focus:border-primary-01"
                placeholder="Enter mobile number" id={''}              />
            </div>

         
            <div className="space-y-2">
              <a href="#" className="text-sm text-primary-02 hover:underline">
                Click here to view terms and conditions
              </a>
              <label className="flex items-start space-x-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-primary-01 border-gray-300 rounded"
                  required
                />
                <span>I agree to the terms and conditions</span>
              </label>
            </div>

      
            <Button
              type="submit"
              disabled={!formData.agreeToTerms}
              className=" text-center bg-primary-01 hover:bg-primary-02 disabled:bg-gray-300 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Register
            </Button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href={URLS.AUTH.CORPORATE.LOGIN}  className="text-primary-01 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}