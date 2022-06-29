<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/Navbar.svelte';
	import { session } from '../stores/session';


</script>

<header class="{ $session.darkMode ? 'dark': '' }">
	<Navbar />
</header>

<main>
	<!-- Page Pontent -->
    <div class="{ $session.darkMode ? 'dark': '' }">
        <div class="dark:bg-main-dark bg-slate-400 transition-colors duration-300">
            <slot/>
        </div>
    </div>
</main>

<footer class="{ $session.darkMode ? 'dark': '' }">
	<!-- Page Footer -->
</footer>
