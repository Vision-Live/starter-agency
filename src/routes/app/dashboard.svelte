<script lang="ts" context="module">
	export const load: Load = async ({ session }) => {
		if (session.lucia) return
		return {
			status: 302,
			redirect: '/'
		}
	}
</script>

<script lang="ts">
	import { signOut } from 'lucia-sveltekit/client'
	import { session } from '$app/stores'
	import type { Load } from '@sveltejs/kit'

	const signOutUser = async () => {
		try {
			await signOut()
			window.location.href = '/'
		} catch {}
	}

	let number = 0

	const getRandomNumber = async () => {
		const response = await fetch('/api/random', {
			headers: {
				Authorization: `Bearer ${$session.lucia?.access_token}`
			}
		})
		if (!response.ok) return
		const result = await response.json()
		number = result.number
	}
</script>

<div class="flex flex-col items-center">
	<h1 class="prose lg:prose-lg">Dashboard</h1>
</div>
