import { appAxios } from "@/config/axios";

interface SignUpDto {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export const signup = (signupDto: SignUpDto) => {
  const { firstName, lastName, email, phoneNumber, password } = signupDto;

  return appAxios.post("/auth/register", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    role: "tractor-owner",
    password: password,
  });
};

export const login = (identifier: string, password: string) => {
  return appAxios.post("/auth/login", {
    identifier: identifier,
    password: password,
    role: "tractor-owner",
    client: "web",
  });
};

export const logout = () => {
  return appAxios.post("/auth/logout", {});
};

export const refresh = () => {
  return appAxios.post("/auth/refresh", {
    role: "tractor-owner",
  });
};

export const resendOtp = (email: string) => {
  return appAxios.post("/auth/resend-otp", { email: email });
};

export const verifyEmail = (email: string, otp: number) => {
  return appAxios.post("/auth/verify-email", { email: email, otp: otp });
};

export const requestPasswordReset = (email: string) => {
  return appAxios.post("/auth/request-reset", { email: email });
};

export const verifyOtp = (email: string, code: number) => {
  return appAxios.post("/auth/verify-otp", {
    email: email,
    otp: code,
  });
};

export const resetPassword = (
  email: string,
  code: number,
  password: string
) => {
  return appAxios.post("/auth/reset-password", {
    email: email,
    otp: code,
    newPassword: password,
  });
};
