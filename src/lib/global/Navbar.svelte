<!-- svelte-ignore a11y-invalid-attribute -->
<script>
	import ThemeChanger from './ThemeChanger.svelte'

	export let showMenu = true
</script>

<div class="w-full navbar">
	{#if showMenu}
		<div class="flex-none lg:hidden">
			<label for="my-drawer-3" class="btn btn-ghost">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
			</label>
		</div>
	{/if}
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-2xl font-bold text-center normal-case mx-2"><span class="text-red-500">Am</span><span class="text-blue-500">Vestor</span></a>
	</div>
	<div class="flex-none navbar-center hidden lg:block">
		<ul class="menu menu-horizontal p-0">
			<li><a href="">Item 1</a></li>
			<li tabindex="0">
				<a href="">
					Parent
					<svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
				</a>
				<ul class="p-2 bg-base-100">
					<li><a href="">Submenu 2</a></li>
				</ul>
			</li>
			<li><a href="">Item 3</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<ThemeChanger />
	</div>
</div>
