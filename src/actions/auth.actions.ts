"use server"

import * as authService from "../services/auth.service"

type ActionResult<T = any> = {
	success: boolean
	data?: T
	error?: string
}

type AuthPayload = {
    name?: string
    email: string
    password: string
}

export async function signupAction(payload: AuthPayload): Promise<ActionResult> {
	try {
		const res = await authService.signup(payload)
		return { success: true, data: res }
	} catch (err: any) {
		return { success: false, error: err?.message ?? 'Signup failed' }
	}
}

export async function signinAction(payload: AuthPayload): Promise<ActionResult> {
	try {
		const res = await authService.signin(payload)
		return { success: true, data: res }
	} catch (err: any) {
		return { success: false, error: err?.message ?? 'Signin failed' }
	}
}

// Helper for NextAuth credential validation or middleware usage
export async function validateCredentials(email: string, password: string) {
	try {
		const res = await authService.signin({ email, password })
		// Normalize to { ok, data } so callers (authorize) can inspect `.ok`
		return { ok: true, data: res }
	} catch (err: any) {
		return { ok: false, error: err?.message ?? 'Signin failed' }
	}
}

