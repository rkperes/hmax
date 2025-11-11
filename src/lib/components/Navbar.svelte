<script>
	import { Hamburger } from "svelte-hamburgers";
	let open = false;
	let close = () => (open = false);
</script>

<!-- Navigation Header -->
<header class="fixed bg-gray top-0 left-0 right-0 z-50">
	<nav class="container mx-auto px-6 py-4 flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<img src="/logo_long1.svg" alt="HYDROMAX" class="h-5" />
		</div>

		<!-- Desktop Navigation -->
		<div class="hidden md:flex space-x-8">
			<a href="#hero" class="text-gray hover:text-white transition-colors"
				>Home</a
			>
			<a
				href="#robustez"
				class="text-gray hover:text-white transition-colors">Robustez</a
			>
			<a
				href="#versatilidade"
				class="text-gray hover:text-white transition-colors"
				>Versatilidade</a
			>
			<a
				href="#amplitude"
				class="text-gray hover:text-white transition-colors"
				>Amplitude</a
			>
		</div>

		<!-- Mobile Menu Button -->
		<div class="text-black hover:text-blue-200 transition-colors">
			<Hamburger bind:open type="spring" --color="currentColor" />
		</div>
	</nav>
</header>

<!-- Mobile Side Panel -->
{#if open}
	<div class="fixed inset-0 md:hidden z-40">
		<!-- Backdrop -->
		<div class="absolute inset-0 bg-black/50"></div>

		<!-- Side Panel -->
		<div
			class="absolute right-0 top-0 h-full w-64 border-l border-gray/20 transform transition-transform duration-300 ease-in-out"
		>
			<div class="p-6">
				<nav class="mt-12 space-y-6">
					<a
						href="#hero"
						class="block text-lg text-gray hover:text-white transition-colors"
					>
						Home
					</a>
					<a
						href="#robustez"
						class="block text-lg text-gray hover:text-white transition-colors"
					>
						Robustez
					</a>
					<a
						href="#versatilidade"
						class="block text-lg text-gray hover:text-white transition-colors"
					>
						Versatilidade
					</a>
					<a
						href="#amplitude"
						class="block text-lg text-gray hover:text-white transition-colors"
					>
						Amplitude
					</a>
				</nav>
			</div>
		</div>
	</div>
{/if}
