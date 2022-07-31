<script lang="ts">
	import { ui } from '$lib/stores/ui'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'

	import { Moon, Sun } from 'lucide-svelte'

	// onMount(() => {
	// 	themeChange(false)
	// 	let dataTheme = window.document.documentElement.getAttribute('data-theme')
	// 	if (dataTheme == 'night') {
	// 		$ui.darkMode = true
	// 	}
	// })

	const toggleDarkMode = () => {
		$ui.darkMode = !$ui.darkMode
	}

	let closeDrawer = () => {
		$ui.isDrawerOpen = false
	}
	let theme = ['night', 'emerald']
</script>

<button on:click={toggleDarkMode} data-toggle-theme={theme} class="btn sm:btn-sm btn-sm relative mr-4 sm:mr-4 overflow-hidden">
	<Moon class="w-5 {$ui.darkMode ? '' : 'translate-x-8'}  transition-all duration-300" />
	<Sun class="w-5 absolute {$ui.darkMode ? '-translate-x-8' : ''}  transition-all duration-300" />
</button>
