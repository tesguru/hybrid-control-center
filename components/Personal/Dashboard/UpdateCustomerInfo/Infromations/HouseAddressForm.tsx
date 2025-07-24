import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/Forms/InputField";
import { FileUpload } from "@/components/ui/Forms/UploadForm";
import React, { useState } from "react";

export default function HouseAddressForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = async (files: File[]) => {
    console.log("Files uploaded:", files);
    setUploadedFiles((prev) => [...prev, ...files]);
console.log(uploadedFiles);
    // files.forEach((file) => {}); 
  };

  const handleError = (error: string, file?: File) => {
    console.error("Upload error:", error, file);
  };

  return (
    <form>
    <div className="grid grid-cols-2 gap-10 ">
      <div>
        <InputField
          label="Old House Address"
          id="old-name"
          name="old-name"
          placeholder="Enter name"
          value={"Old House Address"}
          required
        />
      </div>
      <div>
        <InputField
          label="New House Address"
          id="accountNumber"
          name="amount"
          placeholder="Enter Amount"
          value={"New House Address"}
          required
        />
      </div>
      <div>
        <FileUpload
  onFileSelect={handleFileUpload}
  label="Recent utility bill of new address"
  onError={handleError}
/>

      </div>
    
    </div>
    <Button  className="bg-primary-01 text-white mt-6">Continue</Button>
    </form>
  );
}
