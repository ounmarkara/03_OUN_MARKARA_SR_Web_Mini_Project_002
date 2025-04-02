import { z } from "zod";

export const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be 3 or more characters long" })
    .max(50, { message: "Username must be 50 or fewer characters long" }),
  // email: z
  //   .string()
  //   .min({ message: "Invalid email address" })
  //   .max(100, { message: "Email must be 100 or less characters long" }),
  password: z
    .string()
    .min(2, { message: "Password must be 2 or more characters long" })
    .max(100, { message: "Password must be 100 or fewer characters long" }),
});
