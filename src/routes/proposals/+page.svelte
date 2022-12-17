<script>
	import { get } from 'svelte/store';
	import { proposals } from '$lib/stores/proposalStore.js';
</script>

<svelte:head>
	<title>Proposals</title>
	<meta name="description" content="Graphite Proposals" />
</svelte:head>


<section>
	<h1>Current Proposals</h1>
  <a href="/addproposal" class="text-center block">Add A New Proposal</a>
	<ul class="mt-12">
	{#each $proposals as proposal}
		<li><a href="/proposals/{proposal.id}">{proposal.id} - {proposal.title.slice(0,40)}&hellip;</a></li>
	{/each}
	</ul>
</section>
