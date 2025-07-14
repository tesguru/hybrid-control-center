"use client"
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { doctor, IvantageLogo } from '@/lib/constants/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { InputField } from '@/components/ui/Forms/InputField';
import { URLS } from '@/lib/constants/url';
import { Dropdown } from '@/components/ui/Forms/Dropdown';
import Button from '@/components/ui/Button/Button';
import { X } from 'lucide-react'; 

interface RoleEntry {
  id: string;
  role: string;
  name: string;
  email: string;
}

export default function AssignRole() {
  const [entries, setEntries] = useState<RoleEntry[]>([
    { id: Date.now().toString(), role: '', name: '', email: '' }
  ]);
  const router = useRouter();

  const roleOptions = [
    { value: 'approver1', label: 'Approver Level 1' },
    { value: 'approver2', label: 'Approver Level 2' },
    { value: 'initiator', label: 'Initiator' },
    { value: 'reviewer', label: 'Reviewer' },
  ];

  const handleInputChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEntries(prev => 
      prev.map(entry => 
        entry.id === id ? { ...entry, [name]: value } : entry
      )
    );
  };

  const addNewEntry = () => {
    setEntries(prev => [
      ...prev,
      { id: Date.now().toString(), role: '', name: '', email: '' }
    ]);
  };

  const removeEntry = (id: string) => {
    if (entries.length > 1) {
      setEntries(prev => prev.filter(entry => entry.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', entries);
    router.push("/dashboard");
  };

  return (
    <div className="bg-white h-screen">
      <div className="grid lg:grid-cols-2 h-full">
      
        <div className="relative hidden lg:block h-full bg-gradient-to-br from-blue-50 to-teal-50">
          <Image 
            src={doctor} 
            alt="Doctor illustration"
            fill
            className="object-cover"
          />
        </div>

     
        <div className="flex items-center justify-center p-8 bg-white h-full overflow-y-auto">
          <div className="w-full max-w-md">
            <div className="flex justify-end mb-4">
              <Image src={IvantageLogo} alt="Logo" />
            </div>

         
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Assign Corporate Roles
              </h1>
              <p className="text-gray-600">
                Provide the details of the profile holders and assign roles
              </p>
            </div>

          
            <form className="space-y-6" onSubmit={handleSubmit}>
              {entries.map((entry, index) => (
                <div key={entry.id} className="relative space-y-4  pb-6 mb-6">
                  {entries.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeEntry(entry.id)}
                      className="absolute -top-2 -right-2 p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                      aria-label="Remove entry"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  
                  <div>
                    <Dropdown
                      label="Role"
                      id={`role-${entry.id}`}
                      name="role"
                      options={roleOptions}
                      value={entry.role}
                      onChange={(e) => handleInputChange(entry.id, e)}
                      required
                    />
                  </div>
                  
                  <div>
                    <InputField
                      label="Name"
                      id={`name-${entry.id}`}
                      name="name"
                      placeholder="Enter name"
                      value={entry.name}
                      onChange={(e) => handleInputChange(entry.id, e)}
                      required
                    />
                  </div>

                  <div>
                    <InputField
                      label="Email Address"
                      id={`email-${entry.id}`}
                      name="email"
                      placeholder="Enter Email"
                      value={entry.email}
                      onChange={(e) => handleInputChange(entry.id, e)}
                      required
                    />
                  </div>
                </div>
              ))}

              <div className="flex gap-4 justify-center">
                <Button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
                >
                  Continue
                </Button>
                <Button
                  type="button"
                  onClick={addNewEntry}
                  className="bg-white border border-gray-200 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors duration-200 text-black"
                >
                  Add more
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}