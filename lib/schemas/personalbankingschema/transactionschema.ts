import { z } from "zod";

export const transactionReportSchema = z.object({
startDate: z.string().nonempty("Select Start Date"),
endDate: z.string().nonempty("Select End Date"),
});

export const approvalReportSchema = z.object({
startDate: z.string().nonempty("Select Start Date"),
endDate: z.string().nonempty("Select End Date"),
approvedBy: z.string().nonempty("Select Approved Person"),
});

export type transactionReportForm = z.infer<typeof transactionReportSchema>;
export type ApprovalReportForm = z.infer<typeof approvalReportSchema>;