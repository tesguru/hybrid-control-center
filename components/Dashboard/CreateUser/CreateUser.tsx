import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { URLS } from '@/lib/constants/url';
import InputDetails from './InputDetails';

const CreateUser = () => {

  const methods = useForm();

  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.CREATEUSERS}>
        <div className='p-4'>
             <h1 className='py-3 font-extrabold text-2xl '>Create Users</h1>
                <FormProvider {...methods}>
        <div className="bg-white border mt-4 border-gray-200 px-14 rounded-xl transfer-form-container transfer-form">
          <div className="border-b py-6 border-gray-300 flex font-bold justify-between">
            <p className="step-title">Input Details</p>
          </div>
          <div className="py-6">
            <div>
              <InputDetails />
            </div>
          </div>
        </div>
      </FormProvider>
        </div>
  
    </DashboardLayout>
  );
};

export default CreateUser;