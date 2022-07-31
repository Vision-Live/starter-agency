<script lang="ts">
	import { session } from '../../stores/session'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'

	import { Moon, Sun } from 'lucide-svelte'

	onMount(() => {
		themeChange(false)
		let dataTheme = window.document.documentElement.getAttribute('data-theme')
		if (dataTheme == 'night') {
			$session.darkMode = true
		}
	})

	const toggleDarkMode = () => {
		$session.darkMode = !$session.darkMode
	}

	let closeDrawer = () => {
		$session.isDrawerOpen = false
	}
	let theme = ['night', 'emerald']
</script>

<button on:click={toggleDarkMode} data-toggle-theme={theme} class="btn sm:btn-sm btn-sm relative mr-4 sm:mr-4 overflow-hidden">
	<Moon class="w-5 {$session.darkMode ? '' : 'translate-x-8'}  transition-all duration-300" />
	<Sun class="w-5 absolute {$session.darkMode ? '-translate-x-8' : ''}  transition-all duration-300" />
</button>
