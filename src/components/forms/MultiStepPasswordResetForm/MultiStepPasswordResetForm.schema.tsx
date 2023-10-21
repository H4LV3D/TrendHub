import * as yup from "yup";

export const MultiStepPasswordResetFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("This field is required"),
  code: yup
    .number()
    .typeError("Should be a number")
    // Minum of 4 digits
    .min(1000, "Should be 4 digits")
    .required("Code is required"),
  password: yup.string().required("This field is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("This field is required"),
});
