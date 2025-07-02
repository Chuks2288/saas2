import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" })
})

export const signUpSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }),
    confirmPassword: z.string().min(1, { message: "Password is required" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
})