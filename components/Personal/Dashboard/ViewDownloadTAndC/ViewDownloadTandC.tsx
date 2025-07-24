import React from 'react';
import { jsPDF } from 'jspdf';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { URLS } from '@/lib/constants/url';
import Button from '@/components/ui/Button/Button';


const ViewDownloadTandC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
  
    doc.setFontSize(18);
    doc.text('Terms and Conditions', 105, 20, { align: 'center' });
    
  
    doc.setFontSize(11);
    const text = `
1. Introduction
Welcome to our platform. These terms and conditions outline the rules and regulations for using our services.

2. Intellectual Property Rights
All content included on this platform, such as text, graphics, logos, and software, is the property of our company and protected by copyright laws.

3. User Responsibilities
You agree to use this platform only for lawful purposes and in a way that does not infringe the rights of others.

4. Privacy Policy
Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.

5. Limitation of Liability
We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services.

6. Changes to Terms
We reserve the right to modify these terms at any time. Your continued use of the platform constitutes acceptance of the modified terms.

7. Governing Law
These terms shall be governed by and construed in accordance with the laws of your jurisdiction.
    `;
    
    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 15, 30);
    
    doc.save('Terms_and_Conditions.pdf');
  };

  return (
    <DashboardLayout urlpath={URLS.DASHBOARD.PERSONAL.SELFSERVICE_DOWNLOAD_T_AND_C}>
      <h1 className="font-bold text-xl">Self Service</h1>
      <div className="bg-white border mt-8 border-gray-200 px-8 rounded-xl py-4">
        <div className="py-4 border-b border-gray-300 font-bold">
          <p>View and Download Terms and Condition</p>
        </div>
        
        <div className="mt-6 mb-8">
          <h2 className="font-bold text-lg mb-4">Terms and Conditions</h2>
          <div className="text-sm space-y-4">
            <p><strong>1. Introduction</strong><br />
            Welcome to our platform. These terms and conditions outline the rules and regulations for using our services.</p>
            
            <p><strong>2. Intellectual Property Rights</strong><br />
            All content included on this platform, such as text, graphics, logos, and software, is the property of our company and protected by copyright laws.</p>
            
            <p><strong>3. User Responsibilities</strong><br />
            You agree to use this platform only for lawful purposes and in a way that does not infringe the rights of others.</p>
            
            <p><strong>4. Privacy Policy</strong><br />
            Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>
            
            <p><strong>5. Limitation of Liability</strong><br />
            We shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of our services.</p>
            
            <p><strong>6. Changes to Terms</strong><br />
            We reserve the right to modify these terms at any time. Your continued use of the platform constitutes acceptance of the modified terms.</p>
            
            <p><strong>7. Governing Law</strong><br />
            These terms shall be governed by and construed in accordance with the laws of your jurisdiction.</p>
          </div>
        </div>
        
        <div className=" p-4 mt-4">
          <Button 
            onClick={generatePDF}
            className="bg-primary-01 hover:bg-primary-02 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
          >
            Download as PDF
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ViewDownloadTandC;