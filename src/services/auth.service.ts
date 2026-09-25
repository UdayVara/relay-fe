import { api } from "../utils/axios"

// Minimal service: return the full axios response so callers can inspect `status`.
export async function signup(payload: any) {
	const response = await api.post('/api/v1/auth/signup', payload)
	return response
}

export async function signin(payload: any) {
	const response = await api.post('/api/v1/auth/signin', payload)
	return response
}

export async function verifyOtp(data: {
  email: string;
  otp: string;
}) {
  return api.post("/auth/verify-otp", data);
}

export async function resendOtp(data: {
  email: string;
}) {
  return api.post("/auth/resend-otp", data);
}

export default { signup, signin, verifyOtp, resendOtp }
