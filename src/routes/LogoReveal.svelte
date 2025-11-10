<script>
	export let showContent = false;
</script>

<div
	class="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden
         transition-opacity duration-[500ms] ease-out"
	class:opacity-0={showContent}
	class:pointer-events-none={showContent}
>
	<!-- Left vector -->
	<img
		src="/logo_top.svg"
		alt="logo left"
		class="absolute w-32 h-32
			transition-transform duration-[500ms] ease-hero"
		style="
		  transform: translate(
			{showContent ? '200%' : '50px'},
			{showContent ? '-200%' : '-50px'}
		  );
		"
	/>

	<!-- Right vector -->
	<img
		src="/logo_bottom.svg"
		alt="logo right"
		class="absolute w-32 h-32
			-translate-x-px-50 -translate-y-px-50
			transition-transform duration-[500ms] ease-hero"
		style="
		  transform: translate(
			{showContent ? '-200%' : '-25px'},
			{showContent ? '200%' : '25px'}
		  );
		"
	/>
</div>
