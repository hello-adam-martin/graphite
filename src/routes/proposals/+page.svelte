<script>
	import { proposals } from '$lib/stores/proposalStore.js';
	$:a = proposals; //experiment to see if we can make reactive - need to create page to delete via store
</script>

<svelte:head>
	<title>Proposals</title>
	<meta name="description" content="Graphite Proposals" />
</svelte:head>


<section>
	<h1>Current Proposals</h1>
  <a href="/addproposal" class="text-center block">Add A New Proposal</a>
	<ul class="mt-12">
	{#each $a as proposal}
		<li><a href="/proposals/{proposal.id}">{proposal.id} - {proposal.title.slice(0,40)}&hellip;</a></li>
	{/each}
	</ul>
</section>
