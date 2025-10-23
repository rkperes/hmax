<script lang="ts">
	import { onMount } from "svelte";
	import { fly, fade } from "svelte/transition";

	let heroVisible = false;
	let robustezVisible = false;
	let versatilidadeVisible = false;
	let amplitudeVisible = false;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target.id === "hero") heroVisible = true;
						if (entry.target.id === "robustez")
							robustezVisible = true;
						if (entry.target.id === "versatilidade")
							versatilidadeVisible = true;
						if (entry.target.id === "amplitude")
							amplitudeVisible = true;
					}
				});
			},
			{ threshold: 0.1 },
		);

		const sections = document.querySelectorAll("section");
		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>HYDROMAX - Crane Industry Solutions</title>
	<meta
		name="description"
		content="Robust, versatile, and comprehensive crane solutions for your industry"
	/>
</svelte:head>

<!-- Navigation Header -->
<header
	class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray/20"
>
	<nav class="container mx-auto px-6 py-4 flex items-center justify-between">
		<div class="flex items-center space-x-2">
			<div
				class="w-10 h-10 bg-blue rounded-lg flex items-center justify-center"
			>
				<span class="text-white font-bold text-xl">H</span>
			</div>
			<span class="text-white font-space-grotesk font-semibold"
				>HYDROMAX</span
			>
		</div>
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
	</nav>
</header>

<!-- Hero Section -->
<section
	id="hero"
	class="min-h-screen bg-black relative overflow-hidden flex items-center justify-center"
>
	<!-- Background geometric overlay -->
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute top-20 left-20 w-32 h-32 border-4 border-blue transform rotate-45"
		></div>
		<div
			class="absolute bottom-20 right-20 w-48 h-48 border-4 border-blue rounded-full"
		></div>
		<div
			class="absolute top-1/2 left-1/3 w-64 h-1 bg-blue transform rotate-12"
		></div>
	</div>

	<div class="container mx-auto px-6 text-center relative z-10">
		<div in:fly={{ y: -50, duration: 800 }} out:fade>
			<h1
				class="text-6xl md:text-7xl font-bold font-space-grotesk text-white mb-6"
			>
				Elevando Seus
				<span class="text-blue"> Projetos</span>
			</h1>
			<p class="text-xl md:text-2xl text-gray mb-8 max-w-3xl mx-auto">
				Soluções robustas, versáteis e abrangentes para a indústria de
				guindastes
			</p>
			<button
				class="bg-blue hover:bg-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
			>
				Conheça Nossas Soluções
			</button>
		</div>
	</div>
</section>

<!-- Robustez Section -->
<section id="robustez" class="min-h-screen bg-black relative overflow-hidden">
	<!-- Angular hexagon background motif -->
	<div class="absolute inset-0 opacity-5">
		<svg class="w-full h-full" viewBox="0 0 1200 800">
			<polygon
				points="600,100 800,250 800,450 600,600 400,450 400,250"
				fill="none"
				stroke="#3AA8C1"
				stroke-width="2"
			/>
			<polygon
				points="200,200 300,280 300,440 200,520 100,440 100,280"
				fill="none"
				stroke="#3AA8C1"
				stroke-width="1"
			/>
			<polygon
				points="1000,300 1100,380 1100,540 1000,620 900,540 900,380"
				fill="none"
				stroke="#3AA8C1"
				stroke-width="1"
			/>
		</svg>
	</div>

	<div class="container mx-auto px-6 py-20 relative z-10">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div in:fly={{ x: -100, duration: 800 }} when={robustezVisible}>
				<h2
					class="text-5xl md:text-6xl font-bold font-space-grotesk text-white mb-6"
				>
					Robustez
					<span class="text-blue">.</span>
				</h2>
				<p class="text-lg text-gray mb-8 leading-relaxed">
					Nossas soluções são construídas com os mais altos padrões de
					engenharia, garantindo durabilidade e confiabilidade
					extremas em todas as condições de operação.
				</p>
				<div class="space-y-4">
					<div class="flex items-center space-x-3">
						<div
							class="w-12 h-12 bg-blue/20 rounded-lg flex items-center justify-center"
						>
							<div class="w-6 h-6 bg-blue rounded-sm"></div>
						</div>
						<span class="text-white"
							>Estrutura reforçada de alta resistência</span
						>
					</div>
					<div class="flex items-center space-x-3">
						<div
							class="w-12 h-12 bg-blue/20 rounded-lg flex items-center justify-center"
						>
							<div class="w-6 h-6 bg-blue rounded-sm"></div>
						</div>
						<span class="text-white"
							>Materiais premium e certificados</span
						>
					</div>
					<div class="flex items-center space-x-3">
						<div
							class="w-12 h-12 bg-blue/20 rounded-lg flex items-center justify-center"
						>
							<div class="w-6 h-6 bg-blue rounded-sm"></div>
						</div>
						<span class="text-white"
							>Testados nas condições mais extremas</span
						>
					</div>
				</div>
			</div>
			<div
				in:fly={{ x: 100, duration: 800 }}
				when={robustezVisible}
				class="relative"
			>
				<div
					class="w-full h-96 bg-gray/10 rounded-lg relative overflow-hidden"
				>
					<div
						class="absolute inset-0 bg-gradient-to-br from-blue/20 to-transparent"
					></div>
					<div
						class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					>
						<div
							class="w-32 h-32 border-4 border-blue transform rotate-45"
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Versatilidade Section -->
<section
	id="versatilidade"
	class="min-h-screen bg-black relative overflow-hidden"
>
	<!-- Asymmetric flexible shapes background -->
	<div class="absolute inset-0 opacity-5">
		<svg class="w-full h-full" viewBox="0 0 1200 800">
			<path
				d="M100,200 Q300,100 500,300 T900,200 L1000,400 Q800,500 600,300 T200,400 Z"
				fill="none"
				stroke="#3AA8C1"
				stroke-width="2"
			/>
			<path
				d="M150,500 Q350,400 550,600 T950,500 L1050,700 Q850,800 650,600 T250,700 Z"
				fill="none"
				stroke="#3AA8C1"
				stroke-width="1"
			/>
		</svg>
	</div>

	<div class="container mx-auto px-6 py-20 relative z-10">
		<div class="grid md:grid-cols-2 gap-12 items-center">
			<div
				in:fly={{ x: -100, duration: 800 }}
				when={versatilidadeVisible}
				class="order-2 md:order-1 relative"
			>
				<div
					class="w-full h-96 bg-gray/10 rounded-lg relative overflow-hidden"
				>
					<div
						class="absolute inset-0 bg-gradient-to-tr from-blue/20 to-transparent"
					></div>
					<div
						class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
					>
						<svg class="w-48 h-48" viewBox="0 0 200 200">
							<path
								d="M50,50 Q150,30 150,100 T50,150 Q30,100 50,50"
								fill="none"
								stroke="#3AA8C1"
								stroke-width="3"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div
				in:fly={{ x: 100, duration: 800 }}
				when={versatilidadeVisible}
				class="order-1 md:order-2"
			>
				<h2
					class="text-5xl md:text-6xl font-bold font-space-grotesk text-white mb-6"
				>
					Versatilidade
					<span class="text-blue">.</span>
				</h2>
				<p class="text-lg text-gray mb-8 leading-relaxed">
					Adaptamos nossas soluções para atender às necessidades
					específicas de cada projeto, oferecendo flexibilidade máxima
					sem comprometer a performance.
				</p>
				<div class="space-y-4">
					<div class="flex items-center space-x-3">
						<div
							class="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center"
						>
							<div
								class="w-6 h-6 bg-blue rounded-full transform rotate-45"
							></div>
						</div>
						<span class="text-white"
							>Configurações personalizáveis</span
						>
					</div>
					<div class="flex items-center space-x-3">
						<div
							class="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center"
						>
							<div
								class="w-6 h-6 bg-blue rounded-full transform rotate-45"
							></div>
						</div>
						<span class="text-white"
							>Múltiplas aplicações industriais</span
						>
					</div>
					<div class="flex items-center space-x-3">
						<div
							class="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center"
						>
							<div
								class="w-6 h-6 bg-blue rounded-full transform rotate-45"
							></div>
						</div>
						<span class="text-white"
							>Soluções modulares e escaláveis</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Amplitude Section -->
<section id="amplitude" class="min-h-screen bg-black relative overflow-hidden">
	<!-- Wide horizontal elements background -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue to-transparent"
		></div>
		<div
			class="absolute top-40 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue to-transparent"
		></div>
		<div
			class="absolute bottom-40 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue to-transparent"
		></div>
		<div
			class="absolute bottom-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue to-transparent"
		></div>
	</div>

	<div class="container mx-auto px-6 py-20 relative z-10">
		<div
			in:fly={{ y: -50, duration: 800 }}
			when={amplitudeVisible}
			class="text-center mb-16"
		>
			<h2
				class="text-5xl md:text-6xl font-bold font-space-grotesk text-white mb-6"
			>
				Amplitude
				<span class="text-blue">.</span>
			</h2>
			<p class="text-xl text-gray max-w-4xl mx-auto leading-relaxed">
				Cobertura completa para projetos de qualquer escala, desde
				pequenas operações até grandes empreendimentos industriais, com
				alcance nacional e capacidade ilimitada.
			</p>
		</div>

		<div class="grid md:grid-cols-3 gap-8">
			<div
				in:fly={{ y: 50, duration: 800, delay: 200 }}
				when={amplitudeVisible}
				class="text-center"
			>
				<div class="w-20 h-1 bg-blue mx-auto mb-6"></div>
				<h3 class="text-2xl font-bold text-white mb-4">
					Alcance Nacional
				</h3>
				<p class="text-gray">
					Presença em todo o território brasileiro com equipes
					especializadas
				</p>
			</div>
			<div
				in:fly={{ y: 50, duration: 800, delay: 400 }}
				when={amplitudeVisible}
				class="text-center"
			>
				<div class="w-20 h-1 bg-blue mx-auto mb-6"></div>
				<h3 class="text-2xl font-bold text-white mb-4">
					Capacidade Ilimitada
				</h3>
				<p class="text-gray">
					Projetos de qualquer porte e complexidade com garantia de
					execução
				</p>
			</div>
			<div
				in:fly={{ y: 50, duration: 800, delay: 600 }}
				when={amplitudeVisible}
				class="text-center"
			>
				<div class="w-20 h-1 bg-blue mx-auto mb-6"></div>
				<h3 class="text-2xl font-bold text-white mb-4">
					Soluções Completas
				</h3>
				<p class="text-gray">
					Do planejamento à execução, cobrimos todas as etapas do
					projeto
				</p>
			</div>
		</div>

		<div
			in:fly={{ y: 50, duration: 800, delay: 800 }}
			when={amplitudeVisible}
			class="mt-16 text-center"
		>
			<div
				class="w-full h-0.5 bg-gradient-to-r from-transparent via-blue to-transparent mb-8"
			></div>
			<button
				class="bg-blue hover:bg-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
			>
				Entre em Contato
			</button>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="bg-black border-t border-gray/20 py-8">
	<div class="container mx-auto px-6">
		<div class="flex flex-col md:flex-row items-center justify-between">
			<div class="flex items-center space-x-2 mb-4 md:mb-0">
				<div
					class="w-8 h-8 bg-blue rounded-lg flex items-center justify-center"
				>
					<span class="text-white font-bold">H</span>
				</div>
				<span class="text-white font-space-grotesk">HYDROMAX</span>
			</div>
			<p class="text-gray text-sm">
				© 2024 HYDROMAX. Todos os direitos reservados.
			</p>
		</div>
	</div>
</footer>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>

