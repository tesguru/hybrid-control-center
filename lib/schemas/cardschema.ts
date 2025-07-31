import { z } from "zod";

export const requestDebitCardSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  accountToLink: z.string().nonempty("Select account to Link"),
  reason: z.string().nonempty("Enter reason"),
   pickUpBranch: z.string().nonempty("Pick Up Branch"),
});


export const blockDebitCardSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  reason: z.string().nonempty("Select Reason")
});

export const requestCardPinSchema = z.object({
  fromAccount: z.string().nonempty("Select account to transfer from"),
  secretQuestion: z.string().nonempty("Enter Secret Question"),
  answer:z.string().nonempty("Enter Answer"),
});

export type blockDebitCardForm = z.infer<typeof blockDebitCardSchema>;
export type requestDebitCardForm = z.infer<typeof requestDebitCardSchema>;
export type requestCardPinForm = z.infer<typeof requestCardPinSchema>;