<script lang="ts">
	import Drawer from '$lib/global/Drawer.svelte'
	import Hero from '$lib/Sections/hero.svelte'
	import { session } from '../stores/session'
	const homeHero = {
		title: 'Beautiful, Secure & Marketable web development',
		subtitle: 'We are a team of developers who love to build beautiful, websites & web applications for Small & Medium sized businesses. Technology is transforming the way we work, engage, and service our clients.',
		label: 'Get Started',
		link: '/'
	}

	const drawer = () => {
		$session.isDrawerOpen = !$session.isDrawerOpen
	}
</script>

<Hero title={homeHero.title} subtitle={homeHero.subtitle} onClick={drawer} label={homeHero.label} />
<Drawer />
