import { z } from "zod";

const serviceValues = [
  "web-development",
  "mobile-development",
  "machine-learning",
  "agentic-ai",
  "cloud-deployment",
  "internship",
  "other",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  company: z.string().max(100, "Company name is too long").optional().or(z.literal("")),
  service: z.enum(serviceValues, { message: "Please select a service" }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
