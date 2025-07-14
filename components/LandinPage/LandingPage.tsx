"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button/Button';
import { IvantageLogo, Man } from '@/lib/constants/image';
import Image from 'next/image';
import Link from 'next/link';
import { URLS } from '@/lib/constants/url';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'Personal' | 'Corporate'>('Personal');
  const [showDropdown, setShowDropdown] = useState(false);


  const loginUrl = activeTab === 'Personal' ? URLS.AUTH.PERSONAL.LOGIN : URLS.AUTH.CORPORATE.LOGIN;
  const registerUrl = activeTab === 'Personal' ? URLS.AUTH.PERSONAL.REGISTER : URLS.AUTH.CORPORATE.REGISTER;

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
      
            <div className="flex items-center">
              <div className="flex items-center space-x-2 pt-4">
                <Image src={IvantageLogo} alt="Ivantage Bank Logo"/>
              </div>
            </div>

         
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                FAQ
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Open Bank Account
              </a>
            </nav>

           
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <span>Internet Banking</span>
                <ChevronDown className="w-4 h-4" />
              </button>

      
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
                  <div className="p-4">
                  
                    <div className="flex mb-4">
                      <Button
                        onClick={() => setActiveTab('Personal')}
                        className={`flex-1 py-2 px-4 text-sm font-medium rounded-l-lg ${
                          activeTab === 'Personal'
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Personal
                      </Button>
                      <Button
                        onClick={() => setActiveTab('Corporate')}
                        className={`flex-1 py-2 px-4 text-sm font-medium rounded-r-lg ${
                          activeTab === 'Corporate'
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Corporate
                      </Button>
                    </div>

              
                    <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 mb-3">
                      <Link href={loginUrl}>
                        Login
                      </Link>
                    </Button>

                 
                    <p className="text-sm text-gray-600 text-center">
                      Don't have an account?{' '}
                      <Link href={registerUrl} className="text-teal-500 hover:text-teal-600 font-medium">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

    
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
       
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Internet Banking at your convenience
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A secure way to access your accounts, manage payments, check your statements and much more, 24 hours a day.
            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={registerUrl} className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                Get Started
              </Link>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

         
          <div className="relative">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <Image src={Man} alt="Happy customer" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-teal-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div> 
      </main>
    </div>
  );
}