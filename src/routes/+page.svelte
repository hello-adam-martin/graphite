<script>

	import ViewProposal from '$lib/features/ViewProposal.svelte';

	$: voted = true;		// this needs to be checked via API

</script>

<svelte:head>
	<title>Graphite</title>
</svelte:head>

<section class="flex flex-col flex-1 justify-center items-center">
	<ViewProposal />
</section>