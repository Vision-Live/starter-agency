<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
	import Footer from '$lib/footer.svelte';
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
</div>
