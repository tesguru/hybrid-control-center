import { z } from "zod";

export const transferDetailsSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  toAccount: z.string().nonempty("Select account to transfer to"),
  amount: z.string().nonempty("Enter an amount"),
  narration: z.string().optional(),
});


export const transferToCurrentBankSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  amount: z.string().nonempty("Enter an amount"),
  narration: z.string().optional(),
  accountNumber: z.string().nonempty("Please select account number"),
  accountName: z.string().nonempty("Please select account name"),
  beneficiary: z.string().nonempty("Please select beneficiary account")
});

export const transferToOtherBankSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  bank: z.string().nonempty("Select Bank"),
  amount: z.string().nonempty("Enter an amount"),
  narration: z.string().optional(),
  accountNumber: z.string().nonempty("Please select account number"),
  accountName: z.string().nonempty("Please select account name"),
  beneficiary: z.string().nonempty("Please select beneficiary account")
});

export const addBeneficiarySchema = z.object({
  bank: z.string().nonempty("Select Bank"),
  accountName: z.string().nonempty("Select account Name"),
  accountNumber: z.string().nonempty("Select Account Number"),
});

export const airtimePaymentSchema = z.object({
  fromAccount: z.string().nonempty("Select account Number"),
  network: z.string().nonempty("Select Network"),
  amount: z.string().nonempty("Enter amount"),
  mobileNumber: z.string().nonempty("Enter Mobile Number"),
});

export const utilityPaymentSchema = z.object({
  fromAccount: z.string().nonempty("Select account Number"),
  utilityProvider: z.string().nonempty("Select Utility"),
  package: z.string().nonempty("Select Package"),
  accountId: z.string().nonempty("Enter Account Id"),
  amount: z.string().nonempty("Enter Amount"),
  remarks: z.string().nonempty("Enter Remarks"),
});


export type TransferDetailsForm = z.infer<typeof transferDetailsSchema>;
export type TransferToCurrentBankForm = z.infer<typeof transferToCurrentBankSchema>;
export type transferToOtherBankForm = z.infer<typeof transferToOtherBankSchema>;
export type addBeneficiaryForm = z.infer<typeof addBeneficiarySchema>;
export type airtimePaymentForm = z.infer<typeof airtimePaymentSchema>;
export type utilityPaymentForm = z.infer<typeof utilityPaymentSchema>;
