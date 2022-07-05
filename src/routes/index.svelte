<script lang="ts">
import Hero from "$lib/Sections/hero.svelte";
let homeHero = {
    title: "Beautiful, Secure & Marketable web development",
    subtitle: "We are a team of developers who love to build beautiful, websites & web applications for Small & Medium sized businesses. Technology is transforming the way we work, engage, and service our clients.",
    link: "/"
    };

</script>

<Hero title={homeHero.title} subtitle={homeHero.subtitle} link={homeHero.link} />
