import axios from "axios";

const getBaseURL = () => {
  switch (process.env.NEXT_PUBLIC_NODE_ENV) {
    case "development":
      return process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;
    case "staging":
      return process.env.NEXT_PUBLIC_STAGING_BASE_URL;
    case "production":
      return process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL;

    default:
      return process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL;
  }
};

export const appAxios = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true,
});

export const cloudinaryAxios = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
});
