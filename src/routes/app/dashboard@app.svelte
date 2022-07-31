<script lang="ts">
	import { signOut } from 'lucia-sveltekit/client'
	import { session } from '$app/stores'

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

	const user = $session.lucia?.user
</script>

<div class="flex flex-col items-center">
	<h1 class="prose lg:prose-lg">{user?.email}</h1>
	<h1 class="prose lg:prose-lg">{user?.email}</h1>
</div>
