import { writable } from 'svelte/store'

export const session = writable({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    darkMode: true,
})
