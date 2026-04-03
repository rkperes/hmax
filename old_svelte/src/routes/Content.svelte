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

<!-- Versatilidade Section -->
<section id="versatilidade" class="min-h-screen relative overflow-hidden">
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
			{#if versatilidadeVisible}
				<div
					in:fly={{ x: -100, duration: 800 }}
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
			{/if}
			{#if versatilidadeVisible}
				<div
					in:fly={{ x: 100, duration: 800 }}
					class="order-1 md:order-2"
				>
					<h2
						class="text-5xl md:text-6xl font-bold font-space-grotesk mb-6"
					>
						Versatilidade
						<span class="text-blue">.</span>
					</h2>
					<p class="text-lg mb-8 leading-relaxed">
						Adaptamos nossas soluções para atender às necessidades
						específicas de cada projeto, oferecendo flexibilidade
						máxima sem comprometer a performance.
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
							<span>Configurações personalizáveis</span>
						</div>
						<div class="flex items-center space-x-3">
							<div
								class="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center"
							>
								<div
									class="w-6 h-6 bg-blue rounded-full transform rotate-45"
								></div>
							</div>
							<span>Múltiplas aplicações industriais</span>
						</div>
						<div class="flex items-center space-x-3">
							<div
								class="w-12 h-12 bg-blue/20 rounded-full flex items-center justify-center"
							>
								<div
									class="w-6 h-6 bg-blue rounded-full transform rotate-45"
								></div>
							</div>
							<span>Soluções modulares e escaláveis</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Amplitude Section -->
<section id="amplitude" class="min-h-screen relative overflow-hidden">
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
		{#if amplitudeVisible}
			<div in:fly={{ y: -50, duration: 800 }} class="text-center mb-16">
				<h2
					class="text-5xl md:text-6xl font-bold font-space-grotesk mb-6"
				>
					Amplitude
					<span class="text-blue">.</span>
				</h2>
				<p class="text-xl max-w-4xl mx-auto leading-relaxed">
					Cobertura completa para projetos de qualquer escala, desde
					pequenas operações até grandes empreendimentos industriais,
					com alcance nacional e capacidade ilimitada.
				</p>
			</div>
		{/if}

		<div class="grid md:grid-cols-3 gap-8">
			{#if amplitudeVisible}
				<div
					in:fly={{ y: 50, duration: 800, delay: 200 }}
					class="text-center"
				>
					<div class="w-20 h-1 bg-blue mx-auto mb-6"></div>
					<h3 class="text-2xl font-bold mb-4">Alcance Nacional</h3>
					<p>
						Presença em todo o território brasileiro com equipes
						especializadas
					</p>
				</div>
			{/if}
			{#if amplitudeVisible}
				<div
					in:fly={{ y: 50, duration: 800, delay: 400 }}
					class="text-center"
				>
					<div class="w-20 h-1 bg-blue mx-auto mb-6"></div>
					<h3 class="text-2xl font-bold mb-4">
						Capacidade Ilimitada
					</h3>
					<p>
						Projetos de qualquer porte e complexidade com garantia
						de execução
					</p>
				</div>
			{/if}
			{#if amplitudeVisible}
				<div
					in:fly={{ y: 50, duration: 800, delay: 600 }}
					class="text-center"
				>
					<div class="w-20 h-1 bg-blue mx-auto mb-6"></div>
					<h3 class="text-2xl font-bold mb-4">Soluções Completas</h3>
					<p>
						Do planejamento à execução, cobrimos todas as etapas do
						projeto
					</p>
				</div>
			{/if}
		</div>

		{#if amplitudeVisible}
			<div
				in:fly={{ y: 50, duration: 800, delay: 800 }}
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
		{/if}
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
