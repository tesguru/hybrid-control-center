import { z } from 'zod';

export const loginSchema = z.object({
  accountNumber: z.string()
    .min(10, "Account number must be exactly 10 characters")
    .max(10, "Account number must be exactly 10 characters")
    .regex(/^\d+$/, "Account number must contain only numbers"),
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    // .regex(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    // ),
});

export const signupSchema = loginSchema.extend({
  name: z.string().min(2),
});

export const otpSchema = z.object({
  code: z.string().length(6),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type OtpInput = z.infer<typeof otpSchema>;