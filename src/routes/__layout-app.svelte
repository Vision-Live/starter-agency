<script lang="ts" context="module">
	export const load: Load = async ({ session }) => {
		if (session.lucia) return
		return {
			status: 302,
			redirect: '/auth/login'
		}
	}
</script>

<script lang="ts">
	import '../app.css'
	import Footer from '$lib/footer.svelte'
	import Navbar from '$lib/global/Navbar.svelte'

	import type { Load } from '@sveltejs/kit'
	import { autoRefreshTokens } from 'lucia-sveltekit/client'
	import { session } from '$app/stores'
	import { onDestroy } from 'svelte'
	import Drawer from '$lib/global/Drawer.svelte'

	const unsubscribe = autoRefreshTokens(session, (e) => {
		console.log(e)
	})

	onDestroy(() => {
		unsubscribe()
	})
</script>

<div class="flex flex-col h-screen justify-between">
	<header class="container mx-auto relative">
		<Navbar />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
	<Drawer />
</div>
