import { z } from "zod";

export const transferDetailsSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  toAccount: z.string().nonempty("Select account to transfer to"),
  amount: z.string().nonempty("Enter an amount"),
  narration: z.string().optional(),
});

export type TransferDetailsForm = z.infer<typeof transferDetailsSchema>;