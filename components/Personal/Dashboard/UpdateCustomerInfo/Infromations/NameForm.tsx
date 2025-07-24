import Button from "@/components/ui/Button/Button";
import InputField from "@/components/ui/Forms/InputField";
import { FileUpload } from "@/components/ui/Forms/UploadForm";
import React, { useState } from "react";

export default function NameForm() {
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
          label="Old name"
          id="old-name"
          name="old-name"
          placeholder="Enter name"
          value={"Old name"}
          required
        />
      </div>
      <div>
        <InputField
          label="New name"
          id="accountNumber"
          name="amount"
          placeholder="Enter Amount"
          value={"New name"}
          required
        />
      </div>
      <div>
        <FileUpload
          onFileSelect={handleFileUpload}
          label="Valid ID with new name or old name"
          onError={handleError}
        />
      </div>
      <div>
        <FileUpload
          onFileSelect={handleFileUpload}
          label="Affidavit"
          onError={handleError}
        />
      </div>
      <div>
        <FileUpload
          onFileSelect={handleFileUpload}
          label="Newspaper Publication"
          onError={handleError}
        />
      </div>
      <div>
      </div>
    </div>
    <Button  className="bg-primary-01 text-white mt-6">Continue</Button>
    </form>
  );
}
