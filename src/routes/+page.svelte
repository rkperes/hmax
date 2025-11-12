<script lang="ts">
	import { onMount } from "svelte";
	import Content from "./Content.svelte";
	import LogoReveal from "./LogoReveal.svelte";

	// reveal effect
	let showContent = false;
	onMount(() => {
		setTimeout(() => (showContent = true), 100); // delay for animation
	});
</script>

<svelte:head>
	<title>HYDROMAX - Crane Industry Solutions</title>
	<meta
		name="description"
		content="Robust, versatile, and comprehensive crane solutions for your industry"
	/>
</svelte:head>

<LogoReveal {showContent} />

<div
	class="opacity-0 transition-opacity duration-[350ms] delay-[150ms] ease-hero"
	class:opacity-100={showContent}
>
	<Content />
</div>
