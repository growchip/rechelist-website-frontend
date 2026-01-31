import { z } from "zod";

//-----------------NEWSLETTER SUBSCRIPTION SCHEMA-------------------
export const newsSubscriptionSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Invalid Email" }),
});

export type TNewsSubscriptionSchema = z.infer<typeof newsSubscriptionSchema>;

//-----------------CONTACT US SCHEMA-------------------
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Invalid Email" }),
  phone: z
    .string()
    .min(1, {
      message: "Contact Number is required",
    })
    .min(10, {
      message: "Please Enter a valid 10 digit mobile number",
    })
    .max(10, {
      message: "Please Enter a valid 10 digit mobile number",
    })
    .regex(/^\d+$/, { message: "Invalid Contact Number" }),
  city: z.string(),
  message: z.string(),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;

//-----------------CAREER FORM SCHEMA-------------------
export const careerFormSchema = z.object({
  emailCareer: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid Email" }),
});

export type TCareerFormSchema = z.infer<typeof careerFormSchema>;

//-----------------PRODUCT ENQUIRY SCHEMA-------------------
export const enquiryFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({ message: "Invalid Email" }),
  phone: z
    .string()
    .min(1, {
      message: "Contact Number is required",
    })
    .min(10, {
      message: "Please Enter a valid 10 digit mobile number",
    })
    .max(10, {
      message: "Please Enter a valid 10 digit mobile number",
    })
    .regex(/^\d+$/, { message: "Invalid Contact Number" }),
  product: z.string().min(1, "Product Name is required"),
  message: z.string(),
});

export type TEnquiryFormSchema = z.infer<typeof enquiryFormSchema>;
