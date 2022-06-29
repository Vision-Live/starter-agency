<!-- Main Navbar -->
<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { session } from '../stores/session';

	// switch $session.darkMode to true or false
	const toggleDarkMode = () => {
		$session.darkMode = !$session.darkMode;
	};
</script>

<div class="navbar">
	<a href="/" class="navbar-brand">
		<img src="./logo.svg" alt="logo" class="h-8" />
		<span class="ml-3 text-xl">AmVestor</span>
	</a>
	<nav class="navbar-nav group">
		<a href="/" class="dark:text-white dark:group-hover:text-white/20 text-slate-900 group-hover:text-slate-900/20">First Link</a>
		<a href="/" class="dark:text-white dark:group-hover:text-white/20 text-slate-900 group-hover:text-slate-900/20">Second Link</a>
		<a href="/" class="dark:text-white dark:group-hover:text-white/20 text-slate-900 group-hover:text-slate-900/20">Third Link</a>
		<a href="/" class="dark:text-white dark:group-hover:text-white/20 text-slate-900 group-hover:text-slate-900/20">Fourth Link</a>
	</nav>
	<button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button</button>
	<button on:click={toggleDarkMode} class="flex items-center ml-5 dark:bg-gray-400/30 bg-gray-800/80 rounded-full justify-end transition-colors duration-300">
			<Moon class="m-1 p-0.5 text-white {$session.darkMode ? '' : 'translate-x-8 opacity-0'}  transition-all duration-300" />
			<Sun class="m-1 p-0.5 text-white {!$session.darkMode ? '' : '-translate-x-8 opacity-0'}  transition-all duration-300" />
      <div class="m-1 p-3 rounded-full absolute {$session.darkMode ? 'bg-main-dark' : '-translate-x-8 bg-slate-400'} transition-all duration-300"/>
	</button>
</div>

<!-- End Main Navbar -->
<style>
	.navbar {
		@apply max-w-screen-xl mx-auto p-5  flex-col md:flex-row items-center flex fixed left-0 right-0 top-0 w-full;
	}
	.navbar-brand {
		@apply flex font-medium items-center text-white mb-4 md:mb-0;
	}
	.navbar-nav {
		@apply md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center;
	}
	.navbar-nav a {
		@apply text-xl mr-5 hover:text-white transition-colors duration-300;
	}

	.navbar-nav .nav-link.active {
		@apply text-white;
	}
</style>
