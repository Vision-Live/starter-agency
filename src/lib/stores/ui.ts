import { writable } from 'svelte/store'

export const ui = writable({
	isDrawerOpen: false,
	darkMode: true
})
