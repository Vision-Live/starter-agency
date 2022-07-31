<script lang="ts">
	import '../app.css'
	import Footer from '$lib/footer.svelte'
	import Navbar from '$lib/global/Navbar.svelte'
</script>

<div class="flex flex-col h-screen justify-between">
	<header class="container mx-auto relative">
		<Navbar showMenu={false} />
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<Footer />
	</footer>
</div>
