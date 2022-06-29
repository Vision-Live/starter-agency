<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';


</script>

<header class="container mx-auto">
	<Navbar />
</header>

<main>
	<slot/>
</main>

<footer class="">
	<!-- Page Footer -->
</footer>
