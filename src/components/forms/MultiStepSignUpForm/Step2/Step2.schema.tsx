import * as yup from "yup";

export const Step2Schema = yup.object().shape({
  code: yup
    .number()
    .typeError("Should be a number")
    // Minum of 4 digits
    .min(1000, "Should be 4 digits")
    .required("Code is required"),
});
