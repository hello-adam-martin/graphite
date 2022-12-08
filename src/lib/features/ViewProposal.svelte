<script>
	import SimpleProposal from '$lib/components/SimpleProposal.svelte';
	import SimpleVote from '$lib/components/SimpleVote.svelte';
	import ShowVote from '$lib/components/ShowVote.svelte';

  $: voted = true;		// this needs to be checked via API

</script>

<svelte:head>
	<title>Graphite</title>
</svelte:head>

{#if voted}
	<ShowVote />
{/if}
	<SimpleProposal />
{#if !voted}
	<SimpleVote />
{/if}