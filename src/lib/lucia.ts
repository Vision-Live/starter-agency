import lucia from 'lucia-sveltekit'
import supabase from '@lucia-sveltekit/adapter-supabase'
import { dev } from '$app/env'

export const auth = lucia<{ email: string }>({
	adapter: supabase(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_SECRET),
	secret: import.meta.env.VITE_LUCIA_SECRET,
	env: dev ? 'DEV' : 'PROD'
})
