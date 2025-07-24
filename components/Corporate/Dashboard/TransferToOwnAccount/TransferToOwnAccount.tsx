import React, { useState } from 'react';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { URLS } from '@/lib/constants/url';
import InputDetails from './TabsPage/InputDetails';
import ReviewTransfer from './TabsPage/TransactionSummary';
import Button from '@/components/ui/Button/Button';
import InputOtp from './TabsPage/InputOtp';
import '../../../ui/Transformation.css'; // Import the CSS file

const TransferToOwnAccount = () => {
  const [step, setStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getTitle = () => {
    if (step === 2) return "Transaction Summary";
    if (step === 3) return "Enter Transaction Pin";
    return "Make Transfer";
  };

  const nextStep = () => {
    if (step < 3) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step + 1);
        setIsTransitioning(false);
      }, 150); // Half of the transition duration
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsTransitioning(false);
      }, 150); // Half of the transition duration
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <InputDetails />;
      case 2:
        return <ReviewTransfer />;
      case 3:
        return <InputOtp />;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.TRANSFER}>
      <h1 className="font-bold text-xl">Transfer To Own Account</h1>

      <div className="bg-white border mt-8 border-gray-200 px-14 rounded-xl transfer-form-container transfer-form">
        <div className="border-b py-6 border-gray-300 flex font-bold justify-between">
          <p className="step-title">{getTitle()}</p>
          <div>
            <p>Step {step} of 3</p>
          </div>
        </div>

        <div className="py-6">
          <div className={`step-content ${isTransitioning ? 'transitioning' : ''}`}>
            {renderStepContent()}
          </div>
        </div>

        <div className="flex justify-between py-4">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-6 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Back
          </button>
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-primary-02 text-white rounded hover:bg-primary"
            >
              Continue
            </button>
          ) : (
            <Button
              onClick={() => alert('Submitting...')}
              className="text-white bg-primary-02"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TransferToOwnAccount;