import { auth } from '$lib/lucia'
import type { RequestHandler } from '@sveltejs/kit'
import type { Error } from 'lucia-sveltekit'

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json()
	const email = body.email
	const password = body.password
	if (!email || !password) {
		return {
			status: 400
		}
	}
	try {
		const createUser = await auth.createUser('email', email, {
			password,
			user_data: {
				email
			}
		})
		return {
			status: 200,
			headers: {
				'set-cookie': createUser.cookies
			}
		}
	} catch (e) {
		const error = e as Error
		if (error.message === 'AUTH_DUPLICATE_IDENTIFIER_TOKEN' || error.message === 'AUTH_DUPLICATE_USER_DATA') {
			return {
				status: 400,
				body: JSON.stringify({
					error: 'email already taken'
				})
			}
		}
		return {
			status: 500,
			body: JSON.stringify({
				error: 'Unknown error occurred'
			})
		}
	}
}
