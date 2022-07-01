<!-- Main Navbar -->
<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { session } from '../stores/session';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
		let dataTheme = window.document.documentElement.getAttribute('data-theme');
		if (dataTheme == 'night') {
			$session.darkMode = true;
		}
	});

	const toggleDarkMode = () => {
		$session.darkMode = !$session.darkMode;
	};
	let theme = ["night","emerald"]
	let closeDrawer = () => {
		console.log('isDrawerOpen');
		$session.isDrawerOpen = false;
	};
</script>
<div class="drawer absolute h-screen">
	<input id="my-drawer-3" type="checkbox" bind:checked={$session.isDrawerOpen} class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="w-full navbar">
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" class="btn btn-ghost">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
				</label>
			</div>
			<div class="navbar-start">
				<a href="#f" class="btn btn-ghost text-2xl font-bold text-center normal-case mx-2"><span class="text-red-500">Am</span><span class="text-blue-500">Vestor</span></a>
			</div>
			<div class="flex-none navbar-center hidden lg:block">
				<ul class="menu menu-horizontal p-0">
					<li><a href="#f">Item 1</a></li>
					<li tabindex="0">
						<a href="#f">
							Parent
							<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
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
				<button on:click={toggleDarkMode} data-toggle-theme="{theme}" class="btn sm:btn-sm btn-sm relative mr-4 sm:mr-4 overflow-hidden">
					<Moon class="w-5 {$session.darkMode ? '' : 'translate-x-8'}  transition-all duration-300" />
					<Sun class="w-5 absolute {$session.darkMode ? '-translate-x-8' : ''}  transition-all duration-300" />
					<!-- <div class="m-1 p-3 bg-white rounded-full absolute {$session.darkMode ? '' : 'translate-x-7'} transition-all duration-300"/> -->
				</button>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
			<!-- Sidebar content here -->
			<li><a on:click={closeDrawer} href="#f">Sidebar Item 1</a></li>
			<li><a on:click={closeDrawer} href="#f">Sidebar Item 2</a></li>
		</ul>
	</div>
</div>

<!-- End Main Navbar -->