<script lang="ts" context="module">
	export const load: Load = async ({ session }) => {
		if (session.lucia) return
		return {
			status: 302,
			redirect: '/auth/login'
		}
	}
</script>
<script lang="ts">
    import type { Load } from '@sveltejs/kit'
</script>