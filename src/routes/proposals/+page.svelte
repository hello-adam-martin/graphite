<script>
	import { onMount } from 'svelte';
	import { apiData, proposals } from './store.js';

	import GUN from 'gun';
	var gun = GUN();


	//@todo - proposals should be coming from gundb linked to a reactive svelte prop

	onMount(async () => {
  	fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Bourbon")
  		.then(response => response.json())
  		.then(data => {
				console.log(data);
    		apiData.set(data);
  		}).catch(error => {
    		console.log(error);
    		return [];
  	});
});


	// Call API to fetch proposals
	/*
	var proposals = gun.get('proposals');
	//proposals.set({title: "Proposal 1"});
	proposals.map().on(function (proposal, id) {
		console.log(proposal, id)
	});
	*/
	
</script>

<svelte:head>
	<title>Proposals</title>
	<meta name="description" content="Graphite Proposals" />
</svelte:head>

<section>
	<h1>Proposals</h1>
	<ul>
	{#each $proposals as drinkName}
		<li>{drinkName}</li>
	{/each}
	</ul>
</section>