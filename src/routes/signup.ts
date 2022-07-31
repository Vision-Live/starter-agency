import { session } from "$app/stores"

export async function GET() {
	if (!session.lucia) {
		console.log("No session")
		return {
			headers: { Location: '/auth/signup' },
			status: 302
		}
	}
}

