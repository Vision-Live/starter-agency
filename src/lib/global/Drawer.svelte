<!-- svelte-ignore a11y-missing-attribute -->
<script lang="ts">
	import { clickOutside } from '$lib/utils/click_outside'
	import { session } from '../../stores/session'
	import { LayoutDashboard, Box, Settings } from 'lucide-svelte'
	import ThemeChanger from './ThemeChanger.svelte'

	let closeDrawer = () => {
		$session.isDrawerOpen = false
	}
</script>

<!-- svelte-ignore a11y-invalid-attribute -->

<div class="fixed top-0 left-0 w-screen h-screen  transition-all duration-300 {$session.isDrawerOpen ? 'backdrop-blur-sm bg-black/30' : 'z-auto pointer-events-none'}">
	<div use:clickOutside on:click_outside={$session.isDrawerOpen ? closeDrawer : ''} class="{$session.isDrawerOpen ? '' : '-translate-x-[100%]'} pr-16 pl shadow-lg shadow-base-300 w-fit h-full bg-base-100 flex flex-col justify-start items-center transition-all duration-300">
		<input id="my-drawer-3" type="checkbox" bind:checked={$session.isDrawerOpen} class="drawer-toggle" />

		<a href="" class="btn btn-ghost text-2xl font-bold text-center normal-case mx-2"><span class="text-red-500">Am</span><span class="text-blue-500">Vestor</span></a>
		<div class="flex flex-col h-full justify-around">
			<ul class="menu p-2 rounded-box">
				<li>
					<a>
						<LayoutDashboard />
						Dashboard
					</a>
				</li>
				<li>
					<a>
						<Box />
						Simulador
					</a>
				</li>
				<li>
					<a>
						<Settings />
						Settings
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
