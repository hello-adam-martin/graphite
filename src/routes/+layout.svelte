<script>
	import Header from './Header.svelte';
	import '$lib/styles/app.scss';
	import '$lib/styles/theme.scss';
	import '$lib/styles/styles.scss';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="box-border flex flex-col flex-1 mx-auto max-w-5xl p-4 w-full">
		<slot />
	</main>

	<footer class="flex justify-center items-center p-3">
		<p class="color-3">Developed by Carbon Labs.</p>
	</footer>
</div>

<style>
	footer p {
		color: var(--color-grayscale-2)
	}
</style>