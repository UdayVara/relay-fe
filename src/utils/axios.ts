import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { getSession } from "next-auth/react";
import { auth } from "@/auth/authconfig";

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * REQUEST INTERCEPTOR
 *
 * Client:
 *   getSession() -> session.user.token
 *
 * Server:
 *   auth() -> session.user.token
 */
api.interceptors.request.use(
  async (config) => {
    try {
      let token: string | undefined;

      if (typeof window === "undefined") {
        // Server
        const session = await auth();
        token = session?.user?.token;
      } else {
        // Client
        const session = await getSession();
        token = session?.user?.token;
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 *
 * If access token is expired:
 *   1. Call refresh API
 *   2. Get new access token
 *   3. Retry original request
 */
api.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest =
      error.config as RetryRequestConfig;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
        {},
        {
          withCredentials: true,
        },
      );

      const newAccessToken =
        response.data.accessToken;

      if (!newAccessToken) {
        throw new Error("No access token returned");
      }

      // Update original request
      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      // Retry
      return api(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  },
);