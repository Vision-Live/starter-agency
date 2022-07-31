import { session } from "$app/stores"

export async function GET() {
	if (!session.lucia) {
		return {
			headers: { Location: '/auth/login' },
			status: 302
		}
	}
}

