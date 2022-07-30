<script lang="ts">
	export let title: string; // Headline title to use
	export let subtitle: string; // Subtitle to use
  export let onClick:string; // Function to call when the button is clicked
  export let label: string; // Label to use for the button
    // export let link: string; // Description to use
</script>

<hero class="w-screen text-center flex flex-col items-center">
  <div class="prose lg:prose-xl px-8 sm:px-16">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </div>
  <div class="mx-auto">
		<button class="btn btn-primary btn-wide mt-8 items-center" on:click={onClick}>
			<!-- <a href={link}>Get Started</a> -->
      {label}
		</button>
	</div>
</hero>
