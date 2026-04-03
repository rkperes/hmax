<script lang="ts">
	import { Hamburger } from "svelte-hamburgers";
	let open = false;
	let close = () => (open = false);

	const navItems = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Products",
			href: "/products",
		},
		{
			label: "About us",
			href: "/about",
		},
	];
	console.log(navItems);
</script>

<!-- Navigation Header -->
<header class="static bg-white h-14 top-0 left-0 right-0 z-40">
	<nav class="container mx-auto px-6 py-4 flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<img src="/logo_long1.svg" alt="HYDROMAX" class="h-4" />
		</div>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex space-x-8 h-6">
			{#each navItems as i}
				<a
					href={i.href}
					class="text-black hover:text-blue font-space-grotesk font-bold transition-colors"
				>
					{i.label.toUpperCase()}
				</a>
			{/each}
		</div>

		<!-- Mobile Menu Button -->
		<div
			class="md:hidden text-black h-6 hover:text-blue-200 transition-colors align-middle"
		>
			<Hamburger
				bind:open
				type="spring"
				--color="currentColor"
				--padding="3px"
				--layer-width="25px"
				--layer-height="3px"
				--layer-spacing="5px"
				--border-radius="4px"
			/>
		</div>
	</nav>
</header>

<!-- Mobile Side Panel -->
<div
	class="fixed inset-0 md:hidden z-40 mt-14 border-t border-t-black/20 transition-all duration-300 ease-in-out"
	class:opacity-100={open}
	class:opacity-0={!open}
	class:pointer-events-none={!open}
>
	<!-- Backdrop -->
	<div
		class="absolute inset-0 bg-black/20 transition-opacity duration-300 ease-in-out"
		class:opacity-100={open}
		class:opacity-0={!open}
		on:click={close}
	></div>

	<!-- Side Panel -->
	<div
		class="absolute right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out"
	>
		<div class="p-6">
			<nav class="space-y-6">
				{#each navItems as i}
					<a
						href={i.href}
						class="block text-lg hover:text-blue font-space-grotesk font-bold transition-colors"
						on:click={close}
					>
						{i.label.toUpperCase()}
					</a>
				{/each}
			</nav>
		</div>
	</div>
</div>
