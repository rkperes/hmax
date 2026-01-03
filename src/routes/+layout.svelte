<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="min-h-screen flex flex-col bg-surface text-text font-sans">
	<Navbar />
	<slot />
</div>
