import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  // firstName: yup.string().required("First name is required"),
  // lastName: yup.string().required("Last name is required"),
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  avatarId: yup.number().required("avatarId is required"),
});
