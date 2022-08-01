
<script lang="ts">
	import '../app.css'
	import Footer from '$lib/footer.svelte'
	import Navbar from '$lib/global/Navbar.svelte'
	import { page } from '$app/stores'
	import Transition from '$lib/global/Transition.svelte'

	import { autoRefreshTokens } from  	'lucia-sveltekit/client'
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
		<Transition url={$page.url}>
			<slot />
		</Transition>
	</main>

	<footer>
		<Footer />
	</footer>
	<Drawer />
</div>
