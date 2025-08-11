import Button from "@/components/ui/Button/Button";
import Dropdown from "@/components/ui/Forms/Dropdown";
import InputField from "@/components/ui/Forms/InputField";

import React from "react";
import { useFormContext } from "react-hook-form";

const InputDetails = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const roles = [
    { value: "Admin", label: "Administrator" },
    { value: "Support", label: "Support" },
    { value: "Manager", label: "Manager" },
    { value: "Analyst", label: "Analyst" },
  ];

  const departments = [
    { value: "Customer Service", label: "Customer Service" },
    { value: "IT", label: "IT" },
    { value: "Finance", label: "Finance" },
    { value: "Operations", label: "Operations" },
  ];

  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Pending", label: "Pending" },
    { value: "Inactive", label: "Inactive" },
  ];

  // Get current values for dropdowns
  const roleValue = watch("role");
  const departmentValue = watch("department");
  const statusValue = watch("status");

  return (
    <div className="space-y-4 w-full">
      <div className="grid grid-cols-2 gap-6 w-full">
        <InputField
          label="Full Name"
          id="fullName"
          placeholder="Enter full name"
          error={errors.fullName?.message}
          {...register("fullName", {
            required: "Full name is required",
          })}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter email address"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 w-full">
        <Dropdown
          label="Role"
          id="role"
          value={roleValue}
          onChange={(e) =>
            setValue("role", e.target.value, { shouldValidate: true })
          }
          options={roles}
          error={errors.role?.message as string}
        />

        <Dropdown
          label="Department"
          id="department"
          value={departmentValue}
          onChange={(e) =>
            setValue("department", e.target.value, { shouldValidate: true })
          }
          options={departments}
          error={errors.department?.message as string}
        />

        <Dropdown
          label="Status"
          id="status"
          value={statusValue}
          onChange={(e) =>
            setValue("status", e.target.value, { shouldValidate: true })
          }
          options={statusOptions}
          error={errors.status?.message as string}
        />
      </div>

      <div className="grid grid-cols-2 gap-6 w-full">
        <InputField
          label="User ID"
          id="userId"
          placeholder="Auto-generated"
          readOnly
          error={errors.userId?.message}
          {...register("userId")}
        />

        <InputField
          label="Date Created"
          id="dateCreated"
          type="date"
          error={errors.dateCreated?.message}
          {...register("dateCreated")}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          className="px-6 py-2"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="px-6 py-2 bg-primary-01 text-white"
        >
          Create User
        </Button>
      </div>
    </div>
  );
};

export default InputDetails;