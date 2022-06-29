<!-- Main Navbar -->
<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { session } from '../stores/session';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});

	// switch $session.darkMode to true or false
	const toggleDarkMode = () => {
		$session.darkMode = !$session.darkMode;
		console.log($session.darkMode);
	};
</script>
<div class="navbar bg-base-100">
	<div class="navbar-start">
	  <a href="#f" class="btn btn-ghost normal-case text-xl">AmVestor</a>
	</div>
	<div class="navbar-center">
	  <ul class="menu menu-horizontal p-0">
		<li><a href="#f">Item 1</a></li>
		<li tabindex="0">
		  <a href="#f">
			Parent
			<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
		  </a>
		  <ul class="p-2 bg-base-100">
			<li><a href="#f">Submenu 1</a></li>
			<li><a href="#f">Submenu 2</a></li>
		  </ul>
		</li>
		<li><a href="#f">Item 3</a></li>
	  </ul>
	</div>
	<div class="navbar-end">
	  <button on:click="{toggleDarkMode}" data-toggle-theme="night,emerald" class="btn btn-sm relative">
				<Moon class="m-1  {$session.darkMode ? 'ranslate-x-8 opacity-0' : 't'}  transition-all duration-300" />
				<Sun class="m-1 absolute {$session.darkMode ? '' : '-translate-x-8 opacity-0'}  transition-all duration-300" />
				<!-- <div class="m-1 p-3 bg-white rounded-full absolute {$session.darkMode ? '' : 'translate-x-7'} transition-all duration-300"/> -->
	  </button>
	</div>
  </div>

	<button data-toggle-theme="night,emerald"  class="hidden"></button>

<!-- End Main Navbar -->
