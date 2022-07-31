import { writable } from 'svelte/store'

export const session = writable({
	isDrawerOpen: false,
	darkMode: true
})
