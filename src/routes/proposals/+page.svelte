<script>
	import { onMount } from 'svelte';
	import { apiData, proposals } from '$lib/stores/proposalStore.js';
	const apiURL = "https://x8ki-letl-twmt.n7.xano.io/api:dvhA5Xf0/proposals";

	onMount(async () => {
  	fetch(apiURL)
  		.then(response => response.json())
  		.then(data => {
				//console.log(data);
    		apiData.set(data);
  		}).catch(error => {
    		console.log(error);
    		return [];
  	});
	});

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
