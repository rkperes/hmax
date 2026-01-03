<script lang="ts">
	import { page } from "$app/state";
</script>

<div class="flex-1 flex w-full items-center justify-center">
	<div class="text-center align-middle">
		<h1 class="text-5xl font-bold font-space-grotesk mb-6">
			{page.status}
		</h1>

		<p class="text-l max-w-4xl mx-auto leading-relaxed">
			Erro inesperado. Tente novamente mais tarde.
		</p>
	</div>
</div>
