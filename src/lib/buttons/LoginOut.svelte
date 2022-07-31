<script lang="ts">
	import { session } from '$app/stores'
	import { signOut } from 'lucia-sveltekit/client'
	import { LogIn, LogOut } from 'lucide-svelte'
	import { goto, prefetch } from '$app/navigation'

	const signOutUser = async () => {
		try {
			await signOut()
			window.location.href = '/'
		} catch {}
	}

	const logedIn = $session.lucia?.access_token
</script>

{#if logedIn}
	<button on:click={signOutUser} class="btn btn-sm btn-outline mx-2 gap-2">
		Log out
		<LogOut />
	</button>
{:else}
	<a sveltekit:prefetch href="/auth/login" class="btn btn-sm btn-outline mx-2 gap-2">
		Log in
		<LogIn />
    </a>
{/if}
