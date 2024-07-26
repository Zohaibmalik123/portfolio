import * as Yup from "yup";

export const ContactValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name cannot exceed 30 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters")
    .max(30, "Subject cannot exceed 30 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters")
    .required("Message is required"),
});
